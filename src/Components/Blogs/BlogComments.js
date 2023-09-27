import { getAllComments, getDate, getUser } from "@/Utils/data";
import Image from "next/image";
import React from "react";

const CommentCard = async({email, time, text }) => {
  const user= await getUser(email);
  const date= getDate(time);
  return (
    <div className="flex flex-col bg-gray-300 p-3 rounded-md mb-3">
      <div className="flex items-center">
        <Image
          src={user.image}
          className="w-[35px] h-[35px] rounded-full border-[2px] border-white object-cover"
          width={35}
          height={35}
          alt=""
        />
        <p className="pl-2 font-semibold opacity-80">{user.name}</p>
        <p className="pl-3 text-[14px] font-semibold opacity-60">{date}</p>
      </div>
      <div>
        <p className="text-[14px]">{text}</p>
      </div>
    </div>
  );
};


const BlogComments = async({id}) => {
  console.log(id);
  let comments=await getAllComments(id);
  console.log(comments);
  if(comments.message?.include("wrong")){
    comments=[]
  }
  console.log(comments);
  return (
    <div className="flex w-[80%] max-w-[500px] mt-5 flex-col">
        <p className="font-bold text-[20px] dark:text-white mb-1 text-left">Comments</p>
      {comments?.map((itm) => (
        <CommentCard
          key={itm.id}
          email={itm.userEmail}
          time={itm.createdAt}
          text={itm.comment}
        />
      ))}
    </div>
  );
};

export default BlogComments;
