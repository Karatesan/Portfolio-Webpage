import React, { useEffect, useRef } from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./test";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import { useScroll, motion } from "framer-motion";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  //const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Set the initial scroll position to the top
  // }, []);
  return (
    <div>
      {/* <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
