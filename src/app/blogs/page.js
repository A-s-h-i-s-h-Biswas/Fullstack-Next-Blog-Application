import BlogCard from "@/Components/Blogs/BlogCard";
import BlogHeader from "@/Components/Blogs/BlogHeader";
import { getAllPosts } from "@/Utils/data";
import React from "react";

const Blog = async ({searchParams}) => {
  const {type}=searchParams;
  const allposts = await getAllPosts(type);
  return (
    <div className="flex flex-col">
      <BlogHeader />
      <div className="w-[100%] flex flex-col">
        {allposts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            desc={post.desc}
            img={post.img}
            slug={post.slug}
            createdAt={post.createdAt}
            catSlug={post.catSlug}
            userEmail={post.userEmail}
            views={post.views}
          />
        ))}
      </div>
      {/* <div className=" w-[100%] max-w-[414px] flex justify-between font-semibold mt-5 mb-5">
        <button className="bg-orange-500 text-white w-[100px] h-[35px] rounded-sm">
          Previous
        </button>
        <button className="bg-orange-500 text-white w-[100px] h-[35px] rounded-sm">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
