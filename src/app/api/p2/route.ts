import { NextResponse } from "next/server";

const puppeteer = require("puppeteer");
import mustache from "mustache";
const fs = require("fs");
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
    const data = {
        nombre: "Vanessa",
        precio: 100,
        acciones: 12,
    };
    const user = await request.json();

    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox"],
    });

    const page = await browser.newPage();

    const html = fs.readFileSync("src/app/api/p2/template.html", "utf8");
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

    let transporter = nodemailer.createTransport({
        host: "m40.siteground.biz",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: "info@acciones-elpaistarija.com",
            pass: "381@1f@u1{6c",
        },
    });

    let mailOptions = {
        from: "info@acciones-elpaistarija.com",
        to: "vanetejerina314@gmail.com",
        subject: "Sending Email using Node.js",
        html: "<h1>Welcome</h1><p>That was easy!</p>",
        attachments: [
            {
                filename: "result.pdf",
                path: "result.pdf",
                contentType: "application/pdf",
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
