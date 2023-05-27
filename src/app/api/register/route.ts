import { useRegisterStore } from "@/app/store/store";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(request: Request) {
    const {
        nombre,
        apellido,
        nacionalidad,
        email,
        ci,
        domicilio,
        telefono,
        acciones,
    }: Partial<Register> = await request.json();
    console.log(crypto.randomUUID());
    const payment = {
        appkey: process.env.API_KEY,
        email,
        identificador_deuda: crypto.randomUUID(),
        callback_url: "http://localhost:3000/api/payment",
        url_retorno: "http://localhost:3000/success",
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
    // console.log(setRegister);
    // setRegister(register);
    // return NextResponse.json(res);
}
