import { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Gallery from "./Gallery/Gallery";

const textVariants = {
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const items = [
  {
    id: 1,
    title: "Game Blog ",
    img: ["/BlogPageImage1.png", "/BlogPageImage2.png", "/BlogPageImage3.png"],
    desc: [
      "Game Blog Web App is an platform created with a Spring Boot backend and a React frontend using Vite, coupled with MongoDB.",
      "On the frontend, I employed React powered by Vite for a dynamic and responsive user interface.",
      "For blog creation and editing, I implemented Slate.js — text editor offering a sleek and customizable interface, simplifying the content creation process.",
      "My MongoDB integration is designed for flexibility and scalability, providing a NoSQL database mapped seamlessly with JPA and Hibernate.",
      "The user interface is intuitive and visually appealing, encouraging effortless navigation and enhancing the overall user experience.",
      "Features like comments and likes promote user engagement.",
    ],
    git: "https://github.com/Karatesan/BlogApp_v2",
  },
  {
    id: 2,
    title: "Mock Exam webapp",
    img: [
      "/m (7).png",
      "/m (2).png",
      "/m (1).png",
      "/MockExam3 (9).png",
      "/m (4).png",
      "/m (5).png",
      "/m (3).png",
    ],

    desc: [
      "The Mock Exam Web App is a comprehensive platform built using Java Spring Boot for the backend and React with Vite for the frontend. It utilizes an H2 database for efficient data storage. With a focus on security, the application implements JWT authentication and authorization, ensuring a secure environment for users.",
      "Key Features:",
      " - Exam Functionality: Users can take exams in various categories and difficulty levels, providing a diverse testing experience.",
      "- Question Creation: Users have the ability to create questions, assign them to categories, and even add images for a richer question bank.",
      "- Exam Statistics: Chart.js is integrated to provide detailed statistics on exam performance, helping users track their progress.",
      "- Exam History: Users can review their exam history, allowing them to identify areas for improvement.",
      "- Notification System: A robust notification system keeps users and administrators informed about important updates and events.",
      "- Email Verification: Implemented email verification ensures the authenticity of user accounts, enhancing overall security.",
      "Whether you're preparing for certification exams or simply testing your knowledge, the Mock Exam Web App offers a user-friendly and feature-rich experience.",
    ],
    git: "https://github.com/Karatesan/BlogApp_v2",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const textRef = useRef();
  const contaienrRef = useRef();
  const [slider, setSlider] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    const container = contaienrRef.current;
    const text = textRef.current;
    console.log(container.clientHeight);
    console.log(text.scrollHeight);

    if (text.scrollHeight > container.clientHeight) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Gallery images={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div className="description" ref={contaienrRef}>
              <div className="paragraphsContainer" ref={textRef}>
                {item.desc.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>

            <a href={item.git}>
              <button>Go to Git</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
