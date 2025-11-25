import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import InequalitySimulator from './components/InequalitySimulator';
import { getSectionData, UI_TEXT } from './constants';
import { ChevronRight, ArrowRight, LayoutGrid, BookOpen, ExternalLink, X, Info, User, Building2, TrendingUp, ShieldCheck, Zap, Scale, GraduationCap, HandCoins, Sun, Moon, Globe } from 'lucide-react';

type SectionKey = 'social' | 'education' | 'poverty';
type LangKey = 'es' | 'en' | 'ca';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('social');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState<LangKey>('es');
  
  const SECTIONS_DATA = getSectionData(lang);
  const currentSection = SECTIONS_DATA[activeSection];
  const activeData = currentSection.data[activeIndex];
  const Icon = activeData.icon;
  const AccentColor = currentSection.color;
  const ui = UI_TEXT[lang];

  // Theme configuration object for cleaner usage in JSX
  const theme = {
    text: isDarkMode ? 'text-slate-200' : 'text-slate-700',
    heading: isDarkMode ? 'text-white' : 'text-slate-900',
    subheading: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    border: isDarkMode ? 'border-white/10' : 'border-slate-200',
    borderStrong: isDarkMode ? 'border-[#262626]' : 'border-slate-300',
    bgCard: isDarkMode ? 'bg-[#111]' : 'bg-white',
    bgCardHover: isDarkMode ? 'hover:bg-[#141414]' : 'hover:bg-slate-50',
    bgList: isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white',
    bgActive: isDarkMode ? 'bg-[#1a1a1a]' : 'bg-slate-50',
    bgSidebar: isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white',
    selection: isDarkMode ? 'selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]' : 'selection:bg-blue-500/20 selection:text-blue-600',
    glassPopup: isDarkMode ? 'bg-[#0a0a0a]/90 border-white/10' : 'bg-white/90 border-slate-200',
    shadow: isDarkMode ? 'shadow-black/50' : 'shadow-slate-200/50',
    iconMuted: isDarkMode ? 'text-slate-600' : 'text-slate-400',
  };

  return (
    <div className={`relative min-h-screen w-full font-sans transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-slate-50'} ${theme.selection}`}>
      <Background activeColor={AccentColor} isDarkMode={isDarkMode} />

      <main className="relative z-10 max-w-[1600px] mx-auto px-6 py-6 md:py-8 flex flex-col gap-6 h-screen max-h-[950px]">
        
        {/* HEADER SECTION */}
        <header className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-4 shrink-0 transition-colors duration-500 ${theme.border}`}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 transition-colors duration-500" style={{ backgroundColor: AccentColor }} />
              <span className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${theme.subheading}`}>{ui.reportTitle}</span>
            </div>
            <motion.h1 
              key={activeSection + lang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${theme.heading}`}
            >
              {activeSection === 'social' && <span dangerouslySetInnerHTML={{__html: ui.socialTitle.replace('Social', `<span style="color:#D4AF37">Social</span>`)}} />}
              {activeSection === 'education' && <span dangerouslySetInnerHTML={{__html: ui.educationTitle.replace('Educación', `<span style="color:#3B82F6">Educación</span>`).replace('Education', `<span style="color:#3B82F6">Education</span>`).replace("l'Educació", `<span style="color:#3B82F6">l'Educació</span>`)}} />}
              {activeSection === 'poverty' && <span dangerouslySetInnerHTML={{__html: ui.povertyTitle.replace('Carencia', `<span style="color:#EF4444">Carencia</span>`).replace('Deprivation', `<span style="color:#EF4444">Deprivation</span>`).replace('Carència', `<span style="color:#EF4444">Carència</span>`)}} />}
            </motion.h1>
          </div>

          <div className="flex items-center gap-3">
             {/* LANGUAGE SWITCHER */}
             <div className={`flex items-center p-1 rounded-full border transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
                <button 
                  onClick={() => setLang('es')} 
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'es' ? (isDarkMode ? 'bg-white text-black' : 'bg-slate-800 text-white') : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800')}`}
                >
                  ES
                </button>
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? (isDarkMode ? 'bg-white text-black' : 'bg-slate-800 text-white') : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800')}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('ca')} 
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'ca' ? (isDarkMode ? 'bg-white text-black' : 'bg-slate-800 text-white') : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800')}`}
                >
                  CA
                </button>
             </div>

             <div className={`w-[1px] h-8 mx-1 ${theme.border}`} />

             <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-full border transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-yellow-500' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm'}`}
             >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
          </div>
        </header>

        {/* MAIN CONTENT CONTAINER */}
        <div className="flex flex-1 gap-6 min-h-0">
            
            {/* INNER GRID */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-11 gap-6 h-full min-h-0">
            
                {/* COLUMN 1: IMAGE & MAIN INFO (7 cols) */}
                <div className="lg:col-span-7 flex flex-col h-full min-h-0">
                    <motion.div 
                    layout
                    onClick={() => setIsModalOpen(true)}
                    className={`relative flex-1 rounded-2xl overflow-hidden border group shadow-2xl cursor-pointer transition-colors duration-500 ${theme.bgCard} ${theme.borderStrong} ${theme.shadow}`}
                    whileHover={{ scale: 1.002 }}
                    transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur border border-white/10 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Info size={12} className="text-[#D4AF37]" />
                            <span>{ui.clickToExpand}</span>
                        </div>

                        <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeData.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute inset-0"
                        >
                            <div className={`absolute inset-0 z-10 opacity-90 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-t from-black via-black/20 to-transparent' : 'bg-gradient-to-t from-slate-900/80 via-transparent to-transparent'}`} />
                            <img 
                            src={activeData.imageUrl} 
                            alt={activeData.title}
                            className="w-full h-full object-cover"
                            />
                        </motion.div>
                        </AnimatePresence>

                        {/* Text Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 flex flex-col justify-end h-full pointer-events-none">
                        <AnimatePresence mode='wait'>
                            <motion.div
                            key={activeData.id + lang}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            >
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-white/10 rounded-full bg-black/40 backdrop-blur-sm w-fit">
                                {Icon && <Icon size={14} style={{ color: AccentColor }} />}
                                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: AccentColor }}>
                                    {activeData.category === 'impact' ? ui.problemDetected : ui.possibleSolution}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl drop-shadow-lg">
                                {activeData.title}
                            </h2>
                            
                            <div className="h-[3px] w-16 mb-4" style={{ backgroundColor: AccentColor }} />

                            <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
                                {activeData.detail}
                            </p>
                            </motion.div>
                        </AnimatePresence>
                        </div>

                        {/* HOVER INFO PANEL */}
                        <div className="absolute bottom-48 md:bottom-40 right-8 z-30 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
                            <div className={`backdrop-blur-xl border p-5 rounded-xl w-72 shadow-2xl relative overflow-hidden transition-colors duration-500 ${theme.glassPopup}`}>
                                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: AccentColor }} />
                                <div className="mb-5">
                                    <div className="flex items-center gap-2 mb-3" style={{ color: AccentColor }}>
                                        <BookOpen size={14} />
                                        <span className="text-[10px] uppercase tracking-widest font-semibold">{ui.dataSource}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {activeData.sourceLinks.map((link, idx) => (
                                            <li key={idx}>
                                                <a 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`text-[11px] hover:text-opacity-100 transition-colors flex items-center justify-between group/link border-b pb-1 ${isDarkMode ? 'text-slate-300 hover:text-white border-white/5' : 'text-slate-600 hover:text-black border-slate-300'}`}
                                                >
                                                    <span className="truncate pr-2">{link.title}</span>
                                                    <ExternalLink size={10} className="opacity-50 group-hover/link:opacity-100" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`flex items-end justify-between mb-2 pt-2 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-300'}`}>
                                    <div className="flex flex-col">
                                        <span className={`text-xs mb-1 uppercase tracking-wider ${theme.subheading}`}>{activeData.statLabel}</span>
                                        <span className={`text-3xl font-bold tracking-tight ${theme.heading}`}>{activeData.statValue}</span>
                                    </div>
                                </div>
                                <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                                    <div 
                                        className="h-full transition-all duration-1000 ease-out" 
                                        style={{ width: `${activeData.statPercentage}%`, backgroundColor: AccentColor }}
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* COLUMN 2: SIMULATOR & LIST (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6 h-full min-h-0">
                    {/* Simulator Widget */}
                    <div className="shrink-0">
                        <InequalitySimulator section={activeSection} isDarkMode={isDarkMode} lang={lang} />
                    </div>

                    {/* Navigation List */}
                    <div className={`flex-1 rounded-2xl border p-2 flex flex-col gap-1 overflow-y-auto custom-scrollbar min-h-0 transition-colors duration-500 ${theme.bgList} ${theme.borderStrong}`}>
                        {currentSection.data.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`group w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 border text-left shrink-0
                                ${isActive 
                                ? `${theme.bgActive} shadow-lg ${theme.shadow}` 
                                : `bg-transparent border-transparent ${theme.bgCardHover}`
                                }`}
                            style={{ borderColor: isActive ? `${AccentColor}40` : 'transparent' }}
                            >
                            <div className="flex items-center gap-4">
                                <span className={`text-xs font-mono font-bold ${isActive ? (isDarkMode ? 'text-white' : 'text-slate-900') : (isDarkMode ? 'text-slate-600' : 'text-slate-400')}`}>
                                0{index + 1}
                                </span>
                                <div>
                                <h4 className={`text-sm font-bold transition-colors ${isActive ? (isDarkMode ? 'text-white' : 'text-slate-900') : (isDarkMode ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-500 group-hover:text-slate-800')}`}>
                                    {item.title}
                                </h4>
                                </div>
                            </div>
                            
                            <div className={`p-1.5 rounded-full transition-all ${isActive ? 'text-black rotate-0' : 'text-slate-600 -rotate-45'}`} style={{ backgroundColor: isActive ? AccentColor : 'transparent' }}>
                                <ArrowRight size={14} />
                            </div>
                            </button>
                        )
                        })}
                    </div>
                </div>
            
            </div>

            {/* SIDE MENU (RIGHT BAR) */}
            <div className={`relative z-50 w-20 shrink-0 rounded-2xl border flex flex-col items-center py-6 gap-8 transition-colors duration-500 ${theme.bgSidebar} ${theme.borderStrong}`}>
                
                {/* Menu Title Vertical */}
                <div className={`writing-vertical-rl rotate-180 text-[10px] font-bold tracking-[0.3em] uppercase h-24 flex items-center justify-center transition-colors duration-500 ${theme.iconMuted}`}>
                    {ui.navTitle}
                </div>

                <div className={`w-8 h-[1px] transition-colors duration-500 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />

                {/* Menu Items */}
                <div className="flex flex-col gap-6 w-full px-2">
                    
                    <SideButton 
                        isActive={activeSection === 'social'} 
                        onClick={() => { setActiveSection('social'); setActiveIndex(0); }}
                        icon={Scale}
                        color="#D4AF37"
                        label={ui.socialShort}
                        isDarkMode={isDarkMode}
                    />

                    <SideButton 
                        isActive={activeSection === 'education'} 
                        onClick={() => { setActiveSection('education'); setActiveIndex(0); }}
                        icon={GraduationCap}
                        color="#3B82F6"
                        label={ui.eduShort}
                        isDarkMode={isDarkMode}
                    />

                    <SideButton 
                        isActive={activeSection === 'poverty'} 
                        onClick={() => { setActiveSection('poverty'); setActiveIndex(0); }}
                        icon={HandCoins}
                        color="#EF4444"
                        label={ui.povertyShort}
                        isDarkMode={isDarkMode}
                    />

                </div>
            </div>

        </div>

      </main>

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
          >
            <div className={`absolute inset-0 backdrop-blur-md ${isDarkMode ? 'bg-black/80' : 'bg-slate-900/40'}`} onClick={() => setIsModalOpen(false)} />

            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className={`relative w-full max-w-5xl border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-[85vh] transition-colors duration-500 ${theme.bgCard} ${theme.borderStrong}`}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/3 h-40 md:h-auto relative shrink-0">
                 <div className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent' : 'bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent'}`} />
                 <img src={activeData.imageUrl} alt={activeData.title} className="w-full h-full object-cover" />
                 <div className="absolute bottom-6 left-6 z-20">
                    <div className="inline-block px-2 py-0.5 rounded bg-black/60 backdrop-blur mb-2 text-[10px] uppercase font-bold tracking-widest" style={{ color: AccentColor, borderColor: `${AccentColor}50`, border: '1px solid' }}>
                       {ui.deepDive}
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-none">{activeData.title}</h2>
                 </div>
              </div>

              <div className={`w-full md:w-2/3 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 transition-colors duration-500 ${theme.bgCard}`}>
                 <div className={`text-lg font-light leading-relaxed border-b pb-4 transition-colors duration-500 ${theme.text} ${theme.border}`}>
                    {activeData.longDescription}
                 </div>

                 <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-4">
                        <h3 className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-500 ${theme.subheading}`}>
                            <TrendingUp size={14} style={{ color: AccentColor }} /> {ui.dimensions}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ImpactCard icon={User} title={ui.people} text={activeData.analysis.peopleImpact} colorClass="text-emerald-500" isDarkMode={isDarkMode} />
                            <ImpactCard icon={Building2} title={ui.companies} text={activeData.analysis.companyImpact} colorClass="text-blue-500" isDarkMode={isDarkMode} />
                            <div className="md:col-span-2">
                                <ImpactCard icon={TrendingUp} title={ui.economy} text={activeData.analysis.economicImpact} colorClass="text-purple-500" isDarkMode={isDarkMode} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 pt-2">
                        <h3 className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-500 ${theme.subheading}`}>
                            <ShieldCheck size={14} style={{ color: AccentColor }} /> {ui.solutions}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className={`p-5 rounded-xl border-l-2 border-slate-400 transition-colors duration-500 ${isDarkMode ? 'bg-[#161616]' : 'bg-slate-50'}`}>
                                <span className="text-xs text-slate-500 font-bold uppercase mb-1 block">{ui.done}</span>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{activeData.analysis.measuresTaken}</p>
                            </div>
                            <div className={`p-5 rounded-xl border-l-2 bg-gradient-to-r transition-colors duration-500 ${isDarkMode ? 'from-white/5 to-transparent bg-[#161616]' : 'from-slate-100 to-transparent bg-slate-50'}`} style={{ borderColor: AccentColor }}>
                                <span className="text-xs font-bold uppercase mb-1 block flex items-center gap-1" style={{ color: AccentColor }}>
                                    <Zap size={10} /> {ui.needed}
                                </span>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{activeData.analysis.measuresNeeded}</p>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: ${isDarkMode ? '#0f0f0f' : '#f1f5f9'}; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isDarkMode ? '#333' : '#cbd5e1'}; border-radius: 2px; }
        .writing-vertical-rl { writing-mode: vertical-rl; }
      `}</style>
    </div>
  );
};

// Helper Components
const SideButton = ({ isActive, onClick, icon: Icon, color, label, isDarkMode }: any) => (
    <button 
        onClick={onClick}
        className={`relative group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? (isDarkMode ? 'bg-white/10' : 'bg-slate-100') : (isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50')}`}
    >
        <Icon size={20} style={{ color: isActive ? color : (isDarkMode ? '#64748b' : '#94a3b8'), filter: isActive ? `drop-shadow(0 0 8px ${color}60)` : 'none' }} />
        {isActive && <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full" style={{ backgroundColor: color }} />}
        
        {/* Tooltip */}
        <div className={`absolute right-14 border px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 ${isDarkMode ? 'bg-black border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-md'}`}>
            {label}
        </div>
    </button>
);

const ImpactCard = ({ icon: Icon, title, text, colorClass, isDarkMode }: any) => (
    <div className={`p-4 rounded-xl border transition-colors h-full ${isDarkMode ? 'bg-[#111] border-white/5 hover:border-white/20' : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'}`}>
        <div className={`flex items-center gap-2 mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            <Icon size={16} className={colorClass} />
            <span>{title}</span>
        </div>
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{text}</p>
    </div>
);

export default App;