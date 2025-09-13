import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Users, Zap } from 'lucide-react';
import GlowCard from './ui/GlowCard';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Winner – UX Rescue Showdown',
      organization: 'MSCET Chennai',
      year: '2025',
      type: 'Winner',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Finalist – TN Startup Contest',
      organization: 'Madurai Hub',
      year: '2025',
      type: 'Finalist',
      icon: Medal,
      color: 'from-silver-400 to-gray-600'
    },
    {
      title: 'Web Dev Hackathon Participant',
      organization: 'SSCET',
      year: '2025',
      type: 'Participant',
      icon: Users,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'UI/UX Hackathon Participant',
      organization: 'VIT',
      year: '2024',
      type: 'Participant',
      icon: Users,
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Raspberry Pi Workshop',
      organization: 'IIT RP',
      year: '2023',
      type: 'Workshop',
      icon: Zap,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'AMD Hackathon',
      organization: 'AMD',
      year: '2023',
      type: 'Hackathon',
      icon: Zap,
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="w-full md:w-5/12">
                  <GlowCard 
                    glowColor={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : 'blue'}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} mr-4
                          ${achievement.type === 'Winner'
                            ? ( 'shadow-[0_0_16px_4px_rgba(250,204,21,0.4)]' )
                            : achievement.type === 'Finalist'
                              ? ( 'shadow-[0_0_16px_4px_rgba(156,163,175,0.3)]' )
                              : achievement.type === 'Workshop'
                                ? ( 'shadow-[0_0_16px_4px_rgba(34,197,94,0.3)]' )
                                : achievement.type === 'Hackathon'
                                  ? ( 'shadow-[0_0_16px_4px_rgba(59,130,246,0.3)]' )
                                  : ( 'shadow-[0_0_16px_4px_rgba(168,85,247,0.2)]' )
                          }`}>
                          <achievement.icon
                            className={`w-8 h-8
                              ${
                                achievement.type === 'Winner'
                                  ? 'text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]'
                                  : achievement.type === 'Finalist'
                                    ? 'text-gray-300 drop-shadow-[0_0_6px_rgba(156,163,175,0.7)]'
                                    : achievement.type === 'Workshop'
                                      ? 'text-green-300 drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]'
                                      : achievement.type === 'Hackathon'
                                        ? 'text-blue-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]'
                                        : 'text-white drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]'
                              }
                            `}
                          />
                        </div>
                        <div>
                          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                      <h3 className={`text-lg mb-2`}>
                        {achievement.title}
                      </h3>
                      <p className={`mb-1`}>
                        {achievement.organization}
                      </p>
                      <p className={`text-sm`}>
                        {achievement.year}
                      </p>
                    </motion.div>
                  </GlowCard>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;