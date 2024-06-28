import React from "react";
import { services } from "../Constants";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section className="h-screen w-screen p-6 m-6 md:flex flex-col">
      <div className="p-6 m-6">
        <h1 className="text-2xl font-semibold text-white font-poppins">
          About
        </h1>
        <p className="text-lg font-medium my-5 flex-wrap text-white font-poppins">
          I'm a Full Stack Developer, effortlessly juggling front-end finesse
          and back-end wizardry while making sure everything works like magic. I
          turn caffeine into code, fixing bugs that somehow always find a way to
          ruin my day. Basically, I bring dreams to life on the web – just don't
          ask me about Internet Explorer.
        </p>
      </div>
      <div className="flex mx-6 gap-4">
        {services.map((item) => (
          <Tilt >
            <div
              key={item.id}
              className="border-2 border-blue-300 hover:cursor-pointer h-[350px] w-[300px] flex bg-slate-900 mx-3 flex-col justify-center items-center font-semibold gap-5 p-4 rounded-2xl"
            >
              <h1 className="text-white text-xl mb-5 font-poppins ">
                {item.Name}
              </h1>
              <img src={item.icon} className="h-[150px]" />
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
