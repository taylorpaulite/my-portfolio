import React from 'react';
import { Link } from "react-router-dom";
import HighlightImage from './img-highlight.png';

export default function Highlight() {
    const highlightDesc = "I synthesize data, experiment ideas, and deploy solutions to optimize the user experience in digital products."
    return (
        <div className="flex flex-row">
            <div className="lg:basis-1/2 px-12 py-24">
                <h1 className="text-5xl font-medium text-neutral-800 dark:text-neutral-50 text-left pb-4">Hi, I'm Taylor Paulite, a <span className="text-lime-600">product manager</span></h1>
                <p className="text-left text-medium pb-8 text-neutral-600 dark:text-neutral-200">{highlightDesc}</p>
                <div className="text-left justify-start">
                <Link to={"/contact"}>
                    <button className="rounded-full bg-neutral-600 dark:bg-neutral-500 hover:bg-neutral-500 dark:hover:bg-neutral-400 text-neutral-50 text-base px-4 py-2">Say hello! 👋</button>
                </ Link>
                </div>
            </div>
            <div className="flex content-center p-12">
                <img src={HighlightImage} className="hidden lg:block mx-auto w-full h-auto object-contain max-w-lg" alt="screens-img"></img>
            </div>
        </div>
    );
}