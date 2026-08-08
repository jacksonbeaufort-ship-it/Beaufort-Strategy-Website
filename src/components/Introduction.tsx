import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowUpRight, Zap, Target, Database, Layers } from 'lucide-react';
import { PHILOSOPHY_PILLARS, COMPANY_INFO } from '../data/content';

export const Introduction: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 bg-[#0E0F12] border-t border-[#1E212B]">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono tracking-widest uppercase text-[#C5A880]">
              <span>The Beaufort Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.1] font-light">
              We solve hard business problems through strategy <span className="italic text-[#C5A880]">and</span> execution.
            </h2>

            <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
              <strong className="font-medium text-[#EFECE6]">
                Unlike traditional consulting firms that leave clients with thick slide decks and zero implementation support, we do things differently.
              </strong>
            </p>

            <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
              <strong className="font-medium text-[#EFECE6]">
                At Beaufort Strategy, we combine high-level vision with hands-on execution. While traditional firms hand off a road map and step aside, we partner with your business to not only define your high-growth vision but also develop a step-by-step execution strategy to get you there.
              </strong>
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            
            {/* Strategy vs Execution Comparison Card */}
            <div className="p-8 md:p-10 rounded-2xl bg-[#14161D] border border-[#2A2D35] space-y-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A880]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#2A2D35] pb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block">
                    The Modern Operating Model
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mt-1">
                    Traditional Consulting vs. Beaufort Strategy Group
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Traditional Model */}
                <div className="space-y-4 p-5 rounded-xl bg-[#0E0F12]/80 border border-[#2A2D35]/50">
                  <div className="flex items-center gap-2 text-red-400 font-medium text-sm">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Traditional Consulting</span>
                  </div>
                  <ul className="space-y-3 text-xs text-[#A09D96] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#A09D96]">•</span>
                      <span>100-page decks that collect digital dust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A09D96]">•</span>
                      <span>Requires hiring expensive internal teams to implement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A09D96]">•</span>
                      <span>Unclear accountability when systems break</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#A09D96]">•</span>
                      <span>Prolonged timelines and massive retainer fees</span>
                    </li>
                  </ul>
                </div>

                {/* Beaufort Model */}
                <div className="space-y-4 p-5 rounded-xl bg-[#1A1C24] border border-[#C5A880]/40">
                  <div className="flex items-center gap-2 text-[#C5A880] font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C5A880]" />
                    <span>The Beaufort Model</span>
                  </div>
                  <ul className="space-y-3 text-xs text-[#EFECE6] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A880]">•</span>
                      <span>Actionable strategy backed by working production systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A880]">•</span>
                      <span>Zero internal headcount or department overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A880]">•</span>
                      <span>Single point of executive & technical accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A880]">•</span>
                      <span>Rapid 30-day time to value with measurable ROI</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote Block */}
              <div className="pt-4 border-t border-[#2A2D35] flex items-center justify-between text-xs text-[#C8C5BF] italic">
                <span>"We help growing businesses implement world-class marketing, analytics, automation, and data systems."</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
