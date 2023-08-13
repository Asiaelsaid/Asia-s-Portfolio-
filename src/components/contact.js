import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
  });
  const validateValues = (event) => {
    if (event.target.name === "name") {
      const regName =/^\w{3,}/;
      setValues({ ...values, name: event.target.value });
      setErrors({
        ...errors,
        nameError:
          event.target.value.length === 0
            ? "name must be filled out"
            : regName.test(event.target.value)
            ? ""
            : " name must  be at least 3 char long ",
      });
    } else if (event.target.name === "email") {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setValues({ ...values, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value.length === 0
            ? "email is required"
            : reg.test(event.target.value)
            ? ""
            : "email must contain:xxxx@xx.com ",
      });
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/55dfa75c-e8fa-45c1-a629-0d74ba5ee912"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {" "}
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - asiaelsaid665@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => {
            validateValues(e);
          }}
        />
        <p className="text-white"> {errors.nameError}</p>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            validateValues(e);
          }}
        />
        <p className="text-white"> {errors.emailError}</p>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
