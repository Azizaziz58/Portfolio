import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, BookOpen, Award, Briefcase, Star, Mail, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'internships', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: BookOpen },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Internships', href: '#internships', icon: Star },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? isDark 
              ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10'
              : 'bg-white/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <div className={`p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 ${
                isDark ? 'shadow-lg shadow-purple-500/25' : 'shadow-lg shadow-black-500/15'
              }`}>
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Syed Liyas
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-black-500'}`}>
                  Portfolio
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? isDark
                          ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600 shadow-lg shadow-purple-500/15'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 shadow-lg shadow-purple-500/20' 
                        : 'bg-gradient-to-r from-purple-500/5 to-pink-500/5 shadow-lg shadow-purple-500/10'
                    }`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`hidden md:flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25 border border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600 hover:shadow-lg hover:shadow-purple-500/15 border border-purple-500/20'
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-gray-900 border border-purple-500/20'
                }`}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.95,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed inset-0 z-40 ${
          isDark ? 'bg-black/90' : 'bg-black/90'
        } backdrop-blur-xl`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  y: isOpen ? 0 : 50 
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-4 px-8 py-4 rounded-2xl transition-all duration-300 w-full max-w-sm ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white shadow-2xl shadow-purple-500/25 border border-purple-500/50'
                      : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-600 shadow-2xl shadow-purple-500/15 border border-purple-500/30'
                    : isDark
                      ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                      : 'bg-gray-100/50 text-gray-600 hover:text-gray-900 hover:bg-gray-200/50 border border-gray-200/50'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xl font-medium">{item.name}</span>
              </motion.button>
            );
          })}
          
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 50 
            }}
            transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-4 px-8 py-4 rounded-2xl transition-all duration-300 w-full max-w-sm ${
              isDark 
                ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-400 border border-yellow-500/30' 
                : 'bg-gradient-to-r from-purple-600/10 to-indigo-600/10 text-purple-600 border border-purple-500/20'
            }`}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            <span className="text-xl font-medium">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;