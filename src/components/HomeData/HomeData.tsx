import Image from "next/image";
import { useEffect, useState } from "react";
import ImageSwitcher from "./ImageSwitcher";

const HomeData = () => {
  
  return (
    <div className="flex flex-col pt-20 items-center justify-center">
      <div>
      {/* <Image src="/myImage.png" alt="myimage" width={200} height={200} onMouseEnter={handleMouseEnter} className={` flex items-center justify-center ${visited?'hidden':'block'} `} />
      <video muted src="/myvideo.mp4" id="myvideo" width={200} height={200} className={` w-[200px] h-[200px]  flex items-center justify-center ${visited ? 'block' : 'hidden'}`}/> */}
      <ImageSwitcher />
      </div>
      
      <h1 className="text-center text-black text-3xl leading-10">
        My name is <br />
        <span className="text-5xl font-semibold">Mansi Yadav</span>
      </h1>
      <div className="h-0.5 w-96 bg-black my-4"></div> {/* Adjust width as needed */}
      <h1 className="text-black text-xl font-semibold">I am a full stack developer</h1>
      
        <p className="text-lg mt-4 px-2 py-1 rounded-lg text-white bg-black font-medium">Mastering the Art of User-Centric Development: Seamlessly Integrating Frontend and Backend Expertise for Intuitive Interfaces</p>
      
    </div>
  );
};

export default HomeData;
