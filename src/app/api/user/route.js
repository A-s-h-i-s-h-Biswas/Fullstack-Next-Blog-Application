import prisma from "@/Utils/PrismaConnector";
import { NextResponse } from "next/server";

// GET User
export const GET = async (req) => {
//   const reqBody = await req.json();
const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
