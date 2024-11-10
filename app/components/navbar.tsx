import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 z-50 sticky top-0 shadow-md">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/mydp.jpg"  // Ensure the image path is correct
              alt="zeenat somroo" 
              width={50} 
              height={50} 
              className="rounded-full h-16 w-16 object-cover"
            />
            <span className="ml-3 text-xl font-semibold"></span>
          </div>

          <nav className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
            <Link href="#home" className="hover:text-gray-600 transition-colors duration-900">Home</Link>
            <Link href="#about" className="hover:text-gray-600 transition-colors duration-900">About</Link>
            <Link href="#skills" className="hover:text-gray-600 transition-colors duration-900">Skills</Link>
            <Link href="#contact" className="hover:text-gray-600 transition-colors duration-900">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
