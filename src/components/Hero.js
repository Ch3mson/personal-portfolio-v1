import React from "react";
import { AuroraHero } from "./ui/aurora-hero";
import { FlipWords } from "./ui/flip-words";

export function Hero() {

  const words = ["Benson", "Welcome!"];
  const headingClass = "text-7xl font-extrabold inline-block";

  return (
    <div className="h-screen w-full flex justify-center items-center px-4 relative">
      
      
      <div className="py-24 max-w-7xl lg:py-32 relative z-10">
        <div className={headingClass}>
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
}
