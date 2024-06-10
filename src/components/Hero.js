"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const words = `Hello there! Welcome to my personal portfolio.`;

export function Hero() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 max-w-7xl lg:py-32">
        <TextGenerateEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        </div>
      </div>
    </div>
  );
}