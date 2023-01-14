import React from 'react'

export default function Contact() {
  return (
    <div className="block lg:flex lg:flex-row px-12 py-24">
        <div className="lg:basis-1/2">
            <h1 className="text-5xl font-medium text-neutral-800 dark:text-neutral-50 text-left pb-4">Thanks for taking the time to reach out.<span className="text-lime-600"> How can I help you today?</span></h1>
            <p className="text-left text-medium pb-8 text-neutral-600 dark:text-neutral-200">Feel free to send me an e-mail via the form or say hello through direct message through the below platforms.</p>
        </div>
        <div className="block lg:basis-1/2 content-center lg:pl-12">
            <form name="contact" method="POST" data-netlify="true">
                <input 
                    type="hidden" 
                    name="subject" 
                    value="Contact form from taylorpaulite.com" />
                <p className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50 pb-2">
                    <label className="">Full Name</label>
                </p>
                <input type="text" alt="" name="name" required className="block border rounded border-neutral-200 p-2 w-full text-neutral-600"/>
                <p className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50 pt-4">
                    <label>Email Address</label>
                </p>
                <input type="email" name="email" required className="block border rounded border-neutral-200 p-2 w-full text-neutral-600"/>
                <p className="text-base text-left font-medium text-neutral-800 dark:text-neutral-50 pt-4">
                    <label>Message</label>
                </p>
                <textarea name="message" required className="block border rounded border-neutral-200 p-2 pb-12 mb-8 w-full text-neutral-600"></textarea>
                <button type="submit" key="contact-btn" className="rounded-full block text-left bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-500 text-neutral-50 text-base px-4 py-2 justify-start">Submit</button>
            </form>
        </div>
    </div>
  )
}
