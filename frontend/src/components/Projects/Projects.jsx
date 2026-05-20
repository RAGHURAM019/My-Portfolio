import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';

const ProjectCard = ({ title, description, tech, image, github, demo, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative glass-dark rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500"
  >
    {/* Project Image */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
      
      {/* Tech Badges on Image */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {tech.slice(0, 3).map((t, i) => (
          <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-primary/20 backdrop-blur-md border border-primary/30 text-primary rounded-full animate-pulse">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="p-8 space-y-4">
      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Full Tech List */}
      <div className="flex flex-wrap gap-2 pt-2">
        {tech.map((t, i) => (
          <span key={i} className="text-xs text-slate-400 font-semibold hover:text-primary transition-colors">#{t}</span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <motion.a 
          href={github} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-black/40 border border-primary/20 text-primary hover:text-black hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl transition-all text-sm font-bold shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        >
          <FaGithub /> GitHub
        </motion.a>
        <motion.a 
          href={demo} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-black text-sm font-bold shadow-lg shadow-primary/30 hover:brightness-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300"
        >
          <FaExternalLinkAlt /> Live Demo
        </motion.a>
      </div>
    </div>

    {/* Decorative Glow */}
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 blur-[100px] group-hover:bg-primary/40 transition-all duration-500 rounded-full" />
  </motion.div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Simple Online Store",
      description: "A responsive e-commerce frontend project where users can browse products, view details, and experience a clean shopping interface with cart functionality.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      image: project1Img,
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Intelligent Barcode Inventory",
      description: "A smart inventory management system using barcode scanning to track stock, manage product safety info, and provide real-time updates via a custom dashboard.",
      tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind"],
      image: project2Img,
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-dark-lighter">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Some of my recent projects that showcase my frontend, backend, and problem-solving skills.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* View More Button (Optional) */}
        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass-dark border border-primary/20 hover:border-primary/50 text-primary hover:text-black hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer"
          >
            Explore All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
