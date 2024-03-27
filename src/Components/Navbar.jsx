import React from "react";
import { NavbarLinks } from "../Constants";
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <div className=" w-full p-3 items-center object-contain">
      <nav className="text-white text-xl flex flex-row justify-between items-center">
        <motion.div  className="ml-[8em]">
          <motion.h1 whileHover={{scale: 1}} className="font-medium text-2xl text-blue-500 font-sans  cursor-pointer">
            Dev
            <span className="p-2 flex-row text-slate-500 text-2xl font-bold hover:text-slate-200 duration-500 bg-black">
              Y
            </span>
          </motion.h1>
        </motion.div>
        <div className="mr-[8em] flex flex-row justify-around items-center cursor-pointer">
          {NavbarLinks.map((Navbar) => (
            <ul>
              <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
                key={Navbar.id}
                className="text-slate-400 text-xl p-5 font font-medium hover:text-white duration-200"
              >
                {Navbar.Link}
              </motion.li>
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
