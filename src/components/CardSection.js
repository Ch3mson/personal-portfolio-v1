import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const headingClass = "text-7xl font-extrabold inline-block transform transition duration-300 ease-in-out hover:scale-105 hover:text-[#CF878E]";

export function CardSection() {
  const cardData = [
    {
      title: "LoL-10 Minutes",
      description: "Python, NumPy, Scikit-learn, Plotly, Jupyter",
      content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
      url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
    },
    {
      title: "Titanic Survival Prediction",
      description: "Python, NumPy, Scikit-learn, Jupyter",
      content: "A notebook for the Titanic Kaggle competition that predicts whether a passenger survives or not. Utilizes the random forest classifier algorithm to predict survival with a 78% success rate",
      url: "https://www.kaggle.com/code/chemson/titanic-competition-edited"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className={`pb-18 py-20 text-7xl`}>Projects.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-16 lg:gap-y-0">
        
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-16 max-w-full">
          <a href="#All" className={headingClass}>All.</a>
          <a href="#fullstack" className={headingClass}>Fullstack.</a>
          <a href="#ml" className={headingClass}>ML.</a>
        </div>

        <div className="col-span-1 lg:col-span-2 space-y-10">
          {cardData.map((card, index) => (
            <a 
              key={index} 
              href={card.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-105 flex"
            >
              <Card className="w-full flex flex-col">
                <CardHeader className="flex-none">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto">
                  <div className="flex flex-col space-y-1.5">
                    <p className="leading-7">
                      {card.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}