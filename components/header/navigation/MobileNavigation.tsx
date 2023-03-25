import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsMenuAppFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const scrollTo = (to: string) => {
    const section = document?.querySelector(to) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth" });
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Sticky navigation
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
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <ul className="mobile__list">
            <li onClick={scrollTo.bind(null, "#home")}>Home</li>
            <li onClick={scrollTo.bind(null, "#about")}>About</li>
            <li onClick={scrollTo.bind(null, "#portfolio")}>Portfolio</li>
            <li onClick={scrollTo.bind(null, "#tools")}>Tools</li>
            <li onClick={scrollTo.bind(null, "#blogs")}>Blogs</li>
            <li onClick={scrollTo.bind(null, "#contact")}>Contact</li>
          </ul>
        </motion.nav>
      </div>
    </section>
  );
};
export default MobileNavigation;