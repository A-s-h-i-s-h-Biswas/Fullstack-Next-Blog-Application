import prisma from "@/Utils/PrismaConnector";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(res, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
