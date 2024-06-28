import React from "react";
import { NavbarLinks } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <header className="p-2 m-2 w-screen flex justify-around items-center">
      <div>
        <h1 className="font-poppins">
          {" "}
          <span className="font-signature font-semibold text-blue-400 text-4xl translate-x-6 transform">
            Yash{" "}
          </span>
          Developer
        </h1>
      </div>
      <div className="flex gap-4 max-sm:hidden lg:flex">
        {NavbarLinks.map((link) => (
          <ul className=" font-poppins text-lg">
            <li key={link.id}><a className="cursor-pointer">{link.Link}</a></li>
          </ul>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/yaswanthpalivela"
          target="blank"
          className="text-white text-3xl hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/YaswanthPalivela"
          target="blank"
          className="text-white text-3xl hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
