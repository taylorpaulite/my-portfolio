import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function NavModal() {
  return (
    <div className="z-10 absolute right-12 top-16 w-60 h-120 rounded-md p-2 bg-neutral-200 dark:bg-neutral-600">
        <div className="px-1">
            <ul className="list-none">
              <Link to={"/#about"}>
                <li key="about-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2">About</li>
              </Link>
              <Link to={"/#portfolio"}>
                <li key="portfolio-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2">Portfolio</li>
              </Link>
              <Link to={"/#blog"}>
                <li key="blog-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 p-2">Blog</li>
              </Link>
                <li key="resume-btn" className="text-center text-base font-regular text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 px-2 pt-2 pb-4"><a rel="noreferrer" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:ed2ef695-c69a-42b2-8f52-c8272e0edc2e">Resume</a></li>
              <Link to={"/contact"}>
                <li key="contact-btn" className="rounded-full text-center bg-neutral-600 dark:bg-neutral-500 hover:bg-neutral-500 dark:hover:bg-neutral-400 text-neutral-50 dark:text-neutral-200 text-base px-4 py-2 justify-start">Say hello 👋</li>
              </Link>
            </ul>
        </div>
    </div>
  )
}
