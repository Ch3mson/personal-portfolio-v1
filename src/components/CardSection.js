import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'; // Adjust import paths accordingly

export function CardSection() {
  const cardData = [
    {
      title: "LoL-10 Minutes",
      description: "Python, NumPy, SciKitLearn, Jupyter",
      content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
      url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
    },
    {
        title: "LoL-10 Minutes",
        description: "Python, NumPy, SciKitLearn, Jupyter",
        content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
        url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
      },
      {
        title: "LoL-10 Minutes",
        description: "Python, NumPy, SciKitLearn, Jupyter",
        content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
        url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
      },
      {
        title: "LoL-10 Minutes",
        description: "Python, NumPy, SciKitLearn, Jupyter",
        content: "A comprehensive data analysis project that analyzes 7000 League of Legends games in diamond+. The notebook features multiple graphs from Plotly to model key parameters that have the highest probability of winning the game. Finally, Bayesian Optimization is used to predict the probability of a player to win a game based on the actions they make in the first 10 minutes.",
        url: "https://www.kaggle.com/code/servietsky/league-of-legends-what-to-do-in-first-10-min"
      },
  ];

  return (
    <div className="relative overflow-hidden py-24 lg:py-32 flex flex-wrap justify-center items-center gap-4">
      {cardData.map((card, index) => (
        <a 
          key={index} 
          href={card.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <Card className="w-full md:w-[400px]">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <p className="leading-7">
                    {card.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
