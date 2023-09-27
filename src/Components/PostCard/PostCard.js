import { getDate } from "@/Utils/data";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ key, item }) => {
  const date=getDate(item.createdAt);
  return (
    <Link href={`/blogs/${item.slug}`} className=" flex justify-between mt-3 " key={key}>
      {item.img && (
        <div className="relative w-[50%] h-[200px] rounded-md overflow-hidden">
        <Image src={item.img} alt="" fill className="w-[100%] h-[100%] max-h-[200px] object-cover" />
      </div>
      )}
      <div className="flex w-[48%] mt-0 pt-0 items-start flex-col">
        <div className="w-[100%] mt-0 pt-0">
          <span className="font-semibold dark:text-white  opacity-70">
            {date} -{" "}
          </span>
          <span className="font-bold text-rose-400">{item.catSlug}</span>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold opacity-70 dark:opacity-100 dark:text-white">{item.title}</h1>
        </div>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className="opacity-70 text-[14px] dark:text-white" dangerouslySetInnerHTML={{ __html: item.desc.substring(0,100)+"..." }}></div>
        <Link href={`/blogs/${item.slug}`} className="font-semibold dark:text-white  mb-2 hover:text-rose-300 flex flex-col ">
          Read More
          <div className="w-[100px] h-[2px] bg-rose-500"/>
        </Link>
      </div>
    </Link>
  );
};

export default PostCard;
