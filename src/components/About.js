const headingClass = "text-7xl inline-block";

export function About() {
    return (
        <div className="flex items-center justify-start mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-24 max-w-7xl lg:py-32">
                <h1 className={headingClass}>About.</h1>
                <p className="leading-7 mt-6 text-xl text-justify">
                    Hi! My name is Benson Yan and I am a student from The University of Waterloo studying computer science working towards an Artificial Intelligence specialization.
                </p>
                <p className="leading-7 mt-6 text-xl text-justify">
                    I have been coding since grade 10, starting off with HTML/CSS and learning Java in grade 11/12. In university,
                    I have branched off to learning C, Python, and Javascript. Above is the link to my resume if you are interested in learning more about me.
                    Below are some of my notable projects that showcase my ability as a full-stack web developer, data scientist, and machine learning engineer.
                    My most comprehensive ones being my detailed analysis of 7000 high elo League of Legends games available on my Kaggle, and my Discord Pokemon Battle
                    Simulator.
                </p>
                <p className="leading-7 mt-6 text-xl text-justify">
                    On my spare time, you will see me playing League of Legend, sleeping, or eating.
                </p>
            </div>
        </div>
    );
}
