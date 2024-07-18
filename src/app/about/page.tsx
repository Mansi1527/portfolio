'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Project from "@/components/about/AboutProject";
import HeaderAll from '@/components/HeaderAll';

const About = () => {
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
    // { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/contactme", label: "Contact me" },
  ];

  // Array of experience data
  const experienceData = [
    {
      number: "01",
      title: "Talent Screen Hub",
      description: "I worked on a Talent Screen Hub project that catered to students seeking new job opportunities. The platform featured comprehensive HR and user profiles, designed to streamline the job application process. It facilitated efficient interactions between candidates and employers, offering a user-friendly experience for both parties involved in the recruitment process."
    },
    {
      number: "02",
      title: "Notes Mitra",
      description: "I collaborated on a project with Notes Mitra, developed using Next.js. Notes Mitra functions as an online platform for buying and selling educational notes, providing essential resources to support students in their educational pursuits."
    }
    // Add more experiences as needed
  ];

  return (
    <>
      <motion.div
        className='min-h-screen bg-[#DADADA]'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeaderAll links={links}/>
        <div className='bg-black text-white'>
          <h1 className='text-6xl text-white ml-10 pb-14 font-semibold selection:text-red-500'>
            I combine creativity with usability and deliver efficient solutions.
          </h1>
        </div>
      
        <div id='experience' className='md:mx-5 lg:mx-20 xl:x-20 mx-20 my-20 flex justify-between xl:gap-60 lg:gap-40 md:gap-10 gap-60 text-black bg-[#DADADA]'>
          <p className='flex items-center justify-start text-xl font-baskervville'>Experience</p>
          <div>
            <motion.p variants={itemVariants} className="text-2xl">
              I bring a wealth of experience across a diverse array of projects, encompassing everything from essential web presences to intricate, cutting-edge web applications.
            </motion.p>
            <div className='flex xl:gap-8 lg:gap-8 md:gap-6'>
              {experienceData.map((experience, index) => (
                <div key={index} className='mb-10'>
                  <div className='flex'>
                    <motion.h2 variants={itemVariants} className='text-9xl'>
                      {experience.number}
                    </motion.h2>
                    <Link href="/" passHref>
                      <motion.h2 variants={itemVariants} className='text-2xl mt-9 ml-5 hover:underline'>
                        {experience.title}
                      </motion.h2>
                    </Link>
                  </div>
                  <motion.p variants={itemVariants} className='text-xl font-baskervville mt-4 xl:w-[400px] lg:w-[300px] md:w-[290px]'>
                    {experience.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-black text-white flex gap-60 py-20 px-10'>
          <motion.h1 variants={itemVariants} className='flex justify-start items-center font-baskervville'>Tools & technologies</motion.h1>
          <motion.div variants={itemVariants} className=''>
            <ul className='list-disc list-inside'>
              <li className='mb-5'>
                <strong className='text-xl'>Frontend Development:</strong>
                <ul className='list-disc list-inside ml-5 text-xl'>
                  <li>Proficient in React.js and Next.js for building interactive and scalable web applications.</li>
                  <li>Expertise in using JavaScript for frontend logic and Tailwind CSS for efficient and responsive styling.</li>
                </ul>
              </li>
              <li className='mb-5'>
                <strong className='text-xl'>Backend Development:</strong>
                <ul className='list-disc list-inside ml-5 text-xl'>
                  <li>Skilled in Express.js for creating robust backend APIs and managing server-side logic effectively.</li>
                  <li>Experience with MongoDB and SQL for database management, ensuring data integrity and performance.</li>
                </ul>
              </li>
              <li className='mb-5'>
                <strong className='text-xl'>UI/UX Design:</strong>
                <ul className='list-disc list-inside ml-5 text-xl'>
                  <li>Designed creative and user-friendly interfaces using Material UI, React Icons, and Daisy UI to enhance user experience.</li>
                </ul>
              </li>
              <li className='mb-5'>
                <strong className='text-xl'>API Testing and Development:</strong>
                <ul className='list-disc list-inside ml-5 text-xl'>
                  <li>Utilized Postman for testing and debugging backend routes, ensuring reliable API performance and functionality.</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>

        <div>
          <Link href="/projects" className='text-black hover:underline'>
            <motion.h1 variants={itemVariants} className='flex justify-center items-center text-2xl m-10 font-baskervville'>Projects</motion.h1>
          </Link>
          <Project/>
        </div>
      </motion.div>
    </>
  );
};

export default About;
