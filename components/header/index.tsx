import Image from "next/image";
import React from "react";
import Navigation from "./navigation";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
      <div className="header__main">
        <div className="header__left">
          <p>Greetings!</p>
          <h4>
            Ojerinde <br /> Joel
          </h4>
          <p>Frontend Developer</p>
          <ul>
            <li>
              <FaGithubSquare className="header__icon" />
            </li>
            <li>
              <FaTwitterSquare className="header__icon" />
            </li>
            <li>
              <FaLinkedinIn className="header__icon" />
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
          <p>Download CV</p>
          <p>Lets talk</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
