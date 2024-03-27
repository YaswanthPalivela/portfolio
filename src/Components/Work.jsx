import React from "react";
import { Professional } from "../Constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-5 h-screen">
      <h1 className=" text-slate-400 text-4xl text-center font-san font-semibold static hover:text-white duration-500 mb-8">
        Work Experiance
      </h1>
      <VerticalTimeline>
        {Professional.map((work, id) => (
          <VerticalTimelineElement
            contentStyle={{ background: "black", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(59 130 246)" }}
            iconStyle={{ background: "rgb(59 130 246)", color: "#fff" }}
            date={work.Date}
            lineColor={{ color: "rgb(59 130 246" }}
          >
            <h1
              key={id}
              className="text-blue-500 text-xl font-sans font-semibold"
            >
              {work.DomainName}
            </h1>
            <h3 className="text-white font-lg font-sans font-semibold">
              {work.Location}
            </h3>
            <h3 className="text-2x text-white ">{work.JobType}</h3>
            <p className="text-slate-300">{work.Description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
