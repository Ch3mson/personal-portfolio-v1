'use client'
import React, { useEffect, useRef } from "react";

export function About() {

    return (
        <div className="flex items-center justify-start mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen">
            <div className="py-24 max-w-7xl py-32">
                <h1 className={`text-7xl inline-block`}>About.</h1>
                <p className="leading-7 mt-6 text-xl">
                    Hi! My name is Benson Yan and I am a student at The University of Waterloo, studying computer science with a specialization in Artificial Intelligence.
                    I am currently in my 2A term, taking Linear Algebra 2, Intro to Statistics, Object Oriented Programming, Logic and Computation, and Cognitive Processes.
                </p>
                <p className="leading-7 mt-6 text-xl">
                    I have been introduced to coding since grade 10, starting off with HTML/CSS and learning Java in grades 11 and 12. 
                    In university, I have branched out to learning C, Python, and JavaScript. 
                    Above is the link to my resume if you are interested in learning more about me. 
                    Below are some of my notable projects that showcase my abilities as a full-stack web developer, data scientist, and machine learning engineer. 
                </p>
                <p className="leading-7 mt-6 text-xl">
                In my recent co-op at Cornerstone Marketing Realty, I took initiative by reducing the need for manually searching for neighbourhood data
                by developing a notebook to expidites processing data in 148 Toronto neighbourhoods for real-estate developers 
                and consultants.
                </p>
                <p className="leading-7 mt-6 text-xl">
                    In my spare time, you will find me playing League of Legends, sleeping, or eating.
                </p>
            </div>
        </div>
    );
}


// 2xl:text-7xl xl:text-5xl lg:text-3xl md:text-xl sm:text-sm
// 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm