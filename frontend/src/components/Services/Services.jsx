import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLaptopCode, FaDatabase, FaMobileAlt } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-8 glass-dark rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
  >
    {/* Animated Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl text-3xl text-primary mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-black transition-all duration-500 shadow-lg shadow-primary/10 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700" />
  </motion.div>
);

const Services = () => {
  const serviceData = [
    {
      title: "Frontend Development",
      description: "Crafting beautiful, high-performance user interfaces using modern technologies like React.js and Tailwind CSS. Focused on pixel-perfection and user experience.",
      icon: <FaCode />
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side architectures using Node.js and Express. Ensuring data integrity and high-performance server logic.",
      icon: <FaServer />
    },
    {
      title: "Full Stack Web Development",
      description: "End-to-end web solutions from database design to frontend implementation. Delivering seamless and integrated web applications.",
      icon: <FaLaptopCode />
    },
    {
      title: "REST API Development",
      description: "Designing and implementing secure, efficient, and well-documented RESTful APIs for mobile and web applications to communicate effectively.",
      icon: <FaDatabase />
    },
    {
      title: "Responsive UI Design",
      description: "Ensuring your website looks stunning on every device. Implementing mobile-first design principles for a consistent experience everywhere.",
      icon: <FaMobileAlt />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-primary">Services</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Providing high-quality digital solutions tailored to your specific needs and business goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
