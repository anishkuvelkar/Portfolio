import React from 'react';
import { FaReact, FaCode, FaPython, FaJava, FaNodeJs, FaHtml5, FaJsSquare, FaFire, FaAws, FaEye, FaCss3Alt, FaGitAlt, FaChartBar, FaChartLine, FaFlask, FaBrain, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPytorch, SiScikitlearn, SiTensorflow, SiOpencv, SiDjango, SiSqlite } from 'react-icons/si';
import vueimg from '../images/vue.png';
import '../styles/float-animation.css';  // Import the floating CSS

const Technology = () => {
  const sections = [
    {
      title: "Languages",
      items: [
        { icon: <FaPython className="float" />, label: "Python", level: "Expert" },
        { icon: <FaJsSquare className="float" />, label: "JavaScript", level: "Expert" },
        { icon: <FaCode className="float" />, label: "C++", level: "Expert" },
        { icon: <FaCode className="float" />, label: "C", level: "Expert" },
        { icon: <FaJava className="float" />, label: "Java", level: "Intermediate" },
        { icon: <FaHtml5 className="float" />, label: "HTML5", level: "Advanced" },
        { icon: <FaCss3Alt className="float" />, label: "CSS3", level: "Advanced" }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { icon: <FaReact className="float" />, label: "React.js", level: "Expert" },
        { icon: <FaNodeJs className="float" />, label: "Node.js", level: "Advanced" },
        { icon: <img src={vueimg} alt="Vue.js" className="w-8 h-8 float" />, label: "Vue.js", level: "Advanced" },
        { icon: <SiDjango className="float" />, label: "Django", level: "Expert" },
        { icon: <FaFlask className="float" />, label: "Flask", level: "Expert" }
      ]
    },
    {
      title: "Databases",
      items: [
        { icon: <SiMongodb className="float" />, label: "MongoDB", level: "Expert" },
        { icon: <SiMysql className="float" />, label: "MySQL", level: "Expert" },
        { icon: <SiSqlite className="float" />, label: "SQLite", level: "Advanced" },
        { icon: <FaFire className="float" />, label: "Firebase", level: "Expert" }
      ]
    },
    {
      title: "Libraries",
      items: [
        { icon: <SiTensorflow className="float" />, label: "Tensorflow", level: "Expert" },
        { icon: <SiPytorch className="float" />, label: "Pytorch", level: "Expert" },
        { icon: <FaChartBar className="float" />, label: "Matplotlib", level: "Expert" },
        { icon: <FaChartLine className="float" />, label: "Seaborn", level: "Expert" },
        { icon: <FaBrain className="float" />, label: "Keras", level: "Expert" },
        { icon: <SiScikitlearn className="float" />, label: "Scikit-Learn", level: "Expert" },
        { icon: <SiOpencv className="float" />, label: "OpenCV", level: "Intermediate" }
      ]
    },
    {
      title: "Tools",
      items: [
        { icon: <FaAws className="float" />, label: "AWS", level: "Intermediate" },
        { icon: <FaRobot className="float" />, label: "Machine Learning", level: "Expert" },
        { icon: <FaBrain className="float" />, label: "NLP", level: "Expert" },
        { icon: <FaEye className="float" />, label: "Computer Vision", level: "Intermediate" },
        { icon: <FaGitAlt className="float" />, label: "Git", level: "Expert" }
      ]
    }
  ];

  return (
    <section id="technologies" className="bg-black py-16 px-8 text-white">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-300 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent shadow-lg">
        Technologies & Expertise
      </h2>

      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-400">{section.title}</h3>
          
          {/* Icons in one line with hover + floating animation */}
          <div className="flex flex-wrap justify-start items-center gap-8">
            {section.items.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 transition-transform transform hover:scale-110 hover:shadow-lg hover:text-blue-400 duration-300"
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{item.label}</h3>
                  <p className="text-gray-400">{item.level}</p>
                  <div className="w-32 bg-gray-700 h-2 rounded-lg mt-1">
                    <div className={`h-2 rounded-lg ${
                      item.level === "Expert" ? "bg-green-600 w-4/4" :
                      item.level === "Advanced" ? "bg-blue-500 w-2/3" :
                      "bg-yellow-500 w-1/2"
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Technology;
