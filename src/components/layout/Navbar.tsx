import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, NAVBAR_CONTENT } from '../../constants/data';

const menuContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.215, 0.61, 0.355, 1.0]
    }
  }
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${menuOpen ? 'bg-transparent border-b-transparent shadow-none' : 'bg-[#ffffff] shadow-sm border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#" className={`flex items-center h-full transition-opacity duration-100 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={() => setMenuOpen(false)}>
            <img src="/logo.svg" alt="ALBMC Logo" className="h-full w-auto" />
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
              {NAVBAR_CONTENT.ctaButton}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4B58FF] ${menuOpen ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
            <div className="flex flex-col justify-center items-center w-5 h-5 gap-1.5">
              <span className={`block h-0.5 transition-transform duration-300 ease-in-out origin-center ${menuOpen ? 'bg-white w-5 rotate-45 translate-y-2' : 'bg-gray-700 w-5'}`} />
              <span className={`block h-0.5 transition-opacity duration-300 ease-in-out ${menuOpen ? 'bg-white w-0 opacity-0' : 'bg-gray-700 w-4'}`} />
              <span className={`block h-0.5 transition-transform duration-300 ease-in-out origin-center ${menuOpen ? 'bg-white w-5 -rotate-45 -translate-y-2' : 'bg-gray-700 w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 bg-[#0D0E1A]/95 z-40 md:hidden flex flex-col items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map(link => (
                <motion.a
                  variants={menuItemVariants}
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-heading font-bold text-white/80 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}