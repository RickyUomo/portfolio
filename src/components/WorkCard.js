import React from 'react';

export default function WorkCard({ work }) {
    const desc = work.desc;

    return (
        <div className="px-14 py-8 mx-4 my-4 md:mx-14 md:my-8 max-w-xl bg-blue-900 bg-opacity-25 flex-1">
            <div>
                <header className="mb-6">
                    <p className="text-base text-yellow-300">{work.time}</p>
                    <h1 className="text-2xl">{work.title} at {work.company}</h1>
                </header>

                <div>
                    <ul className="list-disc">
                        {desc.map(desc => <li key={desc.id}>{desc.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};