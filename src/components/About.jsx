import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" bg-gradient-to-b from-black via-black to-amber-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an aspiring Software Engineer with a passion for web development
          and AI/ML technologies.
        </p>
        <br />
        <p className="text-xl">
          I have had the privilege of working at BEL (Bharat Electronics
          Limited) in the past, where I studied methodologies and best practices
          for managing software development projects within network-centric
          systems and conducted an in-depth study on the functioning of Defense
          Systems, with a specific focus on the Radar Systems utilized by our
          Armed Forces..
        </p>

        <br />

        <p className="text-xl">
        I am an UPSTSE (Uttar Pradesh State Talent Search Examination) Scholar and have acquired a deep understanding of computer science.
        </p>
        <br />

        <p className="text-xl">
        My enthusiasm for learning has driven me to explore the latest technologies and stay up-to-date with the industry. I am looking to leverage my skills and expertise to contribute to the development of innovative technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
