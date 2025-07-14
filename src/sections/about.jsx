import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutImg from '../images/AboutImg.png';
import work2 from '../images/work2.jpeg';
import work1 from '../images/work1.png';

const experiences = [
  {
    company: 'Thaddeus Resource Center',
    location: 'Los Angeles, CA',
    position: 'Applied ML Analyst – UX Research & Behavioral Insights',
    date: 'July 2025 – Present',
    image: work2,
    bullets: [
      'Spearheaded text analysis of 12K+ user feedback entries using DistilBERT, spaCy, PyTorch, and pandas, reducing support requests by 23%',
      'Identified 5 behavioral user segments from 18K+ session logs, boosting feature retention by 17%, using HDBSCAN, UMAP, and scikit-learn to cluster usage patterns and inform content delivery strategies',
      'Built interactive insight dashboards to trace navigation bottlenecks and task abandonment, improving workflow completion by 27%, through Plotly Dash, SQL, PostgreSQL, and AWS S3 integration',
      'Ran controlled onboarding experiments with Bayesian A/B testing, resulting in a 14% increase in mobile verification rates, leveraging scikit-learn, NumPy, and Seaborn for uplift modeling and visualization',
    ],
    website: 'https://www.thaddeus.org/',
  },
  {
    company: "Syracuse University, Prof. Nadeem Ghani’s Lab",
    location: 'Syracuse, NY',
    position: 'ML Engineer – Research Assistant',
    date: 'July 2024 – Present',
    image: work1,
    bullets: [
      'Trained a LightGBM model with 87% accuracy (R² = 0.87) to predict diabetes and obesity rates across 3,000+ U.S. counties, identifying highrisk public health areas using socioeconomic and health data',
      'Cleaned and integrated 40+ variables from CDC, EPA, and Census datasets for accurate public health modeling with pandas and scikit-learn',
      'Applied SHAP to explain predictions, highlighting 5+ key risk factors like poverty and pollution, improving policy decision transparency',
      'Produced 1,000+ personalized health summaries via GPT-4, delivering tailored insights to policymakers to aid local interventions',
    ],
    website: 'https://ecs.syracuse.edu/faculty-staff/nadeem-ghani',
  },
  {
    company: 'Browntape Technologies',
    location: 'Goa, India',
    position: 'Technical ML Analyst',
    date: 'Aug 2022 – Mar 2023',
    image: AboutImg,
    bullets: [
      'Mitigated stockouts by 40% via an ARIMA forecast on 1M+ Amazon and Shopify orders; automated ingestion with Airflow/SQL, tracked accuracy using Google Analytics, and versioned datasets with DVC for weekly Docker-based retraining',
      'Improved SLA compliance by 35% by training a Gradient Boosted Trees classifier with Python and Keras on delivery metadata; ETL handled in Snowflake, APIs deployed via Flask on AWS EC2, and validated with Postman',
      'Refined operational visibility by 30% by integrating data from Salesforce, SAP, Microsoft Dynamics NAV, and IBM Sterling B2B into a SaaS analytics platform; visualized performance metrics via Tableau dashboards',
      'Raised cross-team productivity by 25% via real-time Power BI dashboards, streamlining collaboration across five departments',
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
