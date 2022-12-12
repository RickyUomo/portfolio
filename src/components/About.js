import React from "react";
import { useState } from "react";
import Ricky from "../img/ricky.jpg";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Meng-Ju Kuo.
            <br />I love to build apps and learn new technologies.
          </h1>
          <p className="mb-8 leading-relaxed">
            App is the only thing I can try to make perfect.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/ricky-kuo/"
              target="_blank"
              rel="noreferrer"
              className="text-white px-6 hover:text-gray-300 text-3xl"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              href="https://github.com/RickyUomo"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 text-3xl"
            >
              <ion-icon className="" name="logo-github"></ion-icon>
            </a>

            <a
              href="assets/MengJuKuoCV.pdf"
              target="_blank"
              download="MengJuKuoCV.pdf"
              className="text-white pl-6 hover:text-gray-300 text-3xl"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <ion-icon name="archive-outline"></ion-icon>
            </a>
            {isHovering ? (
              <span className="rounded-r-2xl rounded-bl-2xl text-sm bg-white bg-opacity-20 px-2 py-2 ml-1">
                CV
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Ricky}
          />
        </div>
      </div>
    </section>
  );
}
