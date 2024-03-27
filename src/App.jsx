import React from "react";
import Navbar from "./Components/Navbar"
import About from './Components/About'
import Tech from "./Components/Tech";
import Projects from './Components/Projects';
import Work from './Components/Work'
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-black from-black-900 via-black-600 to-black-200 h-full bg-cover">
      <Navbar />
      <About />
      <Tech />
      <Work/>
      <Projects />
      <Contact/>
    </div>
  );
};

export default App;
