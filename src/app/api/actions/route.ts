import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST() {
    const res = await prismaClient.acciones.create({
        data: {
            cantidad: 10000000,
        },
    });
    console.log(res);
    return NextResponse.json(res);
}
