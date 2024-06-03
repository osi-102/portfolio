import React from "react";
import Sokoban from "../assets/portfolio/Sokoban.png";
import Cyclone_Eye from "../assets/portfolio/Cyclone_Eye.png";
import Xpod from "../assets/portfolio/Xpod.jpeg";
import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Sokoban,
      demoLink: "https://osi-102.github.io/sokoban-game/",
      codeLink: "https://github.com/osi-102",
    },
    {
      id: 2,
      src: Cyclone_Eye,
      demoLink: "https://your-demo-link",
      codeLink: "https://your-github-link",
    },
    {
      id: 3,
      src: Xpod,
      demoLink: "https://smm-two.vercel.app",
      codeLink: "https://github.com/osi-102",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://your-demo-link",
      codeLink: "https://your-github-link",
    },
    {
      id: 5,
      src: installNode,
      demoLink: "https://your-demo-link",
      codeLink: "https://your-github-link",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://your-demo-link",
      codeLink: "https://your-github-link",
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-amber-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0 ">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleButtonClick(demoLink)}
                  className="w-1/2 h-3 px-6  m-4 duration-200 hover:scale-105 font-bold "
                >
                  Demo
                </button>
                <button
                  onClick={() => handleButtonClick(codeLink)}
                  className="w-1/2 h-3 px-6 m-4 duration-200 hover:scale-105 font-bold "
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
