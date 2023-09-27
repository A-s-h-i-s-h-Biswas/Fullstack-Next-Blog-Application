
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";
import prisma from "@/Utils/PrismaConnector";

// Create a post
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
    );
  }

  try {
    const reqBody = await req.json();
    const post = await prisma.post.create({
      data: { ...reqBody, userEmail: session.user.email },
    });
   
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


// GET all posts
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
  
    const page = searchParams.get("page");
    const cat = searchParams.get("type");
  
    const POST_PER_PAGE = 4;
  
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat && { catSlug: cat }),
      },
    };
  
    try {
      // const [posts, count] = await prisma.$transaction([
      //   prisma.post.findMany(query),
      //   prisma.post.count({ where: query.where }),
      // ]);
      const posts=await prisma.post.findMany();
      // return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
      return new NextResponse(JSON.stringify(posts, { status: 200 }));

    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };

