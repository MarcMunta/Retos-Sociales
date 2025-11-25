import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Scale, Coins, AlertCircle, Briefcase, HeartHandshake, Info, HelpCircle } from 'lucide-react';
import { SIMULATOR_TEXT } from '../constants';

interface Props {
  section: 'social' | 'education' | 'poverty';
  isDarkMode: boolean;
  lang: 'es' | 'en' | 'ca';
}

const InequalitySimulator: React.FC<Props> = ({ section, isDarkMode, lang }) => {
  const [investment, setInvestment] = useState<number>(30);
  const sliderId = `investment-slider-${section}`;
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null);

  useEffect(() => {
    setInvestment(30);
  }, [section]);

  const texts = SIMULATOR_TEXT[lang];
  const commonTexts = SIMULATOR_TEXT[lang]; // Alias for common fields

  const config = useMemo(() => {
    switch (section) {
      case 'education':
        return {
          ...texts.education,
          color: "#3B82F6", // Blue
          icon: Briefcase,
          getDisplayValue: (inv: number) => `${inv}%`, 
          calculate: (inv: number) => (40 + (inv * 0.55)).toFixed(1) + "%",
        };
      case 'poverty':
        return {
            ...texts.poverty,
          color: "#EF4444", // Red
          icon: HeartHandshake,
          getDisplayValue: (inv: number) => `${inv}%`,
          calculate: (inv: number) => (30 + (inv * 0.7)).toFixed(1) + "%",
        };
      case 'social':
      default:
        return {
            ...texts.social,
          color: "#D4AF37", // Gold
          icon: Scale,
          getDisplayValue: (inv: number) => `${(15 + (inv * 0.3)).toFixed(1)}%`,
          calculate: (inv: number) => (0.60 - (inv / 100) * 0.30).toFixed(3),
        };
    }
  }, [section, texts]);

  const outputValue = config.calculate(investment);
  const displayValue = config.getDisplayValue(investment);

  const topY = 20; 
  const bottomY = 85 - (investment * 0.55);

  const topPath = `M0,50 C30,50 50,${topY} 100,${topY}`;
  const bottomPath = `M0,50 C30,50 50,${bottomY} 100,${bottomY}`;
  const areaPath = `M0,50 C30,50 50,${topY} 100,${topY} L100,${bottomY} C50,${bottomY} 30,50 0,50 Z`;

  // Dynamic Theme Colors
  const theme = {
    bg: isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white',
    border: isDarkMode ? 'border-white/5' : 'border-slate-200',
    headerBg: isDarkMode ? 'bg-[#141414]' : 'bg-slate-50',
    graphBg: isDarkMode ? 'bg-[#0a0a0a]' : 'bg-slate-50/50',
    textPrimary: isDarkMode ? 'text-white' : 'text-slate-900',
    textSecondary: isDarkMode ? 'text-slate-200' : 'text-slate-700',
    textMuted: isDarkMode ? 'text-slate-500' : 'text-slate-400',
    gridLines: isDarkMode ? 'border-slate-400' : 'border-slate-300',
    controlBg: isDarkMode ? 'bg-[#141414]' : 'bg-white',
    sliderBg: isDarkMode ? 'bg-slate-800' : 'bg-slate-200',
    tooltipBg: isDarkMode ? 'bg-[#1a1a1a]/95 border-white/10' : 'bg-white/95 border-slate-200',
    tooltipText: isDarkMode ? 'text-slate-200' : 'text-slate-600',
  };

  return (
    <div className={`w-full border rounded-xl overflow-hidden shadow-2xl transition-colors duration-500 relative flex flex-col h-full min-h-[300px] ${theme.bg} ${theme.border} ${isDarkMode ? 'shadow-black/50' : 'shadow-slate-200/50'}`} style={{ borderColor: isDarkMode ? `${config.color}30` : undefined }}>
      
      {/* Tooltip Overlay */}
      <AnimatePresence>
        {hoveredTerm && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`absolute top-16 left-4 right-4 z-50 backdrop-blur-md border p-4 rounded-xl shadow-2xl ${theme.tooltipBg}`}
            style={{ borderColor: config.color }}
          >
            <div className="flex gap-3">
              <Info className="shrink-0 mt-0.5" size={16} style={{ color: config.color }} />
              <p className={`text-xs leading-relaxed font-medium ${theme.tooltipText}`}>
                {hoveredTerm}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className={`px-6 py-5 border-b flex justify-between items-center transition-colors duration-500 ${theme.headerBg} ${theme.border}`}>
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-md ${isDarkMode ? 'bg-white/5' : 'bg-slate-200/50'}`} style={{ color: config.color }}>
            <config.icon size={18} />
          </div>
          <h3 className={`font-semibold tracking-wider text-sm uppercase transition-colors duration-500 ${theme.textSecondary}`}>{config.title}</h3>
        </div>
        <div className="flex flex-col items-end relative group cursor-help">
          <div 
            className="flex items-center gap-1.5 mb-0.5"
            onMouseEnter={() => setHoveredTerm(config.outputDef)}
            onMouseLeave={() => setHoveredTerm(null)}
          >
            <span className={`text-[10px] uppercase tracking-widest transition-colors border-b border-dashed ${theme.textMuted} ${isDarkMode ? 'hover:text-white border-slate-700 hover:border-white' : 'hover:text-slate-900 border-slate-300 hover:border-slate-500'}`}>{config.outputLabel}</span>
            <HelpCircle size={10} className={theme.textMuted} />
          </div>
          <span className="font-mono font-bold text-lg" style={{ color: config.color }}>
            {outputValue}
          </span>
        </div>
      </div>

      {/* Graph Area */}
      <div className={`flex-1 relative w-full min-h-[180px] transition-colors duration-500 ${theme.graphBg}`}>
        <div className={`absolute inset-0 z-0 flex flex-col justify-between py-4 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
           {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-full border-t ${theme.gridLines}`} />
           ))}
        </div>

        <svg className="absolute inset-0 w-full h-full overflow-visible z-10 px-4 py-4" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`gradient-${section}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={config.color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={config.color} stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path 
            d={areaPath}
            fill={`url(#gradient-${section})`}
            animate={{ d: areaPath }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />

          <motion.path d={topPath} fill="none" stroke={config.color} strokeWidth="2" strokeLinecap="round" />
          
          <motion.path 
            d={bottomPath}
            fill="none"
            stroke={isDarkMode ? "#94a3b8" : "#64748b"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 2"
            animate={{ d: bottomPath }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </svg>

        <div className={`absolute right-4 top-6 text-[10px] font-bold px-2 py-0.5 rounded border backdrop-blur transition-colors duration-300 ${isDarkMode ? 'bg-black/50' : 'bg-white/60'}`} style={{ color: config.color, borderColor: `${config.color}40` }}>
          {config.topLine}
        </div>
        <motion.div 
          className={`absolute right-4 text-[10px] font-bold px-2 py-0.5 rounded border backdrop-blur transition-colors duration-500 ${isDarkMode ? 'text-slate-400 bg-black/50 border-slate-700' : 'text-slate-500 bg-white/60 border-slate-300'}`}
          style={{ top: `${bottomY}%` }}
          animate={{ top: `${bottomY}%` }}
        >
          {config.botLine}
        </motion.div>
      </div>

      {/* Controls */}
      <div className={`p-6 border-t relative z-20 transition-colors duration-500 ${theme.controlBg} ${theme.border}`}>
         <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <div 
                className="flex items-center gap-1.5 mb-1 cursor-help w-fit"
                onMouseEnter={() => setHoveredTerm(config.inputDef)}
                onMouseLeave={() => setHoveredTerm(null)}
              >
                <label 
                  htmlFor={sliderId}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-dashed ${isDarkMode ? 'text-white/90 hover:text-white border-slate-700 hover:border-white' : 'text-slate-700 hover:text-black border-slate-300 hover:border-black'}`}
                >
                    {config.inputLabel}
                </label>
                <HelpCircle size={10} className={theme.textMuted} />
              </div>
              <span className={`text-2xl font-light transition-colors duration-500 ${theme.textPrimary}`}>{displayValue}</span>
              <span className={`text-[9px] uppercase mt-0.5 transition-colors duration-500 ${theme.textMuted}`}>{config.displayLabel}</span>
            </div>
            <div className="text-right">
               <span className={`text-[10px] block mb-1 transition-colors duration-500 ${theme.textMuted}`}>{commonTexts.projectedImpact}</span>
               <div className="flex items-center gap-2 justify-end">
                  <div className={`h-2 w-2 rounded-full ${investment > 60 ? 'bg-emerald-500' : 'bg-orange-500'}`} />
                  <span className={`text-xs transition-colors duration-500 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {investment > 60 ? commonTexts.positive : commonTexts.insufficient}
                  </span>
               </div>
            </div>
         </div>
         
        <input 
            type="range" 
            min="0" 
            max="100" 
            value={investment} 
            onChange={(e) => setInvestment(parseInt(e.target.value))}
          id={sliderId}
            className={`w-full h-1.5 rounded-full appearance-none cursor-pointer hover:opacity-90 transition-opacity ${theme.sliderBg}`}
            style={{ accentColor: config.color }}
          />
         
         <div className="mt-4 flex gap-2 items-start opacity-70 hover:opacity-100 transition-opacity">
            <Info size={12} className={`shrink-0 mt-0.5 ${theme.textMuted}`} />
            <p 
                className={`text-[10px] leading-relaxed italic transition-colors duration-500 ${theme.textMuted}`}
                dangerouslySetInnerHTML={{ __html: commonTexts.note }}
            />
         </div>

         <p className={`mt-2 text-[11px] leading-relaxed border-t pt-2 transition-colors duration-500 ${theme.textMuted} ${theme.border}`}>
           <AlertCircle size={10} className="inline mr-1" style={{ color: config.color }} />
           {config.alert}
         </p>
      </div>
    </div>
  );
};

export default InequalitySimulator;