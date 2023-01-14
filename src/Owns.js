import React from 'react';
import Role from './Role.js';
import OwnsLogo from './img-ownslogo.png';
import OwnsScreens from './img-ownsscreens.png';

export default function Owns() {
  return (
    <div className="bg-grid dark:bg-neutral-800 p-12" id="owns">
        <div className="flex flew-row">
            <div className="md:block md:basis-1/2 pb-8">
                <h2 className="text-lg text-left pb-10 font-medium text-lime-600">OWNS</h2>
                <h3 className="text-4xl text-left font-medium pb-8 text-neutral-800 dark:text-neutral-50">Owns' focus is to help beauty consumers find niche skincare brands based on their skincare needs</h3>
                <p className="md:hidden text-left text-neutral-600 dark:text-neutral-200 pb-4">Owns is a skincare marketplace that wanted to personalize the online shopping experience to show niche skincare brands tailored to their personal skincare needs and concerns.</p>
            </div>
            <div className="hidden md:flex md:basis-1/2 md:content-center">
                <p className="my-auto text-base text-left font-regular pb-4 text-neutral-600 dark:text-neutral-200 justify-center pl-4">Owns is a skincare marketplace that wanted to personalize the online shopping experience to show niche skincare brands tailored to their personal skincare needs and concerns.</p>
            </div>
        </div>
        <div className="flex flex-column">
            <div className="md:basis-1/2">
                <img src={OwnsLogo} alt="peau-logo" className="md:hidden max-h-80 pb-8"></img>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50">Problem</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200">The rise of the skincare industry can be linked to the rise of interest in wellness and K-beauty. However, the North American market has focused so much on the makeup industry that it leaves shoppers confused. <a target="_blank" href="https://www.kearney.com/consumer-retail/article/-/insights/beauty-and-the-e-commerce-beast-landing-page" className="hover:text-neutral-700 active:text-neutral-800 dark:hover:text-neutral-300 dark:active:text-neutral-400">64% of beauty consumers use 4+ platforms</a> before considering a skincare purchase online.</p>
                </div>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50">Process</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">In 2020, Owns' focus was to understand the needs of beauty shoppers when they are looking to buy skincare product online and how they differ from the purchasing process for makeup products.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">As the Product Manager & Co-founder, my role was to interview beauty consumers to understand their purchasing process, interview skincare beauty brands to understand how they reach their customers, and to perform market analyses on the growth of the skincare industry in other continents such as Asia and Europe.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">All of the research was synthesized and presented to the team for the roadmap, backlog, and sprint creation process.</p>
                </div>
            </div>
            <div className="hidden md:block md:basis-1/2">
                <img src={OwnsLogo} alt="peau-logo" className="pl-4 max-h-80"></img>
            </div>
        </div>
        <div className="flex flex-column">
            <div className="md:basis-1/2">
                <img src={OwnsScreens} alt="peau-mockup" className="max-h-80 md:hidden pb-8"></img>
                <div className="pb-8 pr-4">
                    <h4 className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50">Solution</h4>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">Owns chose to focus on skincare needs to help beauty consumers filter their shopping experience and to help beauty brands target their ideal market.</p>
                    <p className="text-base text-left font-regular text-neutral-600 dark:text-neutral-200 pb-4">This allowed platform users to access niche beauty brands with unique value propositions.</p>
                </div>
                <div className="pr-4">
                    <Role group="Key Takeaways">
                        <li className="text-left">Execute agile project management strategies</li>
                        <li className="text-left">Translate user needs into user stories</li>
                        <li className="text-left">Balance both user and customer needs</li>
                        <li className="text-left">Communicate through work management tools like Jira</li>
                        <li className="text-left">Visualize requirements through wireframes & mockups</li>
                    </Role>
                </div>
            </div>
            <div className="hidden md:block md:basis-1/2 pl-4">
                <img src={OwnsScreens} alt="peau-mockup" className="max-h-80"></img>
            </div>
        </div>       
    </div>
  )
}
