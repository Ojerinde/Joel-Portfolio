import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectsBank from "./ProjectsBank";
import { BsProjector } from "react-icons/bs";

const Projects: React.FC = () => {
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
            imgUrl={project.imgUrl}
            description={project.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default Projects;
