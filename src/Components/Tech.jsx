import React from "react";
import { Technologies } from "../Constants";
import { motion } from "framer-motion";

const TechVariants = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildern: 0.3,
    },
  },
};

const Tech = () => {
  return (
    <motion.div
      variants={TechVariants}
      initial="initial"
      animate="animate"
      className="h-screen m-5 flex flex-col items-center gap-16 "
    >
      <div variants={TechVariants}>
        <h1 className=" text-slate-400 text-4xl text-center font-san font-semibold static hover:text-white duration-500 mb-8">
          Technology
        </h1>
      </div>
      <motion.div className="flex flex-row justify-center items-center">
        {Technologies.map((tech) => (
          <motion.div
            variants={TechVariants}
            className="flex flex-row justify-center items-center m-3"
          >
            <motion.img
              variants={TechVariants}
              src={tech.url}
              className="h-[150px] p-4 hover:bg-slate-200 scale-100 rounded-xl duration-700"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tech;
