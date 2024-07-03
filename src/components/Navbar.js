import React from 'react';
import Image from 'next/image';
import head from '../../public/head.png';



export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-full flex flex-col items-center gap-y-10 p-4">
      <div className="sticky flex flex-col items-center space-y-8 mt-8 gap-10">
      <a href="/">
        <Image href="/" src={head} alt="Logo" width={50} height={50} />
      </a>
        <a href="#home" className={`text-lg font-medium text-gray-800 hover:text-[#B0D6D3]`} style={{ transform: 'rotate(-90deg)' }}>Home</a>
        <a href="#about" className={`text-lg font-medium text-gray-800 hover:text-[#B0D6D3]`} style={{ transform: 'rotate(-90deg)' }}>About</a>
        <a href="#projects" className={`text-lg font-medium text-gray-800 hover:text-[#B0D6D3]`} style={{ transform: 'rotate(-90deg)' }}>Projects</a>
        <a href="#contact" className={`text-lg font-medium text-gray-800 hover:text-[#B0D6D3]`} style={{ transform: 'rotate(-90deg)' }}>Contact</a>
      </div>
    </nav>
  );
}

