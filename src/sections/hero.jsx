import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../images/HeroImg.jpg';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-between bg-black py-20 px-8 text-white">
      {/* Left Side: Description */}
      <div className="w-full lg:w-1/2">
        {/* Animate the Name */}
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anish Kuvelkar
        </motion.h1>

        {/* Animate the Role/Description */}
        <motion.p 
          className="text-3xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          AI/ML Engineer | Full Stack Developer | Data Analyst
        </motion.p>

        {/* Animate the Paragraph */}
        <motion.p 
          className="text-lg mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I am a Computer Engineer pursuing my Master’s at Syracuse University, specializing in Machine Learning, Data Science, NLP, and Full Stack Development.
          With a strong background in ML/AI and NLP, I have worked on a diverse range of projects, from predictive analytics to scalable web applications.
          My expertise lies in developing data-driven solutions, optimizing performance, and integrating AI into real-world applications.
        </motion.p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {/* Animate the Image */}
        <motion.img 
          src={HeroImg} 
          alt="Anish"
          className="rounded-lg shadow-lg max-w-full h-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
