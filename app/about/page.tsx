import React from 'react'
import Image from "next/image";
import Profile from "@/public/images/profile.jpg"
import { GoArrowRight } from 'react-icons/go';

function about() {
  return (
    <>
      <div className="flex m-20 justify-between">
        <div className="flex flex-col gap-10 w-[40%]">
      <h1 className="text-5xl font-title">
        Hi, I'm <br /> Muhammad Usman, <br />
        Web Developer
      </h1>
      <p className="text-lg font-title  text-[#606060]">Highly motivated and detail-oriented web developer with over a years of experience in developing responsive websites and applications</p>
      <p className="text-lg  text-[#606060]">passionate about creating robust and user-friendly web applications Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Nextjs. <br />
      Racing to the best Technologies Like Agentic AI</p>
        </div>
        <div className="w-[40%] h-[400px] overflow-hidden">
            <Image src={Profile} alt="image" width={380} height={600} ></Image>
        </div>
    </div>

    <div className="flex flex-col gap-24 mx-20 my-32 w-[50%]">
      <div className="flex gap-20">
        <h1 className="text-lg font-medium underline w-[30%] font-inter text-[#181717]">Main Projects</h1>
        <p className="text-lg w-[70%] font-normal font-inter text-[#181717]">Currency Convertor, Portfolio, Animated Website, Word Counter, </p>
      </div>

      <div className="flex gap-20">
        <h1 className="text-lg font-medium underline w-[30%] font-inter text-[#181717]">Main Skills</h1>
        <p className="text-lg w-[70%] font-normal font-inter text-[#181717]">HTML, CSS, Typescript, JavaScript, ReactJs, Next.js, Tailwind,</p>
        
      </div>
    </div>
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <div className="flex mx-20 justify-between my-20">
        <h1 className="text-2xl flex font-semibold font-title">I am Thrilled to answer to <br /> your next project <span className="mt-10 -ml-20 w-[1.5em] h-[1.5em] font-extrabold "><GoArrowRight /></span></h1>
        
        <div className="mr-10">
        <h2 className="text-lg font-semibold mb-4 font-title">usmanqaisrani110@gmail.com</h2>
        <p className="underline cursor-pointer font-inter" >View resume</p>
        </div>
      </div>
    </>
  )
}


export default about;