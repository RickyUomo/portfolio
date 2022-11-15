import React from 'react';
import { BriefcaseIcon } from "@heroicons/react/solid";
import WorkCard from './WorkCard';

export default function Work() {
    const works = [
        {
            id: 1,
            title: 'Software Developer',
            company: 'Darktrace, UK',
            time: `Feb - Present 2022`,
            desc: [
                `Maintained internal Customer Relationship Management application by developing routes API, 
                middleware and SQL query in NodeJS, migrating Database in PHP Laravel framework, implementing UI in jQuery/React`,
                `Implemented sales rep’s dashboard using vanilla JavaScript and jQuery to visualize data stored in MySQL, 
                designed SQL query decreasing loading latency by over 10 times`,
                `Cooperated with technical operations executive to achieve front-end visual designs 
                and backend business logic according to requirements`
            ]
        },
        {
            id: 2,
            title: 'Front-End Web Developer Intern',
            company: 'Bright Ideas Design, Taiwan',
            time: `Feb - Aug 2020`,
            desc: [
                `Worked with senior developers and followed the design pattern to build UIs`,
                `Refactored the existing code to mobile first methodology`
            ]
        }
    ]

    return (
        <section id="experience">
            <div className="grid grid-cols-2 ml-28 mr-28">
                <div className="text-center">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" /><h1 className="text-4xl">Work Experience</h1>
                </div>
                <div className="mt-8 mb-8">
                    {works.map(work => <WorkCard key={work.id} work={work} />)}
                </div>
            </div>
        </section>
    )
};
