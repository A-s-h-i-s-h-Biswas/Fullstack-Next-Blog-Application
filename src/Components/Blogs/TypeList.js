import { getBg, getCategories } from '@/Utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TypeCard=({type, logo})=>{
    const bg=getBg(type);
    if(type==="Traveling"){
        console.log(bg);
    }
    return(
        <Link href={`/blogs?type=${type}`} className={`flex items-center m-1 justify-center ${bg} bg-deep-orange-400  rounded-3xl w-[100px] h-[30px] lg:h-[40px] opacity-90 `}>
            {logo && <Image src={logo} width={30} height={30} className='rounded-full object-cover'/>}
            <p>{type}</p>
        </Link>
    )
}
const types=[
    {
        _id:1,
        type:"Coding",
        bg:"bg-pink-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:2,
        type:"Coding",
        bg:"bg-gray-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:3,
        type:"Coding",
        bg:"bg-blue-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:4,
        type:"Coding",
        bg:"bg-indigo-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:5,
        type:"Coding",
        bg:"bg-rose-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:6,
        type:"Coding",
        bg:"bg-violet-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
    {
        _id:7,
        type:"Coding",
        bg:"bg-orange-400",
        logo:"https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_640.png",
    },
]
const TypeList = async() => {
    const categories= await getCategories();
  return (
    <div className='w-[100%] flex flex-wrap '>
        {categories?.map(itm=><TypeCard key={itm._id} type={itm.title}/>)}
    </div>
  )
}

export default TypeList;