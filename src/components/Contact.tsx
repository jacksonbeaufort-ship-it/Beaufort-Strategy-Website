import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Clock, ArrowRight, CheckCircle2, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/content';

interface ContactProps {
  preselectedService?: string;
  preselectedBlueprint?: string;
}

export const Contact: React.FC<ContactProps> = ({
  preselectedService = '',
  preselectedBlueprint = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    annualRevenue: '$1M - $5M',
    selectedService: preselectedService || preselectedBlueprint || 'Growth Consulting',
    timeline: 'Immediate (Next 30 Days)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate executive submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#0E0F12] border-t border-[#1E212B]">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest uppercase text-[#C5A880]">
                <span>Initiate Engagement</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light">
                Let's discuss what's next for your business.
              </h2>

              <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
                Schedule a complimentary 30-minute executive session with a Beaufort Partner. We will analyze your bottlenecks and map an actionable execution roadmap.
              </p>
            </div>

            {/* Response SLA Guarantee */}
            <div className="p-6 rounded-2xl bg-[#14161D] border border-[#2A2D35] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#C5A880] tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Executive SLA Response Commitment</span>
              </div>
              <p className="text-xs text-[#C8C5BF] font-light leading-relaxed">
                All business inquiries are reviewed directly by a Managing Partner. Expect a response within 4 business hours.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6 pt-4 border-t border-[#1E212B]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#181A20] border border-[#2A2D35] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E8B85] uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm text-[#FAF8F5] hover:text-[#C5A880] font-medium transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#181A20] border border-[#2A2D35] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E8B85] uppercase tracking-wider block">
                    Executive Phone
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm text-[#FAF8F5] hover:text-[#C5A880] font-medium transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Executive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#12141A] border border-[#2A2D35] shadow-2xl relative">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#C5A880] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl text-[#FAF8F5]">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-[#C8C5BF] max-w-md mx-auto font-light leading-relaxed">
                      Thank you, <strong className="text-[#FAF8F5]">{formData.fullName}</strong>. A Managing Partner at Beaufort Strategy Group will review your inquiry and contact you at <strong className="text-[#C5A880]">{formData.workEmail}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#181A20] border border-[#2A2D35] max-w-md mx-auto text-left space-y-2 text-xs">
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider block">
                      Summary of Session Request
                    </span>
                    <div className="flex justify-between text-[#EFECE6]">
                      <span>Company:</span>
                      <span className="font-mono">{formData.companyName || 'SMB Client'}</span>
                    </div>
                    <div className="flex justify-between text-[#EFECE6]">
                      <span>Service Domain:</span>
                      <span className="font-mono">{formData.selectedService}</span>
                    </div>
                    <div className="flex justify-between text-[#EFECE6]">
                      <span>Target Timeline:</span>
                      <span className="font-mono">{formData.timeline}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        companyName: '',
                        annualRevenue: '$1M - $5M',
                        selectedService: 'Growth Consulting',
                        timeline: 'Immediate (Next 30 Days)',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C1F2B] text-xs text-[#C8C5BF] hover:text-[#FAF8F5] border border-[#2A2D35] transition-colors"
                  >
                    <span>Submit Another Session Request</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#2A2D35] pb-4">
                    <span className="text-xs font-mono uppercase text-[#C5A880] tracking-wider block">
                      Schedule a Free Executive Consultation
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF8F5] font-light mt-1">
                      Direct Strategy Session Form
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="e.g. evance@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Industrial Systems"
                        className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>

                    {/* Annual Revenue */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                        Annual Enterprise Scale
                      </label>
                      <select
                        value={formData.annualRevenue}
                        onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors"
                      >
                        <option value="Under $1M">Under $1M</option>
                        <option value="$1M - $5M">$1M - $5M</option>
                        <option value="$5M+">$5M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Selected Primary Service */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                      Primary Service Focus Area
                    </label>
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      {CORE_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title} ({srv.domainLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Primary Objective */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#C8C5BF] uppercase tracking-wider block">
                      Primary Challenge or Objective
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current operational bottleneck or upcoming initiative..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181A20] border border-[#2A2D35] text-sm text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-[#FAF8F5] hover:bg-[#C5A880] text-[#0E0F12] text-sm font-medium tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processing Session Request...' : 'Schedule Free Consultation'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
