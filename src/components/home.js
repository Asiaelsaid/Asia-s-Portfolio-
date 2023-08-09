import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Asia Magdi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend & Cross Paltform Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a dedicated frontend developer with a passion for crafting
          immersive user experiences. My expertise lies in creating visually
          appealing and seamlessly functional digital interfaces. Presently, my
          primary focus revolves around designing and developing responsive
          frontend solutions that bring web applications to life.
        </p>
        <div>
        <Link  to="projects" smooth={true} duration={500}>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
