import React from 'react';
import Image from 'next/image';
import head from '../../public/head.png';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'



export function Navbar() {

  const textStyle=`text-lg font-medium dark:hover:text-[#CF878E] hover:text-[#B0D6D3] hover-underline-animation`

  // return (
  //   <nav className="fixed top-0 left-0 h-full flex flex-col items-center gap-y-10 p-4">
  //     <div className="sticky flex flex-col items-center space-y-8 mt-8 gap-10">
  //     <a href="/">
  //       <Image href="/" src={head} alt="Logo" width={50} height={50} />
  //     </a>
  //       <a href="#home" className={textStyle} style={{ transform: 'rotate(-90deg)' }}>About</a>
  //       <a href="#about" className={textStyle} style={{ transform: 'rotate(-90deg)' }}>Projects</a>
  //       <a href="#about" className={textStyle} style={{ transform: 'rotate(-90deg)' }}>Experience</a>
  //       <a href="#projects" className={textStyle} style={{ transform: 'rotate(-90deg)' }}>Resume</a>
  //     </div>
  //   </nav>

  return ( 
    <nav className="flex items-center justify-between pt-6">
      <div className="flex flex-shrink-0 items-center">
        <Image href="/" src={head} alt="Logo" width={50} height={50}/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>

    </nav>
  );
}

