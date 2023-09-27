import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBg, getCategories } from "@/Utils/data";


const CategoryList = async () => {
    const data = await getCategories();
    console.log(data);
  return (
    <div className="flex flex-col  mt-5">
      <h1 className="text-[20px] opacity-80 dark:text-white dark:opacity-100 font-bold">
        Popular Categories
      </h1>
      <div className="w-[100%] flex flex-col md:flex-row items-center justify-between">
        {data?.map((item) => (
          <Link
            href={`/blogs?type=${item.title}`}
            className={` flex items-center justify-between mt-2 px-2 ${getBg(item.title)} rounded-md w-[80%] md:w-[100px] md:h-[40px] h-[55px]`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={25}
                height={25}
                // fill
                className="w-[50px] mr-[2px] md:w-[25px] md:h-[25px] h-[50px] rounded-full   object-cover"
              />
            )}
            <p className="w-[83%] text-[14px] font-semibold text-white">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
