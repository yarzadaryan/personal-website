import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/yarzadaryan/ryan-portfolio' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ryan-yarzada' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:yarzadaryan@gmail.com' },
  ];

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Ryan Yarzada</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate developer dedicated to building exceptional digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <span className="text-primary-400 mr-2">📍</span>
                <span>Ashburn, Virginia</span>
              </p>
              <p className="flex items-center">
                <span className="text-primary-400 mr-2">📧</span>
                <a href="mailto:yarzadaryan@gmail.com" className="hover:text-white transition-colors">
                  yarzadaryan@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="text-primary-400 mr-2">📱</span>
                <a href="tel:+15712242591" className="hover:text-white transition-colors">
                  571-224-2591
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ryan Yarzada. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
