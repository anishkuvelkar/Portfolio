import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../images/HeroImg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col lg:flex-row items-center justify-between bg-black py-20 px-8 text-white"
    >
      {/* Left Side: Description */}
      <div className="w-full lg:w-1/2">
        {/* Animate the Name */}
        <motion.h1 
          className="text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anish Kuvelkar
        </motion.h1>

        {/* Animate the Role/Description */}
        <motion.p 
          className="text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-300 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          AI/ML Engineer | Full Stack Developer | Data Analyst
        </motion.p>

        {/* Animate the Intro Paragraph */}
        <motion.p 
          className="text-lg mb-4 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I am a Computer Engineer with a Master’s degree from Syracuse University, specializing in 
          <span className="mx-1 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold drop-shadow-md hover:scale-105 hover:drop-shadow-xl transition duration-300 ease-in-out cursor-pointer">Machine Learning</span>, 
          <span className="mx-1 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold drop-shadow-md hover:scale-105 hover:drop-shadow-xl transition duration-300 ease-in-out cursor-pointer">Data Science</span>, 
          <span className="mx-1 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent font-bold drop-shadow-md hover:scale-105 hover:drop-shadow-xl transition duration-300 ease-in-out cursor-pointer">NLP</span>, and 
          <span className="mx-1 bg-gradient-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent font-bold drop-shadow-md hover:scale-105 hover:drop-shadow-xl transition duration-300 ease-in-out cursor-pointer">Full Stack Development</span>. 
          I have applied advanced analytics and AI models to domains such as public health, e-commerce, and user behavior research—delivering measurable results through predictive modeling, segmentation, and scalable deployments. 
          I excel at building end-to-end data solutions, from integrating large datasets to deploying reliable ML pipelines in the cloud, always optimizing for performance and usability. 
          Looking ahead, I want to continue creating innovative, data-driven applications that solve complex problems and empower organizations to make smarter, evidence-based decisions.
        </motion.p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <motion.img 
          src={HeroImg} 
          alt="Anish"
          className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-purple-600 hover:scale-105 transition duration-500 ease-in-out"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
