import { AnimatePresence, motion } from "framer-motion";
import "./modal.scss";

const Modal = ({ skill, close, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.1, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <div className="wrapper">
            <button onClick={close}> x</button>
            <h1>{skill.title}</h1>
            <p>{skill.content}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
