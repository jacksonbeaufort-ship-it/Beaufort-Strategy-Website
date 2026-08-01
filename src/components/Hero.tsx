import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCapabilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreCapabilities,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0E0F12]">
      {/* Background Photography with Luxury Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Glass Center - Beaufort Strategy"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-110 brightness-90 scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Editorial Gradients & Noise */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/70 to-[#0E0F12]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F12] via-[#0E0F12]/80 to-transparent" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 my-auto w-full pt-8">
        <div className="max-w-4xl space-y-8">
          
          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#FAF8F5] font-light"
          >
            Strategy that moves <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FAF8F5] underline decoration-[#C5A880]/40 decoration-1 underline-offset-8">
              businesses forward.
            </span>
          </motion.h1>

          {/* Supporting Statement: Growth, Data, Marketing, Automation, Implementation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg md:text-xl text-[#C8C5BF] max-w-2xl font-light leading-relaxed"
          >
            We help growing small and medium enterprises architect and execute high-performance{' '}
            <strong className="text-[#EFECE6] font-medium">Growth Strategy</strong>,{' '}
            <strong className="text-[#EFECE6] font-medium">Data Pipelines</strong>,{' '}
            <strong className="text-[#EFECE6] font-medium">Digital Marketing</strong>, and{' '}
            <strong className="text-[#EFECE6] font-medium">AI Automation</strong>, without the overhead of building an internal department.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#0E0F12] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#C5A880] shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreCapabilities}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#FAF8F5]/20 text-sm font-medium tracking-wide text-[#EFECE6] hover:bg-[#FAF8F5]/5 hover:border-[#C5A880]/50 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Capabilities</span>
            </button>
          </motion.div>

          {/* Value Bullet Callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="pt-4 flex items-center gap-6 text-xs text-[#A09D96] font-mono tracking-wider uppercase"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>We don't just build strategies. We implement them.</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hero Bottom Bar: Key Executive Metrics & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-16">
        <div className="pt-8 border-t border-[#2A2D35]/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-serif text-[#FAF8F5] tracking-tight">
              100%
            </span>
            <span className="block text-xs text-[#A09D96] tracking-widest uppercase font-mono">
              Turnkey Execution
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-serif text-[#FAF8F5] tracking-tight">
              0
            </span>
            <span className="block text-xs text-[#A09D96] tracking-widest uppercase font-mono">
              Internal Headcount Needed
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-serif text-[#FAF8F5] tracking-tight">
              10 Core
            </span>
            <span className="block text-xs text-[#A09D96] tracking-widest uppercase font-mono">
              Data, Growth & AI Systems
            </span>
          </div>

          <div className="space-y-1 flex flex-col justify-between">
            <span className="block text-2xl sm:text-3xl font-serif text-[#C5A880] tracking-tight">
              SMB Focused
            </span>
            <span className="block text-xs text-[#A09D96] tracking-widest uppercase font-mono">
              Executive-Level Depth
            </span>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-8 flex justify-center">
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8E8B85] hover:text-[#C5A880] transition-colors group"
          >
            <span>Discover Philosophy</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
          </a>
        </div>
      </div>
    </section>
  );
};
