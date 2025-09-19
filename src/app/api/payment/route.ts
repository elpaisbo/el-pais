import { NextRequest, NextResponse } from "next/server";
import { generate } from "@pdfme/generator";
import { BLANK_PDF, Template } from "@pdfme/common";
import { text } from "@pdfme/schemas";
const fs = require("fs");
const nodemailer = require("nodemailer");
import { Deuda, PrismaClient } from "@prisma/client";
import pdfTemplate from "./pdfTemplate/template";
import { validateFechaNacimiento } from "../../../../utils/transformers";
const prismaClient = new PrismaClient();
const emailUser = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export async function GET(request: NextRequest) {
    const query =
        request.nextUrl.searchParams.get("transaction_id") || undefined;
    const payment =
        (await prismaClient.deuda.findUnique({
            where: {
                idcompra: query,
            },
        })) || undefined;

    const template: Template = {
        basePdf: pdfTemplate,
        schemas: [
            [
                {
                    name: "nombre",
                    type: "text",
                    position: {
                        x: 76.47,
                        y: 71.98,
                    },
                    width: 63.04,
                    height: 13.88,
                    alignment: "center",
                    fontSize: 13,
                    characterSpacing: 0,
                    lineHeight: 1,
                    // fontName: "Roboto",
                    fontColor: "#fa0000",
                },
                {
                    name: "cantidad",
                    type: "text",
                    position: {
                        x: 79.11,
                        y: 58.6,
                    },
                    width: 6.68,
                    height: 11.48,
                    alignment: "center",
                    fontSize: 6,
                    characterSpacing: 0,
                    lineHeight: 1,
                    // fontName: "Roboto",
                },
                {
                    name: "precio",
                    type: "text",
                    position: {
                        x: 121.74,
                        y: 93.25,
                    },
                    width: 6.68,
                    height: 5.66,
                    alignment: "center",
                    fontSize: 6,
                    characterSpacing: 0,
                    lineHeight: 1,
                    // fontName: "Roboto",
                },
                {
                    name: "fecha",
                    type: "text",
                    position: {
                        x: 99,
                        y: 122.57,
                    },
                    width: 34.67,
                    height: 5.28,
                    alignment: "left",
                    fontSize: 6,
                    characterSpacing: 0,
                    lineHeight: 1,
                    // fontName: "Roboto",
                },
                {
                    name: "id",
                    type: "text",
                    position: {
                        x: 99,
                        y: 129.1,
                    },
                    width: 43.68,
                    height: 6.19,
                    alignment: "left",
                    fontSize: 6,
                    characterSpacing: 0,
                    lineHeight: 1,
                    // fontName: "Roboto",
                },
            ],
        ],
    };

    const inputs = createInput(payment);

    const pdf = await generate({ template, inputs, plugins: { text } });

    fs.writeFileSync("/tmp/test.pdf", pdf);

    let transporter = nodemailer.createTransport({
        host: "gcam1276.siteground.biz",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: emailUser,
            pass,
        },
    });

    let mailOptions = {
        from: emailUser,
        to: payment?.email,
        subject: "Acción(es) comprada(s) de El País S.A.",
        html: "<h1>¡Felicidades!</h1><p>Ya eres dueñ@ de El País S.A. 🥳</p>",
        attachments: [
            {
                filename: "acciones.pdf",
                path: "/tmp/test.pdf",
                contentType: "application/pdf",
            },
        ],
    };

    const res = await transporter.sendMail(mailOptions);
    const newRegistro = await createNewRegistro(payment);
    console.log(newRegistro);
    return NextResponse.json(newRegistro);
}

async function createNewRegistro(payment: any) {
    const [newRegistro, deleteDeuda] = await prismaClient.$transaction([
        prismaClient.registro.create({
            data: {
                acciones: payment.acciones,
                nombre: payment.nombre,
                apellido: payment.apellido,
                fecha_nacimiento: payment.fecha_nacimiento && payment.fecha_nacimiento.año && payment.fecha_nacimiento.mes && payment.fecha_nacimiento.dia
                    ? new Date(`${payment.fecha_nacimiento.año}-${payment.fecha_nacimiento.mes.padStart(2, '0')}-${payment.fecha_nacimiento.dia.padStart(2, '0')}T00:00:00.000Z`)
                    : new Date('1990-01-01T00:00:00.000Z'),
                ci: payment.ci,
                domicilio: payment.domicilio,
                email: payment.email,
                idcompra: payment.idcompra,
                nacionalidad: payment.nacionalidad,
                telefono: payment.telefono,
            },
        }),
        prismaClient.deuda.delete({
            where: {
                idDeuda: payment.idDeuda,
            },
        }),
        prismaClient.acciones.update({
            where: {
                id: 1,
            },
            data: {
                cantidad: {
                    decrement: payment.acciones,
                },
            },
        }),
    ]);

    return newRegistro;
}

function createInput(payment: any): Record<string, any>[] {
    const date = new Date(Date.now());
    const inputs = [
        {
            nombre: `${payment.nombre} ${payment.apellido}`,
            cantidad: payment.acciones.toString(),
            precio: (100 * payment.acciones).toString(),
            fecha: date.toLocaleDateString(),
            id: payment.idcompra,
        },
    ];
    return inputs;
}
