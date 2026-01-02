import React from 'react';
import {
  FaReact, FaCode, FaPython, FaJava, FaNodeJs, FaHtml5, FaJsSquare,
  FaFire, FaAws, FaCss3Alt, FaGitAlt, FaChartBar, FaChartLine,
  FaFlask, FaBrain, FaRobot, FaDocker
} from 'react-icons/fa';

import {
  SiMongodb, SiMysql, SiPytorch, SiScikitlearn, SiTensorflow,
  SiOpencv, SiDjango, SiSqlite, SiPostgresql, SiSnowflake,
  SiApacheairflow, SiMlflow, SiDatabricks, SiHuggingface,
  SiPandas, SiNumpy, SiTableau, SiPowerbi
} from 'react-icons/si';

import vueimg from '../images/vue.png';
import '../styles/float-animation.css';

const icon = (color) => `float ${color}`;

const Technology = () => {
  const sections = [

    /* ================= Languages ================= */
    {
      title: "Languages",
      items: [
        { icon: <FaPython className={icon("text-yellow-400")} />, label: "Python", level: "Expert" },
        { icon: <FaJsSquare className={icon("text-yellow-300")} />, label: "JavaScript", level: "Expert" },
        { icon: <FaCode className={icon("text-blue-400")} />, label: "C++", level: "Expert" },
        { icon: <FaCode className={icon("text-blue-300")} />, label: "C", level: "Expert" },
        { icon: <FaJava className={icon("text-red-500")} />, label: "Java", level: "Intermediate" },
        { icon: <FaCode className={icon("text-sky-400")} />, label: "SQL", level: "Expert" },
        { icon: <FaHtml5 className={icon("text-orange-500")} />, label: "HTML5", level: "Advanced" },
        { icon: <FaCss3Alt className={icon("text-blue-500")} />, label: "CSS3", level: "Advanced" }
      ]
    },

    /* ================= Frameworks ================= */
    {
      title: "Frameworks",
      items: [
        { icon: <FaReact className={icon("text-cyan-400")} />, label: "React.js", level: "Expert" },
        { icon: <FaNodeJs className={icon("text-green-500")} />, label: "Node.js", level: "Advanced" },
        { icon: <img src={vueimg} alt="Vue" className="w-8 h-8 float" />, label: "Vue.js", level: "Advanced" },
        { icon: <SiDjango className={icon("text-green-700")} />, label: "Django", level: "Expert" },
        { icon: <FaFlask className={icon("text-gray-300")} />, label: "Flask", level: "Expert" }
      ]
    },

    /* ================= Databases ================= */
    {
      title: "Databases",
      items: [
        { icon: <SiPostgresql className={icon("text-blue-500")} />, label: "PostgreSQL", level: "Expert" },
        { icon: <SiSnowflake className={icon("text-sky-400")} />, label: "Snowflake", level: "Advanced" },
        { icon: <SiMongodb className={icon("text-green-500")} />, label: "MongoDB", level: "Expert" },
        { icon: <SiMysql className={icon("text-blue-400")} />, label: "MySQL", level: "Expert" },
        { icon: <SiSqlite className={icon("text-indigo-400")} />, label: "SQLite", level: "Expert" },
        { icon: <FaFire className={icon("text-orange-500")} />, label: "Firebase", level: "Advanced" }
      ]
    },

    /* ================= ML & Data Libraries ================= */
    {
      title: "ML & Data Libraries",
      items: [
        { icon: <SiTensorflow className={icon("text-orange-500")} />, label: "TensorFlow", level: "Expert" },
        { icon: <SiPytorch className={icon("text-red-500")} />, label: "PyTorch", level: "Expert" },
        { icon: <FaBrain className={icon("text-purple-400")} />, label: "Keras", level: "Expert" },
        { icon: <SiScikitlearn className={icon("text-orange-400")} />, label: "Scikit-Learn", level: "Expert" },
        { icon: <SiPandas className={icon("text-indigo-400")} />, label: "pandas", level: "Expert" },
        { icon: <SiNumpy className={icon("text-blue-300")} />, label: "NumPy", level: "Expert" },
        { icon: <FaChartBar className={icon("text-blue-400")} />, label: "Matplotlib", level: "Expert" },
        { icon: <FaChartLine className={icon("text-purple-300")} />, label: "Seaborn", level: "Expert" },
        { icon: <SiOpencv className={icon("text-green-400")} />, label: "OpenCV", level: "Intermediate" }
      ]
    },

    /* ================= Visualization & BI ================= */
    {
      title: "Visualization & BI",
      items: [
        { icon: <SiTableau className={icon("text-blue-400")} />, label: "Tableau", level: "Expert" },
        { icon: <SiPowerbi className={icon("text-yellow-500")} />, label: "Power BI", level: "Expert" },
        { icon: <FaChartBar className={icon("text-blue-500")} />, label: "Plotly / Dash", level: "Expert" },
        { icon: <FaChartLine className={icon("text-purple-400")} />, label: "Applied Statistics", level: "Expert" }
      ]
    },

    /* ================= NLP, LLMs & Time Series ================= */
    {
      title: "NLP, LLMs & Time Series",
      items: [
        { icon: <SiHuggingface className={icon("text-yellow-500")} />, label: "HuggingFace", level: "Intermediate" },
        { icon: <FaRobot className={icon("text-green-400")} />, label: "GPT-4 / Gemini", level: "Expert" },
        { icon: <FaBrain className={icon("text-pink-400")} />, label: "spaCy / NLTK", level: "Expert" },
        { icon: <FaChartLine className={icon("text-cyan-400")} />, label: "ARIMA / Prophet", level: "Expert" },
        { icon: <FaBrain className={icon("text-purple-400")} />, label: "LSTM", level: "Advanced" },
        { icon: <FaBrain className={icon("text-indigo-400")} />, label: "SHAP / LIME", level: "Expert" }
      ]
    },

    /* ================= MLOps & Cloud ================= */
    {
      title: "MLOps & Cloud",
      items: [
        { icon: <SiApacheairflow className={icon("text-sky-400")} />, label: "Airflow", level: "Advanced" },
        { icon: <SiMlflow className={icon("text-blue-400")} />, label: "MLflow", level: "Expert" },
        { icon: <FaAws className={icon("text-orange-400")} />, label: "AWS (S3, EC2, Lambda, Glue, SageMaker)", level: "Expert" },
        { icon: <SiDatabricks className={icon("text-red-400")} />, label: "Databricks", level: "Advanced" },
        { icon: <FaDocker className={icon("text-blue-500")} />, label: "Docker", level: "Advanced" },
        { icon: <FaGitAlt className={icon("text-red-500")} />, label: "Git", level: "Expert" }
      ]
    }
  ];

  return (
    <section id="technologies" className="bg-black py-16 px-8 text-white">
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
        Technologies & Expertise
      </h2>

      {sections.map((section, i) => (
        <div key={i} className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-400">{section.title}</h3>
          <div className="flex flex-wrap gap-8">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 transition-transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.label}</h3>
                  <p className="text-gray-400">{item.level}</p>
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
