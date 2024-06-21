"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const headingClass = "inline-block text-7xl font-bold"; // Updated to h1 style

  useEffect(() => {
    async function sequence() {
      // Fade in words one by one
      await animate(
        "span",
        { opacity: 1 },
        { duration: 1, delay: stagger(0.2) }
      );
      // Fade out words one by one in reverse order
      await animate(
        "span",
        { opacity: 0 },
        { duration: 1, delay: stagger(0.2, { start: wordsArray.length - 1, from: "end" }) }
      );
    }

    sequence();
    const interval = setInterval(sequence, (wordsArray.length * 0.2 * 2 + 2) * 1000); // Adjust interval based on animation duration

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
        <div className={`${headingClass} dark:text-white leading-snug tracking-wide`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
