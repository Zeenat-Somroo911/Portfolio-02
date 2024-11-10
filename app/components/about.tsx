"use clients";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-pink-500 to-red-500">
      <section className="text-white-900 body-font">
        <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-col md:flex-row items-center">
          
          <div className="order-first md:order-last lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-8 md:mt-0 md:ml-8">
            <Image
              className="object-cover object-center rounded-full w-full h-auto"
              alt="zeenat"
              src="/mydp.jpg"
              width={200} 
              height={200} 
              priority={true} 
            />
          </div>
          
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
              Explore about me
            </h1>
            <p className="mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
  Welcome to my portfolio! I am a passionate developer with a deep interest in building impactful and user-friendly applications. With expertise in modern web development technologies such as TypeScript, JavaScript, HTML, CSS, and frameworks like React, Next.js, and Tailwind CSS, I enjoy creating seamless, scalable, and performant web experiences.
  <br />
  <br />
  My journey in development has been driven by a desire to craft clean, efficient, and maintainable code. Whether working on frontend interfaces or backend architecture, I focus on delivering high-quality solutions that meet user needs and business objectives. I am constantly exploring new tools, libraries, and best practices to improve my skills and stay current in the fast-evolving tech landscape.
  <br />
  <br />
  I thrive in collaborative environments where I can contribute to meaningful projects, tackle challenges, and continuously grow as a developer. Whether it’s building dynamic user interfaces or developing API services, I am always excited about leveraging technology to solve real-world problems.
  <br />
  <br />
  Thank you for visiting my portfolio! Feel free to explore my projects, and let’s connect if you’d like to collaborate on an exciting project or share insights on the latest in software development!
</p>

            <div className="flex flex-wrap justify-center md:justify-start">
              {/* Link with legacyBehavior for "View My Skills" */}
              <Link href="#skills" legacyBehavior>
                <>
                  <button className="mb-2 md:mb-0 mr-2 inline-flex text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base lg:text-lg">
                    View My Skills
                  </button>
                </>
              </Link>
          
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
