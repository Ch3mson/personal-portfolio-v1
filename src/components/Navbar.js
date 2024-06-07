import React from 'react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 h-full flex flex-col items-start p-4">
        <a href="#home" className="mb-4 text-xl font-medium text-gray-800 hover:text-gray-600">Home</a>
        <a href="#about" className="mb-4 text-xl font-medium text-gray-800 hover:text-gray-600">About</a>
        <a href="#projects" className="mb-4 text-xl font-medium text-gray-800 hover:text-gray-600">Projects</a>
        <a href="#contact" className="text-xl font-medium text-gray-800 hover:text-gray-600">Contact</a>
      </nav>
    );
}
