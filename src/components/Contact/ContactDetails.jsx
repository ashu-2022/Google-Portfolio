import React from "react";
import { mobileIcon, emailIcon, locationIcon } from "../../assets";

const ContactDetails = () => {
  return (
    <div className="ContactDetails mt-5">
      <div className="contact-detail-item">
        <div className="contact-itex-img">
          <img src={emailIcon} alt="email" />
        </div>
        <a href="mailto:ashutoshpandit308@gmail.com">
        <p className="ms-2 contact-item-text">ashutoshpandit308@gmail.com</p></a>
      </div>
      <div className="contact-detail-item">
        <div className="contact-itex-img">
          <img src={mobileIcon} alt="mobile" />
        </div>
        <p className="ms-2 contact-item-text">+91-9667626371</p>
      </div>
      <div className="contact-detail-item">
        <div className="contact-itex-img">
          <img src={locationIcon} alt="location" />
        </div>
        <p className="ms-2 contact-item-text">Noida (U.P.), India</p>
      </div>
    </div>
  );
};

export default ContactDetails;


