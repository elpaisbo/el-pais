import { NextResponse } from "next/server";
const puppeteer = require("puppeteer");
const fs = require("fs");
import mustache from "mustache";

export async function POST(request: Request) {
    const data = {
        nombre: "John",
        acciones: 10,
        precio: 10000,
    };

    const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        headless: "new",
    });
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
    return NextResponse.json("Se genero el pdf");
}
