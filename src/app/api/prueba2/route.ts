import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs";
import mustache from "mustache";
import nodemailer from "nodemailer";

export async function GET(request: Request) {
    let transporter = nodemailer.createTransport({
        host: "m40.siteground.biz",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: "info@acciones-elpaistarija.com",
            pass: "381@1f@u1{6c",
        },
    });

    const data = {
        nombre: "John",
        acciones: 10,
        precio: 10000,
    };

    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    const html = fs.readFileSync("src/app/api/prueba2/template.html", "utf8");
    const filledHtml = mustache.render(html, data);
    await page.setContent(filledHtml, { waitUntil: "domcontentloaded" });

    await page.emulateMediaType("screen");

    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px",
        },
        path: "result.pdf",
    });

    await browser.close();
    console.log("Se genero el pdf");

    let mailOptions = {
        from: "info@acciones-elpaistarija.com",
        to: "vanetejerina314@gmail.com",
        subject: "Sending Email using Node.js",
        attachments: [
            {
                filename: "result.pdf",
                contentType: "application/pdf", // <- You also can specify type of the document
                content: pdf, // <- Here comes the buffer of generated pdf file
            },
        ],
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    return NextResponse.json("Se genero el pdf");
}
