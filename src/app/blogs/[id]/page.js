import BlogActions from "@/Components/Blogs/BlogActions";
import BlogComments from "@/Components/Blogs/BlogComments";
import BlogHeader from "@/Components/Blogs/BlogHeader";
import { getDate, getSinglePost, getUser } from "@/Utils/data";
import Image from "next/image";
import React from "react";

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);
  return {
    title: post.title,
    description: post.desc,
  }
}


const SingleBlog = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const post = await getSinglePost(id);
  console.log(post);
  const user = await getUser(post.userEmail);
  const date = getDate(post.createdAt);
  return (
    <div className="w-[100%] flex flex-col items-center justify-center mb-5">
      <BlogHeader />
      <div className="flex items-center mt-1 mb-2">
        <Image
          src={user.image}
          width={20}
          height={20}
          className="w-[50px] h-[50px] mr-[5px] rounded-full object-cover"
          alt=""
        />
        <p className="font-bold opacity-75 dark:text-white">{user.name}</p>
        <p className="font-bold opacity-60 dark:text-white pl-5">
          {date} - {post.catSlug}
        </p>
      </div>
      <div className=" relative w-[100%] h-[350px] dark:text-white  flex flex-col items-center justify-center">
        <Image
          src={post.img}
          fill
          className="w-[100%] h-[100%] object-cover "
        />
      </div>
      <h1 className="text-[35px] mt-5 font-bold dark:text-white text-center">
        {post.title}
      </h1>
      
      <div className="w-[80%] dark:text-white  flex items-center justify-center">
        <p
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: post.desc }}
        ></p>
      </div>
      <p className="dark:text-white font-bold opacity-80">{post.views} views</p>
      <BlogActions id={id} />
      <BlogComments id={id}/>
    </div>
  );
};

export default SingleBlog;
