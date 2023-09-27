import React from "react";
import Image from "next/image";
import Link from "next/link";
const Featured = () => {
  return (
    <div className=" w-[100%] flex flex-col">
      <h1 className="text-[35px] opacity-70 dark:opacity-100 dark:text-white md:text-[50px]">
        <b className="">Write, Read and Grow!</b> Discover new articles and creative ideas.
      </h1>
      <div className="w-[100%] pt-1 flex flex-col md:flex-row justify-between">
        <div className="relative w-[100%] md:w-[52%] h-[250px] rounded-sm overflow-hidden">
          <Image src="/p1.jpeg" alt="" fill className="w-[100%] h-[100%] max-h-[250px] object-cover" />
        </div>
        <div className="mt-2 md:w-[46%]">
          <h1 className=" text-[18px] font-semibold opacity-80 dark:opacity-100 dark:text-white">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="text-[14px] opacity-80 dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          
          <button className=" w-[120px] h-[45px] hover:bg-orange-500 text-white mt-2 mb-2 rounded-sm font-semibold bg-gray-400 dark:bg-white dark:text-black"><Link className="w-[100%] h-[100%]" href="/blogs?type=all" >Explore Now</Link></button>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
