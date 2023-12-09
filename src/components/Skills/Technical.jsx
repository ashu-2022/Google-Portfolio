import { useEffect, useState } from "react";
import {
  Angular,
  Bootstrap,
  C,
  CPP,
  ChartJs,
  Django,
  Express,
  FastAPI,
  Figma,
  Firebase,
  Flask,
  Git,
  Github,
  HTML,
  JavaScript,
  Linux,
  MaterialUI,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Python,
  ReactLogo,
  Redux,
  Sass,
  ShellScript,
  Tailwind,
  TypeScript,
  Ubuntu,
  Vim,
  Vscode,
  Webpack,
} from "../../assets";
const skillObj = {
  All: [
    ReactLogo,
    Redux,
    NextJS,
    Angular,
    NodeJS,
    Express,
    FastAPI,
    Flask,
    Django,
    ChartJs,
    Sass,
    Tailwind,
    Figma,
    Firebase,
    MongoDB,
    Python,
    JavaScript,
    MaterialUI,
    MySQL,
    ShellScript,
    TypeScript,
    Ubuntu,
    Vim,
    Git,
    Github,
    HTML,
    Linux,
    Bootstrap,
    C,
    CPP,
    Vscode,
    Webpack,
  ],
  Frontend: [
    ReactLogo,
    Redux,
    NextJS,
    Angular,
    ChartJs,
    Sass,
    Tailwind,
    Figma,
    MaterialUI,
    HTML,
    Bootstrap,
  ],
  Backend: [NodeJS, Express, FastAPI, Flask, Django, ShellScript, Vim],
};
const Technical = () => {
  const [skillType, setSkillType] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState(skillObj[skillType]);
  const skillHandler = (skill) => {
    setSkillType(skill);
  };
  useEffect(() => {
    setSelectedSkills(skillObj[skillType]);
  }, [skillType]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center mt-4 text-2xl text-heading-blue">
        My Technical Skill's
      </h2>
      <div className="my-3 flex justify-center items-center flex-wrap gap-4">
        <SkillButtonItem
          skillType={skillType}
          clickHandler={skillHandler}
          btnText={"All"}
        />
        <SkillButtonItem
          skillType={skillType}
          clickHandler={skillHandler}
          btnText={"Frontend"}
        />
        <SkillButtonItem
          skillType={skillType}
          clickHandler={skillHandler}
          btnText={"Backend"}
        />
      </div>
      <div className='mt-12 flex justify-center items-center gap-8 flex-wrap mx-auto'>
        {selectedSkills.map((item, index) => (
          <div
            key={index}
            className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] rounded-3xl bg-gray-100 hover:bg-gray-200"
          >
            <img
              src={item}
              className="max-w-[50px] sm:max-w-[80px] h-full rounded-full m-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical;

const SkillButtonItem = ({ skillType, clickHandler, btnText }) => {
  return (
    <button
      className={`text-lg px-4 py-1 rounded-md border-[1.5px] border-pink-500 ${
        skillType === btnText
          ? " text-white  bg-pink-500   hover:text-pink-500 hover:bg-white"
          : "  text-pink-500  bg-white  hover:text-white hover:bg-pink-500"
      }  `}
      onClick={() => clickHandler(btnText)}
    >
      {btnText}
    </button>
  );
};
