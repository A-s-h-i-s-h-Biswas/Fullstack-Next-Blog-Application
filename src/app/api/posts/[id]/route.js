import prisma from "@/Utils/PrismaConnector";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const slug  = searchParams.get("slug");

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { author: true,},
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
