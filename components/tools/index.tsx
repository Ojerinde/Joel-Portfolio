import React, { useRef } from "react";
import ToolItem from "./ToolItem";
import ProficientToolsBank, { ModerateToolsBank } from "./ToolsBank";
import { ToolsObj } from "./ToolsBank";
import { BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  // open: {
  //   transition: { staggerChildren: 0.4, delayChildren: 1 },
  // },
  // closed: {
  //   transition: { staggerChildren: 0.05, staggerDirection: -1 },
  // },
};

const Alltools: React.FC = () => {
  return (
    <motion.section
      className="tools"
      id="tools"
      variants={variants}
      whileInView="open"
      exit="closed"
    >
      <h3>
        <span>
          <BsTools className="tools__icon" />
        </span>
        Skills - Technologies
      </h3>
      <h4>Technologies and skills</h4>
      <h6>Techs. I am proficient at</h6>
      <ul className="tools__list">
        {ProficientToolsBank.map((tool: ToolsObj) => (
          <ToolItem
            key={tool.id}
            id={tool.id}
            name={tool.name}
            imgUrl={tool.imgUrl}
            docUrl={tool.docUrl}
          />
        ))}
      </ul>
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
    </motion.section>
  );
};
export default Alltools;
