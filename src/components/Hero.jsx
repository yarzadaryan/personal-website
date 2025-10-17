import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const phrases = [
    'build digital experiences',
    'make things happen',
    'engineer solutions',
    'analyze data',
    'consult and deliver',
    'show up',
    'try',
    'learn fast',
    'solve problems',
    'deliver value',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100/60 to-white/20 dark:from-gray-900/60 dark:to-gray-800/20 backdrop-blur-md" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              Hello, I'm Ryan Yarzada
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            I{' '}
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-primary-600 dark:text-primary-400"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            I'm a passionate developer who loves turning ideas into reality through code. 
            I specialize in building modern web applications with clean, efficient, and maintainable code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <a href="#contact" className="btn btn-primary">
              Let's make something special
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
