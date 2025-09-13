import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import GlowButton from './ui/GlowButton';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20' 
          : 'bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-blue-100/30'
      }`} />
      
      {/* Animated background orbs */}
      <motion.div 
        className={`absolute top-20 left-20 w-72 h-72 rounded-full ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10' 
            : 'bg-gradient-to-r from-purple-600/5 to-pink-600/5'
        } blur-3xl`}
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className={`absolute bottom-20 right-20 w-96 h-96 rounded-full ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' 
            : 'bg-gradient-to-r from-blue-600/5 to-purple-600/5'
        } blur-3xl`}
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent glow-text mb-6"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Syed Liyas Aziz
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl ${isDark ? 'text-black-300' : 'text-black-600'} mb-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aspiring Data Analyst & Web Developer
          </motion.p>
          
          <motion.p 
            className={`text-lg ${isDark ? 'text-purple-300' : 'text-black-600'} mb-12`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            📍 Namakkal, Tamil Nadu, India
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <GlowButton onClick={scrollToProjects}>
              View Projects
            </GlowButton>
            <GlowButton variant="secondary" onClick={scrollToContact}>
              Contact Me
            </GlowButton>
            <a 
              href="https://drive.google.com/file/d/1qiKdJcmYPyRjzyjIIzQk8XQmFVyqFyWj/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              tabIndex={-1}
              download
            >
              <GlowButton 
              variant="secondary"
              className="animate-pulse-glow"
              >
              <Download className="w-4 h-4 mr-2" />
              Resume
              </GlowButton>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-black-600'}`} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;