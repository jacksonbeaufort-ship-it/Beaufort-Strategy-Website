import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Sparkles, ArrowRight, CheckCircle2, Clock, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { ASSESSMENT_OPTIONS, AssessmentOption } from '../data/content';

interface StrategyAssessorProps {
  onScheduleWithBlueprint: (bottleneckTitle: string) => void;
}

export const StrategyAssessor: React.FC<StrategyAssessorProps> = ({
  onScheduleWithBlueprint,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(ASSESSMENT_OPTIONS[0].id);
  const [businessSize, setBusinessSize] = useState<string>('$1M - $5M');

  const selectedAssessment =
    ASSESSMENT_OPTIONS.find((opt) => opt.id === selectedOptionId) || ASSESSMENT_OPTIONS[0];

  return (
    <section id="assessor" className="relative py-28 md:py-36 bg-[#0B0C0E] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono tracking-widest uppercase text-[#C5A880]">
            <span>Interactive Strategy Assessor</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light">
            Diagnose Your Executive Bottleneck
          </h2>

          <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
            Select your primary operational friction point to preview Beaufort Strategy's custom system architecture and estimated efficiency impact.
          </p>
        </div>

        {/* Assessor Workbench Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bottleneck Selectors */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SMB Size Selector */}
            <div className="p-6 rounded-2xl bg-[#12141A] border border-[#2A2D35] space-y-3">
              <label className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block">
                Step 1: Select Enterprise Scale
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Under $1M', '$1M - $5M', '$5M+'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setBusinessSize(size)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-all duration-300 cursor-pointer ${
                      businessSize === size
                        ? 'bg-[#FAF8F5] text-[#0E0F12] font-medium shadow-md'
                        : 'bg-[#181A20] text-[#C8C5BF] hover:bg-[#252835] border border-[#2A2D35]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottleneck Selector Cards */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block px-1">
                Step 2: Identify Primary Operational Friction
              </span>

              {ASSESSMENT_OPTIONS.map((option) => {
                const isSelected = option.id === selectedOptionId;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOptionId(option.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isSelected
                        ? 'bg-[#181B24] border-[#C5A880] shadow-xl shadow-[#C5A880]/10'
                        : 'bg-[#12141A] border-[#2A2D35] hover:border-[#2A2D35]/80 hover:bg-[#161820]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg text-[#FAF8F5] font-normal">
                        {option.bottleneck}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-[#C8C5BF] font-light leading-relaxed">
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Generated System Architecture Blueprint */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAssessment.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-10 rounded-2xl bg-[#14161D] border border-[#C5A880]/40 space-y-8 relative overflow-hidden shadow-2xl"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2D35] pb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-widest block">
                      Custom System Architecture Blueprint
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF8F5] font-light mt-1">
                      {selectedAssessment.bottleneck}
                    </h3>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#1A1C24] border border-[#2A2D35] text-right shrink-0">
                    <span className="text-[10px] font-mono text-[#8E8B85] block">Target Impact</span>
                    <span className="text-sm font-serif text-[#C5A880] font-medium">
                      {selectedAssessment.estimatedEfficiencyGain}
                    </span>
                  </div>
                </div>

                {/* Recommended Services Badges */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-[#8E8B85] tracking-wider block">
                    Recommended Technical Modules
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedAssessment.recommendedServices.map((service, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full bg-[#1C1F2B] border border-[#C5A880]/30 text-xs font-medium text-[#FAF8F5]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3-Step Execution Roadmap */}
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase text-[#8E8B85] tracking-wider block">
                    3-Step Implementation Strategy
                  </span>

                  <div className="space-y-3">
                    {selectedAssessment.roadmapSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0F12]/80 border border-[#2A2D35]"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#C5A880]/20 text-[#C5A880] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs md:text-sm text-[#EFECE6] font-light leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time to Impact & Schedule CTA */}
                <div className="pt-6 border-t border-[#2A2D35] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A09D96]">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span>Estimated Time to Full Impact: {selectedAssessment.timeToImpact}</span>
                  </div>

                  <button
                    onClick={() => onScheduleWithBlueprint(selectedAssessment.bottleneck)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#0E0F12] text-xs font-medium tracking-wide hover:bg-[#C5A880] transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Schedule Blueprint Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
