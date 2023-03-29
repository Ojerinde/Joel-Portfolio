import Image from "next/image";
import React, { useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
const Navigation: React.FC = () => {
  const scrollTo = (to: string) => {
    const section = document?.querySelector(to) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // Sticky navigation
    const nav = document.querySelector("#nav") as HTMLElement;
    const header = document.querySelector("#header") as HTMLElement;

    const stickyNav = function (entries: any) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav.classList.add("sticky");
      else {
        nav.classList.remove(`sticky`);
      }
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    headerObserver.observe(header);
  });

  return (
    <>
      <nav className="navigation desktop" id="nav">
        <figure>
          <Image
            src="/images/logo.png"
            width={80}
            height={50}
            alt="Empty closing tag"
          />
        </figure>
        <ul>
          <li onClick={scrollTo.bind(null, "#home")}>Home</li>
          <li onClick={scrollTo.bind(null, "#about")}>About</li>
          <li onClick={scrollTo.bind(null, "#portfolio")}>Portfolio</li>
          <li onClick={scrollTo.bind(null, "#tools")}>Tools</li>
          <li onClick={scrollTo.bind(null, "#blogs")}>Blogs</li>
          <li onClick={scrollTo.bind(null, "#contact")}>Contact</li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  );
};
export default Navigation;
