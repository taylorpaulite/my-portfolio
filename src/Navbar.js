import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { Bars3Icon } from '@heroicons/react/20/solid';
import NavModal from './NavModal.js';

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-row justify-between px-12 py-6">
            <Link to={"/"}>
                <p className="text-left text-lg font-semibold text-neutral-800 dark:text-neutral-50 justify-start content-center py-2">Taylor Paulite</p>
            </Link>
            <div className="md:block md:justify-right">
                <ul className="hidden list-none md:flex justify-center">
                    <Link to={"/#about"}>
                        <li key="about-btn" className="text-left text-base font-regular text-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-400 dark:text-neutral-200 px-2 pt-2">About</li>
                    </Link>
                    <Link to={"/#portfolio"}>
                    <li key="portfolio-btn" className="text-left text-base font-regular text-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-400 dark:text-neutral-200 px-2 pt-2">Portfolio</li>
                    </Link>
                    <Link to={"/#blog"}>
                    <li key="blog-btn" className="text-left text-base font-regular text-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-400 dark:text-neutral-200 px-2 pt-2">Blog</li>
                    </Link>
                    <li key="resume-btn" className="text-left text-base font-regular text-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-400 dark:text-neutral-200 pl-2 pr-4 pt-2"><a target="_blank" rel="noreferrer" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:ed2ef695-c69a-42b2-8f52-c8272e0edc2e">Resume</a></li>
                    <Link to={"/contact"}>
                        <li key="contact-btn" className="rounded-full text-left bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-500 text-neutral-50 text-base px-4 py-2 justify-start">Say hello ????</li>
                    </Link>
                </ul>
            </div>
            <div className="md:hidden">
                <Bars3Icon 
                    className="h-6 w-10 text-neutral-800 dark:text-neutral-200 rounded-full p-1 my-2 bg-neutral-200 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-500 active:bg-neutral-400 dark:active:bg-neutral-400"
                    onClick={() => setShowModal(!showModal)}/>
                {showModal ? <NavModal /> : <div></div> }
            </div>
        </div>
    );
}