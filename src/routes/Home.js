import React from 'react'

import Highlight from '../Highlight.js';
import About from '../About.js';
import Blog from '../Blog.js';
import Portfolio from '../Portfolio.js';
import Testimonial from '../Testimonial.js';


export default function Home() {
  return (
    <>
        <Highlight />
        <About />
        <Blog />
        <Portfolio />
        <Testimonial person="Heather Wang, PwC Canada" quote="Taylor is a driven individual who approaches problems creatively… she actively seeks out new solutions to big problems... Her endless potential can add value to whatever organization she chooses to contribute to."/>
    </>
  )
}
