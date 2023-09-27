import React from "react";
import PostCard from "./PostCard";
import { getAllPosts } from "@/Utils/data";


const PostList = async ({ page, cat }) => {
  const topPosts=await getAllPosts("all");
  return (
    <div className="flex flex-col mt-5">
      <h1 className="text-[20px] opacity-80 font-bold dark:text-white dark:opacity-100 ">
        Recent Posts
      </h1>
      <div className="w-[100%] flex flex-col ">
        {topPosts.map((item,indx)=>{
          if(indx > 3)return <></>
          return <PostCard item={item} key={item.id} />
        })}
      </div>
      
    </div>
  );
};

export default PostList;
