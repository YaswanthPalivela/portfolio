import React from "react";
import { Works } from "./../Constants/index";
import { motion } from "framer-motion";

const textVariants = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      whileInView="animate"
      className="text-white h-screen flex flex-row justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-slate-400 text-4xl text-center font-san font-semibold static hover:text-white duration-500 m-8">
          Projects
        </h1>
        <motion.div
          variants={textVariants}
          className=" flex felx-row justify-between items-center m-3 p-3"
        >
          {Works.map((work) => (
            <motion.div
              className="flex flex-col justify-between m-5 p-5 rounded-xl hover:border-blue-500 duration-100 hover:border-2 "
              key={work.id}
            >
              <motion.h1
                variants={textVariants}
                className="text-xl text-blue-500 font-sans font-semibold "
              >
                {work.ProjectName}
              </motion.h1>
              <motion.h3 variants={textVariants} className="text-lg">
                Tech: {work.Tech.join(", ")}
              </motion.h3>
              <motion.p variants={textVariants} className="text-slate-200 ">
                {work.Description}
              </motion.p>
              <motion.div variants={textVariants} key={work.id}>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  href={work.Link}
                  target="_blank"
                  className=" w-40 text-white p-3 my-3 text-lg rounded-lg font-sans font-semibold flex flex-row items-center border-2 border-blue-500"
                >
                  Github <img src={work.logo} className="h-8 ml-3" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
