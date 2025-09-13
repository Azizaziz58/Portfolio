import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import GlowCard from './ui/GlowCard';

const Education: React.FC = () => {
  const { isDark } = useTheme();
  const education = [
    {
      degree: 'B.E. Computer Science & Engineering',
      institution: 'Chettinad College of Engineering (Anna University)',
      period: '2022 – 2026',
      grade: 'CGPA: 7.8 (till 5th Sem)',
      color: 'black'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'KKMHS-Velur',
      period: '2022',
      grade: '76%',
      color: 'pink'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'KKMHS-Velur',
      period: '2020',
      grade: '66%',
      color: 'blue'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <GlowCard 
              key={index} 
              glowColor={edu.color as 'purple' | 'pink' | 'blue'} 
              delay={index * 0.2}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-2`}>{edu.degree}</h3>
                  <p className={`${isDark ? 'text-purple-300' : 'text-purple-800'} mb-2 font-semibold`}>{edu.institution}</p>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-black'}`} />
                      <span className={`${isDark ? 'text-gray-400' : 'text-black'} font-medium`}>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;