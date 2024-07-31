"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    async function sequence() {
      // Fade in words one by one
      await animate(
        "span",
        { opacity: 1 },
        { duration: 1, delay: stagger(0.15) }
      );

      await new Promise(resolve => setTimeout(resolve, 2000)); // Added a 2-second pause
      
      // Fade out words one by one in reverse order
      await animate(
        "span",
        { opacity: 0 },
        { duration: 1, delay: stagger(0.2, { start: wordsArray.length - 1, from: "end" }) }
      );
    }

    sequence();
    const interval = setInterval(sequence, (wordsArray.length * 0.2 * 2 + 3) * 1000); // Adjust interval based on animation duration

    return () => clearInterval(interval);
  }, [scope, animate, wordsArray.length]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className={`inline-block 
                        2xl:text-7xl xl:text-5xl lg:text-3xl md:text-xl sm:text-sm
                        2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm
                        font-semibold text-white leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
