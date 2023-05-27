import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(request: Request) {
    const register = await request.json();
    console.log("payment worked");
    console.log(register);
    // return NextResponse.json(res);
}
