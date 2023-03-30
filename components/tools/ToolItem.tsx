import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ToolsObj } from "./ToolsBank";

const item = {
  hidden: {
    x: "0",
    y: "0",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
  show: {
    opacity: 1,
    x: [0, 0],
    y: ["-100vh", "0vh"],
    transition: {
      times: [0, 0.25, 0.5, 0.75, 1],
      type: "spring",
      bounce: 0.4,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 8,
    },
  },
  slide: {
    opacity: 1,
    x: [0, 0],
    y: ["100vh", "0vh"],
    transition: {
      times: [0, 1],
      type: "spring",
      bounce: 0.4,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 8,
    },
  },
};

const ToolItem: React.FC<ToolsObj> = ({ id, name, docUrl, imgUrl }) => {
  return (
    <motion.li className="tools__item" variants={item} drag dragSnapToOrigin>
      <Image src={imgUrl} width={40} height={40} alt={name} />
    </motion.li>
  );
};
export default ToolItem;
