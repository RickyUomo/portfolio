import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <HashLink smooth to="#about" className="ml-3 text-xl">
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
