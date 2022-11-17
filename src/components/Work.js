import React from 'react';
import { BriefcaseIcon } from "@heroicons/react/solid";
import WorkCard from './WorkCard';

export default function Work() {
    const works = [
        {
            id: 1,
            title: 'Software Developer',
            company: 'Darktrace, UK',
            time: `Feb - Nov 2022`,
            desc: [
                {
                    id: 11,
                    name: `Maintained internal CRM application by developing routes API, 
                    middleware and SQL query in NodeJS, migrating Database in PHP Laravel framework, implementing UI in jQuery`
                }
            ]
        },
        {
            id: 2,
            title: 'Front-End Developer Intern',
            company: 'Bright Ideas Design, Taiwan',
            time: `Feb - Aug 2020`,
            desc: [
                {
                    id: 11,
                    name: `Worked with senior developers and followed the design pattern to build UIs`
                },
                {
                    id: 12,
                    name: `Refactored the existing code to mobile first methodology`
                }
            ]
        }
    ]

    return (
        <section id="experience">
            <div className=" bg-gray-900 body-font mb-10 mx-auto">
                <div className="text-center w-full mb-10">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" /><h1 className="text-4xl">Work Experience</h1>
                </div>
                <div className="flex justify-center flex-wrap">
                    {works.map(work => <WorkCard key={work.id} work={work} />)}
                </div>
            </div>
        </section>
    )
};
