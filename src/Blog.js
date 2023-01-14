import React from 'react'

export default function Blog() {
  return (
    <div className="bg-grid bg-neutral-100 dark:bg-neutral-700 px-12 pt-12 pb-8" id="blog">
        <div className="flex flew-row">
            <div className="basis-3/4 pb-12">
                <h2 className="text-lg text-left pb-10 font-medium text-lime-600">BLOG</h2>
                <h3 className="text-4xl text-left font-medium pb-8 text-neutral-800 dark:text-neutral-50 ">Documenting knowledge through a personal wiki</h3>
                <p className="text-l text-left font-regular pb-4 text-neutral-600 dark:text-neutral-200">A personal blog hosted through a private wiki. Learn more about my experience with product management, agile project management, development, design and more.</p>
                <p className="text-base font-medium text-left text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 active:text-neutral-600 dark:hover:text-neutral-400 dark:active:text-neutral-300"><a target="_blank" rel="noreferrer" href="https://taylorpaulite.slab.com/register/qy3nd2p9/UKITVf4858brOSmEY5Ltl6Md">Request Slab access {'>'}</a></p>
            </div>
            <div></div>
        </div>
    </div>
  )
}
