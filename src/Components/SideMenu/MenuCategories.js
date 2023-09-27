import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="flex  justify-between">
      <Link
        href="#"
        className={``}
      >
        <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
      <Link href="/" className={``}>
      <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
      <Link href="/" className={``}>
      <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
      <Link href="/" className={``}>
      <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
      <Link href="/" className={``}>
      <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
      <Link href="/" className={``}>
      <Image src="/p1.jpeg" alt="" width={40} height={40} className=" w-[40px] h-[40px] rounded-full object-cover"/>
      </Link>
    </div>
  );
};

export default MenuCategories;
