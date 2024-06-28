import React from "react";
import { Professional } from "../Constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <section className="m-6 p-6 h-full w-screen font-poppins">
      <h1 className=" text-white text-2xl font-semibold mb-8">
        Work Experiance
      </h1>
      <h2> </h2>
      <div className="my-4">
        <VerticalTimeline>
          {Professional.map((work, id) => (
            <VerticalTimelineElement
              contentStyle={{ background: "#0F172A", color: "#ffffff" }}
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
              <p className="text-slate-200">{work.Description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
