import React from 'react';

export default function EducationCard({ education }) {
    const courses = education.courses;

    return (
        <div className="px-14 py-8 mx-4 my-4 md:mx-14 md:my-8 max-w-xl bg-blue-900 bg-opacity-25 flex-1">
            <div>
                <header className="mb-6">
                    <h1 className="text-2xl">{education.school}</h1>
                    <p className="mb-3 text-base text-yellow-300">{education.major}</p>
                </header>

                <div>
                    <ul className="list-disc">
                        {courses.map(course => <li key={course.id}>{course.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};