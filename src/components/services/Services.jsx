import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LiaMousePointerSolid } from "react-icons/lia";

import "./services.scss";
import Box from "./box/Box";
import Modal from "./modal/Modal";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const rotationIconVariants = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: [0, 60, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  pointer: {
    y: [10, -20, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const skills = [
  {
    id: 0,
    title: "Java",
    image: "../public/Java.png",
    content: [
      "Core JAVA",
      "Hibernate & JDBC & JPA",
      "Maven",
      "Java Spring Boot",
      "RESTful Web Services",
      "Microservices",
      "Docker",
      "Git & Bash",
      "Java Design Patterns",
      "Dependency Injection",
      "Continuous Integration (CI/CD)",
      "Agile Methodology",
      "Security Best Practices in Java",
    ],
  },
  {
    id: 1,
    title: "JavaScript",
    image: "../public/JavaScript.png",
    content: [
      "ES6+ Features",
      "Asynchronous JavaScript (Promises, async/await)",
      "DOM Manipulation",
      "AJAX and Fetch API",
      "Module System (CommonJS, ES Modules)",
      "JavaScript Frameworks (React)",
      "Node.js and npm",
      "Webpack and Babel",
      "Design Patterns",
      "WebSockets",
      "Responsive Web Design",
    ],
  },
  {
    id: 2,
    title: "React",
    image: "../public/react.png",
    content: [
      "React Components and Props",
      "Hooks (useState, useEffect, useContext, etc.)",
      "React Router",
      "State Management (Context API, Redux)",
      "React Forms",
      "REST API Integration",
      "Responsive Web Design",
      "Libraries: Slate.js, Framer, And Design and many more",
    ],
  },
  {
    id: 3,
    title: "C++",
    image: "../public/c++.png",
    content: [
      "C++ Basics",
      "Object-Oriented Programming (OOP)",
      "STL (Standard Template Library)",
      "Memory Management (Pointers, References)",
      "File Handling",
      "Exception Handling",
      "Multithreading",
      "C++ Standard Library",
      "Networking in C++",
      "Concurrency",
      "Modern C++ Features (C++11, C++14, C++17)",
    ],
  },
];

const Services = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <motion.div
      className={`services`}
      variants={variants}
      initial="initial"
      whileInView={"animate"}
      ref={ref}
      // animate={"animate"}
    >
      {selectedSkill !== null && <div className="modalBackdrop" />}
      {selectedSkill !== null && (
        <Modal
          skill={skills[selectedSkill]}
          close={() => setSelectedSkill(null)}
          isVisible={selectedSkill !== null}
        />
      )}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning and growing <br />
          in many fields
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="../public/skills.jpg" alt="" />
          <h1>
            <b>Skills </b>And <b>Expertise</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Mastering</b> a Range of <b>Technologies.</b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
        <motion.div
          variants={rotationIconVariants}
          animate="animate"
          className="rotationIcon"
        ></motion.div>
        <motion.div
          className="pointerBox"
          //initial={{ y: 10 }}
          variants={rotationIconVariants}
          animate="pointer"
        >
          <LiaMousePointerSolid color="orange" />
        </motion.div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {skills.map((skill) => {
          return (
            <Box
              key={skill.id}
              title={skill.title}
              text={skill.content}
              image={skill.image}
              onClick={() => setSelectedSkill(skill.id)}
              inView={isInView}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
