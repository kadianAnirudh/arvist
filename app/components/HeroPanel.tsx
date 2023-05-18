'use client'
import Image from 'next/image'
import { Text } from "@nextui-org/react";
// import Video from '../../public/videos/'

const HeroPanel = () => {
  return (
<div className="h-[60vh] md:h-[100vh] w-screen relative overflow-hidden">
  <div className="VideoHolder h-full w-full top-0 right-0 left-0 bottom-0 relative overflow-hidden">
    <video className="hidden md:block object-cover" autoPlay loop preload="auto" muted>
      <source src="/videos/bgVideo.mp4" type="video/mp4" />
    </video>
    <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
      <h1 className="text-sky-400 text-4xl font-bold mr-4 ml-4 mb-8 md:text-6xl">REDUCE SUPPLY CHAIN COSTS. </h1>
      <h1 className="text-white text-4xl mr-4 ml-4 font-bold md:text-6xl">WITH HUMAN CENTRIC AI IN USA </h1>
      <button className="rounded-full p-4 mt-10 primary bg-sky-600">Get in Touch ➤ </button>
    </div>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
  </div>
</div>
  )
}

export default HeroPanel