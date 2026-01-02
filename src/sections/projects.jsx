import React from 'react';
import { motion } from 'framer-motion';
import cribmatch from '../images/cribmatch.png';
import cryptoawards from '../images/cryptoawards.png';
import '../styles/float-animation.css';  // Import animation for smooth effects

const Projects = () => {
  const projects = [
    {
      title: "Scoutify",
      description: "Scoutify provides music labels with the tools they need to identify promising artists based on solid data. By analyzing the YouTube data of over 5 million YouTube artists, calculating growth metrics, predicting future performance, and leveraging AI insights through the Gemini 1.5 Pro LLM, Scoutify delivers detailed PDF reports with various KPIs to help stakeholders make informed decisions about whether to sign an artist.",
      youtubeLink: "https://www.youtube.com/embed/WbVa6SmWx_U",
      githubLink: "https://github.com/anishkuvelkar/scoutify",
      technologies: ["Gemini 1.5 Pro LLM", "XGBoost", "pandas", "NumPy", "Matplotlib", "Seaborn", "React.js", "Flask", "YouTube API", "Vite", "Tailwind CSS"],
      isVideo: true,
    },
    {
      title: "CribMatch",
      description: "CribMatch is a personality-driven co-living web app that matches users based on compatibility, achieving over 85% match accuracy using NLP techniques. The app uses 9 lifestyle attributes, TF-IDF for feature extraction, and cosine similarity to match users by personality and preferences.",
      image: cribmatch,
      githubLink: "https://github.com/anishkuvelkar/CribMatch",
      technologies: ["TF-IDF", "Truncated SVD", "Cosine Similarity", "React", "Tailwind CSS", "Django", "SQLite3"],
      isVideo: false,
    },
    {
      title: "SU_Buddy",
      description: "SU Buddy is a networking platform connecting over 22,000 Syracuse University students and alumni, featuring forum discussions, profile management, and student-alumni networking. It provides exclusive @syr.edu access and integrates Microsoft Outlook for secure communication.",
      youtubeLink: "https://www.youtube.com/embed/Rr8xUlcpqgE",
      githubLink: "https://github.com/anishkuvelkar/SU_Buddy",
      technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "MongoDB", "Cloudinary API", "RESTful APIs", "Jira", "JWT Authentication", "Microsoft Outlook"],
      isVideo: true,
    },
    {
      title: "CryptoAwards",
      description: "A proof of completion protocol using NFTs to certify accomplishments instead of traditional certificates, reducing environmental impact while maintaining authenticity. Users upload course links, and the admin issues NFT certificates stored on the Polygon blockchain.",
      image: cryptoawards,
      githubLink: "https://github.com/anishkuvelkar/Cryptoawards",
      technologies: ["ReactJS", "Solidity", "Ethereum", "Polygon Layer 2", "IPFS", "Firebase", "Web3.js", "Ether.js", "Web3modal", "Covalent", "Tailwind CSS"],
      isVideo: false,
    },
  ];

  return (
    <section id="projects" className="bg-black py-16 px-8 text-white">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-orange-500 bg-clip-text shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        Projects
      </h2>

      <div className="grid gap-12 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl border-2 border-gray-700 hover:border-blue-400 p-8 flex flex-col justify-between h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.7 }}
          >
            <div className="w-full h-full">
              {/* Conditional rendering for Video or Image */}
              {project.isVideo ? (
                <iframe
                  src={project.youtubeLink}
                  title={project.title}
                  className="w-full h-72 rounded-xl shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-xl shadow-lg"
                />
              )}

              {/* Project Description and Tech Stack */}
              <div className="p-6 flex flex-col justify-between mt-4">
                <h3 className="text-3xl font-bold mb-4 text-blue-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-4">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              </div>
            </div>

            {/* GitHub Link (Positioned at the bottom) */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-indigo-500 hover:bg-indigo-400 text-white py-2 px-4 rounded-full text-base mt-auto transition duration-300 ease-in-out"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
