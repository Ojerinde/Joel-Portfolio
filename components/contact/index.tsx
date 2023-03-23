import { FaBlog } from "react-icons/fa";
import React from "react";
const Contact: React.FC = () => {
  return (
    <section>
      <div className="blogs__header">
        <h3>
          <span>
            <FaBlog className="blogs__icon" />
          </span>
          Blogs
        </h3>
      </div>
    </section>
  );
};
export default Contact;
