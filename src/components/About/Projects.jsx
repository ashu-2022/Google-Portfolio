import React from "react";
import { threeDots, instaClone, CompetitiveExamApp, rightArrow } from "../../assets";
import { NavLink } from "react-router-dom";

const ProjectList = [
  {
    id: 1,
    title: "Competitive Exam App",
    image: CompetitiveExamApp,
    platform: "Github",
    link: "projects",
    time: "Nov 2023",
    desc: " Build a Competitive Exam App using React, Redux, Tailwind CSS, javascript",
  },
  {
    id: 2,
    title: "Instagram Clone Using Django",
    image: instaClone,
    platform: "Github",
    link: "/projects",
    time: "Jun 2021",
    desc: " Build an Instagram Clone using Django, HTML, CSS, Javascript, BootStrap",
  },
];

const Projects = () => {
  return (
    <div className="mt-5">
      <h4 className="text-xl sm:text-2xl font-semibold">
        Project Videos{" "}
        <img src={threeDots} alt="Triple Dots" className="inline w-6" />
      </h4>
      {ProjectList.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
            desc={project.desc}
            platform={project.platform}
            linkUrl={project.link}
            time={project.time}
          />
        );
      })}
      <hr className="mt-4"/>

      <NavLink to="/projects">
        <div className="flex gap-1 justify-center px-10 py-[6px] xs:w-[70%] sm:w-[50%] bg-gray-200 rounded-full  hover:bg-[#D8D7DC] hover:text-[#0a58ca] mx-auto mt-[-22px]">
          <p>View all</p>
          <img src={rightArrow} alt="view more" className="w-6" />
        </div>
      </NavLink>
    </div>
  );
};

export default Projects;

export const ProjectItem = ({
  image,
  title,
  time,
  desc,
  linkUrl,
  platform,
}) => {
  return (
    <>
      <hr className="mt-4" />
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-5 p-4">
        <NavLink to={linkUrl} className="cursor-pointer">
          <img className="w-60 rounded-lg border-2 border-indigo-100 shadow-sm" src={image} alt={title} />
          </NavLink>
        <div className="mb-auto">
          <h1
            className="text-heading-blue"
          >
            {title}
          </h1>
          <p className="text-sm">{desc}</p>
          <div className="flex items-center flex-wrap gap-x-4 mt-2">
            <span className="font-semibold text-md text-gray-500">
              {platform}
            </span>
            <p> Ashutosh Pandit {time}</p>
          </div>
        </div>
      </div>
    </>
  );
};
