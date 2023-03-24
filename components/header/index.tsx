import Image from "next/image";
import React from "react";
import Navigation from "./navigation";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header id="header">
      <Navigation />
      <div className="header__main">
        <div className="header__left">
          <p>Greetings!</p>
          <h1>
            Joel <br /> Ojerinde
          </h1>
          <h4>Frontend Developer</h4>
          <ul className="header__icons">
            <li>
              <a href="https://github.com/Ojerinde">
                <FaGithubSquare className="header__icon header__icon--1" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Joel_Ojerinde">
                <FaTwitterSquare className="header__icon header__icon--2" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ojerinde/">
                <FaLinkedin className="header__icon header__icon--3" />
              </a>
            </li>
          </ul>
        </div>
        <figure>
          <Image
            src="/images/headerImg.png"
            width={300}
            height={300}
            alt="Empty closing tag"
          />
        </figure>
        <div className="header__right">
          <a href="CV.pdf" download>
            <p>
              Download CV
              <span>
                <FaFileDownload className="header__right--icon" />
              </span>
            </p>
          </a>
          <a href="https://wa.me/2348143368703" target="_blank">
            <p>
              <span>
                <FaWhatsapp className="header__right--icon" />
              </span>
              {"Let's talk"}
            </p>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
