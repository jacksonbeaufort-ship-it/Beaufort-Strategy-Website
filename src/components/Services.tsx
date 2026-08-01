import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  BarChart3,
  LayoutDashboard,
  Target,
  Globe,
  Database,
  Workflow,
  Server,
  Sparkles,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  X,
  Code2,
  Cpu,
  Terminal
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectServiceForConsultation: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForConsultation,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [activeBlueprintService, setActiveBlueprintService] = useState<ServiceItem | null>(null);

  const domainTabs = [
    { id: 'all', label: 'All Capabilities', count: 10 },
    { id: 'growth', label: 'Growth & Strategy', count: 3 },
    { id: 'marketing', label: 'Marketing & Acquisition', count: 2 },
    { id: 'data', label: 'Data Engineering & Systems', count: 3 },
    { id: 'automation', label: 'AI & Automation', count: 2 },
  ];

  const filteredServices =
    selectedDomain === 'all'
      ? CORE_SERVICES
      : CORE_SERVICES.filter((s) => s.domain === selectedDomain);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'growth-consulting':
        return <TrendingUp className="w-5 h-5 text-[#C5A880]" />;
      case 'business-analytics':
        return <BarChart3 className="w-5 h-5 text-[#C5A880]" />;
      case 'executive-dashboards':
        return <LayoutDashboard className="w-5 h-5 text-[#C5A880]" />;
      case 'marketing-strategy':
        return <Target className="w-5 h-5 text-[#C5A880]" />;
      case 'digital-marketing':
        return <Globe className="w-5 h-5 text-[#C5A880]" />;
      case 'etl-pipeline-development':
        return <Workflow className="w-5 h-5 text-[#C5A880]" />;
      case 'database-administration':
        return <Server className="w-5 h-5 text-[#C5A880]" />;
      case 'data-cleanup':
        return <Layers className="w-5 h-5 text-[#C5A880]" />;
      case 'ai-automation':
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'robotic-process-automation':
        return <Bot className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <Layers className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#0E0F12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C5A880]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>02. Capabilities & Execution</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light">
              End-to-End Execution Services
            </h2>

            <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
              We eliminate the gap between strategy and technology. Every service is delivered as a turnkey system engineered directly by senior specialists.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono text-[#8E8B85] uppercase tracking-wider block mb-1">
              Scope Guarantee
            </span>
            <span className="text-sm text-[#FAF8F5] font-serif italic">
              100% Strategy + Technical Implementation
            </span>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#1E212B]">
          {domainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDomain(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedDomain === tab.id
                  ? 'bg-[#FAF8F5] text-[#0E0F12] shadow-md'
                  : 'bg-[#14161D] text-[#C8C5BF] hover:bg-[#1C1F2B] hover:text-[#FAF8F5] border border-[#2A2D35]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  selectedDomain === tab.id
                    ? 'bg-[#0E0F12]/10 text-[#0E0F12]'
                    : 'bg-[#2A2D35] text-[#C5A880]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-8 rounded-2xl bg-[#12141A] border border-[#2A2D35] hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#C5A880]/5"
              >
                <div>
                  {/* Card Header: Icon & Domain */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#1A1C24] border border-[#2A2D35] flex items-center justify-center group-hover:border-[#C5A880]/50 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] px-3 py-1 rounded-full bg-[#181A20] border border-[#2A2D35]">
                      {service.domainLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mb-2 group-hover:text-[#C5A880] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#C5A880]/90 font-mono mb-4 tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#C8C5BF] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#1E212B]">
                    <span className="text-[10px] font-mono uppercase text-[#8E8B85] tracking-wider block">
                      Core Deliverables
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#EFECE6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metric & Actions */}
                <div className="pt-6 border-t border-[#1E212B] space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8E8B85] font-mono">Impact Metric:</span>
                    <span className="text-[#FAF8F5] font-medium font-serif italic text-right">
                      {service.impactMetric}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => setActiveBlueprintService(service)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#1A1C24] hover:bg-[#252835] text-xs text-[#EFECE6] font-medium transition-colors border border-[#2A2D35] cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Architecture</span>
                    </button>

                    <button
                      onClick={() => onSelectServiceForConsultation(service.title)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#FAF8F5]/10 hover:bg-[#C5A880] text-xs text-[#FAF8F5] hover:text-[#0E0F12] font-medium transition-all duration-300 cursor-pointer"
                    >
                      <span>Deploy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Architecture Blueprint Drawer Modal */}
      <AnimatePresence>
        {activeBlueprintService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#12141A] border border-[#C5A880]/50 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveBlueprintService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1C1F2B] text-[#C8C5BF] hover:text-[#FAF8F5] hover:bg-[#2A2D35] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-3 mb-6 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181A20] border border-[#2A2D35] text-xs font-mono text-[#C5A880]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Technical Blueprint: {activeBlueprintService.domainLabel}</span>
                </div>

                <h3 className="font-serif text-3xl text-[#FAF8F5] font-light">
                  {activeBlueprintService.title}
                </h3>

                <p className="text-xs font-mono text-[#C5A880] italic">
                  "{activeBlueprintService.tagline}"
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-[#181A20] border border-[#2A2D35] mb-6 space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider block">
                  Core Enterprise Challenge Solved
                </span>
                <p className="text-xs text-[#EFECE6] leading-relaxed font-light">
                  {activeBlueprintService.architectureDetails.problemSolved}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-6 space-y-3">
                <span className="text-[10px] font-mono uppercase text-[#8E8B85] tracking-wider block">
                  Technology & Architecture Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeBlueprintService.architectureDetails.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-[#1C1F2B] border border-[#2A2D35] text-xs font-mono text-[#FAF8F5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-mono uppercase text-[#8E8B85] tracking-wider block">
                  3-Phase Implementation Path
                </span>

                <div className="space-y-3">
                  {activeBlueprintService.architectureDetails.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-[#161820] border border-[#2A2D35]/80"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-xs text-[#EFECE6] font-light leading-relaxed">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Footer */}
              <div className="pt-6 border-t border-[#2A2D35] flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveBlueprintService(null)}
                  className="px-5 py-2.5 rounded-full text-xs text-[#C8C5BF] hover:text-[#FAF8F5] transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const title = activeBlueprintService.title;
                    setActiveBlueprintService(null);
                    onSelectServiceForConsultation(title);
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF8F5] text-[#0E0F12] hover:bg-[#C5A880] text-xs font-medium transition-colors shadow-lg"
                >
                  <span>Request Implementation Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
