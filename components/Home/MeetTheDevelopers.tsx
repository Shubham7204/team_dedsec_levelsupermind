import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const developers = [
  {
    name: "Azlan Khawar",
    college: "DJSCE, Mumbai",
    linkedin: "https://www.linkedin.com/in/azlan-khawar-b79193290/",
    github: "https://github.com/azlan18/",
    image: "/Assets/azlan.jpg",
  },
  {
    name: "Varad Sankhe",
    college: "DJSCE, Mumbai",
    linkedin: "https://www.linkedin.com/in/varad-sankhe-93387b243/",
    github: "https://github.com/varad-01",
    image: "/Assets/varad.jpg",
  },
  {
    name: "Shubham Mourya",
    college: "DJSCE, Mumbai",
    linkedin: "https://www.linkedin.com/in/shubham-mourya-b09502203/",
    github: "https://github.com/Shubham7204/",
    image: "/Assets/shubham2.jpg",
  },
  {
    name: "Chirag Adve",
    college: "FRCRCE, Mumbai",
    linkedin: "https://www.linkedin.com/in/chiragadve/",
    github: "https://github.com/chiragadve/",
    image: "/Assets/chirag.jpeg",
  },
];

const MeetTheDevelopers = () => {
  return (
    <ComponentWrapper style="w-full lg:py-16 py-12 bg-white-main">
      <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold mb-12">
        Meet the Developers - Team DedSec
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={dev.image}
              alt={`${dev.name}'s photo`}
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow-md"
            />
            <h3 className="font-semibold text-xl mb-1">{dev.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{dev.college}</p>
            <div className="flex gap-4">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 shadow-md"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default MeetTheDevelopers;
