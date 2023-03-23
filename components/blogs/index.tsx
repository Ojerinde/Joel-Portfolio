import React from "react";
import ProjectItem from "./BlogItem";
import BlogsBank from "./BlogsBank";
import { FaBlog } from "react-icons/fa";

const Blogs: React.FC = () => {
  return (
    <section className="blogs">
      <div className="blogs__header">
        <h3>
          <span>
            <FaBlog className="blogs__icon" />
          </span>
          Blogs
        </h3>
      </div>
      <ul className="blogs__list">
        {BlogsBank.map((project) => (
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
    </section>
  );
};
export default Blogs;
