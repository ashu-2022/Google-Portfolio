import React from "react";
import { mobileIcon, emailIcon, locationIcon } from "../../assets";

const ContactDetails = () => {
  return (
    <>
      <div className="ml-4 my-2 text-gray-500 flex items-center gap-3">
        <div className="bg-gray-400 hover:bg-gray-500 w-[40px] h-[40px] rounded-full">
          <img className="w-5 m-auto h-full" src={emailIcon} alt="email" />
        </div>
        <a href="mailto:ashutoshpandit308@gmail.com" rel="noreferrer noopener">
          ashutoshpandit308@gmail.com
        </a>
      </div>
      <div className="ml-4 my-2 text-gray-500 flex items-center gap-3">
        <div className="bg-gray-400 hover:bg-gray-500 w-[40px] h-[40px] rounded-full">
          <img className="w-5 m-auto h-full" src={mobileIcon} alt="mobile" />
        </div>
        <a href="tel:9667626371" rel="noreferrer noopener">
          +91-9667626371
        </a>
      </div>

      <div className="ml-4 my-2 text-gray-500 flex items-center gap-3">
        <div className="bg-gray-400 hover:bg-gray-500 w-[40px] h-[40px] rounded-full">
          <img
            className="w-5 m-auto h-full"
            src={locationIcon}
            alt="location"
          />
        </div>
        <p className="">Noida (U.P.), India</p>
      </div>
    </>
  );
};

export default ContactDetails;
