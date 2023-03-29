import React from "react";
import ToolItem from "./ToolItem";
import ProficientToolsBank, { ModerateToolsBank } from "./ToolsBank";
import { ToolsObj } from "./ToolsBank";
import { BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

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
      <motion.ul className="tools__list">
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
      <motion.ul className="tools__list">
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
