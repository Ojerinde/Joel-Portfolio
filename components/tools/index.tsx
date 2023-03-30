import React, { useRef } from "react";
import ToolItem from "./ToolItem";
import ProficientToolsBank, { ModerateToolsBank } from "./ToolsBank";
import { ToolsObj } from "./ToolsBank";
import { BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
  slide: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
  hidden: { opacity: 0, x: 0, y: 0 },
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
        initial="hidden"
        animate="show"
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
      <motion.ul
        className="tools__list"
        variants={variants}
        initial="hidden"
        animate="slide"
      >
        {ModerateToolsBank.map((tool: ToolsObj) => (
          <ToolItem
            key={tool.id}
            id={tool.id}
            name={tool.name}
            imgUrl={tool.imgUrl}
            docUrl={tool.docUrl}
          />
        ))}
      </motion.ul>
    </section>
  );
};
export default Alltools;
