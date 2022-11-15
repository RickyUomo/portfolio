import React from 'react';

export default function WorkCard({ work }) {
    const desc = work.desc;

    return (
        <div className="pr-14 pl-14 pt-8 pb-8 mt-8 mb-8 bg-blue-900 bg-opacity-25">
            <div>
                <header className="mb-6">
                    <p class="mb-3 text-base text-yellow-300">{work.time}</p>
                    <h1 className="text-2xl">{work.title} at {work.company}</h1>
                </header>

                <div>
                    <ul className="list-disc">
                        {desc.map(desc => <li>{desc}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};