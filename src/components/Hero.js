"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

const headingClass = "text-7xl font-extrabold inline-block";

export function Hero() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden rounded-md mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <div className="flex items-center justify-center order-1 md:order-1">
            <img
              src="/profilepic.jpg"
              alt="Yan Benson"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center space-y-4 order-2 md:order-2">
            <h1 className={headingClass}>
              Yan
            </h1>
            <h1 className={headingClass}>
              Benson
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
