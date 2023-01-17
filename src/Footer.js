import React from 'react';

import DribbbleIcon from './icon-dribbble.png';
import EmailIcon from './icon-email.png';
import GithubIcon from './icon-github.png';
import LinkedinIcon from './icon-linkedin.png';
import TwitterIcon from './icon-twitter.png';

export default function Footer() {
    return (
        <div className="bg-neutral-800 dark:bg-neutral-700 flex flex-row flex-wrap px-12 py-6 justify-between ">
            <div className="flex justify-end mr-8 content-center my-auto w-48">
                <a target="_blank" rel="noreferrer" href="mailto:taylor.paulite@gmail.com?subject=Hi%2C%20I%20read%20your%20portfolio%20and%20would%20like%20to%20chat%20%F0%9F%91%8B&body=Hi%20Taylor%2C%0D%0A%0D%0AMy%20name%20is%20(your%20name%20here)%20and%20I'd%20like%20to%20chat%20about%20your%20portfolio%20website.%0D%0A%0D%0ARegards%2C%0D%0A(Your%20name%20here)"><img className="pr-2" src={EmailIcon} alt="email-button"></img></a>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/taylorpaulite"><img className="px-2" src={LinkedinIcon} alt="linkedin-button" href="https://linkedin.com/in/taylorpaulite/"></img></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/taylorpaulite"><img className="px-2" src={TwitterIcon} alt="twitter-button"></img></a>
                <a target="_blank" rel="noreferrer" href="https://dribbble.com/taylorpaulite"><img className="px-2" src={DribbbleIcon} alt="dribbble-button"></img></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/taylorpaulite"><img className="px-2" src={GithubIcon} alt="github-button"></img></a>
            </div>
            <p className="flex-none text-right text-base pt-4 md:pt-0 md:text-lg font-semibold text-neutral-50 content-center"><span className="text-base md:text-lg font-normal text-right text-neutral-50 content-center">Designed & developed by </span>Taylor Paulite</p>
        </div>
    );
}