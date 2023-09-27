import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import MenuBar from "./MenuBar";
import AuthLinks from "./AuthLinks";


const Navbar = () => {
  return (
    <Fragment>
      <div className="md:hidden">
        <MenuBar />
      </div>
      <div className="  h-[60px]  items-center hidden  md:flex justify-between">
        <div className="flex w-[130px] cursor-pointer justify-between ">
          <Image
            src="/linkedin.png"
            className=""
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src="/instagram.png"
            className=""
            alt="instagram"
            width={24}
            height={24}
          />
          <Image
            src="/github.svg"
            className=""
            alt="tiktok"
            width={24}
            height={24}
          />
          <Image
            src="/youtube.png"
            className=""
            alt="youtube"
            width={24}
            height={24}
          />
        </div>
        <Link href="/" className=" w-[200px] text-[25px] font-bold text-orange-600 text-center">
          NextBlog
        </Link>
        <div className="flex w-[calc(100%-330px)]  max-w-[400px] font-semibold text-slate-600 dark:text-white justify-between ">
          <ThemeToggler />
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/blogs?type=all" className="">
            Blogs
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          <AuthLinks/>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
