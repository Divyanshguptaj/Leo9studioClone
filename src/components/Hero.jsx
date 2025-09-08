import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Leo9HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Design', 'Technology', 'Marketing'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const wordVariants = {
    enter: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    center: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-none">
            We are a global
          </h1>
          <div className="flex items-center justify-center mt-2">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mr-4">
              creative agency
            </span>
          </div>
        </motion.div>

        {/* Subheading with description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            that combines design expertise with technology and intelligence.
          </p>
        </motion.div>

        {/* Animated Words */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[currentWord]}
                variants={wordVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"
                style={{ perspective: '1000px' }}
              >
                {words[currentWord]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Secondary Description */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            As global leaders in UX UI, technology, and marketing solutions, we partner with clients to 
            simplify, strengthen, and transform their businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2"
            >
              260+
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600">
              projects delivered<br />and counting more..
            </p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -2, 2, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20"
        />
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Leo9HeroSection;