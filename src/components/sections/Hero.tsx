import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ChevronDown } from 'lucide-react';
import { COMPANY, STATS, HERO_HIGHLIGHTS, HERO_CONTENT } from '../../constants/data';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

export default function Hero() {
  return (
    <section id="hero" className="bg-[#0D0E1A] relative overflow-hidden min-h-screen flex items-center pt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4B58FF]/20 rounded-full blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF751F]/10 rounded-full blur-3xl pointer-events-none select-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FF751F]" /> {HERO_CONTENT.badge}
              </span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-4xl sm:text-5xl font-extrabold text-white font-heading leading-tight mb-6">
              {HERO_CONTENT.titlePart1} <br className="hidden lg:block" />
              <span className="text-[#FF751F]">{HERO_CONTENT.titleHighlight}</span> <br className="hidden lg:block" />
              {HERO_CONTENT.titlePart2}
            </motion.h1>
            
            <motion.p variants={item} className="text-gray-300 text-lg mb-8 max-w-2xl md:max-w-3xl mx-auto lg:mx-0">
              {COMPANY.tagline}
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#contact" className="bg-[#4B58FF] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#3542E0] transition-colors duration-200">
                {HERO_CONTENT.ctaQuote}
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`${HERO_CONTENT.ctaWhatsapp} (opens in a new tab)`} className="flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/5 transition-colors duration-200">
                <MessageCircle size={20} /> {HERO_CONTENT.ctaWhatsapp}
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 gap-y-3 justify-center lg:justify-start">
              {HERO_HIGHLIGHTS.map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-sm text-gray-400">
                  <CheckCircle size={16} className="text-[#4B58FF]" /> {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="relative flex justify-center lg:justify-end w-full">
            <div className="animate-float-card w-full max-w-md lg:max-w-sm">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {STATS.slice(0, 4).map((stat, i) => (
                    <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <span className="text-3xl font-heading font-extrabold text-white">{stat.value}{stat.suffix}</span>
                      <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/10 text-center lg:text-left">
                  <p className="text-[#FF751F] font-semibold mb-1">{HERO_CONTENT.servingArea}</p>
                  <p className="text-sm text-gray-400">{HERO_CONTENT.servingTypes}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-bold tracking-widest">{HERO_CONTENT.scrollText}</span>
        <ChevronDown size={20} className="animate-scroll-bounce" />
      </div>
    </section>
  );
}