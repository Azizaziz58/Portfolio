import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: Database,
      skills: ['Python', 'C', 'Java (Basics)', 'SQL', 'MySQL'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive UI'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Design Tools',
      icon: Palette,
      skills: ['Figma', 'Canva', 'Adobe XD', 'Wix', 'Bolt'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Analytical Thinking'],
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glassmorphism rounded-xl p-6 glow-border hover:glow-border-pink transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-4`}>{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 
                      text-sm font-bold transition-all duration-300
                      ${isDark 
                        ? 'border-purple-300 text-white hover:text-purple-200 hover:border-pink-300' 
                        : 'border-blue-200 text-black hover:text-blue-700 hover:border-pink-200'
                      } border`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;