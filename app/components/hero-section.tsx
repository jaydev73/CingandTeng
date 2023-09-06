import React from "react";
import Image from "next/image";

function HeroSection() {
  const bgImage =
    "https://res.cloudinary.com/dinhan9nl/image/upload/v1685313652/202__2023-05-21_13-01-44_kzfmsg.jpg";
  return (
    <>
      {/* <section classNameName="h-auto text-gray-600 body-font">
        <div classNameName="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div classNameName="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 classNameName="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br classNameName="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p classNameName="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div classNameName="flex justify-center">
              <button classNameName="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button classNameName="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div classNameName="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              classNameName="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              height={2800}
              width={2200}
            />
          </div>
        </div>
      </section> */}
      <section
        className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
        style={{ backgroundImage: `url("${bgImage}")` }}
      >
        {/* <!-- Hero Section Content --> */}
        <div className="flex-1 flex items-center">
          <div className="text-center mx-auto">
            <h1 className="text-6xl font-semibold">Welcome to my site!</h1>
            <p className="font-light text-3xl mt-5">The land of opportunity.</p>
            <a
              className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10"
              href=""
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* <section className="bg-black min-h-screen"></section> */}
    </>
  );
}

export default HeroSection;
