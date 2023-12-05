import React from "react";
import AskQuestions from "./AskQuestions";
import Projects from "./Projects";
import RelatedSearch from "./RelatedSearch";

const Experience = () => {
  return (
    <div className="ml-40 pr-12">
      <div className=" mt-5">
        <h4 className="text-2xl font-base text-heading-blue">
          Ashutosh Pandit : FullStack Developer
        </h4>
        <p>
          Experience FullStack Developer with a passion for devloping thing from
          scratch that expedite the efficiency and effectiveness of
          organizational success.
        </p>
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-base text-heading-blue mb-2">
          Work Experience
        </h4>
        <div className="">
          <p className="font-semibold ">FullStack Developer
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://www.causalfunnel.com/?utm_souce=Ashutosh_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-md font-base text-heading-blue">
                CausalFunnel
              </p>
            </a>
            <p>06/2022 - present</p>
          </div>
          <ul className="list-disc ml-8">
            <li>
              Rebuild company website{" "}
              <a
                href="https://www.causalfunnel.com/?utm_source=Ashutosh_Porfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                causalfunnel.com
              </a>{" "}
              from scratch{" "}
            </li>
            <li>
              Created a private app for Facebook Ads, Google Ads Data Pulling{" "}
            </li>
            <li>
              Created multiple Firebase Cloud Function webhooks to enhance
              development{" "}
            </li>
            <li>
              Created multiple plugins (scripts ) for various platforms like
              Shopify, Hubspot, etc., to enhance development & helps the Sales
              Team.
            </li>
          </ul>
          <p className="mt-1">
            <span className="font-semibold text-gray-500">Skills: </span> React.js, Angular,
            Node.js, Firebase, Python, JavaScript, TypeScript, Bash
          </p>
        </div>
        <div className="mt-3">
          <p className="font-semibold ">FullStack Developer Intern</p>
          <div className="flex justify-between items-center">
            <a
              href="https://www.causalfunnel.com/?utm_souce=Ashutosh_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-md font-base text-heading-blue">
                CausalFunnel
              </p>
            </a>
            <p>10/2021 - 05/2022</p>
          </div>
          <ul className="list-disc ml-8">
            <li>
              Migrates company tech stack from Angular to React for a few major
              products.
            </li>
            <li>
              Build{" "}
              <a
                href="https://www.conversiongrader.com/?utm_source=Ashutosh_Porfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                conversiongrader.com
              </a>{" "}
              website from scratch
            </li>
            <li>
              Developed & Published{" "}
              <a
                href="https://apps.shopify.com/causalfunnel-datascience/?utm_source=Ashutosh_Porfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                CausalFunnel DataScience
              </a>{" "}
              app on Shopify App Store
            </li>
          </ul>
          <p className="mt-1">
            <span className="font-semibold text-gray-500">Skills: </span> React.js, Angular,
            Shopify, Node.js, Firebase, Python, JavaScript, TypeScript
          </p>
        </div>
      </div>
      <AskQuestions />
      <Projects />
      <RelatedSearch />
    </div>
  );
};

export default Experience;
