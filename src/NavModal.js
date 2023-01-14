import React from 'react'

export default function NavModal() {
  return (
    <div className="z-10 absolute right-12 top-16 w-60 h-120 rounded-md p-2 bg-neutral-200 dark:bg-neutral-600">
        <div className="px-1">
            <ul className="list-none">
                <li key="about-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2"><a href="#about">About</a></li>
                <li key="portfolio-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2"><a href="#portfolio">Portfolio</a></li>
                <li key="blog-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2"><a href="#blog">Blog</a></li>
                <li key="resume-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 px-2 pt-2 pb-4"><a href="https://acrobat.adobe.com/link/home/" target="_blank" rel="noreferrer">Resume</a></li>
                <li key="contact-btn" className="rounded-full text-center bg-neutral-600 dark:bg-neutral-500 hover:bg-neutral-500 dark:hover:bg-neutral-400 text-neutral-50 dark:text-neutral-200 text-base px-4 py-2 justify-start"><a href="mailto:taylor.paulite@gmail.com">Say hello 👋</a></li>
            </ul>
        </div>
    </div>
  )
}
