
export function About() {
    return(
        <>
            <div className="relative overflow-hidden py-24 lg:py-32">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                    Hi! I'm Benson Yan and I am a student from The University of Waterloo studying computer science!
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                    I'm currently pursuing an Artificial Inteligence specialization.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                    Below are some of my notable projects that showcases my ability as a software engineer. I am capable in fullstack web development, as well as data science/ML.
                </p>
                
            </div>

            <div class="container mx-auto w-3/5 p-4">
                <div className="grid items-center gap-4 relative overflow-hidden py-24 lg:py-32 lg:grid-cols-2 grid-cols-1">
                    <div className="text-center">THIS IS ITEM 1</div>
                    <div className="text-center">THIS IS ITEM 2</div>
                </div>
            </div>
    
        </>
    );
}
