import Image from "next/image";
import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import { GiBurningPassion } from "react-icons/gi";
import { MdCastForEducation, MdCleaningServices } from "react-icons/md";
const AboutMe: React.FC = () => {
  return (
    <section className="about" id="about">
      <figure className="about__left">
        {" "}
        <Image
          src="/images/profilepic.png"
          width={250}
          height={250}
          alt="Joel Ojerinde"
        />
      </figure>
      <div className="about__right">
        <h6>About me</h6>
        <h1>Ojerinde Joel Segun</h1>
        <p>
          <span>
            <SiAboutdotme className="about__icon" />
          </span>
          My name is Ojerinde Joel and I am a professional Full Stack Web
          Developer and also an Electrical and Electronics Engineer.
        </p>
        <p>
          <span>
            <BiCurrentLocation className="about__icon" />
          </span>
          I reside in Ilorin, Nigeria.
        </p>
        <p>
          <span>
            <GiBurningPassion className="about__icon" />
          </span>
          I possess an unwavering passion for designing and developing
          responsive web applications.
        </p>
        <p>
          <span>
            <MdCastForEducation className="about__icon" />
          </span>
          I hold a ND in Full Stack Development from Udacity, as well as a
          Frontend Engineering ND from Altschool Africa, where I developed my
          skills and knowledge in the field.
        </p>
        <p>
          <span>
            <MdCleaningServices className="about__icon" />
          </span>
          I am dedicated to providing excellent service to clients and
          delivering results that exceed expectations. It would be my pleasure
          to connect and discuss your web development needs further.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
