import React from "react";
import { threeDots, instaClone, rightArrow } from "../../assets";
import { NavLink } from "react-router-dom";

const ProjectList = [
  {
    id: 1,
    title: "Instagram Clone Using Django",
    image: instaClone,
    platform: "Github",
    link: "https://github.com/ashu-2022/instagram-clone",
    time: "Jun 2021",
    desc: " Build an Instagram Clone using django, html, css, javascript, bootstap",
  },
  {
    id: 2,
    title: "Instagram Clone Using Django",
    image: instaClone,
    platform: "Github",
    link: "https://github.com/ashu-2022/instagram-clone",
    time: "Jun 2021",
    desc: " Build an Instagram Clone using django, html, css, javascript, bootstap",
  },
];

const Projects = () => {
  return (
    <div className="mt-5">
      <h4 className="text-2xl font-semibold">
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
      <div className="horizontal mt-4"></div>

      <NavLink to="/projects">
        <div className="flex gap-1 justify-center px-10 py-[6px] w-[50%] bg-gray-200 rounded-full  hover:bg-[#D8D7DC] hover:text-[#0a58ca] mx-auto mt-[-24px]">
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
      <div className="flex items-center gap-5 p-4">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img className="w-60 rounded-lg" src={image} alt={title} />
        </a>
        <div>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-heading-blue"
          >
            {title}
          </a>
          <p className="text-sm">{desc}</p>
          <div className="flex items-center gap-4 mt-2">
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
