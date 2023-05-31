import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export let context = {};

export const setContext = (ctx: any) => {
    context = ctx;
};

export async function GET() {
    let testAccount = await nodemailer.createTestAccount();

    setContext({ data: "hola" });

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
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    console.log("Message sent");

    // console.log(res);
    return NextResponse.json("Email sent");
}
