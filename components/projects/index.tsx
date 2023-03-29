import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectsBank from "./ProjectsBank";
import { BsProjector } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";
import { AnimatePresence, motion } from "framer-motion";

const itemPerPage = 8;
const Projects: React.FC = () => {
  const [start, setStart] = useState<number>(0);
  const end = start + itemPerPage;
  const changePageHandler = (newStart: number) => {
    console.log(newStart, start, end);
    setStart((prev) => newStart * itemPerPage - itemPerPage);
  };

  return (
    <section className="projects" id="portfolio">
      <h3>
        <span>
          <BsProjector className="projects__icon" />
        </span>
        Portfolio
      </h3>
      <h4>Featured Projects</h4>
      <ul className="projects__list">
        {ProjectsBank?.slice(start, end).map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            stacks={project.stacks}
            imgUrl={project.imgUrl}
            description={project.description}
          />
        ))}
      </ul>
      <Pagination
        itemPerPage={itemPerPage}
        totalItem={ProjectsBank.length}
        onChange={changePageHandler}
      />
    </section>
  );
};
export default Projects;
