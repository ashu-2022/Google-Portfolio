import React from "react";
import { instaClone , CompetitiveExamApp} from "../../assets";
const ProjectObj = [
  {
    sno: 1,
    title: "Competitive Exam App",
    desc: "Build a Competitive Exam App, where user start exam vai mail, on next screen there a side panel where user can track own progress on submitting the exam, user will able to see exam result report in details manner",
    image: CompetitiveExamApp,
    skillTags: ["React", "Redux", "Tailwind", "JavaScript"],
    githubLink: "https://github.com/ashu-2022/Competitive-Exam-App",
    previewLink: "https://github.com/ashu-2022/Competitive-Exam-App",
    videoLink: "https://github.com/ashu-2022/Competitive-Exam-App",
  },
  {
    sno: 2,
    title: "Instagram Clone",
    desc: "Build a Instagram Clone using Django, where user can signup/login their account, loginIn user will able to share post like text, image, video. Also user will able to like, comment, bookmark other user posts, user follow, unfollow other creators",
    image: instaClone,
    skillTags: ["Django", "Html", "Css", "JavaScript"],
    githubLink: "https://github.com/ashu-2022/instagram-clone",
    previewLink: "https://github.com/ashu-2022/instagram-clone",
    videoLink: "https://youtu.be/rBZ0YvCxZU4",
  },
];
const index = () => {
  return (
    <div className="mx-auto max-w-5xl my-5 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-center my-4 text-2xl text-heading-blue">
        My Project's
      </h1>
      <div className="flex items-center flex-wrap gap-5">
        {ProjectObj.map((project, index) => (
          <ProjectItem {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default index;

const ProjectItem = (props) => {
  const getSkillTagClasses = (index) => {
    switch (index % 5) {
      case 0:
        return "bg-red-50 text-red-700 ring-red-600 /10";
      case 1:
        return "bg-yellow-50 text-yellow-700 ring-yellow-600 /10";
      case 2:
        return "bg-green-50 text-green-700 ring-green-600 /10";
      case 3:
        return "bg-purple-50 text-purple-700 ring-purple-600 /10";
      case 4:
        return "bg-blue-50 text-blue-700 ring-blue-600 /10";
      default:
        return "bg-gray-50 text-gray-700 ring-gray-600 /10";
    }
  };
  const { image, title, desc, skillTags, githubLink, previewLink, videoLink } =
    props;
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-slate-100 hover:bg-gray-200 my-3 p-4 border-2 rounded-xl shadow-sm">
      <img
        src={image}
        alt={title}
        className="rounded-md border-2 border-indigo-100 shadow-sm m-auto object-cover sm:max-w-[80%] md:max-w-[320px]  "
      />
      <div className="rounded-md">
        <h1 className="text-xl font-semibold text-left">{title}</h1>
        <div className="my-2 flex items-center flex-wrap gap-2">
          {skillTags.map((skill, index) => (
            <span
              key={index}
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium  ring-1 ring-inset ${getSkillTagClasses(
                index
              )}`}
            >
              {skill}
            </span>
          ))}
        </div>
        <p>{desc}</p>
        <div className="my-4 flex ites-center gap-5 bottom-0">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Github Link
          </a>
          <a
            href={videoLink}
            target="_blank"
            rel="noreferrer noopener"
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Preview Link
          </a>
        </div>
      </div>
    </div>
  );
};
