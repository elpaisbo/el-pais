import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";

const prismaClient = new PrismaClient();
const LibelulaURL =
    process.env.LIB_URL || "https://api.todotix.com/rest/deuda/registrar";

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
    } = user;
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
    const res = await axios.post(LibelulaURL, payment, {
        headers: {
            "Content-Type": "application/json",
        },
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
        },
    });
    return NextResponse.json(res.data);
}
