"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-teal-300 h-screen flex items-center justify-center px-4 md:px-8">
      <section className="text-gray-800 body-font w-full h-full flex flex-col items-center justify-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-6">
          <Image 
            src="/accessts/picture/" // Ensure your image path is correct
            alt="Zeenat Somroo"
            width={200} 
            height={200} 
            className="rounded-full object-cover mb-6 sm:mb-8 lg:mb-10"
          />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl mb-4 font-extrabold text-gray-900">
            Zeenat Somroo
            <div className="text-teal-600 font-semibold mt-2 sm:mt-4">
              <Typewriter 
                options={{ 
                  strings: ['Full-Stack Developer', 'UI/UX Designer', 'Tech Enthusiast', 'Problem Solver'],
                  autoStart: true,
                  loop: true
                }} 
              />
            </div>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700">
            Hello! I am Zeenat Somroo, a passionate developer with a strong foundation in web technologies. I specialize in building dynamic, user-centric web applications using modern frameworks and tools. My goal is to craft seamless and intuitive digital experiences that make life easier and more efficient.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700">
            I am proficient in a variety of technologies including HTML5, CSS3, JavaScript, TypeScript, React, Next.js, TailwindCSS, and Bootstrap. Whether working on frontend interfaces or backend logic, I take pride in delivering clean, maintainable code that meets both user needs and business goals.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed text-gray-700">
            As a developer, I enjoy taking on challenging projects that push the boundaries of my skills and knowledge. I am always eager to learn and implement the latest technologies and best practices in software development to create innovative solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed text-gray-700">
            Join me as I continue to explore new technologies and contribute to meaningful projects in the ever-evolving world of web development. Let's build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
          

            <Link href="#contact">
              <button className="inline-flex text-gray-800 bg-yellow-400 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-yellow-500 rounded text-sm sm:text-lg">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
