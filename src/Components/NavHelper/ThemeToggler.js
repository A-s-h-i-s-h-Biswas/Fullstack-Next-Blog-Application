"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const ThemeToggler = () => {
    const getTheme=()=>{
        return localStorage.getItem("theme") || "light";
    }
    const [theme, setTheme]=useState(getTheme());
    const toggleTheme=()=>{
        const newTheme=theme === "light" ? "dark" : "light";
        localStorage.setItem("theme",newTheme);
        if(newTheme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
        setTheme(newTheme);
    }

    useEffect(()=>{
        const newTheme=getTheme();
        // console.log(newTheme);
        // document.documentElement.classList.toggle("dark",newTheme);
        if(newTheme==="light"){
            document.documentElement.classList.remove("dark");
        }
        else document.documentElement.classList.add("dark");
    },[]);

  return (
    <div
      className="w-[60px] h-[25px] relative px-1 cursor-pointer rounded-3xl bg-slate-700 dark:bg-white flex items-center justify-between"
      onClick={toggleTheme}
      
    >
      <Image src="/moon.png" alt="" width={16} height={14} />
      <div className={`absolute w-[20px] h-[20px] bg-gray-300 rounded-full ${theme === "light"? "right-1" : ""}`}/>
      <Image src="/sun.png" alt="" width={16} height={14} />
    </div>
  );
};

export default ThemeToggler;
