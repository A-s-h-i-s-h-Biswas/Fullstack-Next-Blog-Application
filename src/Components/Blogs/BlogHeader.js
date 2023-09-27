import React, { Fragment } from "react";
import TypeList from "./TypeList";

const BlogHeader = () => {
  return (
    <Fragment>
      <h1 className="pl-1 font-bold opacity-80 text-left dark:text-white">
        Discover what matters to you
      </h1>
      <TypeList />
      <div className='w-[100%] h-[.5px] bg-gray-100 mt-5 mb-2'/>
    </Fragment>
  );
};

export default BlogHeader;
