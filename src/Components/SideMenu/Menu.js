import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";
// import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="w-[100%] mt-5 mb-5">
      <h2 className="opacity-50 font-bold text-[12px] dark:text-white">{"What's hot"}</h2>
      <h1 className="font-bold opacity-80 dark:text-white dark:opacity-100">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="opacity-50 font-bold mt-5 text-[12px] dark:text-white">Discover by topic</h2>
      <h1 className="font-bold opacity-80 dark:text-white dark:opacity-100">Categories</h1>
      <MenuCategories />
      <h2 className="opacity-50 text-[12px] mt-5 font-bold dark:text-white">Chosen by the editor</h2>
      <h1 className="font-bold opacity-80 dark:text-white dark:opacity-100">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
