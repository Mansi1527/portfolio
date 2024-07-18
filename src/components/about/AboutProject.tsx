import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <div className=" w-full flex flex-wrap gap-5 justify-center">
      {/* card one */}
      <label className="swap swap-flip text-9xl w-full sm:w-96">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl overflow-x-auto">
            <div className="card-body">
              <h2 className="card-title underline">Project Description</h2>
              <p className="text-lg font-semibold">
                Leading the development of an advanced web application that integrates diverse Artificial Intelligences (AIs). This platform enables seamless interactive conversations and easy generation of content like images, normal conversations and various types of code.
              </p>
              <Link href="https://github.com/Mansi1527/ASKIE" className="text-white bg-black hover:bg-white hover:text-black text-lg flex justify-center rounded-full py-2 hover:underline">Link</Link>
            </div>
          </div>
        </div>
        <div className="swap-off w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src="/askie.png"
                width={306}
                height={306}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Askie</h2>
              <p className="text-sm">(Click to turn over)</p>
            </div>
          </div>
        </div>
      </label>

      {/* card two */}
      <label className="swap swap-flip text-9xl w-full sm:w-96">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title underline">Project Description</h2>
              <p className="text-lg font-semibold">
                Developed a robust peer-to-peer file-sharing web application utilizing React for the frontend, MULTER for file uploads, MongoDB for data storage, and Express for server-side operations. This integrated stack facilitated efficient and secure file sharing.
              </p>
              <Link href="https://github.com/Mansi1527/File-sharing-system" className="text-white bg-black hover:bg-white hover:text-black text-lg flex justify-center rounded-full py-2 hover:underline">Link</Link>
            </div>
          </div>
        </div>
        <div className="swap-off w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src="/filesharing.png"
                width={306}
                height={96}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">File Sharing system</h2>
              <p className="text-sm">(Click to turn over)</p>
            </div>
          </div>
        </div>
      </label>

      {/* card three */}
      <label className="swap swap-flip text-9xl w-full sm:w-96">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title underline">Project Description</h2>
              <p className="text-lg font-semibold">
                Designed and implemented a comprehensive website backend that includes user authentication, admin privileges for movie management and booking functionalities. This backend facilitates seamless user experiences and efficient movie administration.
              </p>
              <Link href="https://github.com/Mansi1527/File-sharing-system" className="text-white bg-black hover:bg-white hover:text-black text-lg flex justify-center rounded-full py-2 hover:underline">Link</Link>
            </div>
          </div>
        </div>
        <div className="swap-off w-full sm:w-96">
          <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src="/moviebooking.jpg"
                width={186}
                height={306}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Movie Booking -Backend</h2>
              <p className="text-sm">(Click to turn over)</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Project;
