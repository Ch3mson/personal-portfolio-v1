import Image from 'next/image';
import { Button } from "@/components/ui/button";

const headingClass = "text-7xl font-extrabold inline-block";

export function Hero() {
  return (
      <div className="bg-transparent flex items-center justify-center">
        <div className="relative overflow-hidden py-24 pl-24 max-w-7xl lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col w-full">
          <div className="text-center xl:text-left flex flex-col">
            <h1 className={`text-4xl xs:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line ${headingClass}`}>Yan</h1>
            <h1 className={`text-4xl xs:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line ${headingClass}`}>Benson</h1>
          </div>
        </div>
      </div>
  );
}