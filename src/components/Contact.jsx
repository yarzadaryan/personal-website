import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const body = `From: ${name} <${email}>\n\n${message}`;
    const mailto = `mailto:yarzadaryan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 text-primary-100">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Me</h4>
                      <a href="mailto:yarzadaryan@gmail.com" className="text-primary-100 hover:text-white transition-colors">
                        yarzadaryan@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Me</h4>
                      <a href="tel:+15712242591" className="text-primary-100 hover:text-white transition-colors">
                        571-224-2591
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-primary-100">Ashburn, Virginia</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/ryan-yarzada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:yarzadaryan@gmail.com"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Hi Ryan, I'd like to talk about..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      aria-label="Send message via email"
                    >
                      Send Message
                    </button>
                    <a
                      href="https://docs.google.com/forms/d/1Y8wkFk1cdH9BTnfdD1mzInLDcKsRe-3-4oRu03V4d9k/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center bg-[#673AB7] hover:bg-[#5E35B1] text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#673AB7]"
                      aria-label="Open Google Form"
                    >
                      Or use Google Forms
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
