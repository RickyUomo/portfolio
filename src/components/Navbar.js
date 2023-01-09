import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);

  return (
    <header
      className={`bg-gray-800 md:sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } top-0 z-10 transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <HashLink smooth to="/#about" className="ml-3 text-xl">
            Ricky Kuo
          </HashLink>
        </div>
        <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <li className="mr-5 hover:text-white">
            <HashLink smooth to="/#projects">
              Past Work
            </HashLink>
          </li>
          <li className="mr-5 hover:text-white">
            <HashLink smooth to="/#skills">
              Skills
            </HashLink>
          </li>
          <li className="mr-5 hover:text-white">
            <HashLink smooth to="/#education">
              Educations
            </HashLink>
          </li>
          <li className="mr-5 hover:text-white">
            <HashLink smooth to="/#experience">
              Experiences
            </HashLink>
          </li>
          <li className="mr-5 hover:text-white">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
