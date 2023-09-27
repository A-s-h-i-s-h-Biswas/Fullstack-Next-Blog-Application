import { getUser } from '@/Utils/data';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const BlogCard = async({title, desc, img, slug, createdAt, catSlug, views, userEmail}) => {
  console.log(slug);
  const user=await getUser(userEmail);
  const description=`${desc}`;
  return (
    <Link href={`/blogs/${slug}`} className='flex justify-between max-h-[250px] mb-3'>
        <div className='flex flex-col w-[65%] lg:w-[50%] dark:text-white'>
            <div className='flex items-center'>
                <Image src={user.image} width={20} height={20} className='w-[30px] h-[30px] mr-[5px] rounded-full object-cover' alt=''/>
                <p className='font-bold opacity-75 text-[14px]'>{user.name}</p>
            </div>
            {/* wrap the text upto 25 words */}
            <h1 className='font-semibold'>{title}</h1>
            <p className='hidden md:flex text-[14px]' dangerouslySetInnerHTML={{ __html: desc.substring(0,120)+"...Read More" }}></p>
            <p className='text-[14px] font-semibold opacity-80'>{createdAt.substring(0,10)} - {catSlug}</p>
        </div>
        <div className='relative flex flex-col w-[40%] lg:h-[250px]'>
            <Image src={img} fill className='w-[100%] h-[150px] max-h-[250px] md:h-[250px] object-cover rounded-sm' alt=''/>
        </div>
    </Link>
  )
}

export default BlogCard;