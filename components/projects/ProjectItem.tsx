import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

      <figure>
        <Image src={imgUrl} alt={name} width={1000} height={1000} />
      </figure>
    </div>
  );
};
export default ProjectItem;
