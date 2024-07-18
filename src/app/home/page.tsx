'use client'
import Header from "@/components/HomeData/HeaderHome";
import Homedata from "@/components/HomeData/HomeData";
import Footer from "@/components/foooter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    
    <div className="bg-[#fafef7] ">
      
      
      <div className="">
        <Header/>
        <Homedata />
      </div>
    </div>
  
  );
};

export default Home;
