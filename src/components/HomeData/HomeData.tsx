import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const HomeData = () => {
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
  

  return (
    <div className="flex pt-20  items-center justify-center">
      <motion.div
        className=''
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      
        <div className="flex flex-col items-center justify-center ">
        <motion.h1 variants={itemVariants} className="text-2xl"><h1 className="text-7xl font-lovelace text-center text-black">
    Hi, I'm <span style={{ display: 'inline-block'}}><i><Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Mansi Yadav')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          // .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
    /></i></span>
  </h1>

          <h1 className="text-7xl font-lovelace text-center text-black">
            and I'm a <br /> Web Developer.
          </h1>
         
          </motion.h1>
          <Image src="/underline.png" alt="undelrine" width={400} height={200}/>
          <div className="mt-5 relative">
            <Link href="/contactme" className="absolute mt-5 ml-16 text-2xl font-lovelace"><i>Hire me</i></Link>
          <Image src="/circle.png" alt="" width={200} height={100}/>
          </div>
          
        </div>
        </motion.div>
    </div> 
  );
};

export default HomeData;
