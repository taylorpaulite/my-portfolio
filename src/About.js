import React from 'react';
import Role from './Role.js';

export default function About() {
    const snippetOne = "Inspired by my background in the sciences, I enjoy gathering data and making sense of it through experimentation & problem-solving. My goal is to empathize with users to improve their product experience."
    const snippetTwo = "For over 4 years, I've worked with companies in various industries like consumer goods, SaaS, and e-commerce - to help them solve their user's pain points by creating or improving their products. I’m naturally curious, driven by optimization and appreciate challenging problems."
    const snippetThree = "Along the way, I've learned skills in data management, design, and development - and will continuously grow my skills one user problem at a time."

    return (
        <div className="px-12 pt-12 pb-8" id="about">
            <div className="flex flew-row">
                <div className="basis-3/4 pb-12">
                    <h2 className="text-lg text-left pb-10 font-medium text-lime-600">ABOUT</h2>
                    <h3 className="text-4xl text-left font-medium pb-8 text-neutral-800 dark:text-neutral-50 ">4+ years of experience in product management</h3>
                    <p className="text-l text-left font-regular pb-4 text-neutral-600 dark:text-neutral-200">{snippetOne}</p>
                    <p className="text-l text-left font-regular pb-4 text-neutral-600 dark:text-neutral-200">{snippetTwo}</p>
                    <p className="text-l text-left font-regular text-neutral-600 dark:text-neutral-200">{snippetThree}</p>
                </div>
                <div></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Role group="Product Management">
                    <li>Vision, roadmap & backlog</li>
                    <li>Agile project management</li>
                    <li>Leadership & communication</li>
                    <li>Presentations & public speaking</li>
                    <li>User & market analysis</li>
                </Role>
                <Role group="Data Management">
                    <li>Setting & tracking metrics</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>R</li>
                    <li>SAS</li>
                </Role>
                <Role group="Design">
                    <li>Conducting user interviews</li>
                    <li>Building user personas</li>
                    <li>Wireframes & mockups</li>
                    <li>Graphic design & branding</li>
                    <li>Figma, Sketch & InVision</li>
                </Role>
                <Role group="Development">
                    <li>Detailing story requirements</li>
                    <li>Frontend development</li>
                    <li>HTML & CSS</li>
                    <li>Javascript & React</li>
                    <li>Bootstrap & TailwindCSS</li>
                </Role>
            </div>
        </div>
    );
}