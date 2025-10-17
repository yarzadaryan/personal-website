import { motion } from 'framer-motion';
import { FiDatabase, FiBarChart2, FiShield } from 'react-icons/fi';

const skills = [
  {
    title: 'Data Analysis & Quality',
    description: 'Validating, cleaning, and transforming large datasets; building automated checks and dashboards.',
    icon: <FiDatabase className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    technologies: ['SQL', 'Python', 'Snowflake', 'ETL', 'Excel/VBA', 'Data Visualization']
  },
  {
    title: 'Business Analysis & Reporting',
    description: 'Translating business needs into technical requirements, writing SQL reports, and documenting processes.',
    icon: <FiBarChart2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    technologies: ['Requirements', 'SQL Reporting', 'Process Improvement', 'Documentation']
  },
  {
    title: 'Healthcare Data Operations',
    description: 'Working with EHR systems, HIPAA-compliant workflows, and end-to-end data integrity across teams.',
    icon: <FiShield className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    technologies: ['EHR', 'HIPAA', 'Data Validation', 'Claims/Billing', 'Workflow Optimization']
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm Ryan Yarzada — Developer / Analyst / Consultant. I have 2+ years of experience across startups and enterprise: 
            Group 22 (Data Entry & Analysis), 11:59 (Data Quality Analyst), and Berkley Net (Business Analyst). I bring creativity, 
            strong problem‑solving, and a fast‑learning mindset to every team and project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                I studied Business Information Technology (BIT – Cyber) at Virginia Tech, where I built a foundation in databases, data visualization, 
                project management, and cybersecurity frameworks. That blend of business and technical skills led me into roles that span analysis, 
                data, and product/problem‑solving.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I worked at Group 22 supporting grant research and analytics, then at 11:59 as a Data Quality Analyst where I used Snowflake, SQL, and Python 
                to assess and improve large healthcare datasets and automate reporting. Most recently, at Berkley Net I served as a Business Analyst, 
                writing SQL for reporting, troubleshooting systems, and coordinating with leadership to deliver process improvements.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I love learning fast, adapting to new tools, and bringing creativity to ambiguous problems. I’m excited by opportunities where I can combine 
                analytical thinking with development to deliver clear, user‑focused outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
