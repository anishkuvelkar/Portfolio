import React from 'react';
import syracuseImage from '../images/syracuse.JPG'; // Update with your Syracuse University image path
import goaImage from '../images/gec.jpeg'; // Update with your Goa College of Engineering image path


const Education = () => {
  return (
    <section id ="education" className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-8 text-white">
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-orange-500 bg-clip-text mb-12 animate__animated animate__fadeIn">
        Education
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Horizontal Timeline Container */}
        <div className="flex items-center justify-between relative space-x-12">
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 bg-teal-400 w-1 h-full z-0"></div>

          {/* Syracuse University */}
          <div className="flex flex-col items-center text-center relative z-0 w-1/2 animate__animated animate__fadeInLeft animate__delay-1s hover:scale-105 transition-all duration-300">
            <div className="w-32 h-32 bg-teal-400 rounded-full border-4 border-black shadow-xl mb-6 hover:shadow-2xl">
              <img
                src={syracuseImage}
                alt="Syracuse University"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Syracuse University</h3>
            <p className="text-lg text-gray-300 mb-1">M.S. in Computer Engineering</p>
            <p className="text-lg text-gray-300 mb-1">Aug 2023 – May 2025</p>
            <p className="text-lg text-gray-300">Syracuse, NY</p>
          </div>

          {/* Timeline Bar */}
          <div className="w-1/12 bg-teal-400 h-1 z-0"></div>

          {/* Goa College of Engineering */}
          <div className="flex flex-col items-center text-center relative z-0 w-1/2 animate__animated animate__fadeInRight animate__delay-1s hover:scale-105 transition-all duration-300">
            <div className="w-32 h-32 bg-teal-400 rounded-full border-4 border-black shadow-xl mb-6 hover:shadow-2xl">
              <img
                src={goaImage}
                alt="Goa College of Engineering"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Goa College of Engineering</h3>
            <p className="text-lg text-gray-300 mb-1">B.E. in Computer Engineering</p>
            <p className="text-lg text-gray-300 mb-1">July 2018 – July 2022</p>
            <p className="text-lg text-gray-300">Goa, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
