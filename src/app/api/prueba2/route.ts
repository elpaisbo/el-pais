import { NextResponse } from "next/server";
import { context } from "../prueba/route";

export async function GET() {
    return NextResponse.json(context);
}
