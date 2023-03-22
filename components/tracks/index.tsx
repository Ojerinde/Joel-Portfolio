import React from "react";
import { MdElectricalServices, MdCodeOff } from "react-icons/md";
const Tracks: React.FC = () => {
  return (
    <section className="tracks">
      <div className="tracks__up">
        <div>
          <p>
            <MdCodeOff className="tracks__up--icon" />
          </p>
          <h3>1.5 years</h3>
          <h2>Programmer</h2>
        </div>
        <div>
          <p>
            <MdElectricalServices className="tracks__up--icon" />
          </p>
          <h3>4 years</h3>
          <h2>Electrical Engineer </h2>
        </div>
        {/* <div>
          <p>
            <MdCodeOff className="tracks__up--icon" />
          </p>
          <h3>1 year</h3>
          <h2>Backend Programmer</h2>
        </div> */}
      </div>
      <div className="tracks__down">
        <div>
          <p>Freelancer</p>
          <h2>Frontend Engineer</h2>
        </div>
        <div>
          <p>Student</p>
          <h2>Electrical Engineer</h2>
        </div>
        <div>
          <p>Some projects</p>
          <h2>Backend Engineer</h2>
        </div>
      </div>
    </section>
  );
};
export default Tracks;
