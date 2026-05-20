import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaJsSquare, FaGitAlt, FaDocker, FaGithub, FaCode, FaTerminal, FaRocket } from 'react-icons/fa';

const SkillBar = ({ name, level, description, icon }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6 group"
  >
    <div className="flex justify-between items-end mb-2">
      <div className="flex items-center gap-3">
        <span className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">{description}</p>
        </div>
      </div>
      <span className="text-primary font-bold">{level}%</span>
    </div>
    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5 p-[2px]">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
      >
        <div className="absolute top-0 right-0 w-2 h-full bg-white/20 blur-[2px]" />
      </motion.div>
    </div>
  </motion.div>
);

const ToolCard = ({ name, description, icon }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-6 glass-dark rounded-2xl border border-primary/20 hover:border-primary/50 text-center relative group overflow-hidden transition-all duration-300"
  >
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <motion.div 
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8 }}
      className="text-5xl text-primary mb-4 flex justify-center group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all"
    >
      {icon}
    </motion.div>
    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h4>
    <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    
    {/* Bottom Border Accent */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const Skills = () => {
  const languages = [
    { name: "HTML", level: 95, description: "Semantic HTML, Forms, Accessibility, Responsive Structure", icon: <FaHtml5 /> },
    { name: "CSS", level: 90, description: "Flexbox, Grid, Animations, Responsive Design", icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 88, description: "ES6+, DOM Manipulation, Async Programming", icon: <FaJsSquare /> },
    { name: "Java", level: 80, description: "OOP, DSA, Collections, Core Java", icon: <FaJava /> },
    { name: "Python", level: 75, description: "Basics, Automation, Problem Solving", icon: <FaPython /> },
  ];

  const tools = [
    { name: "Git", description: "Version Control System", icon: <FaGitAlt /> },
    { name: "Docker", description: "Containerization Platform", icon: <FaDocker /> },
    { name: "GitHub", description: "Code Hosting & Collaboration", icon: <FaGithub /> },
    { name: "VS Code", description: "Source Code Editor", icon: <FaTerminal /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Skills & <span className="text-primary">Technologies</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Technologies and tools I use to build modern, scalable, and responsive applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Programming Languages */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <FaCode className="text-primary" /> Programming Languages
            </h3>
            <div className="space-y-2">
              {languages.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <FaRocket className="text-primary" aria-label="Rocket Icon" /> Tools & Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add CSS module for custom glow effects if needed
// Or just use Tailwind classes as I did above.

export default Skills;
