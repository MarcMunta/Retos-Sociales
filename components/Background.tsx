import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  activeColor: string;
  isDarkMode: boolean;
}

const Background: React.FC<Props> = ({ activeColor = "#D4AF37", isDarkMode }) => {
  return (
    <div className={`fixed inset-0 z-0 w-full h-full overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-[#050505]' : 'bg-slate-50'}`}>
      
      {/* Base Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b transition-opacity duration-700 ${isDarkMode ? 'from-black via-[#0a0a0a] to-[#111] opacity-90' : 'from-slate-50 via-slate-100 to-white opacity-100'}`} />

      {/* Primary Glow (Top Right) - Dynamic Color */}
      <motion.div
        animate={{
          backgroundColor: activeColor,
          scale: [1, 1.1, 1],
          opacity: isDarkMode ? [0.15, 0.25, 0.15] : [0.08, 0.15, 0.08],
        }}
        transition={{
          backgroundColor: { duration: 1 }, // Smooth color transition
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full filter blur-[150px] transition-all duration-700 ${isDarkMode ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
      />

      {/* Secondary Glow (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: isDarkMode ? [0.1, 0.2, 0.1] : [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] transition-all duration-700 ${isDarkMode ? 'bg-slate-400 mix-blend-screen opacity-10' : 'bg-slate-300 mix-blend-multiply opacity-20'}`}
      />

      {/* Subtle Grid Overlay */}
      <div className={`absolute inset-0 bg-[size:100px_100px] pointer-events-none transition-all duration-700 ${isDarkMode ? 
        'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]' : 
        'bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]'}`} 
      />

      {/* Noise Texture for Film Grain effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isDarkMode ? 'opacity-[0.04] mix-blend-overlay' : 'opacity-[0.03] mix-blend-multiply'}`} 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default Background;