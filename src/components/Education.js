import React from 'react';
import { AcademicCapIcon } from "@heroicons/react/solid";
import EducationCard from './EducationCard';

export default function Educatoin() {
    const education = [
        {
            id: 1,
            school: 'University of Nottingham, UK',
            major: 'MSc in Computer Science (Artificial Intelligent)',
            courses: [
                {
                    id: 11,
                    name: 'Database and Software Design Principles'
                },
                {
                    id: 12,
                    name: 'Data Modeling and Analysis'
                },
                {
                    id: 13,
                    name: 'Systems and Network'
                }
            ]
        },
        {
            id: 2,
            school: 'Tunghai University, Taiwan',
            major: 'BA in Sociology with minor in Computer Science',
            courses: [
                {
                    id: 11,
                    name: 'Data Structures'
                },
                {
                    id: 12,
                    name: 'Algorithms'
                },
                {
                    id: 13,
                    name: 'Machine Learning'
                },
                {
                    id: 14,
                    name: 'Social Statistics'
                }
            ]
        }
    ]

    return (
        <section id="education">
            <div className="container px-5 mx-auto lg:px-40">
                <div className="text-center w-full mb-10">
                    <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium text-center title-font text-white">
                        Educatoin
                    </h1>
                </div>
            </div>

            <div className="flex justify-center flex-wrap ">
                {education.map(education => <EducationCard key={education.id} education={education} className={"flex-1"} />)}
            </div>
        </section>
    );
}


