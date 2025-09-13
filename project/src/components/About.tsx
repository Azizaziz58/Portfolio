import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import GlowCard from './ui/GlowCard';

const About: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Animated Divider */}
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <GlowCard className="h-80" delay={0.3}>
            <motion.div
              className="h-full cursor-pointer perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative h-full w-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Click to Learn More</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-black'} text-lg leading-relaxed`}>
                    Motivated graduate skilled in SQL, Python, Excel/Sheets, and problem solving.
                  </p>
                  <div className="mt-6 text-pink-400">
                    <span className="text-sm">Click this card →</span>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">My Passion</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-black'} text-lg leading-relaxed`}>
                    Passionate about data analytics, web development, and UI/UX design. 
                    I love creating digital experiences that combine analytical insights 
                    with beautiful, functional interfaces.
                  </p>
                  <div className="mt-6 text-purple-400">
                    <span className="text-sm">← Click to go back</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </GlowCard>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-6`}>
              Computer Science Engineering Student
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-black'} text-lg leading-relaxed mb-6`}>
              Currently pursuing B.E. in Computer Science & Engineering at Chettinad College of Engineering. 
              I'm passionate about leveraging technology to solve real-world problems through data analysis 
              and innovative web solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-black'}>Data-driven problem solver</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-black'}>Creative web developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-black'}>UI/UX design enthusiast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;