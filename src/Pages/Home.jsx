import React from "react";
import Navbar from "./Navbar";
import Button from "./../Componnets/Button";

const Home = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center p-6 ">
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <h1 className=" text-7xl text-center">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 font-poppins text-transparent bg-clip-text">
              Yaswanth
            </span>{" "}
            Palivela <br /> Full stack developer
          </h1>
        </div>
        <div className="flex m-4 gap-5">
          <Button
            title="Projects"
            className=" text-white font-medium bg-blue-500 rounded-xl "
          />
          <Button
            title="Contact Me"
            className=" text-white font-medium border-blue-400 border-2  rounded-xl "
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
