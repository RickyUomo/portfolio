import React from "react";
import About from "./About";
import Contact from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
