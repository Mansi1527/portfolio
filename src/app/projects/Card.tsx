'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  title: string;
  heading: string;
  link:string;
  description: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, heading,link, description, index }) => {
  return (
    <motion.div
      className={`w-1/2 h-[20rem] overflow-y-auto border border-gray-300 rounded-lg p-2 shadow-md ${
        index % 2 === 0 ? 'bg-[#DADADA]' : 'bg-[#c7d6da] self-end'
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
    >
      <div className="flex flex-col justify-center items-center h-full">
      <p className="text-3xl text-black">{title}</p>
        <Link href={link}>
          <span className="text-3xl text-black hover:underline">{heading}</span>
        </Link>
        
        <p
          className={`text-lg text-gray-800 overflow-y-auto mx-10 my-5 ${
            index % 2 === 0 ? 'text-gray-800' : 'text-black'
          }`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const items = [
    {
      title: "1",
      heading: "File Sharing System",
      link:"https://github.com/Mansi1527/File-sharing-system",
      description: `Developed a peer-to-peer file-sharing web application, utilizing React for the UI, Multer for file uploads, MongoDB for storage, and Express for server-side operations. This combination ensured efficient and secure sharing of files between two clients over the internet.<br><br>
      React: Used for building the user interface of the application. React's component-based architecture allowed for creating reusable UI components and managing the dynamic rendering of file-sharing functionalities.<br><br>
      Multer: Integrated into the backend to handle file uploads. Multer facilitated the receiving and processing of files from users, ensuring compatibility with various file types and sizes.<br><br>
      MongoDB: Chosen as the database solution to store metadata and details about shared files. MongoDB's NoSQL nature provided flexibility in schema design and scalability for managing file-related data efficiently.<br><br>
      Express: Implemented as the server-side framework to handle HTTP requests and API endpoints. Express enabled the creation of RESTful APIs for functionalities such as uploading, downloading, and managing files stored in MongoDB.<br><br>
      Key Features and Functionality:<br>
      - File Uploads: Users could upload files from their devices to the server through a user-friendly interface powered by React components. Multer processed these uploads on the server side.<br>
      - File Storage: MongoDB stored metadata and details about the uploaded files, including information like file names, sizes, and timestamps. This allowed for efficient retrieval and management of files during sharing.<br>
      - Direct File Sharing: Leveraged peer-to-peer connections enabled by WebRTC (as previously discussed) to facilitate direct file transfers between clients. This approach minimized server load and improved transfer speeds.<br>
      - Security Measures: While detailed specifics about authentication were not included, security measures such as HTTPS for secure communication, input validation to prevent malicious uploads, and proper error handling were implemented to ensure safe file sharing.<br>
      - Deployment and Scalability: The application was deployed on a cloud platform, ensuring high availability and scalability to handle concurrent file transfers and user interactions.`,
    },
    { 
      title: "2", 
      heading: "Askie", 
      link:"https://github.com/Mansi1527/ASKIE",
      description: `I am currently leading the development of an advanced web application that integrates a diverse range of Artificial Intelligences (AIs) to empower users in creating high-quality images, generating textual content, and automating various types of code.<br><br>
      Image Generation:<br>
      Our platform utilizes AI to facilitate the creation of visually appealing images. Users can leverage AI-driven tools for tasks such as:<br>
      - Image Synthesis: Generating realistic and artistic images based on user inputs or creative prompts.<br>
      - Image Editing: Automating tasks like color correction, object removal, and stylistic enhancements to streamline the image editing process.<br><br>
      Textual Content:<br>
      Through advanced natural language processing capabilities, our platform enables users to generate and refine textual content with precision:<br>
      - Content Creation: AI-powered tools assist in generating written content, from articles and blog posts to marketing copy and product descriptions.<br>
      - Language Translation: Utilizing AI for accurate and efficient translation of text across multiple languages, ensuring clarity and cultural nuance.<br><br>
      Code Automation:<br>
      Our AI capabilities extend to automating various aspects of software development and coding:<br>
      - Code Generation: Automating the generation of code snippets, templates, and scripts based on user specifications or project requirements.<br>
      - Code Analysis: Utilizing AI algorithms for static code analysis, identifying potential bugs, optimizing performance, and enhancing code readability.<br><br>
      By integrating these AI-driven functionalities into our platform, we aim to democratize access to advanced tools and empower users across industries to enhance their creativity, productivity, and efficiency in image creation, content generation, and software development.`,
    },
    { 
      title: "3", 
      heading: "Internsahala Automation", 
      link:"",
      description: `I developed an innovative internship automation tool using Selenium in Python and Next.js. This tool simplifies the job application process by automating login procedures and navigating to your preferred job search platforms, enhancing convenience and efficiency.<br><br>
      Automation Process:<br>
      - Login Automation: The tool automates the login process using Selenium, enabling users to log in securely with their credentials. This eliminates the need for manual login, saving time and effort.<br>
      - Job Search Navigation: Once logged in, the automation tool navigates to your favorite job search websites or platforms. It can customize this based on your preferences, ensuring you can quickly access relevant internship opportunities.<br>
      - Application Facilitation: The tool streamlines the job application process by automating repetitive tasks such as filling out application forms, uploading resumes, and submitting applications. This reduces manual effort and increases the efficiency of applying for internships.<br><br>
      Humanization and User Experience:<br>
      - Ease of Use: The interface is designed to be intuitive, making it accessible for users to set preferences and initiate the automation process effortlessly.<br>
      - Personalization: Users can personalize settings such as their preferred job search criteria, ensuring the tool aligns with their specific internship interests and career goals.<br>
      - Efficiency: By automating repetitive tasks, the tool enhances productivity and allows users to focus more on preparing for interviews and refining their applications.<br><br>
      Impact: This automation tool not only saves time but also enhances the overall user experience by providing a seamless and personalized approach to job searching and application. It leverages technology to simplify complex processes, making internship hunting more efficient and accessible for users.<br><br>
      By integrating Selenium for robust web automation and Next.js for a responsive and modern frontend, the tool combines powerful backend functionality with a user-friendly interface. This integration ensures reliability, scalability, and a smooth user experience, ultimately empowering users in their internship search journey.`,
    },
    { 
      title: "4", 
      heading: "Emailer", 
      link:"",
      description: "Currently, I'm actively developing a messaging feature within my project using React. This component allows users to send messages seamlessly and even resend them when necessary. The core functionality involves integrating real-time communication capabilities into the application, ensuring smooth and efficient message delivery.<br><br>Key Features and Functionality:<br>Message Sending: Users can compose and send messages directly through the interface. This feature is designed to be intuitive, allowing for quick interaction and communication between users.<br>Resend Capability: One of the standout features is the ability to resend messages. This functionality comes in handy in scenarios where a message might not have been successfully delivered or needs to be re-sent due to any reason.<br>Real-time Updates: Leveraging React's capabilities, the messaging component provides real-time updates, ensuring that users receive messages instantly without needing to refresh the page.<br>User-Friendly Interface: The interface is crafted to be user-friendly, with clear prompts and controls for sending, viewing, and managing messages. This design enhances usability and overall user experience.<br>Technical Implementation:<br>React Components: Built using React components, the messaging feature utilizes state management to handle message data and UI updates efficiently.<br>API Integration: Integration with backend APIs ensures seamless communication between the frontend and server, enabling message storage and retrieval.<br>Error Handling: Robust error handling mechanisms are implemented to manage cases such as failed message deliveries or network issues, providing a reliable messaging experience.<br>Humanization:<br>This messaging feature aims to enhance user connectivity and streamline communication within the application. By allowing message resending, it empowers users with flexibility and control over their interactions. The intuitive interface ensures that sending and managing messages is straightforward, catering to both casual users and those needing more robust communication tools.<br>Overall, the project underscores my commitment to delivering a responsive and feature-rich messaging solution that meets modern communication needs effectively." },
    // { title: "5", heading: "ok", description: "Description for item 5" },
  ];

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Card key={i} title={item.title} heading={item.heading} link={item.link} description={item.description} index={i} />
      ))}
    </div>
  )
}
export default App
