import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaDownload, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certificates = () => {
  const tags = [
    "TCS iON",
    "Professional Development",
    "Career Enhancement",
    "Communication Skills",
    "Soft Skills",
    "Employability",
    "Certification"
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-dark">
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-yellow-600/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.2)]"
          >
            <FaAward className="text-3xl text-amber-400" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">Achievements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Professional certifications that demonstrate my continuous learning and technical expertise.
          </motion.p>
        </div>

        {/* Certificate Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/0 via-amber-400/50 to-yellow-600/0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
          
          <div className="relative glass-dark backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 group-hover:border-amber-500/30 transition-colors duration-500">
            
            {/* Left Column: Image Thumbnail */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-500/20 transition-colors shadow-2xl aspect-[4/3] bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <img 
                  src="/images/tcs-ion-preview.png" 
                  alt="TCS iON Career Enhancement Programme Certificate Preview" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Column: Details & Actions */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              
              {/* Header Info */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold flex items-center gap-2">
                  <FaCertificate />
                  TCS iON
                </div>
                <span className="text-slate-500 text-sm font-medium">Issue Year: 2024</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-100 transition-all duration-300">
                TCS iON Career Enhancement Programme
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                Successfully completed the TCS iON Career Enhancement Programme consisting of multiple industry-oriented certification courses focused on professional development, communication, technical skills, workplace readiness, and career enhancement.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-300 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {/* View Certificate */}
                <a 
                  href="/certificates/TCS_iON_Career_Enhancement_Programme_Certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-1"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

                {/* Download PDF */}
                <a 
                  href="/certificates/TCS_iON_Career_Enhancement_Programme_Certificates.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-white font-medium rounded-xl transition-all transform hover:-translate-y-1"
                >
                  <FaDownload className="text-amber-400" />
                  Download PDF
                </a>

                {/* Verify */}
                <button 
                  className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-slate-400 hover:text-white font-medium rounded-xl transition-all"
                  onClick={() => alert("Verification link goes here")}
                >
                  Verify / View Details
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
