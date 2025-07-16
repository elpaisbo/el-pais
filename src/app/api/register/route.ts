import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";
import { transformFormToDatabase, validateFechaNacimiento } from "../../../../utils/transformers";

const prismaClient = new PrismaClient();
const LibelulaURL =
    process.env.LIB_URL || "https://api.libelula.bo/rest/deuda/registrar";

type Req = {
    data: {
        id_transaccion: string;
    };
};

export async function POST(request: Request) {
    const user = await request.json();
    const {
        nombre,
        apellido,
        ci,
        domicilio,
        nacionalidad,
        email,
        telefono,
        acciones,
        fechaNacimiento,
    } = user;

    console.log("=== DEBUG DATOS RECIBIDOS ===");
    console.log("user completo:", JSON.stringify(user, null, 2));
    console.log("fechaNacimiento:", fechaNacimiento);
    console.log("tipo fechaNacimiento:", typeof fechaNacimiento);
    console.log("fechaNacimiento existe:", fechaNacimiento !== undefined);
    console.log("fechaNacimiento no es null:", fechaNacimiento !== null);
    console.log("================================");

    if (!fechaNacimiento) {
        console.error("ERROR: fechaNacimiento es requerida pero no está presente");
        return NextResponse.json(
            { error: "fechaNacimiento es requerida" }, 
            { status: 400 }
        );
    }

    const isValidDate = validateFechaNacimiento(fechaNacimiento);
    if (!isValidDate) {
        console.error("ERROR: Fecha de nacimiento inválida");
        return NextResponse.json(
            { error: "Fecha de nacimiento inválida" }, 
            { status: 400 }
        );
    }

    let fecha_nacimiento_db: string;
    try {
        fecha_nacimiento_db = transformFormToDatabase(fechaNacimiento);
        console.log("=== DEBUG TRANSFORMACIÓN FECHA ===");
        console.log("fechaNacimiento original:", fechaNacimiento);
        console.log("fecha_nacimiento_db:", fecha_nacimiento_db);
        console.log("===================================");
    } catch (error) {
        console.error("ERROR: Error al transformar fecha:", error);
        return NextResponse.json(
            { error: "Error al procesar fecha de nacimiento" }, 
            { status: 400 }
        );
    }
    
    const payment = {
        appkey: process.env.API_KEY,
        email_cliente: email,
        descripcion: "Acciones El Pais, compra online",
        identificador_deuda: crypto.randomUUID(),
        callback_url: "https://www.acciones-elpaistarija.com/api/payment",
        url_retorno: "https://www.acciones-elpaistarija.com/exito",
        numero_documento: ci,
        lineas_detalle_deuda: [
            {
                cantidad: acciones,
                concepto: "Acciones El Pais",
                costo_unitario: 100,
            },
        ],
        lineas_metadatos: [
            {
                nombre: "telefono",
                dato: telefono,
            },
            {
                nombre: "domicilio",
                dato: domicilio,
            },
            {
                nombre: "nacionalidad",
                dato: nacionalidad,
            },
        ],
        nombre_cliente: nombre,
        apellido_cliente: apellido,
    };

    try {
        const res = await axios.post(LibelulaURL, payment, {
        headers: {
            "Content-Type": "application/json",
        },
    });
        
        console.log("=== DEBUG ANTES DE CREAR EN DB ===");
        console.log("Datos que se van a insertar:", {
            acciones,
            ci,
            email,
            nombre,
            apellido,
            domicilio,
            nacionalidad,
            telefono,
            idDeuda: res.data.id_transaccion,
            idcompra: payment.identificador_deuda,
            fecha_nacimiento: fecha_nacimiento_db,
        });

    const newPayment = await prismaClient.deuda.create({
        data: {
            acciones,
            ci,
            email,
            nombre,
            apellido,
            domicilio,
            nacionalidad,
            telefono,
            idDeuda: res.data.id_transaccion,
            idcompra: payment.identificador_deuda,
            fecha_nacimiento: fecha_nacimiento_db,
        },
    });

        console.log("=== REGISTRO CREADO EXITOSAMENTE ===");
        console.log("newPayment:", newPayment);

    return NextResponse.json(res.data);
} catch (error) {
        console.error("Error creating payment:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" }, 
            { status: 500 }
        );
    }
}
