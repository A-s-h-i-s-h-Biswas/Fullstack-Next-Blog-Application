import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="">
      <Link href="/" className="">
        {withImage && (
          <div className="relative rounded-full overflow-hidden">
            <Image src="/p1.jpeg" alt="" fill className="w-[50px] h-[50px]  object-cover" />
          </div>
        )}
        <div className="w-[100%]">
          <p className={`bg-rose-400 w-[60px] flex items-center justify-center text-center text-white font-semibold h-[30px] rounded-md`}> Travel </p>
          <h3 className="dark:text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="font-bold opacity-70 dark:text-white">John Doe</span>
            <span className="font-bold opacity-70 text-orange-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="">
        {withImage && (
          <div className="relative">
            <Image src="/p1.jpeg" alt="" fill className="" />
          </div>
        )}
        <div className="">
          <p className={`bg-green-400 w-[60px] flex items-center justify-center text-center text-white font-semibold h-[30px] rounded-md`}>
            Culture
          </p>
          <h3 className="dark:text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="font-bold opacity-70 dark:text-white">John Doe</span>
            <span className="font-bold opacity-70 text-orange-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="">
        {withImage && (
          <div className="relative">
            <Image src="/p1.jpeg" alt="" fill className="" />
          </div>
        )}
        <div className="">
          <p className={`bg-yellow-400 flex items-center justify-center w-[60px] text-center text-white font-semibold h-[30px] rounded-md`}>Food</p>
          <h3 className="dark:text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="font-bold opacity-70 dark:text-white">John Doe</span>
            <span className="font-bold opacity-70 text-orange-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      {/* <Link href="/" className="">
        {withImage && (
          <div className="relative">
            <Image src="/p1.jpeg" alt="" fill className="" />
          </div>
        )}
        <div className="">
          <p className={`bg-indigo-400 w-[60px] flex items-center justify-center text-center text-white font-semibold h-[30px] rounded-md`}>
            Fashion
          </p>
          <h3 className="dark:text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className=" font-bold opacity-70 dark:text-white">John Doe</span>
            <span className=" font-bold opacity-70 text-orange-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default MenuPosts;
