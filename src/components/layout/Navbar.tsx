import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../../constants/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const isBgVisible = scrolled || menuOpen;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${isBgVisible ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#" className="font-heading font-extrabold text-2xl" onClick={() => setMenuOpen(false)}>
            <span className="text-[#4B58FF]">AL</span><span className="text-[#FF751F]">BMC</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#4B58FF] transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-[#4B58FF] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3542E0] transition-colors duration-200">
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4B58FF]">
            <div className="flex flex-col justify-center items-center w-5 h-5 gap-1.5">
              <span className={`block h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out origin-center ${menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
              <span className={`block h-0.5 bg-gray-700 transition-opacity duration-300 ease-in-out ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out origin-center ${menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
                <span className="font-heading font-extrabold text-2xl">
                  <span className="text-[#4B58FF]">AL</span><span className="text-[#FF751F]">BMC</span>
                </span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                {NAV_LINKS.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-[#F0F1FF] hover:text-[#4B58FF] transition-colors duration-200">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100 flex flex-col gap-4">
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-[#4B58FF] font-semibold text-sm hover:underline">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#4B58FF] text-white w-full text-center py-3 rounded-full text-sm font-semibold hover:bg-[#3542E0] transition-colors duration-200">
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}