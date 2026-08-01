import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTopic = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceInterest: preselectedTopic || 'Growth Consulting',
    annualRevenue: '$1M - $5M',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#12141A] border border-[#C5A880]/50 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#1C1F2B] text-[#C8C5BF] hover:text-[#FAF8F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 text-[#C5A880] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#FAF8F5]">
                  Inquiry Confirmed
                </h3>
                <p className="text-xs text-[#C8C5BF] max-w-sm mx-auto leading-relaxed">
                  A Beaufort Strategy Partner will contact <strong className="text-[#FAF8F5]">{formData.workEmail}</strong> within 4 business hours to confirm your consultation schedule.
                </p>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#FAF8F5] text-[#0E0F12] text-xs font-medium hover:bg-[#C5A880] transition-colors"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1 pr-8">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A880] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Executive Consultation Request</span>
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] font-light">
                  Schedule Free Strategy Session
                </h3>
                <p className="text-xs text-[#A09D96] font-light">
                  Direct 30-minute operational review with a Beaufort Partner.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Thorne"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.g. mthorne@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Beaufort Logistics"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                      Annual Revenue
                    </label>
                    <select
                      value={formData.annualRevenue}
                      onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Under $1M">Under $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M+">$5M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                  >
                    {CORE_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-[#C8C5BF] uppercase block mb-1">
                    Key Objective / Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g. Need help automating weekly executive reporting and BigQuery ETL..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181A20] border border-[#2A2D35] text-xs text-[#FAF8F5] placeholder-[#57534E] focus:outline-none focus:border-[#C5A880] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#C5A880] text-[#0E0F12] text-xs font-medium tracking-wide transition-all shadow-lg cursor-pointer"
              >
                <span>{isSubmitting ? 'Requesting Session...' : 'Confirm Consultation Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
