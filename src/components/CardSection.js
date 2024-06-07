import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function CardSection() {
  const cardData = [
    {
      title: "LoL-10 Minutes",
      description: "Python, NumPy, Sciit-learn, Plotly, Jupyter",
      content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
      url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
    },
    {
      title: "Titanic Survival Prediction",
      description: "Python, NumPy, SciKitLearn, Jupyter",
      content: "A notebook for the Titanic Kaggle competition that predicts whether a passenger survives or not. Utilizes the random forest classifier algorithm to predict survival with a 78% success rate",
      url: "https://www.kaggle.com/code/chemson/titanic-competition-edited"
    }
  ];

  return (
    <div className="relative overflow-hidden py-24 lg:py-32 flex flex-wrap justify-center items-stretch gap-4">
      
      <div className="relative overflow-hidden py-24 lg:py-32 flex flex-wrap justify-center items-stretch gap-4 flex-col">
        <h1 className="text-7xl">Fullstack.</h1>
        <h1 className="text-7xl">ML.</h1>
      </div>


      {cardData.map((card, index) => (
        <a 
          key={index} 
          href={card.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-105 flex"
        >
          <Card className="w-full md:w-[400px] flex flex-col h-[500px]">
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
  );
}
