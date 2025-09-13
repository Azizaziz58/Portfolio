import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/glow.css';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${
  isDark 
    ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
    : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-[#1a237e]'
}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDark ? 'bg-purple-600/5' : 'bg-purple-600/3'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDark ? 'bg-pink-600/5' : 'bg-pink-600/3'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-3/4 left-1/2 w-72 h-72 ${isDark ? 'bg-blue-600/5' : 'bg-blue-600/3'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <About />
          <Education />
          <Skills />
          <Certifications />
          <Projects />
          <Internships />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;