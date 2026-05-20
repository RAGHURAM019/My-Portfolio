import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark text-slate-400 pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute bottom-0 left-1/4 -z-10 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 -z-10 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mini Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
              Raghu Ram Reddy
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A passionate Full Stack Web Developer specialized in crafting premium, modern, and high-performance digital experiences.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, link: "https://github.com", name: "GitHub" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com", name: "LinkedIn" },
                { icon: <FaInstagram />, link: "https://instagram.com", name: "Instagram" },
                { icon: <FaEnvelope />, link: "mailto:raghuram1595@gmail.com", name: "Gmail" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-black/40 border border-primary/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-black hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-l-2 border-primary pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Me', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="hover:text-primary transition-colors duration-300 text-left hover:translate-x-1 transform inline-block cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-l-2 border-accent pl-3">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent text-lg flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent text-lg flex-shrink-0" />
                <a href="tel:+919951997990" className="hover:text-accent transition-colors">
                  +91 9951997990
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-lg flex-shrink-0" />
                <a href="mailto:raghuram1595@gmail.com" className="hover:text-accent transition-colors break-all">
                  raghuram1595@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Dev Quote */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-l-2 border-secondary pl-3">
              Dev Quote
            </h4>
            <div className="glass-dark p-6 rounded-2xl border border-primary/20 hover:border-primary/50 relative overflow-hidden transition-all duration-300 shadow-md">
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 blur-[20px] rounded-full" />
              <p className="text-xs italic leading-relaxed text-slate-400 relative z-10">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
              <span className="block text-[10px] text-right mt-3 text-secondary uppercase tracking-widest font-semibold">
                — Cory House
              </span>
            </div>
          </div>

        </div>

        {/* Divider with Center Accent */}
        <div className="relative w-full h-[1px] bg-white/10 mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            © {currentYear} G. Raghu Ram Reddy. All rights reserved.
          </p>
          <p className="text-slate-500 hover:text-slate-400 transition-colors">
            Designed & Developed by <span className="text-slate-300 font-semibold">G. Raghu Ram Reddy</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
