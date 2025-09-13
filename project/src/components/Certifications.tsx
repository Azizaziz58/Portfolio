import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import { useTheme } from '../contexts/ThemeContext';

const Certifications: React.FC = () => {
  const { isDark } = useTheme();
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure – Data Management',
      provider: 'Oracle',
      year: '2024',
      color: 'purple'
    },
    {
      title: 'Python Programming',
      provider: 'GUVI',
      year: '2024',
      color: 'pink'
    },
    {
      title: 'C Programming',
      provider: 'GUVI',
      year: '2023',
      color: 'blue'
    },
    {
      title: 'JavaScript',
      provider: 'GUVI',
      year: '2024',
      color: 'purple'
    },
    {
      title: 'Front-End Web Development',
      provider: 'Great Learning',
      year: '2024',
      color: 'pink'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <GlowCard 
              key={index} 
              glowColor={cert.color as 'purple' | 'pink' | 'blue'} 
              delay={index * 0.1}
            >
              <motion.div
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20
                    ${isDark ? 'shadow-[0_0_12px_2px_rgba(168,85,247,0.5)]' : 'shadow-[0_0_12px_2px_rgba(59,130,246,0.3)]'}`}>
                    <Award className={`w-6 h-6 ${isDark ? 'text-yellow-300' : 'text-yellow-500'}`} />
                  </div>
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{cert.title}</h3>
                <p className={`${isDark ? 'text-purple-300' : 'text-purple-900'} mb-2 font-bold`}>{cert.provider}</p>
                <div className={`flex items-center justify-center space-x-1 ${isDark ? 'text-gray-400' : 'text-black'} font-bold`}>
                  <span>{cert.year}</span>
                  <ExternalLink className={`w-3 h-3 ${isDark ? 'text-blue-300' : 'text-blue-700'}`} />
                </div>
              </motion.div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;