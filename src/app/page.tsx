// import HomePage from "./home/page";

// export default function Home() {
//   return (
//     <main className="font-basic relative w-full min-h-screen text-white p-5" style={{ overflow: 'hidden' }}>
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full z-[-1]"
//         style={{
//           backgroundImage: "url('/table.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div
//           className="absolute inset-0 "
//           style={{ backgroundColor: "hsla(0,0%, 90%, 0.5)" }}
//         ></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         <HomePage />
//       </div>
//     </main>
//   );
// }

import HomePage from "./home/page";

export default function Home() {
  return (
    <main className="font-basic relative w-full min-h-screen text-white p-5" style={{ overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: "url('/table.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 "
          style={{ backgroundColor: "hsla(0,0%, 90%, 0.5)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HomePage />
      </div>
    </main>
  );
}
