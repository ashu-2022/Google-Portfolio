import React, { useState } from "react";
import { sendIcon } from "../../assets";

const ContactForm = () => {
  const blankForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(blankForm);

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("FormData -> ", formData)
    setFormData(blankForm);
  };

  return (
    <div className="contact-form p-4">
      <form onSubmit={formSubmitHandler}>
        <input
          className="w-full rounded-full ps-4 leading-8 py-1 my-2 outline-none"
          type="text"
          name="name"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={inputHandleChange}
        />
        <input
          className="w-full rounded-full ps-4 leading-8 py-1 my-2 outline-none"
          type="text"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={inputHandleChange}
        />
        <input
          className="w-full rounded-full ps-4 leading-8 py-1 my-2 outline-none"
          type="text"
          name="subject"
          placeholder="Subject *"
          required
          value={formData.subject}
          onChange={inputHandleChange}
        />
        <textarea
          className="w-full rounded-2xl ps-4 leading-8 py-1 my-2 outline-none"
          placeholder="Message..."
          name="message"
          rows={6}
          value={formData.message}
          onChange={inputHandleChange}
        />
        <button type="submit" className="border-2 border-gray-300 rounded-lg px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-300">
          Message me
          <img
            className="ms-2 inline"
            src={sendIcon}
            alt="send message"
            width="26px"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
