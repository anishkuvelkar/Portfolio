import React from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import About from './sections/about';
import Technology from './sections/technology';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Education from './sections/education';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
      <Technology/>
      <Contact/>
    </div>
  );
}

export default App;
