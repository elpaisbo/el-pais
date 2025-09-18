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
    try {
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

    if (!nombre || !apellido || !ci || !email || !telefono || !acciones) {
        console.error("ERROR: Campos requeridos faltantes");
        return NextResponse.json(
            { 
                error: "Campos requeridos faltantes", 
                required: ["nombre", "apellido", "ci", "email", "telefono", "acciones", "fechaNacimiento"]
            }, 
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

    let fecha_nacimiento_db: Date;
    try {
        const { dia, mes, año } = fechaNacimiento;

        if (!dia || !mes || !año) {
            throw new Error("Componentes de fecha faltantes");
        }

        fecha_nacimiento_db = new Date(`${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T00:00:00.000Z`);
        
        console.log("=== DEBUG TRANSFORMACIÓN FECHA ===");
        console.log("fechaNacimiento original:", fechaNacimiento);
        console.log("fecha_nacimiento_db:", fecha_nacimiento_db);
        console.log("fecha_nacimiento_db ISO:", fecha_nacimiento_db.toISOString());
        console.log("fecha_nacimiento_db válida:", !isNaN(fecha_nacimiento_db.getTime()));
        console.log("===================================");

      if (isNaN(fecha_nacimiento_db.getTime())) {
            throw new Error("Fecha transformada inválida");
        }
        
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

        console.log("=== DEBUG LLAMADA A LIBELULA ===");
        console.log("URL:", LibelulaURL);
        console.log("Payment data:", JSON.stringify(payment, null, 2));
        console.log("===============================");
        
    const res = await axios.post(LibelulaURL, payment, {
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 30000,
    });

        console.log("=== DEBUG RESPUESTA DE LIBELULA ===");
        console.log("Status:", res.status);
        console.log("Response:", res.data);
        console.log("===================================");

        if (!res.data?.id_transaccion) {
            console.error("ERROR: Respuesta de Libelula sin id_transaccion");
            return NextResponse.json(
                { error: "Error en la respuesta del procesador de pagos" }, 
                { status: 500 }
            );
        }        
        
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
            fecha_nacimiento_iso: fecha_nacimiento_db.toISOString(),
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
        console.log("====================================");

        return NextResponse.json({
            success: true,
            message: "Registro creado exitosamente",
            data: res.data,
            debug: {
                fecha_original: fechaNacimiento,
                fecha_transformada: fecha_nacimiento_db.toISOString(),
                id_transaccion: res.data.id_transaccion,
                db_record_id: newPayment.id
            }
        });
        
    } catch (error) {
        console.error("=== ERROR GENERAL ===");
        console.error("Error creating payment:", error);
        
        // Manejo específico de errores
        if (axios.isAxiosError(error)) {
            console.error("Error de Axios:", error.response?.data || error.message);
            return NextResponse.json(
                { 
                    error: "Error al comunicarse con el procesador de pagos",
                    details: error.response?.data?.message || error.message
                }, 
                { status: 502 }
            );
        }
        
        if (error instanceof Error && error.message.includes('Prisma')) {
            console.error("Error de base de datos:", error.message);
            return NextResponse.json(
                { 
                    error: "Error al guardar en la base de datos",
                    details: error.message
                }, 
                { status: 500 }
            );
        }
        
        return NextResponse.json(
            { 
                error: "Error interno del servidor",
                details: error instanceof Error ? error.message : "Error desconocido"
            }, 
            { status: 500 }
        );
    } finally {
        // Cerrar conexión de Prisma
        await prismaClient.$disconnect();
    }
}

// Handler para GET (información del endpoint)
export async function GET() {
    return NextResponse.json({
        endpoint: "/api/register",
        method: "POST",
        description: "Registro de usuarios para compra de acciones",
        integration: "Libelula Payment Gateway",
        database: "PostgreSQL via Prisma",
        expectedFormat: {
            nombre: "string",
            apellido: "string", 
            ci: "string",
            domicilio: "string",
            nacionalidad: "string",
            email: "string",
            telefono: "string",
            acciones: "number",
            fechaNacimiento: {
                dia: "string",
                mes: "string", 
                año: "string"
            }
        },
        transformacion: {
            input: "{dia: '15', mes: '7', año: '1990'}",
            output: "Date object -> 1990-07-15T00:00:00.000Z"
        }
    });
}
