import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import GlowButton from './ui/GlowButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:syedliyasazizs@gmail.com',
      icon: Mail,
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'group-hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/syedliyasazizs',
      icon: Linkedin,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'group-hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/syedliyasaziz',
      icon: Github,
      color: 'from-pink-500 to-pink-700',
      hoverColor: 'group-hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-gray-700">Let's Connect</h3>
            <p className="mb-8 leading-relaxed text-purple-600 font-bold dark:text-gray-700">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply connect with fellow developers and data enthusiasts.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                  <Mail className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-700 font-bold dark:text-gray-700">Email</p>
                  <p className="text-purple-600 font-bold dark:text-gray-700">syedliyasazizs@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <MapPin className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-purple-700 font-bold dark:text-gray-600">Location</p>
                  <p className="text-purple-600 font-bold dark:text-gray-600">Namakkal, Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group p-4 rounded-full bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300 font-bold`}
                >
                  <social.icon className={`w-5 h-5 text-black dark:text-gray-600 ${social.hoverColor} transition-colors duration-300`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <GlowCard delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6 font-bold">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-purple-700 dark:text-gray-600 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-purple-600 dark:text-gray-600 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-purple-700 dark:text-gray-600 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-purple-600 dark:text-gray-600 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-purple-700 dark:text-gray-600 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-purple-600 dark:text-gray-600 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <GlowButton className="w-full font-bold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </GlowButton>
            </form>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
