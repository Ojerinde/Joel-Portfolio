import React, { useRef } from "react";
import ToolItem from "./ToolItem";
import ProficientToolsBank, { ModerateToolsBank } from "./ToolsBank";
import { ToolsObj } from "./ToolsBank";
import { BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    x: "100%",
    y: "100%",
    transition: {
      when: "afterChildren",
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
  initial: { opacity: 0, x: "-50%", y: "-50%" },
};

const Alltools: React.FC = () => {
  return (
    <section className="tools" id="tools">
      <h3>
        <span>
          <BsTools className="tools__icon" />
        </span>
        Skills - Technologies
      </h3>
      <h4>Technologies and skills</h4>
      <h6>Techs. I am proficient at</h6>
      <motion.ul
        className="tools__list"
        variants={variants}
        initial="initial"
        animate="show"
        exit="hidden"
      >
        {ProficientToolsBank.map((tool: ToolsObj) => (
          <ToolItem
            key={tool.id}
            id={tool.id}
            name={tool.name}
            imgUrl={tool.imgUrl}
            docUrl={tool.docUrl}
          />
        ))}
      </motion.ul>
      <h6>Techs. I have worked with</h6>
      <ul className="tools__list">
        {ModerateToolsBank.map((tool: ToolsObj) => (
          <ToolItem
            key={tool.id}
            id={tool.id}
            name={tool.name}
            imgUrl={tool.imgUrl}
            docUrl={tool.docUrl}
          />
        ))}
      </ul>
    </section>
  );
};
export default Alltools;
