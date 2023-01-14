import React from 'react';
import { Link } from "react-router-dom";

import Project from './Project.js';
import OwnsCoverImg from './img-ownshighlight.png';
import PeauCoverImg from './img-peauhighlight.png';

export default function Portfolio() {
;
    return (
        <div className="pt-12" id="portfolio">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg text-left px-12 font-medium text-lime-600">PORTFOLIO</h2>
                <Link to={"/contact"}>
                    <p className="text-base font-medium text-left px-12 text-neutral-800 dark:text-neutral-200 hover:text-neutral-500 active:text-neutral-600 dark:hover:text-neutral-400 dark:active:text-neutral-300">Request more samples {'>'}</p>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2">
                <Project 
                    altDesc="peau-cover-img" 
                    linkTo="/peau" 
                    srcLink={PeauCoverImg} 
                    projectName="Peau" 
                    description="A beauty feature centered approach to shopping for makeup products online.">
                </Project>
                <Project 
                    altDesc="owns-cover-img" 
                    linkTo="/owns" 
                    srcLink={OwnsCoverImg} 
                    projectName="Owns" 
                    description="A beauty e-commerce marketplace that connects niche skincare brands to their target communities.">
                </Project>
            </div>
        </div>
    )
}