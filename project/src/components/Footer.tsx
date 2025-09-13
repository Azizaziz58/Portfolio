import React from 'react';
import { motion } from 'framer-motion';
const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>Made by</span>
            <span>"Syed Liyas Aziz"</span>
          </div>
          
          <motion.p 
            className="text-sm text-gray-500 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} Syed Liyas Aziz. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs text-purple-400">React</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-pink-400">Tailwind CSS</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-blue-400">Framer Motion</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;