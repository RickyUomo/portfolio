import React from 'react'
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/solid";

export default function Educatoin() {
    return (
        <section id="education" className="text-gray-400 bg-gray-900 body-font mb-10 m-auto max-w-xl p-6">
            <div className="container px-5 mx-auto lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium text-center title-font text-white">
                        Educatoin TEST MERGE CONFLICTS
                    </h1>
                </div>
            </div>
            <div className="text-white flex flex-col text-left">
                <div className="mb-8 text-lg">
                    <h1 className="text-2xl mb-2 ">
                        University of Nottingham, UK (Grade: Merit)
                    </h1>
                    <h3 className="text-lg mb-4 text-gray-300">
                        MSc in Computer Science (Artificial Intelligent)
                    </h3>
                    <div className="text-md">
                        <li>
                            Database and Software Design Principles
                        </li>
                        <li>
                            Data Modeling and Analysis
                        </li>

                        <li>
                            Systems and Network
                        </li>
                    </div>
                </div>
                <div className="mb-6 text-lg">
                    <h1 className="text-2xl mb-2">
                        Tunghai University, Taiwan (Grade: 79.65%)
                    </h1>
                    <h3 className="text-lg mb-4 text-gray-300">
                        BA in Sociology with minor in Computer Science
                    </h3>
                    <div className="text-md">

                        <li>
                            Data Structure
                        </li>
                        <li>
                            Algorithms
                        </li>
                        <li>
                            Machine Learning
                        </li>
                        <li>
                            Social Statistics
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
}


