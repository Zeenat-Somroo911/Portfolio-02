import React from 'react';
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { SiTypescript, SiBootstrap } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-red-500">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* HTML Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-pink-500">
                <IoLogoHtml5/>
              </div>
              <h2 className="text-gray-900 text-lg font-medium">HTML</h2>
            </div>
          </div>

          {/* CSS Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                <IoLogoCss3 />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">CSS</h2>
            </div>
          </div>

          {/* TypeScript Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                <SiTypescript />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">TypeScript</h2>
            </div>
          </div>

          {/* Tailwind CSS Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                <RiTailwindCssFill  />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">Tailwind CSS</h2>
            </div>
          </div>

          {/* Bootstrap Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                <SiBootstrap />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">Bootstrap</h2>
            </div>
          </div>

          {/* Next.js Skill */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-full h-48 w-48 text-center space-y-3">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                <RiNextjsFill  />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">Next.js</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
