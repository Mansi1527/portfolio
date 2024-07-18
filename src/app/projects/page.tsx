 'use client'
 import Image from 'next/image';


import App from "./Card";
import ProjectHeader from "@/components/projects/ProjectHeader"

const project = () => {

  return (

  <div className="bg-black">
    <ProjectHeader/>
    <App />

  </div>
   
  )
};

export default project;

