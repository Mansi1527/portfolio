import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
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
    <div className=" pt-5  flex gap-5 justify-center items-center  text-black font-semibold">
      <motion.div
        className=' '
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex space-x-5">

       
      <Link href="/" className="py-2">Home</Link>

      <Link href="/about" className="hover:shadow-custom px-5 py-2 hover:rounded-full hover:bg-black hover:text-white">
        About
      </Link>

      <Link href="/projects" className="hover:shadow-custom px-5 py-2 hover:rounded-full hover:bg-black hover:text-white">
        Projects
      </Link>

      <Link href="/about/#experience" className="hover:shadow-custom px-5 py-2 hover:rounded-full hover:bg-black hover:text-white">
        Experience
      </Link>

      <Link href="/contactme" className="hover:shadow-custom px-5 py-2 hover:rounded-full hover:bg-black hover:text-white">
        Contact Me
      </Link>
      </div>
      </motion.div>
    </div>
  );
};

export default Header;
