"use client";
import CloseBtn from "@/Utils/CloseBtn";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import AuthLinks from "./AuthLinks";

const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    if(!openMenu)document?.body.style.overflow="hidden";
    else document?.body.style.overflow="unset";
    setOpenMenu((prev) => !prev);
  };
  return (
    <Fragment className="relative">
      {!openMenu ? (
        <div className="flex items-center h-[60px]  justify-between  ">
          <h1 className="text-[25px] text-orange-300 font-extrabold  cursor-pointer">NextBlog</h1>
          <div className="flex items-center w-[110px] justify-between">
            <ThemeToggler/>
          <Image
            onClick={menuHandler}
            src="/toggle.svg"
            className="cursor-pointer"
            alt="Menu bar"
            width={30}
            height={30}
          />
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0  z-50 bg-white w-[100%] h-[100%]">
          <CloseBtn menuHandler={menuHandler}/>
          <div className="w-[100%] flex flex-col items-center transition-all justify-center text-[30px] pt-20 font-semibold text-slate-600  ">
            <Link
              href="/"
              className="w-[100%] text-center hover:bg-blue-300 hover:text-white"
            >
              Home
            </Link>
            
            <Link
              href="/blogs?type=all"
              className="w-[100%] text-center hover:bg-blue-300 hover:text-white"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="w-[100%] text-center hover:bg-blue-300 hover:text-white"
            >
              Contact
            </Link>
            {/* <Link
              href="/write"
              className="w-[100%] text-center hover:bg-blue-300 hover:text-white"
            >
              Write
            </Link>
            <Link
              href="/"
              className="w-[100%] text-center hover:bg-blue-300 hover:text-white items-center justify-center"
            >
              Login
            </Link> */}
            <AuthLinks style="w-[100%] text-center hover:bg-blue-300 hover:text-white "/>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MenuBar;
