'use client'
import { motion } from 'framer-motion';

import HeaderAll from '../HeaderAll';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const links = [
    { href: "/", label: "Home" },
    { href: "/about/#experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contactme", label: "Contact me" },
  ];
const ProjectHeader=()=>{
  
    return(
        <div className="">
            <motion.div
                className=' bg-black'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
      
                <HeaderAll links={links}/>
                <div className="flex justify-center items-center my-5">
                    <p className='text-3xl text-white'> My projects</p>
                </div>
            </motion.div>
        </div>
      
    )
}
export default ProjectHeader