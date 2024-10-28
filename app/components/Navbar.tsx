import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-white w-full text-black p-4 flex justify-between items-center cursor-pointer'>
        <Link href="/">
        <h1 className='text-3xl font-bold ml-16 '>usMan.</h1>
        </Link>
        <ul className='items-center justify-center text-[21px] font-medium flex gap-7 mr-28 font-title text-[#181717]'>
            <li>Work</li>
          <Link href="about"><li>About</li></Link>  
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar