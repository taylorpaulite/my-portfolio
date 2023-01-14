import React from 'react';
import Role from './Role.js';
import PeauLogo from './img-peaulogo.png';
import PeauScreens from './img-peauscreens.png';

export default function Peau() {
  return (
    <div className="bg-grid dark:bg-neutral-800 p-12" id="peau">
        <div className="flex flew-row">
            <div className="md:basis-1/2 pb-8">
                <h2 className="text-lg text-left pb-10 font-medium text-lime-600">PEAU</h2>
                <h3 className="text-4xl text-left font-medium pb-8 text-neutral-800 dark:text-neutral-50">Peau's focus is to tackle the issue of finding the right makeup products online</h3>
                <p className="md:hidden text-left text-neutral-600 dark:text-neutral-200 pb-4">Peau is an online makeup marketplace that wanted to enhance the process of finding compatible products by using physical feature-based search.</p>
            </div>
            <div className="hidden md:flex md:basis-1/2 md:content-center">
                <p className="my-auto text-base text-left font-regular text-neutral-600 dark:text-neutral-200 justify-center pl-4">Peau is an online makeup marketplace that wanted to enhance the process of finding compatible products by using physical feature-based search.</p>
            </div>
        </div>
        <div className="flex flex-column pb-8">
            <div className="md:basis-1/2">
                <img src={PeauLogo} alt="peau-logo" className="max-h-80 pb-8 md:hidden"></img>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50 ">Problem</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200">The typical process of shopping for makeup products has relied on in-person testing at brick-and-mortar stores. However, the growth of e-commerce and accessibility to international brands has created a difficult online shopping experience for <a target="_blank" rel="noreferrer" href="https://www.kearney.com/consumer-retail/article/-/insights/beauty-and-the-e-commerce-beast-landing-page" className="hover:text-neutral-700 active:text-neutral-800 dark:hover:text-neutral-300 dark:active:text-neutral-400">91% of beauty consumers.</a></p>
                </div>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50 ">Process</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">In 2018, Peau's focus was to understand the common issues beauty consumers face when shopping for makeup products online.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">As the <span className="italic">Product Manager & Co-founder</span>, my role was to interview those beauty consumers and understand their pain points. Many of them were interviewed to help build a user persona for our target market.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">Additionally, their feedback was used to build a product roadmap and backlog that were used to create sprint backlogs for the design and development team members.</p>
                </div>
            </div>
            <div className="hidden md:block md:basis-1/2">
                <img src={PeauLogo} alt="peau-logo" className="pl-4 max-h-80"></img>
            </div>
        </div>
        <div className="flex flex-column">
            <div className="md:basis-1/2">
                <img src={PeauScreens} alt="peau-mockup" className="md:hidden max-h-80 pb-8"></img>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-600 dark:text-neutral-50">Solution</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">Peau chose to focus on physical feature-based filters and harnessing social validation for their beauty marketplace. </p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">This allowed platform users to create a third-party social platform, eliminating review censorship on brand websites & re-sellers, which helped establish user trust.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 italic">As of 2020, some Peau team members pivoted to focus on the user problems specific to the skincare industry -- as it was set to outgrow the makeup industry in the coming years. This team sunset Peau and migrated over to work on Owns.</p>
                </div>
                <div className="pr-4">
                    <Role group="Key Takeaways">
                        <li className="text-left">Continuously keep track of both user problems & market trends</li>
                        <li className="text-left">Perform root cause analysis after every user interview</li>
                        <li className="text-left">Build user journey maps to help prioritize the backlog</li>
                        <li className="text-left">Be product vision-driven vs a “feature factory”</li>
                        <li className="text-left">Perform presentations to internal & external key stakeholders</li>
                    </Role>
                </div>
            </div>
            <div className="hidden md:block md:basis-1/2 pl-4">
                <img src={PeauScreens} alt="peau-mockup" className="max-h-80"></img>
            </div>
        </div>       
    </div>
  )
}
