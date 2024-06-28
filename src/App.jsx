import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Tech from "./Pages/Tech";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";

const App = () => {
  return (
    <div className="bg-black text-white h-full w-screen bg-cover">
      <Home />
      <About />
      <Skills />
      <Tech />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
