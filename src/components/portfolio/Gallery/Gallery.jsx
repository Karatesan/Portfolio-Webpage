import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./gallery.scss";
import { MdNavigateNext } from "react-icons/md";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Gallery = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    console.log(newDirection);
    setPage([newDirection + page, newDirection]);
  };

  const imageIndex = wrap(0, images.length, page);
  return (
    <div className="gallery">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
      <button className="prev" onClick={() => paginate(-1)}>
        <MdNavigateNext size={50} />
      </button>
      <button className="next" onClick={() => paginate(1)}>
        <MdNavigateNext size={50} />
      </button>
    </div>
  );
};

export default Gallery;
