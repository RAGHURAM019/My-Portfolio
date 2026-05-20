import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImg from '../../assets/profile.png';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/RAGHURAM019', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/raghu-ram-reddy-b0ab62333', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaEnvelope />, href: 'mailto:raghuram1595@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 inline-block"
            >
              Welcome to my portfolio
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                G.Raghu Ram Reddy
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-slate-400 flex gap-2">
              <span>I am a</span>
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'MERN Stack Developer',
                    'Software Engineering Student',
                    'Java & JavaScript Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-primary font-bold",
                  cursorClassName: "text-primary"
                }}
              />
            </div>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Passionate software engineering student at Parul University specializing in building modern, scalable, and user-centric web applications. Focused on delivering high-quality code and exceptional digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.label === 'Email' ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-dark border border-primary/30 text-xl text-primary shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md"
                aria-label={link.label}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon wrapper for drop shadow */}
                <span className="relative z-10 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="/resume.pdf"
              download="Raghu_Ram_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center justify-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Soft gold glow around the circle */}
            <div className="absolute inset-[-10%] bg-gradient-to-tr from-primary/10 via-primary/5 to-accent/10 blur-3xl opacity-50 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700 rounded-full" />

            {/* 2 to 3 animated golden rings with wave motion */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-15px] border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1.02, 1.08, 1.02], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute inset-[-30px] border border-primary/10 rounded-full"
            />
            <motion.div
              animate={{ scale: [1.05, 1.12, 1.05], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute inset-[-45px] border border-primary/5 rounded-full"
            />

            {/* Subtle tech-style lines/circuit elements */}
            <div className="absolute top-1/2 -left-12 w-8 h-[1px] bg-primary/40 -translate-y-1/2" />
            <div className="absolute top-1/2 -right-12 w-8 h-[1px] bg-primary/40 -translate-y-1/2" />
            <div className="absolute -top-12 left-1/2 w-[1px] h-8 bg-primary/40 -translate-x-1/2" />
            <div className="absolute -bottom-12 left-1/2 w-[1px] h-8 bg-primary/40 -translate-x-1/2" />

            {/* Crosshair corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Thin golden circular border moving/rotating continuously with glowing dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-primary/40 rounded-full group-hover:border-primary/60 transition-colors duration-500 z-10"
            >
               {/* Glowing dots moving along the circular border */}
               <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#F59E0B]" />
               <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_#D4AF37]" />
               <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#FBBF24]" />
            </motion.div>

            {/* Minimal floating particles */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-8 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_5px_#F59E0B]"
            />
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 -left-10 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#F59E0B]"
            />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-lighter bg-dark-lighter z-10 group-hover:border-dark transition-colors duration-500 p-2">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="G. Raghu Ram Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Card: 2023-27, B.Tech Student */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 -left-8 md:-left-12 z-20 bg-dark/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-primary/40 shadow-[0_8px_32px_rgba(245,158,11,0.15)] group-hover:border-primary/60 group-hover:shadow-[0_8px_32px_rgba(245,158,11,0.25)] transition-all duration-500 flex flex-col items-center justify-center min-w-[160px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_5px_#F59E0B]" />
                <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  2023-27
                </span>
              </div>
              <p className="text-sm md:text-sm text-slate-300 font-medium tracking-wide">
                B.Tech Student
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
