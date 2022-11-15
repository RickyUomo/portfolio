import React from 'react';

export default function EducationCard({ education }) {
    const courses = education.courses;

    return (
        <div className="pr-14 pl-14 pt-8 pb-8 mt-8 mb-8 ml-14 bg-blue-900 bg-opacity-25 flex">
            <div>
                <header className="mb-6">
                    <h1 className="text-2xl">{education.school}</h1>
                    <p class="mb-3 text-base text-yellow-300">{education.major}</p>
                </header>

                <div>
                    <ul className="list-disc">
                        {courses.map(course => <li>{course}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};