import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Correct import from 'fa'
import { SiVercel } from 'react-icons/si'; // Correct import from 'si'
import Link from 'next/link';
import { IconBaseProps } from 'react-icons';

const MyIcon: React.FC<IconBaseProps> = (props) => {
  return <FaGithub {...props} />;
};

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600">
      <section className="text-gray-900 body-font relative">
        <div className="container px-4 sm:px-6 lg:px-8 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl sm:text-3xl font-semibold title-font mb-4 text-white">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-200">
              Feel free to contact me
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-700 rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center">
                <a className="text-gray-200 hover:text-teal-400">zeenatsomroo29@gmail.com</a>
                <p className="leading-normal my-5 text-gray-200">
                  Malir Memon Goth
                  <br />
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/account" passHref>
                    <FaGithub className="text-white hover:text-teal-400" />
                  </Link>

                  <Link href="https://vercel.com/zeenat-somroo911" passHref>
                    <SiVercel className="text-white hover:text-teal-400" />
                  </Link>

                  <Link href="https://www.linkedin.com/in/zeenat-somroo-76b5872bb" passHref>
                    <FaLinkedin className="text-white hover:text-teal-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
