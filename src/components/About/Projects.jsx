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
    desc:" Build an Instagram Clone using django, html, css, javascript, bootstap"
  },
  {
    id: 2,
    title: "Instagram Clone Using Django",
    image: instaClone,
    platform: "Github",
    link: "https://github.com/ashu-2022/instagram-clone",
    time: "Jun 2021",
    desc:" Build an Instagram Clone using django, html, css, javascript, bootstap"
  },
];

const Projects = () => {
  return (
    <div className="projectList mt-5">
      <h4>
        Project Videos <img src={threeDots} alt="Triple Dots" height="20px" />
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

      
      <NavLink to='/projects'>
      <div className="customBtn viewMore">
        <p>View all</p>
        <img src={ rightArrow} alt="view more" width="24px" />
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
      <div className="horizontal"></div>
      <div className="projectItem p-3">
        <div>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img className="projectImg" src={image} alt={title} />
          </a>
        </div>
        <div>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <h6 className="headingTitle">{title}</h6>
          </a>
          <p className="projectDesc">{desc}</p>
          <div className="projectTime">
            <p ><strong className="text-muted">{platform}</strong></p> <p> Ashutosh Pandit {time}</p>
          </div>
        </div>
      </div>
    </>
  );
};
