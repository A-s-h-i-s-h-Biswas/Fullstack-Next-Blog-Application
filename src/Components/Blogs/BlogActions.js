"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
const BlogActions = ({id}) => {
  const router=useRouter();
  const [reactions, setReactions] = useState({
    state: null,
    like: 0,
    dislike: 0,
    comment: 0,
  });
  const [openComment, setOpenComment] = useState(false);
  const commentHandler = () => {
    setOpenComment((prev) => !prev);
  };

  const reactionHandler = (payload) => {
    if (payload === "like") {
      if (reactions.state === payload)
        setReactions((prev) => ({
          ...prev,
          state: null,
          like: prev.like - 1 < 0 ? 0 : prev.like - 1,
        }));
      else
        setReactions((prev) => ({
          ...prev,
          state: "like",
          like: prev.like + 1,
        }));
    } else if (payload === "dislike") {
      if (reactions.state === payload) {
        setReactions((prev) => ({
          ...prev,
          state: null,
          dislike: prev.dislike - 1 < 0 ? 0 : prev.dislike - 1,
        }));
      } else {
        setReactions((prev) => ({
          ...prev,
          state: "dislike",
          dislike: prev.dislike + 1,
          like: prev.state === "like" ? prev.like - 1 : prev.like,
        }));
      }
    } else if (payload === "comment") {
      setReactions((prev) => ({ ...prev, comment: prev.comment + 1 }));
    }
  };
  const [text, setText]=useState();
  const SubmitCommentHandler=async()=>{
    const comment=text?.trim();
    if(comment.length === 0){
      alert("Invalid comment");
      return;
    }
    const res = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment,
        postSlug:id,
      }),
    });
    if (res.status === 200) {
      setText("");
      router.refresh();
    }
  }

  return (

      <div className="w-[80%] max-w-[500px] mt-5 flex justify-between ">
        <input
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          type="text"
          required
          placeholder="Write a comment"
          className="outline-none hover:border-[2.5px] hover:bg-gray-100 h-[45px] pl-3 w-[80%] border-[2px] border-blue-300"
        />
        <button onClick={SubmitCommentHandler} className="bg-green-400 h-[45px] w-[19.5%]">Post</button>
      </div>

  );
};

export default BlogActions;
