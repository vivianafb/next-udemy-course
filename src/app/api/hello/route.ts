import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ hola: "Hello World" });
}
export async function POST(request: Request) {
  return NextResponse.json({ hola: "Hello World", method: "POST" });
}
