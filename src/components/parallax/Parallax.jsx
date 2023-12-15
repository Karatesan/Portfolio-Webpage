import { useRef } from "react";
import "./parallax.scss";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,

} from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"], //oznacza czas rozpoczenai i zakonczenia animacji. pierwsze - poczatek - start start = zacznij animacje od punktu gdzie poczatek naszego kontenera animowanego elementu (np.div) styknei sie z poczatkiem okna (gorna krawedz okna przeglodarki). end start - koncz gdy koniec naszego diva styknie sie z pcozatkie mokna czyli gorna krawedzia
  });
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "My Skills" : "My Projects"}
      </motion.h1>
      <motion.div
        className="mountains"
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "../public/planets.png" : "../public/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
