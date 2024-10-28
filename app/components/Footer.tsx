import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    
    <div className='bg-white min-w-full text-black p-2 flex justify-between items-center'>
        <Link href="#">
        <h1 className='text-[21px] font-medium ml-16 font-title text-[#2429AF]'>Muhammad Usman ⏤ 2024
        </h1>
        </Link>
        <ul className='items-center justify-center flex gap-8 mr-20 cursor-pointer text-[21px] font-medium font-title text-[#181717]'>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Github</li>
        </ul>
    </div>
  )
}

export default Footer