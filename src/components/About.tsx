import React from 'react';
import coding from '../images/coding.png';
// import image1 from '../images/casual-life-3d-likes.png';
import image1 from '../images/banner.gif';

//casual-life-3d-likes
function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-7 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center order-last">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Fe. &nbsp;
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500">
            I am naturally curious and wants to be always up to date when it
            comes to technologies and trends.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white"
            >
              See My Past Work
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pr-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image1}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
