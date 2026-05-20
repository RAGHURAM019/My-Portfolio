import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaAward } from 'react-icons/fa';

const StatCard = ({ number, label, suffix = "+" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 glass-dark rounded-2xl border border-primary/20 text-center hover:border-primary/50 transition-all duration-300"
  >
    <motion.h3
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-primary mb-1"
    >
      {number}{suffix}
    </motion.h3>
    <p className="text-sm text-slate-400 uppercase tracking-wider">{label}</p>
  </motion.div>
);

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Parul University, Vadodara",
      duration: "2023 - 2027",
      description: "Focused on Software Engineering, Data Structures, Algorithms, and Full Stack Development. Maintaining a high academic standing while actively participating in tech communities.",
      icon: <FaGraduationCap />
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer (Self-Project Focus)",
      company: "Independent Learning",
      duration: "2023 - Present",
      description: "Developing various MERN stack applications, focusing on scalable architecture, clean code, and modern UI/UX principles.",
      icon: <FaCode />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-lighter">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            I am a dedicated Software Engineering student with a deep passion for building high-performance web applications. My journey is driven by a constant desire to learn and innovate within the ever-evolving tech landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio & Objective */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FaRocket className="text-primary" /> Career Objective
              </h3>
              <p className="text-slate-400 leading-relaxed">
                As an aspiring Full Stack Developer, my goal is to leverage my technical skills in JavaScript, React, and Node.js to create impactful digital solutions. I am committed to continuous learning and aim to contribute to cutting-edge projects that solve real-world problems while growing as a professional software engineer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FaAward className="text-primary" /> Key Focus Areas
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" /> Full Stack MERN Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" /> Software Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" /> Responsive UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" /> Scalable Backend Services
                </li>
              </ul>
            </motion.div>

            {/* Achievement Counters */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <StatCard number="10" label="Projects Done" />
            </motion.div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-primary" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 glass-dark rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 relative"
                  >
                    <span className="absolute top-6 right-6 text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                    <p className="text-primary mb-3 font-medium">{item.institution}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCode className="text-primary" /> Experience
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 glass-dark rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 relative"
                  >
                    <span className="absolute top-6 right-6 text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.role}</h4>
                    <p className="text-primary mb-3 font-medium">{item.company}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
    </section>
  );
};

export default About;
