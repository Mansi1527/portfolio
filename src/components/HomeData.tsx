import Image from "next/image";

const HomeData = () => {
  return (
    <div className="flex flex-col pt-20 items-center justify-center">
      <Image src="/myImage.png" alt="myimage" width={200} height={200} />
      <h1 className="text-center text-black text-3xl leading-10">
        My name is <br />
        <span className="text-5xl font-semibold">Mansi Yadav</span>
      </h1>
      <div className="h-0.5 w-96 bg-black my-4"></div> {/* Adjust width as needed */}
      <h1 className="text-black text-xl font-semibold">I am a full stack developer</h1>
      
        <p className="text-lg mt-4 px-2 py-1 rounded-lg text-white bg-black font-medium">Mastering the Art of User-Centric Development: Seamlessly Integrating Frontend and Backend Expertise for Intuitive Interfaces</p>
      
    </div>
  );
};

export default HomeData;
