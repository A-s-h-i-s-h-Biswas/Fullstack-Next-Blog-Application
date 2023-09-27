import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-10 mb-10 flex flex-col lg:flex-row items-center justify-center">
      <div className=" w-[100%] max-w-[400px] dark:text-white lg:mr-5  flex justify-between ">
        <div className="flex flex-col ">
          <span className="text-[20px] font-semibold opacity-70 tracking-widest">Links</span>
          <Link className="text-[14px] opacity-70" href="/">
            Home
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            Blog
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            About
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            Contact
          </Link>
        </div>
        <div className="flex flex-col w-[40%] ">
          <span className="text-[20px] font-semibold opacity-70 tracking-widest">Tags</span>
          <div className=" flex w-[100%] justify-between">
          <div className="flex flex-col">
            <Link className="text-[14px] opacity-70" href="/">
              Style
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Fashion
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Coding
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Travel
            </Link>
          </div>
          <div className="flex flex-col">
            <Link className="text-[14px] opacity-70" href="/">
              Cooking
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Photo
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Music
            </Link>
            <Link className="text-[14px] opacity-70" href="/">
              Drawing
            </Link>
          </div>
          </div>
        </div>
        <div className="flex flex-col dark:text-white">
          <span className="text-[20px] font-semibold opacity-70 tracking-widest">Social</span>
          <Link className="text-[14px] opacity-70" href="/">
            Linkedin
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            Instagram
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            Github
          </Link>
          <Link className="text-[14px] opacity-70" href="/">
            Youtube
          </Link>
        </div>
      </div>
      <div className="mt-3 flex dark:text-white  flex-col items-center lg:mt-0 lg:items-start lg:justify-end">
        <p className="opacity-70">
          Copyright© {new Date().getFullYear()} <span className="text-orange-500 font-black">NextBlog</span>. All rights are reserved.
        </p>
        <div className="flex w-[130px] justify-between">
          <Image src="/linkedin.png" alt="" width={25} height={25} />
          <Image src="/instagram.png" alt="" width={25} height={25} />
          <Image src="/github.svg" alt="" width={25} height={25} />
          <Image src="/youtube.png" alt="" width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
