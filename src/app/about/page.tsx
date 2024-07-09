'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Project from "@/components/projects"
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

  return (
    <>
    <motion.div
      className='min-h-screen bg-customGray'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
    <div className='bg-black text-white '>

   
    <div className='flex justify-between pt-10 px-10 text-gray-300'>
    <div className=' '>
      <p className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">Mansi yadav</p>
    </div>
    <div className='flex gap-5 text-xl '>
      <Link href="/work" className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">Work</Link>
      <Link href="/about" className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">About</Link>
      <Link href="/contactme" className="inline-block transition-transform duration-900 delay-200 hover:rotate-12 hover:-translate-x-2">Contact me</Link>

    </div>
    
    
  </div>
  <h1 className='text-6xl text-white mt-10 ml-10 pb-14 font-semibold selection:text-red-500'>I combine creativity with usability and deliver efficient solutions.</h1>
  </div>
    <div className=' mx-20 my-20 flex justify-between gap-60 bg-customGray text-black'>
      <p className='flex items-center justify-start text-xl font-baskervville'>Experience</p>
      <div>
      <motion.p variants={itemVariants} className="text-2xl">
      I bring a wealth of experience across a diverse array of projects, encompassing everything from essential web presences to intricate, cutting-edge web applications.
      </motion.p>
      <div className='flex '>
        <div>

       
        <div className='flex'>
        <motion.h2 variants={itemVariants} className='text-9xl'>
        01
      </motion.h2>
      <Link href="/" className='hover:underline'><motion.h2  variants={itemVariants} className='text-2xl mt-9 ml-5'>Talent Screen Hub</motion.h2></Link>
        </div>
        <motion.p className=' text-xl font-baskervville w-[22rem]' variants={itemVariants}>I worked on a Talent Screen Hub project that catered to students seeking new job opportunities. The platform featured comprehensive HR and user profiles, designed to streamline the job application process. It facilitated efficient interactions between candidates and employers, offering a user-friendly experience for both parties involved in the recruitment process.</motion.p>
        </div>
       
      <div>
        <div className='flex'>
        <motion.h2 variants={itemVariants} className='text-9xl ml-20'>
        02
      </motion.h2>
      
      <Link href="" className='hover:underline'><motion.h2 variants={itemVariants} className='text-2xl mt-9 ml-5'>Notes Mitra</motion.h2></Link>
        </div>
        <motion.p className='ml-20 text-xl font-baskervville mr-10' variants={itemVariants}>I collaborated on a project with Notes Mitra,developed using Next.js. Notes Mitra functions as an online platform for buying and selling educational notes, providing essential resources to support students in their educational pursuits.</motion.p>
      </div>
     
      </div>
      
    </div>
    </div>
    
    
      {/* <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
        Skills
      </motion.h2>
      <motion.ul variants={itemVariants} className="list-disc list-inside mb-8">
        <li>Proficient in HTML, CSS, JavaScript, and TypeScript</li>
        <li>Experience with React, Next.js, and Node.js</li>
        <li>Skilled in using Tailwind CSS for responsive design</li>
        <li>Strong understanding of RESTful APIs and GraphQL</li>
        <li>Knowledge of MongoDB and SQL databases</li>
      </motion.ul>
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
        Experience
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg mb-8">
        I have worked on various projects, ranging from small websites to large web applications. My
        focus is on delivering high-quality code and ensuring the best user experience.
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
        Education
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg mb-8">
        I hold a Bachelor's degree in Computer Science from XYZ University. During my studies, I
        gained a solid foundation in software development and honed my problem-solving skills.
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
        Contact
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg">
        Feel free to reach out to me at <a href="mailto:mansiy1527@gmail.com" className="text-blue-500 hover:underline">mansiy1527@gmail.com</a>.
        I'm always open to discussing new projects and opportunities.
      </motion.p> */}
      <div className='bg-black text-white flex gap-60 py-20  px-10'>
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
            <motion.h1 variants={itemVariants} className='flex justify-center items-center text-2xl m-10 font-baskervville'>Projects</motion.h1>
            <Project/>
          </div>
    </motion.div>
    </>
  );
};

export default About;
