import React from 'react';

export default function Testimonial({quote, person}) {
    return (
        <div className="lg:flex lg:flex-row bg-neutral-800 dark:bg-neutral-700 px-12 py-24 border-b border-b-neutral-700 dark:border-b-neutral-600">
            <div className="basis-1/2">
                <p className="text-xl text-slate-50 text-left font-light pb-2">{quote}</p>
                <p className="text-xl text-slate-200 text-left font-medium">{person}</p>
            </div>
        </div>
    );
}