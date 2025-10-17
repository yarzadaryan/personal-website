import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiArrowUp } from 'react-icons/fi';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollGuide from './components/ScrollGuide';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: <FiGithub />, href: 'https://github.com/yarzadaryan/ryan-portfolio' },
  { name: 'LinkedIn', icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ryan-yarzada' },
  { name: 'Email', icon: <FiMail />, href: 'mailto:yarzadaryan@gmail.com' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col relative`}>
      {/* Sitewide frosted background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-100/80 to-white/30 dark:from-gray-900/80 dark:to-gray-800/30 backdrop-blur-lg" />
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-primary-600 dark:text-primary-400">
                RY
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 ml-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
                <a
                  href="/Ryan-Yarzada-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn btn-primary hidden lg:inline-flex"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex justify-center space-x-6 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                      aria-label={social.name}
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href="/Ryan-Yarzada-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full inline-flex justify-center btn btn-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">
        <ScrollGuide />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
