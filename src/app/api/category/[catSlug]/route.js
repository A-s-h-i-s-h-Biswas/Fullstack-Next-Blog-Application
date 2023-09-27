import { NextResponse } from "next/server";
import prisma from "@/Utils/PrismaConnector";

// GET all posts to a specific category
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const catSlug = searchParams.get("type");
// console.log(catSlug);
  try {
    const posts = await prisma.post.findMany({
      where: { catSlug },
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
