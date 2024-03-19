import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    { text: "I'm a Full Stack Developer", color: "text-white" },
    { text: "I'm a Software Developer", color: "text-amber-800" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-amber-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className={`text-4xl sm:text-7xl font-bold ${texts[textIndex].color} animate-fade-in`}>
            {texts[textIndex].text}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-60px max-w-full h-auto shadow-md-white transform transition duration-500 hover:scale-90 hover:rotate-45 hover:translate-x-[10vw] hover:translate-y-[10vh]"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
