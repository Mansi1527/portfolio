'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineLanguage } from "react-icons/md";

const ContactMe = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };
//for framer motion menu transition
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      
    >
    <div className='bg-customGray w-full min-h-screen flex flex-col justify-between font-baskervville font-normal'>
      <div className="flex justify-between relative">
        <div className="flex flex-col text-xl px-10 text-black py-5">
          <Link href="/service" className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">
            Service
          </Link>
          <Link href="/work" className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">
            Work
          </Link>
          <Link href="/about" className="inline-block transition-transform duration-900 delay-200 scroll-smooth hover:rotate-12 hover:-translate-x-2">
            About
          </Link>
        </div>
        <div className="absolute mt-10 left-1/2 transform -translate-x-1/2">
          <p className='flex items-center gap-1'><MdOutlineLanguage />IN</p>
        </div>
        <div className="relative">
          {!menuOpen && (
            <button
              onClick={handleMenuToggle}
              className="bg-black text-white text-xl mt-5 mr-5 py-4 px-10 rounded-2xl"
            >
              Menu +
            </button>
          )}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="bg-black flex flex-col text-white absolute right-0 mr-5 mt-5 px-20 py-3 shadow-lg rounded-lg"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/" className="py-1 hover:underline">Home</Link>
                <Link href="/about" className="py-1 hover:underline">About</Link>
                <p className="py-1">[Contact me]</p>
                <Link href="/experience" className="py-1 hover:underline">Experience</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        <Link href="/contactform"
          className='text-10xl text-black font-semibold flex justify-center font-basic'
          onMouseEnter={() => setUnderline(true)}
          onMouseLeave={() => setUnderline(false)}
        >
          LET'S TALK
        </Link>
        <div className='mx-10'>
          <motion.div
            className="h-5 bg-black"
            animate={underline ? "visible" : "hidden"}
            variants={underlineVariants}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className='flex justify-center mb-5 gap-10 text-xl'>
        <Link href="mailto:mansiy1527@gmail.com" className='hover:underline'>Mail</Link>
        <Link href="https://www.linkedin.com/in/mansiyadav1527/" className='hover:underline'>LinkedIn</Link>
        <Link href="https://github.com/Mansi1527" className='hover:underline'>Github</Link>
      </div>
    </div>
    </motion.div>
  );
};

export default ContactMe;
