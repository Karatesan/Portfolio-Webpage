import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        /*type: "spring", stiffness: 100, damping: 100*/ staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 2 }}
        // drag
        // whileInView={{ opacity: 1, scale: 2 }}

        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        variants={variants}
      ></motion.div> */}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li key={item} variants={variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
    </div>
  );
};

export default Test;
