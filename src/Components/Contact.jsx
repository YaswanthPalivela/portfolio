import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildern: 0,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="flex flex-row justify-center items-center h-screen h-screen mx-10"
    >
      <motion.div
        variants={variants}
        className="text-white flex-1 flex flex-col p-10 ml-40 leading-5 gap-5 "
      >
        <motion.h1
          variants={variants}
          className="text-8xl font-sans font-semibold text-blue-500"
        >
          Let's Work Together
        </motion.h1>
        <motion.div variants={variants}>
          <motion.h2 className=" text-white font-semibold text-2xl ">
            Email
          </motion.h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            yaswanthnani998@gmail.com
          </span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="text-white font-semibold text-2xl ">Address</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            Pithapuram 533450
          </span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="text-white font-semibold text-2xl ">Phone</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            +91 7777777
          </span>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col p-10 w-[50%]">
        <motion.form className="flex flex-col gap-5 m-10">
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
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
