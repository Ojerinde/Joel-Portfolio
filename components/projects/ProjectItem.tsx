import Image from "next/image";
import React from "react";
import { ProjectsObj } from "./ProjectsBank";
const ProjectItem: React.FC<ProjectsObj> = ({
  id,
  name,
  docUrl,
  imgUrl,
  description,
}) => {
  return (
    <div className="projects__item">
      <div className="projects__">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="projects__">
        <Image src={imgUrl} alt={name} fill />
      </div>
    </div>
  );
};
export default ProjectItem;
