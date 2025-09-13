import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Github, BarChart3, Shield, Activity, Dumbbell, Code } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import GlowButton from './ui/GlowButton';

const projects = [
  {
    title: 'Francheers Platform',
    description: 'Analytics Dashboard with comprehensive data visualization and insights tracking for business metrics.',
    technologies: ['React', 'Python', 'SQL', 'Analytics'],
    icon: BarChart3,
    demoLink: 'https://francheers.netlify.app/',
    githubLink: 'https://github.com/Azizaziz58/fran-cheers',
    color: 'purple'
  },
  {
    title: 'Phishing Website Detection',
    description: 'AI-powered system using Python machine learning algorithms to identify and classify phishing websites.',
    icon: Shield,
    technologies: ['Python', 'Machine Learning', 'AI', 'Security'],
    demoLink: '#',
    githubLink: 'https://github.com/Azizaziz58/Phishing_website',
    color: 'pink'
  },
  {
    title: 'ECG Monitoring System',
    description: 'IoT-based real-time ECG monitoring with Python backend for health data analysis and alerts.',
    icon: Activity,
    technologies: ['IoT', 'Python', 'Hardware', 'Health Tech'],
    demoLink: '#',
    githubLink: 'https://github.com/Azizaziz58/Low-Cost-ECG-and-Heart-Monitoring-System',
    color: 'blue'
  },
  {
    title: 'Modern Fitness Website',
    description: 'Data tracking fitness platform with user analytics, progress monitoring, and responsive design.',
    icon: Dumbbell,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Data Tracking'],
    demoLink: 'https://modern-fitness.netlify.app/',
    githubLink: 'https://github.com/Azizaziz58/modern-fitness-',
    color: 'purple'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    icon: Code,
    demoLink: '#',
    githubLink: '#',
    color: 'pink'
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 glow-border hover:glow-border-pink transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 mr-4 mt-1">
                  <project.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'} leading-tight`}>
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-black font-bold'} mb-6 leading-relaxed`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                    className={`px-3 py-1 text-xs rounded-full border
                      ${isDark 
                        ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border-purple-500/30'
                        : 'bg-gradient-to-r from-purple-100/60 to-pink-100/60 text-black font-bold border-purple-300/40'
                      }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-4">
                <GlowButton href={project.demoLink} className="text-sm px-4 py-2">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </GlowButton>
                <GlowButton variant="secondary" href={project.githubLink} className="text-sm px-4 py-2">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </GlowButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;