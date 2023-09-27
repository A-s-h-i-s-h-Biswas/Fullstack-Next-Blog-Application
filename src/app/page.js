import TypeList from "@/Components/Blogs/TypeList";
import CategoryList from "@/Components/CategoryList";
import Featured from "@/Components/Featured/Featured";
import PostList from "@/Components/PostCard/PostList";
import Menu from "@/Components/SideMenu/Menu";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment className="min-w-[100vw] min-h-[100vh] bg-slate-700 ">
      <Featured />
      <div className="hidden md:block  flex-wrap  justify-between">
        <CategoryList />
      </div>
      <diV className=" mt-5 md:hidden">
        <p className="text-[20px] font-bold opacity-70 dark:opacity-100 dark:text-white"> Popular Categories</p>
        <TypeList />
      </diV>
      <div className=" w-[100%] flex justify-between lg:flex-row">
        <div className=" w-[100%] lg:w-[60%]">
          <PostList />
        </div>
        <div className="hidden lg:flex w-[36%]">
          <Menu />
        </div>
      </div>
    </Fragment>
  );
}
