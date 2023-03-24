import Image from "next/image";
import React from "react";
const Navigation: React.FC = () => {
  const scrollTo = (to: string) => {
    const section = document?.querySelector(to) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="navigation desktop">
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

      {/* <nav className="mobile__navigation mobile">
        <div className="mobile__header">
          <figure className="mobile__logo">
            <img src="./assets/logo.png" alt="" />
          </figure>
          {!open ? (
            <BsFillMenuButtonWideFill
              onClick={() => setOpen((prev) => !prev)}
              className="mobile__icon"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen((prev) => !prev)}
              className="mobile__icon"
            />
          )}
        </div>
        {open && (
          <ul onClick={clickedHandler} className="mobile__list">
            <li href="home" className="mobile__item">
              Home
            </li>
            <li href="about" className="mobile__item">
              About
            </li>
            <li href="portfolio" className="mobile__item">
              Portfolio
            </li>
            <li href="blog" className="mobile__item">
              Blog
            </li>
            <li href="contact" className="mobile__item">
              Contact
            </li>
          </ul>
        )}
      </nav> */}
    </>
  );
};
export default Navigation;
