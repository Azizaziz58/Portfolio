import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import { useTheme } from '../contexts/ThemeContext';

const Internships: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { isDark } = useTheme();

  const internships = [
    {
      title: 'Web Development Intern',
      company: 'Octanet',
      period: '2024',
      color: 'purple',
      frontContent: 'Click to see responsibilities',
      backContent: [
        'Designed responsive web apps with optimized UI/UX',
        'Implemented analytics tracking to measure feature adoption',
        'Enhanced cross-device compatibility and engagement'
      ]
    },
    {
      title: 'Web Designing Intern',
      company: 'Evolancy',
      period: '2025',
      color: 'pink',
      frontContent: 'Click to see achievements',
      backContent: [
        'Built a fitness website with structured user data insights',
        'Applied modern UI/UX principles for improved usability',
        'Prototyped designs using Figma & Canva'
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Internships
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-80"
            >
              <motion.div
                className="h-full cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <div 
                    className={`absolute inset-0 w-full h-full glassmorphism rounded-xl p-6 ${internship.color === 'purple' ? 'glow-border' : 'glow-border-pink'} flex flex-col justify-center`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-center">
                      <div className={`p-4 rounded-full inline-flex mb-6
                        ${isDark 
                          ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 shadow-[0_0_16px_4px_rgba(168,85,247,0.4)]'
                          : 'bg-gradient-to-r from-purple-300/40 to-pink-200/40 shadow-[0_0_16px_4px_rgba(168,85,247,0.15)]'
                        }`}>
                        <Briefcase className={`w-8 h-8 
                          ${isDark ? 'text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]' : 'text-yellow-600 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]'}`} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                        {internship.title}
                      </h3>
                      <p className={`${isDark ? 'text-purple-300' : 'text-purple-900 font-bold'} text-lg mb-2`}>
                        {internship.company}
                      </p>
                      <div className={`flex items-center justify-center space-x-2 ${isDark ? 'text-gray-400' : 'text-black font-bold'} mb-6`}>
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-blue-200' : 'text-blue-700'}`} />
                        <span>{internship.period}</span>
                      </div>
                      <p className={`${isDark ? 'text-pink-400' : 'text-pink-700 font-bold'}`}>
                        {internship.frontContent}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className={`absolute inset-0 w-full h-full glassmorphism rounded-xl p-6 ${internship.color === 'purple' ? 'glow-border' : 'glow-border-pink'} flex flex-col justify-center`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div>
                      <h3 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-black'}`}>
                        Key Contributions
                      </h3>
                      <ul className="space-y-4">
                        {internship.backContent.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <span className={`${isDark ? 'text-gray-300' : 'text-black font-bold'} text-sm leading-relaxed`}>
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;