import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutImg from '../images/AboutImg.png';
import work2 from '../images/work2.jpeg';
import work1 from '../images/work1.png';
import work3 from '../images/work3.jpg';
const experiences = [
  {
    company: 'BalanX-Bio',
    location: 'East Lansing, MI',
    position: 'Data Scientist – Multimodal Behavioral Forecasting Platform | AI HealthTech Product & Smart Device B2C Startup',
    date: 'Jan 2025 – Present',
    image: work3,
    bullets: [
      'Developed scalable ML models for microbial health digital twins using biosensor, microbiome, cortisol, and DNA data during R&D pilots, achieving 92% accuracy on 18K+ test datapoints for a pre-revenue smart coffee machine prototype',
      'Engineered ETL/MLOps pipelines with AWS Glue, SageMaker, and Redshift, reducing deployment time by 32% across 200+ sessions',
      'Designed adaptive multimodal models using audio/physiological biomarkers, improving real-time stress and cycle prediction by 23%',
      'Partnered with biotech research team using PyTorch/TensorFlow models for pilot pattern analysis with 150+ testers, delivering 14+ insights',
    ],
    website: 'https://www.balanxbio.com/',
  },
  {
    company: 'Thaddeus Resource Center',
    location: 'Los Angeles, CA',
    position: 'Applied ML Analyst – Behavioral Intelligence & Insights Platform',
    date: 'July 2025 – Dec 2025',
    image: work2,
    bullets: [
      'Handled 12K+ feedback entries with DistilBERT, spaCy, PyTorch, HuggingFace Transformers, reducing support requests by 23%',
      'Clustered 18K+ session logs via HDBSCAN, UMAP, t-SNE embeddings, identifying 5 user segments, increasing feature retention by 17%',
      'Built dashboards with Plotly Dash and managed data pipelines using PostgreSQL and AWS S3, reducing model deployment time by 30%',
      'Conducted Bayesian A/B testing and uplift modeling, improving mobile verification rates by 14% using NumPy, scikit-learn, Seaborn',
    ],
    website: 'https://www.thaddeus.org/',
  },
  {
    company: "Syracuse University, Prof. Nadeem Ghani’s Lab",
    location: 'Syracuse, NY',
    position: 'ML Engineer – Research Assistant, Health Data Intelligence Platform',
    date: 'July 2024 – July 2025',
    image: work1,
    bullets: [
      'Trained LightGBM/XGBoost ensembles (R² = 0.87) on 3,000+ counties, predicting diabetes and obesity risk and identifying high-risk areas',
      'Integrated and preprocessed 40+ multi-source datasets from CDC, EPA, and Census using pandas, NumPy, and scikit-learn',
      'Applied SHAP and LIME to identify 5+ risk factors and generated 1,000+ GPT-4 health reports, delivering actionable public health insights',
    ],
    website: 'https://ecs.syracuse.edu/faculty-staff/nadeem-ghani',
  },
  {
    company: 'Browntape Technologies',
    location: 'Goa, India',
    position: 'Technical ML Analyst, B2B SaaS eCommerce Automation Platform',
    date: 'Aug 2022 – Mar 2023',
    image: AboutImg,
    bullets: [
      'Reduced stockouts by 27% and improved SLA compliance by 16-20% through predictive analytics using ARIMA, Prophet, LSTM, GBTs, Random Forest, hyperparameter tuning, anomaly detection, and Power BI',
      'Enhanced productivity by 24% by integrating Salesforce & Snowflake with Tableau, managing 8.3M+ orders, with cross-team collaboration',
      'Increased productivity by 14% through end-to-end ML pipelines with MLflow, DVC, Docker, Flask APIs, and AWS (S3, EC2, Lambda)',
    ],
    website: 'https://www.ginesys.in/products/e-commerce-oms',
  },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-teal-400 via-blue-500 to-orange-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>

      <div className="relative flex flex-col space-y-20 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 before:rounded-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 pl-12 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot + date */}
            <div className="absolute left-0 top-3 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full shadow-md"></div>

            {/* Image */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={exp.image}
                alt={exp.company}
                className="rounded-xl shadow-2xl hover:scale-105 hover:brightness-110 transition duration-300 w-full max-w-md mx-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 bg-gray-800/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-white to-yellow-200 bg-clip-text text-transparent">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-300 italic mt-2 md:mt-0">{exp.date}</p>
              </div>
              <p className="text-indigo-300 font-semibold text-lg">{exp.position}</p>
              <p className="text-sm text-gray-400">{exp.location}</p>

              <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-300">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-indigo-400 hover:text-indigo-300"
              >
                Visit Website →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
