import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { ProjectsObj } from "./ProjectsBank";
import ProjectDetails from "./ProjectDetails";

const ProjectItem: React.FC<ProjectsObj> = ({
  id,
  name,
  liveUrl,
  githubUrl,
  stacks,
  imgUrl,
  description,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="projects__item"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <h1>{name}</h1>
        <p>{description?.slice(0, 80)}...</p>
        <ul>
          {stacks.slice(0, 2).map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>

        <figure>
          <Image src={imgUrl} alt={name} width={1000} height={1000} />
        </figure>
      </motion.div>

      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {showModal && (
          <Modal onClick={() => setShowModal((prev) => false)}>
            <ProjectDetails
              id={id}
              name={name}
              liveUrl={liveUrl}
              githubUrl={githubUrl}
              stacks={stacks}
              imgUrl={imgUrl}
              description={description}
              onClick={() => setShowModal((prev) => false)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
export default ProjectItem;
