import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'MedalMaster: Olympic Analytics Tool',
    description: 'Led the development of a performance analysis tool using VBA in Excel to process and visualize large Olympic datasets, helping athletes and trainers make informed decisions. Applied risk assessment to correct biases and adapted the system to user needs.',
    technologies: ['Excel VBA', 'Data Visualization', 'Analytics', 'Risk Assessment'],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: 'https://www.youtube.com/watch?v=W53NjPEmE7c&ab_channel=ryanyarzada',
  },
  {
    title: 'Financial Insights Hub (Netflix-style)',
    description: 'A dark, Netflix-inspired browsing experience for financial content, combining searchable tiles with deep-dive analytics, charts, and watchlists.',
    technologies: ['Financial Analysis', 'PowerPoint', 'Communication', 'Visualization'],
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: 'https://drive.google.com/file/d/1Ip-E_P7shw7k3vVM9ZGqdBWrazZ2WdpQ/view?usp=sharing',
  },
  {
    title: 'Scheduler Web App (Coming Soon)',
    description: 'A lightweight scheduling and availability tool designed for fast coordination and shareable links. Coming soon.',
    technologies: ['React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  width="1000"
                  height="384"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {project.title.includes('Coming Soon') && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="px-3 py-1 text-sm font-semibold tracking-wide uppercase bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white rounded backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.live && project.live !== '#' && (
                  <div className="flex items-center justify-end border-t border-gray-100 dark:border-gray-700 pt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/yarzadaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50 transition-colors"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
