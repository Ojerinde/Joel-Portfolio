import Image from "next/image";
import React, { useState } from "react";
import { ProjectsObj } from "./ProjectsBank";
import { FaGithubAlt, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props extends ProjectsObj {
  onClick: () => void;
}
const ProjectDetails: React.FC<Props> = ({
  id,
  name,
  liveUrl,
  githubUrl,
  stacks,
  imgUrl,
  description,
  onClick,
}) => {
  const [github, setGithub] = useState(false);
  const [live, setLive] = useState(false);
  return (
    <div className="project__details">
      <button onClick={onClick}>Close</button>
      <span>Name:</span>
      <h1>{name}</h1>
      <span>Tools:</span>
      <ul>
        {stacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
      <figure>
        <Image src={imgUrl} alt={name} width={1000} height={100} />
      </figure>
      <span>Description:</span>
      <p>{description}</p>
      <div className="project__details__icons">
        <motion.div
          whileInView={{
            rotate: 360,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{
            rotate: 0,
          }}
          drag
          dragSnapToOrigin
        >
          <Link
            href={githubUrl}
            target="_blank"
            className="project__details__icons--box"
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
          >
            {github && (
              <div className="project__details--title">GitHub Repository</div>
            )}
            <FaGithubAlt className="icon" />
          </Link>
        </motion.div>
        <motion.div
          whileInView={{
            rotate: -360,
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          whileHover={{
            rotate: 0,
          }}
          drag
          dragSnapToOrigin
        >
          <Link
            href={liveUrl}
            target="_blank"
            className="project__details__icons--box"
            onMouseEnter={() => setLive(true)}
            onMouseLeave={() => setLive(false)}
          >
            {live && <div className="project__details--title">Live Link</div>}
            <FaLink className="icon" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default ProjectDetails;
