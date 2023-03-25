import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: "100vw",
    rotate: "360",
    transition: {
      duration: 5,
    },
  },
  show: { opacity: 1, x: 0, rotate: 0 },
};

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
          <motion.ul
            className="header__icons"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={item} whileHover={{ scale: 1.1 }}>
              <a href="https://github.com/Ojerinde">
                <FaGithubSquare className="header__icon header__icon--1" />
              </a>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: 1.1 }}>
              <a href="https://twitter.com/Joel_Ojerinde">
                <FaTwitterSquare className="header__icon header__icon--2" />
              </a>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: 1.1 }}>
              <a href="https://www.linkedin.com/in/ojerinde/">
                <FaLinkedin className="header__icon header__icon--3" />
              </a>
            </motion.li>
          </motion.ul>
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
            <motion.p whileHover={{ scale: 1.5, y: "-20%" }}>
              Download CV
              <motion.span
                initial={{ y: "-30%" }}
                animate={{
                  y: "0%",
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaFileDownload className="header__right--icon" />
              </motion.span>
            </motion.p>
          </a>
          <a href="https://wa.me/2348143368703" target="_blank">
            <motion.p whileHover={{ scale: 1.5, y: "20%" }}>
              <motion.span>
                <FaWhatsapp className="header__right--icon" />
              </motion.span>
              {"Let's talk"}
            </motion.p>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
