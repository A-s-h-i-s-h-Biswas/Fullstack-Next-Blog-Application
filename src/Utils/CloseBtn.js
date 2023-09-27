"use client"

import Image from 'next/image'
import React from 'react'
const CloseBtn = ({menuHandler}) => {
  return (
    <div className='w-[100%] h-[65px] mt-5 flex items-center justify-center'>
        <button onClick={menuHandler} className='w-[45px] h-[45px] rounded-full overflow-hidden'>
        <Image
            src="/close.svg"
            className=""
            alt="close btn"
            width={45}
            height={45}
          />
        </button>
    </div>
  )
}

export default CloseBtn;