import React from "react";
import "./box.scss";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    rotateY: [0, 60, 0],
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const Box = ({ title, text, image, onClick, inView }) => {
  return (
    <motion.div
      className="box"
      variants={variants}
      // initial="hidden"
      animate={inView ? "visible" : ""}
    >
      <div className="card">
        <div className="front">
          <h2>{title}</h2>
          <div className="imageContainer">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="back">
          <ul>
            {text.map((record, index) => {
              return <li key={index}>{record}</li>;
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Box;
