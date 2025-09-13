import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'pink' | 'blue';
  delay?: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'purple',
  delay = 0 
}) => {
  const { isDark } = useTheme();

  const glowClasses = {
    purple: isDark ? 'glow-border hover:glow-border' : 'glow-border-light hover:glow-border-light',
    pink: isDark ? 'glow-border-pink hover:glow-border-pink' : 'glow-border-pink-light hover:glow-border-pink-light',
    blue: isDark ? 'glow-border-blue hover:glow-border-blue' : 'glow-border-blue-light hover:glow-border-blue-light'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`${
        isDark ? 'glassmorphism' : 'glassmorphism-light'
      } rounded-xl p-6 ${glowClasses[glowColor]} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;