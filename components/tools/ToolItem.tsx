import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ToolsObj } from "./ToolsBank";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 3,
    },
  },
  closed: { opacity: 0, x: 100, y: -100 },
};

const ToolItem: React.FC<ToolsObj> = ({ id, name, docUrl, imgUrl }) => {
  return (
    <motion.li
      className="tools__item"
      variants={variants}
      initial="closed"
      drag
      dragSnapToOrigin
      whileInView="open"
    >
      <Image src={imgUrl} width={40} height={40} alt={name} />
    </motion.li>
  );
};
export default ToolItem;
