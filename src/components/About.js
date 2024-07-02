'use client'
import { motion } from "framer-motion";

const headingClass = "text-7xl inline-block";

export function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-start mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen"
        >
            <div className="py-24 max-w-7xl lg:py-32">
                <h1 className={headingClass}>About.</h1>
                <p className="leading-7 mt-6 text-xl text-justify">
                    Hi! My name is Benson Yan and I am a student at The University of Waterloo, studying computer science with a specialization in Artificial Intelligence.
                </p>
                <p className="leading-7 mt-6 text-xl text-justify">
                    I have been coding since grade 10, starting off with HTML/CSS and learning Java in grades 11 and 12. In university, I have branched out to learning C, Python, and JavaScript. Above is the link to my resume if you are interested in learning more about me. Below are some of my notable projects that showcase my abilities as a full-stack web developer, data scientist, and machine learning engineer. My most comprehensive ones include my detailed analysis of 7,000 high-elo League of Legends games available on my Kaggle, and my Discord Pokémon Battle Simulator.
                </p>
                <p className="leading-7 mt-6 text-xl text-justify">
                    In my spare time, you will find me playing League of Legends, sleeping, or eating.
                </p>
            </div>
        </motion.div>
    );
}
