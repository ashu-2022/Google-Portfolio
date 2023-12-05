import React from "react";
import {
  ashutosh,
  linkedin,
  gmail,
  github,
  leetcode,
  download,
  linkUrl,
  phone,
  youtube,
  resumePdf,
} from "../../assets";

const AboutCard = () => {
  return (
    <div className="mt-8 p-4 border-[1px] border-gray-300 rounded-md text-center">
        <img
          className=" w-28 h-28 mx-auto rounded-[50%]"
          src={ashutosh}
          alt="Ashutosh Pic"
        />
        <p className="font-semibold text-2xl my-1">
          Ashutosh Pandit
        </p>
        <p className="px-1 text-gray-600 my-3">
          A passionate self-thaught FullStack Developer from India, who loves
          building applications from the scratch with full ownership of work
        </p>
      <a
        className="px-20 py-2 w-[75%] bg-gray-200 rounded-full mt-[50px] no-underline hover:bg-[#D8D7DC] hover:text-[#0a58ca]"
        to={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ashutosh's Resume
        <img className="w-4 h-4 inline ml-2" src={download} alt="download" />
      </a>
      <hr className="my-5"/>

      <div className="my-2 text-left flex flex-col items-start gap-3">
          <a
            href="mailto:ashutoshpandit308@gmail.com"
            target="_blank"
          rel="noopener noreferrer"
          >
            <img src={gmail} alt="Gmail" className="inline w-5"/>{" "}
            ashutohspandit308@gmail.com
        </a>
        <a
            href="tel:96676626371"
            target="_blank"
          rel="noopener noreferrer"
          >
            <img src={phone} alt="phone" className="inline w-5"/>{" "}
            +91-96676626371
        </a>
        <a
            href="#"
            target="_blank"
          rel="noopener noreferrer"
          >
            <img src={linkUrl} alt="Portfolio" className="inline w-5"/>{" "}
            Portfolio website
          </a>
      </div>
      <hr className="my-5" />
      <h5 className="font-semibold text-lg text-left my-3">Profiles</h5>
      <div className="ml-2 flex justify-start items-center gap-3 flex-wrap">
        <SocialProfileCard
          imgSrc={linkedin}
          title="Linkedin"
          linkHrf="https://www.linkedin.com/in/ashutosh-pandit-2022/?utm_source=Portfolio"
        />
        <SocialProfileCard
          imgSrc={github}
          title="Github"
          linkHrf="https://github.com/ashu-2022/?utm_source=Portfolio"
        />
        <SocialProfileCard
          imgSrc={leetcode}
          title="Leetcode"
          linkHrf="https://leetcode.com/ashu_2022/?utm_source=Portfolio"
        />
        <SocialProfileCard
          imgSrc={youtube}
          title="Youtube"
          linkHrf="https://www.youtube.com/@ashutosh-pandit/?utm_source=Portfolio"
        />
      </div>
    </div>
  );
};

export default AboutCard;

export const SocialProfileCard = ({ imgSrc, title, linkHrf }) => {
  return (
    <>
      <a className="flex flex-col items-center gap-2" href={linkHrf} target="_blank" rel="noopener noreferrer">
        <img className="w-8" src={imgSrc} alt={title} />
        <p>{title}</p>
      </a>
    </>
  );
};
