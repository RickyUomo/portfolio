import React from 'react'
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Work() {
    return (
        <section id="experience" className="text-gray-400 bg-gray-900 body-font m-auto max-w-xl p-6">
            <div className="container px-5 mx-auto text-center lg:px-40">
                <div className="flex flex-col mb-8">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Work Experience
                    </h1>
                </div>
            </div>
            <div className="text-white text-left flex flex-col">
                <div className="mb-8 text-lg">
                    <h1 className="text-2xl mb-2 text-center">
                        Darktrace
                    </h1>
                    <h3 className="text-lg mb-4 text-gray-300 text-center">
                        Software Engineer
                    </h3>
                    <div className="text-md text-left ">
                        <li>
                            Developed Web API and SQL query on NodeJS
                        </li>
                        <li>
                            Developed reusable JS class components, implemented with JQuery and CSS
                        </li>

                        <li>
                            Cooperated with technical operations executive to achieve web visual and
                            backend business logic design goals
                        </li>
                        <li>
                            Participated in Scrum meetings and code reviews
                        </li>
                    </div>
                </div>
            </div>
            <div className="text-white text-left flex flex-col">
                <div className="mb-8 text-lg">
                    <h1 className="text-2xl mb-2 text-center">
                        Bright Ideas Design CO., LTD.
                    </h1>
                    <h3 className="text-lg mb-4 text-gray-300 text-center">
                        Front-End Web Developer Intern
                    </h3>
                    <div className="text-md text-left ">
                        <li>
                            Followed the design pattern to build UIs
                        </li>
                        <li>
                            Developed new functionalities to enhance user experience
                        </li>

                        <li>
                            Edited the existing code for mobile first methodology
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}
