export function Hero() {
    return (
      <div className="container mx-auto max-w-4xl px-2 flex items-start justify-between"> {/* Changed items-center to items-start */}

        <div className="max-w-lg space-y-7">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            I’m Benson Yan. I live in Vancouver and study at Waterloo.
          </h1>
        <div>
          
        </div>
          <p className="text-[#97979f]">Hi!, I'm Benson Yan, a Computer Science student at the University of Waterloo</p>
          <p className="text-[#97979f]">I am currently on my co-op term where I am working at Cornerstone Realty Marketing in Markham. I am also taking Intro to Optimization (CO250) as an additional courseload.</p>
          <p className="text-[#97979f]">
            My whole life, I have been an avid learner. I am heavily intrigued in various areas of computer science, as I have created projects on Full-stack Development, Data Science, and Machine Learning. 
            Most notably, I utilized Pandas and numPy to manipulate a dataset of 9000 high elo League of Legend games to determine what maximizes the chances to win a game.
          </p>
          <p className="text-[#97979f]">Outside of studying, you will find me playing badminton, eating, and sleeping.</p>
          <p className="text-[#97979f]">Below are some of my work:</p>
        </div>


      <div className="space-y-4">
        <img src="https://a.ppy.sh/14617228?1689188628.jpeg" alt="Benson Yan" className="block"/>
        <a href="#" className="block text-center text-white">Follow on Xvideos</a>
        <a href="#" className="block text-center text-white">Follow on Instagram</a>
        <a href="#" className="block text-center text-white">Follow on GitHub</a>
        <a href="#" className="block text-center text-white">Follow on LinkedIn</a>
      </div>
    </div> 
    )
  }
  