import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const index = () => {
  return (
    <div className="max-w-6xl mx-4 lg:mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 rounded-xl py-2 lg:p-5 mt-10 ">
      <h1 className="text-3xl text-gray-500 text-center font-semibold my-3">
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row items-center xs:items-start gap-5">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 mb-auto">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default index;
