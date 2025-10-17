import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode } from 'react-icons/fi';

const experiences = [
  {
    role: 'Medical Assistant (Part-time)',
    company: 'trüHealthNow',
    period: 'Aug 2025 – Present · On-site',
    description: 'Supported daily clinical operations while maintaining accurate, compliant data across EHR and billing systems.',
    responsibilities: [
      'Supported daily clinical operations while managing EHR systems to maintain accurate and compliant patient, financial, and insurance data',
      'Utilized data validation and troubleshooting techniques to identify and correct discrepancies in patient records, billing, and reimbursement workflows',
      'Collaborated with providers, nurses, and billing teams to streamline communication and ensure real-time data integrity across systems',
      'Extracted and analyzed healthcare data from internal databases to verify insurance coverage, track claims, and reduce processing errors',
      'Applied a detail-oriented, technical approach to improve data accuracy, reporting reliability, and workflow efficiency within the healthcare environment'
    ],
    icon: <FiBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
  },
  {
    role: 'Business Analyst Intern',
    company: 'Berkley Net',
    period: 'June 2025 – August 2025 · Hybrid',
    description: 'Supported reporting and systems analysis across internal portals and platforms.',
    responsibilities: [
      'Created and maintained SQL queries for reports using large sets of user and client data',
      'Troubleshot system errors and resolved data discrepancies within internal portals and platforms',
      'Led team meetings to propose and implement solutions for system enhancements and process improvements',
      'Collaborated with managers, VPs, and directors to align business needs with technical solutions',
      'Documented system processes and created user guides for new reporting tools and functionalities'
    ],
    icon: <FiBriefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
  },
  {
    role: 'Data Quality Analysis',
    company: '11:59',
    period: 'March 2024 – August 2024 · Remote',
    description: 'Ensured high data quality and compliance for healthcare datasets using Snowflake, Python, and SQL.',
    responsibilities: [
      'Conducted data quality assessments using Snowflake with advanced SQL and Python to automate validation and detect anomalies',
      'Developed ETL processes for large datasets in the California Immunization Database, ensuring accuracy and HIPAA compliance',
      'Created custom SQL procedures in Snowflake to resolve inconsistencies, improving accuracy by 20%',
      'Automated reporting with Python and SQL, reducing processing time by 40% and enabling real-time monitoring',
      'Maintained technical documentation to ensure consistent data quality standards and regulatory compliance',
      'Led training on data quality tools, enhancing team skills in Snowflake and healthcare data management'
    ],
    icon: <FiCode className="w-6 h-6 text-primary-600 dark:text-primary-400" />
  },
  {
    role: 'Data Entry & Analysis Intern',
    company: 'Group 22',
    period: 'January 2024 – March 2024 · Remote',
    description: 'Supported grant research, analysis, and reporting to drive funding outcomes.',
    responsibilities: [
      'Secured funding for multiple businesses by researching and identifying grants tailored to their objectives',
      'Conducted detailed risk and benefit analyses, providing insights that led to successful proposals and sustained growth',
      'Streamlined and organized data in Excel for clarity and consistency in grant evaluations and reporting',
      'Developed actionable reports and dashboards in Excel to empower stakeholder decision-making'
    ],
    icon: <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />
  }
];

const education = [
  {
    degree: 'B.S. in Business Information Technology (BIT) - Cyber',
    institution: 'Virginia Tech, Blacksburg, VA',
    period: 'Graduated · GPA 3.5',
    description: 'Relevant coursework: Database Management, Data Visualization, Project Management. Skills: Python, SQL, Cybersecurity Frameworks.',
    icon: <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background that have shaped my career in technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <FiBriefcase className="mr-2 text-primary-600 dark:text-primary-400" />
              Work Experience
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-8"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <FiAward className="mr-2 text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-8"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    {edu.icon}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</p>
                    <span className="inline-block mt-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
