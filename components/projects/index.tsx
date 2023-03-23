import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectsBank from "./ProjectsBank";
import { BsProjector } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

const Projects: React.FC = () => {
  const [start, setStart] = useState<number>(1);
  const changePageHandler = (newStart: number) => {
    setStart((prev) => newStart);
  };
  return (
    <section className="projects">
      <h3>
        <span>
          <BsProjector className="projects__icon" />
        </span>
        Portfolio
      </h3>
      <h4>Featured Projects</h4>
      <ul className="projects__list">
        {ProjectsBank.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            docUrl={project.docUrl}
            stacks={project.stacks}
            imgUrl={project.imgUrl}
            description={project.description}
          />
        ))}
      </ul>
      <Pagination itemPerPage={8} totalItem={58} onChange={changePageHandler} />
    </section>
  );
};
export default Projects;
