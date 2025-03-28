import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer Hook
import AboutImg from '../images/AboutImg.png'; // Update with your image path

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  return (
    <section
      id="experience"
      ref={ref} // Set ref here
      className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-8 text-white flex flex-col lg:flex-row rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Left Side: Content Section */}
      <motion.div
        className="w-full lg:w-3/4 mb-6 lg:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* About Me Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-center text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-orange-500 bg-clip-text shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
          transition={{ duration: 1, delay: 1 }}
        >
          Professional Experience
        </motion.h2>

        {/* Content Section: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Trigger animation when in view
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src={AboutImg}
              alt="About Me"
              className="rounded-lg shadow-2xl w-full h-auto hover:brightness-110 transition duration-300 ease-in-out"
              style={{ maxWidth: '450px' }}
            />
          </motion.div>

          {/* Right Side: About Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Trigger animation when in view
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="mt-8">
              {/* Browntape Logo with Location */}
              <div className="flex justify-center lg:justify-start items-center space-x-4">
                <motion.h3
                  className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-200 bg-clip-text text-transparent mb-4 animate-fade-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  Browntape Technologies
                </motion.h3>
                {/* Location Below the Logo */}
                <p className="text-lg text-gray-300 italic mt-2 lg:mt-0">Goa, India</p>
              </div>

              <motion.p
                className="text-lg leading-relaxed text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
                transition={{ duration: 1, delay: 3 }}
              >
                I worked at Browntape Technologies, an e-commerce SaaS platform. My main responsibilities included:
              </motion.p>
              <motion.ul
                className="list-disc ml-6 text-gray-300 mt-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
                transition={{ duration: 1, delay: 3.5 }}
              >
                <li>Saved 800 man-hours by leading daily operations and optimizing workflows with Jira, Kibana, and Google Analytics</li>
                <li>Executed 500+ API test cases employing Postman, ensuring system reliability across Salesforce, SAP, Microsoft Dynamics NAV, and IBM Sterling B2B</li>
                <li>Achieved 98% deadline adherence and improved customer satisfaction by automating workflows with JavaScript, analyzing 1M+ row datasets with SQL and Python, and driving decisions with Tableau, Power BI, and Excel</li>
                <li>Configured 3+ APIs from Amazon, Shopify, and Flipkart, streamlining product data synchronization and guaranteeing real-time inventory management across multiple sales channels on this SaaS-powered platform</li>
              </motion.ul>
              <motion.p
                className="text-lg leading-relaxed text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
                transition={{ duration: 1, delay: 4 }}
              >
                <a href="https://www.ginesys.in/products/e-commerce-oms" className="text-indigo-400 hover:text-indigo-300">Visit Website</a>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side: Timeline Bar for Browntape */}
      <div className="w-full lg:w-1/4 flex justify-center items-center mb-6 lg:mb-0 mt-6 lg:mt-0">
        <motion.div
          className="relative w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
          transition={{ duration: 1, delay: 4.5 }}
        >
          {/* Start Month */}
          <div className="absolute bottom-0 left-0 text-xl text-white transform -translate-x-1/2 bg-indigo-500 px-4 py-2 rounded-lg shadow-xl" style={{ bottom: '-40px' }}>
            <span>Aug 2022</span>
          </div>
          {/* End Month */}
          <div className="absolute top-0 left-0 text-xl text-white transform -translate-x-1/2 bg-indigo-500 px-4 py-2 rounded-lg shadow-xl" style={{ top: '-40px' }}>
            <span>Mar 2023</span>
          </div>

          {/* Timeline Progress (White Line) */}
          <div className="absolute top-0 left-0 right-0 bottom-0 w-1 bg-white opacity-50"></div>

          {/* Marker for Timeline */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 text-4xl text-white">
            <span>&#x1F4C5;</span> {/* Calendar Icon */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
