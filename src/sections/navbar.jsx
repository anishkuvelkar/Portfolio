import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  // Handle active link based on scroll position
  const handleScroll = () => {
    const sections = ['home', 'experience', 'projects', 'education', 'technologies', 'contact'];
    let currentSection = '';

    // Loop through each section and check if it's in the viewport
    sections.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      
      // If the top of the section is within the viewport, set it as the current section
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section;
      }
    });

    // Update the active link in state
    if (currentSection !== activeLink) {
      setActiveLink(currentSection);
      // Update the URL hash without reloading the page
      window.history.replaceState(null, '', `#${currentSection}`);
    }
  };

  useEffect(() => {
    // Attach the handleScroll event listener on scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]); // Re-run effect when activeLink changes

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white py-4 px-8 flex items-center justify-between fixed w-full z-10 shadow-lg">
      {/* Logo or Title */}
      <div className="text-xl font-semibold">
        <span className="text-cyan-200">Anish Kuvelkar</span>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <a
          href="#home"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'home' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Home
        </a>
        <a
          href="#experience"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'experience' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'projects' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Projects
        </a>
        <a
          href="#education"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'education' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Education
        </a>
        <a
          href="#technologies"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'technologies' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Technologies
        </a>
        <a
          href="#contact"
          className={`hover:text-cyan-400 transition-colors ${activeLink === 'contact' ? 'text-cyan-400 font-semibold' : ''}`}
        >
          Contact
        </a>
      </div>

      {/* Download Resume Button */}
      <div className="flex gap-6">
        <a
          href="https://drive.google.com/uc?export=download&id=1PzBewBGzEeroUC67vcFytx65xrxxnguo"
          download
          className="bg-cyan-400 text-white py-2 px-4 rounded-full hover:bg-cyan-500 transition-colors"
        >
          Download Resume
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6">
        <a
          href="https://github.com/anishkuvelkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anishkuvelkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/anishkuvelkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
