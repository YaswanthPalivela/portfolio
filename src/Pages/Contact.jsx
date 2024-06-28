import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  return (
    <section className="flex flex-row justify-center items-center h-screen w-screen my-6 ">
      <div className="text-white flex-1 flex flex-col p-10 ml-40 leading-5 gap-5 ">
        <h1 className="text-7xl font-sans font-semibold text-white">
          Let's <span className="text-8xl text-blue-500">Work</span> Together
        </h1>
        <div>
          <h2 className=" text-white font-semibold text-2xl ">Email</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            yaswanthnani998@gmail.com
          </span>
        </div>
        <div>
          <h2 className="text-white font-semibold text-2xl ">Address</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            Pithapuram 533450
          </span>
        </div>
        <div>
          <h2 className="text-white font-semibold text-2xl ">Phone</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            +91 7777777
          </span>
        </div>
      </div>
      <div className="flex flex-col p-10 w-[50%]">
        <form className="flex flex-col gap-5 m-10">
          <input
            type="text"
            required
            placeholder="Name"
            className=" p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg"
          />
          <input
            type="Email"
            required
            placeholder="Email"
            className=" p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg "
          />
          <textarea
            rows={8}
            placeholder="Message"
            className=" p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg"
          />
          <button className="text-xl bg-blue-500 p-3 rounded-xl text-white font-semibold  ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
