import React from 'react';

export default function WorkCard({ work }) {
    const desc = work.desc;

    return (
        <div className="pr-14 pl-14 pt-8 pb-8 mt-8 mb-8 bg-blue-900 bg-opacity-25">
            <header className="mb-6">
                <h1 className="text-2xl">{work.title} at {work.company}</h1>
                <h1 className="">{work.time}</h1>
            </header>

            <ul className="list-disc">
                {desc.map(desc => <li>{desc}</li>)}
            </ul>
        </div>
    );
};