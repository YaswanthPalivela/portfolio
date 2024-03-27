import React from "react";
import { motion } from "framer-motion";
import { Person } from "../Constants";
import yaswanth from "../assets/Yash.png";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const person = Person[0];

  return (
    <div className="mb-10 px-2 h-screen font-semibold flex flex-row items-center flex-wrap">
      <div className=" absolute flex flex-row left-28">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={textVariants}
          className="flex flex-col flex-wrap w-3/5 gap-2"
        >
          <motion.h1
            variants={textVariants}
            className=" text-blue-500 text-5xl mb-2"
          >
            {person.Name}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-slate-200 text-3xl mb-2"
          >
            {person.Profession.join(", ")}
          </motion.p>
          <motion.h3
            variants={textVariants}
            className="text-slate-400 mb-3 text-xl"
          >
            {person.Description}
          </motion.h3>
          <motion.div variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="  hover:shadow-lg  hover:shadow-blue-500 bg-transparent outline-dashed outline-blue-500 w-[150px] p-3 m-5 text-xl font-semibold rounded-xl text-slate-200"
            >
              Portfolio
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-blue-500 w-[150px] p-3 m-5 text-xl font-semibold border-none rounded-xl text-slate-200 hover:shadow-lg hover:shadow-slate-500"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={textVariants}
          className=" absolute right-28 bottom-16 px-6 pt-6"
        >
          <motion.img
            src={yaswanth}
            alt="Displaying image"
            className="h-[500px] m-3 border-none rounded-[25px] shadow-xl shadow-blue-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
