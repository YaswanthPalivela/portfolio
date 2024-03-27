import css from "../assets/css.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs-svgrepo-com.svg";
import tailwind from "../assets/tailwindcss.svg";
import express from "../assets/express.svg";
import python from "../assets/python.svg";
import Nxtwave from "../assets/nxtwave.png";
import mysql from "../assets/mysql.svg";
import githubIcon from "../assets/github.svg";

export const NavbarLinks = [
  { id: 1, Link: "Home" },
  { id: 2, Link: "Projects" },
  { id: 3, Link: "Contact me" },
];

export const Person = [
  {
    id: 1,
    Name: "Yaswanth Palivela",
    Profession: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
    Description:
      "MERN stack developer with extensive hands-on experience, I specialize in leveraging MySql, Express.js, React.js, and Node.js to craft sophisticated and scalable web applications. With practical expertise, from designing responsive user interfaces using React.js to architecting robust backend systems with Node.js and Express.js. My profound understanding of these technologies,honed through countless projects and challenges, empowers me to engineer solutions that prioritize performance, reliability, and maintainability.With my wealth of hands- on experience, I bring invaluable insights, best practices, and problem - solving prowess to every project, ensuring the delivery of top - notch MERN stack solutions that exceed expectations.",
  },
];

export const Technologies = [
  {
    id: 1,
    url: html,
  },
  {
    id: 2,
    url: css,
  },
  {
    id: 3,
    url: javascript,
  },
  {
    id: 4,
    url: reactjs,
  },
  {
    id: 5,
    url: nodejs,
  },
  {
    id: 6,
    url: tailwind,
  },
  {
    id: 7,
    url: express,
  },
  {
    id: 8,
    url: python,
  },
  {
    id: 9,
    url: mysql,
  },
];

export const Professional = [
  {
    id: 2,
    DomainName: "Reactjs",
    Location: "Remote",
    Description:
      "Throughout the Program, I demonstrated proficiency in React concepts such as component composition, state management, and integrating external APIs to fetch and display product data. The demo not only solidified my understanding of React but also highlighted my ability to work collaboratively in a team environment to deliver high-quality solutions.",
    JobType: "Intern",
    Date: "Dec 2023 - Feb 2024",
    logo: Nxtwave,
  },
  {
    id: 1,
    DomainName: "Full Stack Developer",
    Location: "Remote",
    Description:
      "Learn a wide range of programming languages, frameworks, and tools used for web development, including HTML, CSS, JavaScript, React.js, Node.js, and databases like MongoDB. Under the guidance of experienced mentors, they gain hands-on experience by working on real-world projects, learning how to build and maintain web applications from start to finish. Throughout their apprenticeship, they develop problem-solving skills, learn best practices in software development, and gradually take on more responsibilities as they progress towards becoming a fully fledged full stack developer.",
    JobType: "Apprentice",
    Date: "June 2022 - Present",
    logo: {},
  },
];

export const Works = [
  {
    id: 3,
    ProjectName: "BookHub",
    Tech: ["React", "Css", "Html", "Javascript"],
    Description: [
      "Creating an app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.",
    ],
    logo: githubIcon,
    Link: "https://github.com/YaswanthPalivela/BookHub-Reactjs-Mini-Project",
  },
  {
    id: 2,
    ProjectName: "Personal Portfolio",
    Tech: ["React", "Tailwindcss"],
    Description: [
      "A personal portfolio build By using react And Tailwind to showcase skills and Hands-on Project Experiance.It is Completely Editable,Using Objects and Arrays to iterate over them display Data. ",
    ],
    logo: githubIcon,
    Link: "https://github.com/YaswanthPalivela",
  },
  {
    id: 1,
    ProjectName: "NxtWatch",
    Tech: ["React", "Css", "Html", "Javascript"],
    Description: [
      "NxtWatch is a like Youtube Clone it is Build by using React and Its libraries to give Look like a Youtube",
    ],
    logo: githubIcon,
    Link: "https://github.com/YaswanthPalivela/NxtWatch",
  },
];
