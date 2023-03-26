import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsMenuAppFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const variants = {
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    x: "100%",
    y: "100%",
    transition: {
      when: "afterChildren",
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
  initial: { opacity: 0, x: "-50%", y: "-50%" },
};

const item = {
  hidden: {
    opacity: 0,
    x: "100%",
    y: "100%",
  },
  show: { opacity: 1, x: 0, y: 0 },
};
const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollTo = (to: string) => {
    const section = document?.querySelector(to) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Sticky navigation logic
    const nav = document.querySelector(".mobile") as HTMLElement;
    const header = document.querySelector("#header") as HTMLElement;

    const stickyNav = function (entries: any) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav?.classList.add("sticky");
      else nav?.classList.remove(`sticky`);
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    headerObserver.observe(header);
  });

  return (
    <section className="mobile">
      <div className="mobile__header">
        <figure>
          <Image
            src="/images/logo.png"
            width={45}
            height={45}
            alt="Empty closing tag"
          />
        </figure>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="mobile__icon"
        >
          {!isOpen ? <BsMenuAppFill /> : <IoMdClose />}
        </div>
      </div>
      <div className="mobile__navcon">
        <motion.nav>
          <motion.ul
            className="mobile__list"
            initial="initial"
            animate={isOpen ? "show" : "hidden"}
            variants={variants}
          >
            <motion.li variants={item} onClick={scrollTo.bind(null, "#home")}>
              Home
            </motion.li>
            <motion.li variants={item} onClick={scrollTo.bind(null, "#about")}>
              About
            </motion.li>
            <motion.li
              variants={item}
              onClick={scrollTo.bind(null, "#portfolio")}
            >
              Portfolio
            </motion.li>
            <motion.li variants={item} onClick={scrollTo.bind(null, "#tools")}>
              Tools
            </motion.li>
            <motion.li variants={item} onClick={scrollTo.bind(null, "#blogs")}>
              Blogs
            </motion.li>
            <motion.li
              variants={item}
              onClick={scrollTo.bind(null, "#contact")}
            >
              Contact
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </section>
  );
};
export default MobileNavigation;
