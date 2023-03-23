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
              <FaGithubSquare className="header__icon header__icon--1" />
            </li>
            <li>
              <FaTwitterSquare className="header__icon header__icon--2" />
            </li>
            <li>
              <FaLinkedin className="header__icon header__icon--3" />
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
          <p>
            Download CV
            <span>
              <FaFileDownload className="header__right--icon" />
            </span>
          </p>
          <p>
            <span>
              <FaWhatsapp className="header__right--icon" />
            </span>
            {"Let's talk"}
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
