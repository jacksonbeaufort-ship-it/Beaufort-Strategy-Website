import React from 'react';
import { Logo } from './Logo';
import { Linkedin, ArrowUp, Mail, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-[#1E212B] text-[#C8C5BF] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block focus:outline-none">
              <Logo variant="light" />
            </a>

            <p className="text-xs text-[#A09D96] max-w-sm font-light leading-relaxed">
              {COMPANY_INFO.valueProp}
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-light text-[#C8C5BF]">
              <li>
                <a href="#philosophy" className="hover:text-[#FAF8F5] transition-colors">
                  01. Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  02. Services & Capabilities
                </a>
              </li>
              <li>
                <a href="#assessor" className="hover:text-[#FAF8F5] transition-colors">
                  03. Strategy Assessor
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FAF8F5] transition-colors">
                  04. Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                  05. Contact & Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block">
              Core Practice Domains
            </span>
            <ul className="space-y-2 text-xs font-light text-[#A09D96]">
              <li>• Growth Consulting & Business Analytics</li>
              <li>• Marketing Strategy & Performance Marketing</li>
              <li>• Database Administration & Data Engineering</li>
              <li>• Data Cleanup & ETL Pipeline Development</li>
              <li>• Executive Dashboards</li>
              <li>• AI Automation & Robotic Process Automation (RPA)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-[#1C1E26] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8E8B85]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Beaufort Strategy Group. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://linkedin.com/in/beaufort-strategy-group"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#C8C5BF] hover:text-[#C5A880] transition-colors group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
