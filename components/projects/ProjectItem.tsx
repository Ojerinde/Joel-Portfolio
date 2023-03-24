import Image from "next/image";
import React from "react";
import { ProjectsObj } from "./ProjectsBank";
const ProjectItem: React.FC<ProjectsObj> = ({
  id,
  name,
  liveUrl,
  githubUrl,
  stacks,
  imgUrl,
  description,
}) => {
  return (
    <div className="projects__item">
      <h1>{name}</h1>
      <p>{description?.slice(0, 80)}...</p>
      <ul>
        {stacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
      <Image src={imgUrl} alt={name} width={225} height={150} />
    </div>
  );
};
export default ProjectItem;
