import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Maciej Gomulec
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <a href="https://github.com/Karatesan">
            <img src={`${import.meta.env.BASE_URL}src/assets/github.png`} alt="" />
          </a>
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}src/assets/instagram.png`} alt="" />
          </a>
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}src/assets/youtube.png`} alt="" />
          </a>
          <a href="linkedin.com/in/maciej-gomulec-59a826221">
            <img src={`${import.meta.env.BASE_URL}src/assets/linkedin.png`} alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
