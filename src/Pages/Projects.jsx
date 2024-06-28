import React from "react";
import { Works } from "./../Constants/index";

const Projects = () => {
  return (
    <section className=" p-6 m-6 text-white font-poppins h-screen max-w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1 className=" text-2xl font-semibold mb-8">Projects</h1>
        <h2 className="text-lg ">Projets i have been Worked on </h2>
        <div className=" flex felx-row justify-between items-center m-3 p-3">
          {Works.map((work) => (
            <div
              className="flex flex-col justify-between m-5 p-5 rounded-xl hover:border-blue-500 duration-100 border-2 "
              key={work.id}
            >
              <h1 className="text-xl text-blue-500 font-sans font-semibold ">
                {work.ProjectName}
              </h1>
              <h3 className="text-lg">Tech: {work.Tech.join(", ")}</h3>
              <p className="text-slate-200 ">{work.Description}</p>
              <div key={work.id}>
                <a
                  href={work.Link}
                  target="_blank"
                  className=" w-40 text-white p-3 my-3 text-lg rounded-lg font-sans font-semibold flex flex-row items-center border-2 border-blue-500"
                >
                  Github <img src={work.logo} className="h-8 ml-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
