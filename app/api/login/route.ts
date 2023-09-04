import prismadb from "@/app/login/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email } = body;

  const user = await prismadb.user.create({
    data: {
      fullName,
      email,
    },
  });
  return NextResponse.json(user);
}
