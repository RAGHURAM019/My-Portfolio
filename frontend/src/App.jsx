import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="custom-cursor hidden md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    animate={{ opacity: 0, transitionEnd: { display: "none" } }}
    transition={{ duration: 1, delay: 2 }}
    onAnimationComplete={() => document.body.style.overflow = 'auto'}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
  >
    <div className="flex flex-col items-center gap-4">
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
      />
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        G. Raghu Ram Reddy
      </motion.h2>
    </div>
  </motion.div>
);

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
