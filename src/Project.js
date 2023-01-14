import React from 'react';
import { Link } from "react-router-dom";

export default function Project({projectName, description, srcLink, altDesc, imgLink, linkTo}) {
    return (
        <div className="p-12">
            <Link to={linkTo}>
                <img src={srcLink} alt={altDesc} className="pb-8 max-h-96" />
            </Link>
            <Link to={linkTo}>
                <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50  hover:text-neutral-500 active:text-neutral-600 dark:hover:text-neutral-400 dark:active:text-neutral-300">{projectName}</h4>
            </Link>
            <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200">{description}</p>
        </div>
    )
}