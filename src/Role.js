import React, { Children } from 'react';

//can consider making a skill component

export default function Role({group, children}) {
    return (
        <article className="pb-8">
            <header className="">
                <h3 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50">{group}</h3>
            </header>
            <div className="">
                <ul className="font-base text-base text-neutral-600 dark:text-neutral-200 list-disc text-left">
                    {children}
                </ul>
            </div>
        </article>
    );
}