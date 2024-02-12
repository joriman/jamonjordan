import React, { useState } from "react";

const ContactMeSection = () => {
    
    return (
        <div className="grid md:grid-cols-2 relative">
            <div className="flex flex-col justify-center text-center mb-6">
                <p className="text-gray-800 dark:text-gray-200 font-medium text-lg md:mx-12 max-w-md">
                    I always enjoy hearing from new people.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
            </div>
            
            <div className=" p-4 md:p-8 rounded-2xl border border-blue-900">
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-gray-800 block mb-2 text-md font-semibold"
                        >
                        Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="youremail@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-gray-800 block text-md mb-2 font-semibold"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            required
                            className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Re: Why you want to message me"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-gray-800 block text-md mb-2 font-semibold"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-royal-navy border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Write here the details!"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 border-2 border-yellow-500 hover:bg-royal-navy hover:text-yellow-500 hover:border-yellow-500 text-royal-navy dark:text-white font-semibold py-2 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMeSection;