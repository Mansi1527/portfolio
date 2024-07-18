// 'use client'
// import React from "react";
// import { motion } from "framer-motion";

// function Card({ text, index }: { text: string, index: number }) {
//   return (
//     <motion.div
//       className="card bg-#333"
//       initial={{
//         opacity: 0,
//         // if odd index card, slide from right instead of left
//         x: index % 2 === 0 ? 50 : -50
//       }}
//       whileInView={{
//         opacity: 1,
//         x: 0, // Slide in to its original position
//         transition: {
//           duration: 1 // Animation duration
//         }
//       }}
//       viewport={{ once: true }}
//     >
//       <p className="card-text">{text}</p>
//     </motion.div>
//   );
// }

// function App() {
//   const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

//   return (
//     <div className="App ">
//       {items.map((item, i) => (
//         <Card  key={i} text={item} index={i} />
//       ))}
//     </div>
//   );
// }

// export default App;



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
