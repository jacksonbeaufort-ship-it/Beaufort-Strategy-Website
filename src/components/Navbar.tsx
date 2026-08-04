import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Assessor', href: '#assessor' },
    { name: 'Leadership', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0E0F12]/85 backdrop-blur-md border-b border-[#2A2D35]/60 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#0E0F12]/90 via-[#0E0F12]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center focus:outline-none"
            aria-label="Beaufort Strategy Group Home"
          >
            <Logo variant="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="group flex items-center gap-1.5 text-[13px] tracking-[0.08em] uppercase text-[#C8C5BF] hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
              >
                <span>{link.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[13px] font-medium tracking-[0.04em] text-[#0E0F12] bg-[#FAF8F5] hover:bg-[#C5A880] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#EFECE6] hover:text-[#C5A880] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-[#12141A] border-b border-[#2A2D35] px-6 py-8 md:hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              <div className="border-b border-[#2A2D35] pb-4 mb-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-mono">
                  Beaufort Navigation
                </span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between text-left py-2 border-b border-[#1E212B] text-lg font-serif tracking-wide text-[#EFECE6] hover:text-[#C5A880] transition-colors"
                >
                  <span>{link.name}</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C5A880] text-[#0E0F12] font-medium text-sm tracking-wide shadow-lg hover:bg-[#d6ba92] transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+19199249972"
                  className="flex items-center justify-center gap-2 py-3 text-xs tracking-wider uppercase text-[#C8C5BF] hover:text-[#FAF8F5]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>+1 (919) 924-9972</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
