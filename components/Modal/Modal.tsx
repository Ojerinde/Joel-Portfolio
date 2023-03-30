import { motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import ModalTemplate from "../projects/ProjectDetails";

interface ModalProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const newspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Backdrop = ({ onClick }: ModalProps) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    ></motion.div>
  );
};

const Overlay = ({ children, onClick }: ModalProps) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="overlay"
    >
      <div>{children}</div>
    </motion.div>
  );
};

const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("modal-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Overlay onClick={onClick}>{children}</Overlay>,
        document.getElementById("modal-root") as HTMLElement
      )}
    </React.Fragment>
  );
};
export default Modal;
