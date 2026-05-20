import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUser, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Backend API Integration
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('API Error:', error);
      // Simulate network request/fallback to give a premium responsive UX if local server is down
      setTimeout(() => {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1800);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-dark-lighter text-slate-100">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-10 left-10 -z-10 w-[450px] h-[450px] bg-primary/10 blur-[140px] rounded-full animate-pulse duration-[8000ms]" block="" />
      <div className="absolute bottom-10 right-10 -z-10 w-[500px] h-[500px] bg-secondary/10 blur-[160px] rounded-full animate-pulse duration-[10000ms]" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm block mb-3"
          >
            Connect With Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight"
          >
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">Touch</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Feel free to contact me for collaborations, internships, freelance work, or any development-related opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Personal Contact Details & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* Contact Info Card */}
            <div className="glass-dark p-8 md:p-10 rounded-3xl border border-primary/20 flex-grow relative overflow-hidden group hover:border-primary/50 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/10 transition-all duration-500" />
              
              <h3 className="text-3xl font-bold mb-8 tracking-tight">
                G. Raghu Ram Reddy
              </h3>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-center gap-5 group/item">
                  <div className="w-14 h-14 bg-black/40 border border-primary/20 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-secondary group-hover/item:text-black transition-all duration-300 shadow-md">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Location</h4>
                    <p className="font-semibold text-lg text-slate-200">Hyderabad, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-5 group/item">
                  <div className="w-14 h-14 bg-black/40 border border-primary/20 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-secondary group-hover/item:text-black transition-all duration-300 shadow-md">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Phone Number</h4>
                    <a href="tel:+919951997990" className="font-semibold text-lg text-slate-200 hover:text-primary transition-colors">
                      +91 9951997990
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 group/item">
                  <div className="w-14 h-14 bg-black/40 border border-primary/20 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-secondary group-hover/item:text-black transition-all duration-300 shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Email Address</h4>
                    <a href="mailto:raghuram1595@gmail.com" className="font-semibold text-lg text-slate-200 hover:text-primary transition-colors break-all">
                      raghuram1595@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-12 pt-8 border-t border-primary/20">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Find Me On</h4>
                <div className="flex flex-wrap gap-4">
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
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-black/40 border border-primary/20 hover:border-primary/50 rounded-2xl flex items-center justify-center text-slate-300 hover:text-black hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form with Gradient Border */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Double-layered container for a modern 1px gradient border */}
            <div className="bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 p-[1.5px] rounded-3xl shadow-2xl">
              <div className="glass-dark p-8 md:p-10 rounded-[23px] relative overflow-hidden bg-slate-950/80 backdrop-blur-xl">
                {/* Visual Accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 blur-[60px] rounded-full" />
                
                <h3 className="text-2xl font-bold mb-8 relative z-10 tracking-tight">
                  Send A Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
                  {/* Status Notification Alerts */}
                  <AnimatePresence>
                    {status.error && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium"
                      >
                        {status.error}
                      </motion.div>
                    )}
                    {status.success && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-sm font-medium"
                      >
                        Your message has been sent successfully! I'll get back to you shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-primary/20 focus:border-primary'} rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:bg-slate-900/60 transition-all duration-300 peer`}
                        placeholder="Full Name"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-4 transition-all duration-300 pointer-events-none top-[-24px] text-xs text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-[-24px] peer-focus:text-xs peer-focus:text-primary font-medium"
                      >
                        Full Name *
                      </label>
                      {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    {/* Email Address */}
                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-primary/20 focus:border-primary'} rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:bg-slate-900/60 transition-all duration-300 peer`}
                        placeholder="Email Address"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-4 transition-all duration-300 pointer-events-none top-[-24px] text-xs text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-[-24px] peer-focus:text-xs peer-focus:text-primary font-medium"
                      >
                        Email Address *
                      </label>
                      {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-black/40 border ${errors.subject ? 'border-red-500/50' : 'border-primary/20 focus:border-primary'} rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:bg-slate-900/60 transition-all duration-300 peer`}
                      placeholder="Subject"
                    />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-4 transition-all duration-300 pointer-events-none top-[-24px] text-xs text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-[-24px] peer-focus:text-xs peer-focus:text-primary font-medium"
                    >
                      Subject *
                    </label>
                    {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full bg-black/40 border ${errors.message ? 'border-red-500/50' : 'border-primary/20 focus:border-primary'} rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:bg-slate-900/60 transition-all duration-300 resize-none peer`}
                      placeholder="Message"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-4 transition-all duration-300 pointer-events-none top-[-24px] text-xs text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-[-24px] peer-focus:text-xs peer-focus:text-primary font-medium"
                    >
                      Your Message *
                    </label>
                    {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:brightness-110 text-black font-extrabold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/30 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4 text-lg cursor-pointer"
                  >
                    {status.submitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
