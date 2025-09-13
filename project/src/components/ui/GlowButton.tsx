import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  href
}) => {
  const { isDark } = useTheme();

  const baseClasses = "px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden";
  const variants = {
    primary: isDark 
      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white glow-border hover:from-purple-500 hover:to-pink-500"
      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white glow-border-light hover:from-purple-500 hover:to-pink-500",
    secondary: isDark 
      ? "bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 glow-border"
      : "bg-transparent border-2 border-purple-500 text-purple-600 hover:bg-purple-500/5 glow-border-light"
  };

  const ButtonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${
          isDark 
            ? 'from-purple-400/20 to-pink-400/20' 
            : 'from-purple-400/10 to-pink-400/10'
        } opacity-0`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {ButtonContent}
    </button>
  );
};

export default GlowButton;