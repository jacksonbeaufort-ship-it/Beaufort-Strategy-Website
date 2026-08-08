import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

export const MeetTheTeam: React.FC = () => {
  return (
    <section id="team" className="relative py-28 md:py-36 bg-[#0E0F12] border-t border-[#1E212B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <div className="text-xs font-mono tracking-widest uppercase text-[#C5A880]">
            <span>Leadership & Partners</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light">
            Experienced Strategy, Leadership, & Implementation
          </h2>

          <p className="text-[#C8C5BF] text-base md:text-lg font-light leading-relaxed">
            Our team combines senior executive project management experience with hands-on enterprise data architecture & analytics, marketing strategy, and AI system design.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-[#12141A] border border-[#2A2D35] hover:border-[#C5A880]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Executive Portrait Image Frame */}
                <div className="relative h-80 w-full overflow-hidden bg-[#181A20]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-transparent opacity-90" />

                  {/* Placeholder Badge indicator */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0E0F12]/80 border border-[#2A2D35] text-[10px] font-mono text-[#A09D96] backdrop-blur-md">
                    Leadership Profile
                  </div>

                  {/* Role Tag overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] px-3 py-1 rounded-md bg-[#0E0F12]/80 border border-[#2A2D35]">
                      {member.roleTag}
                    </span>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal group-hover:text-[#C5A880] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#A09D96] mt-1 tracking-wide">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-sm text-[#C8C5BF] font-light leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="pt-4 border-t border-[#1E212B] space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#8E8B85] tracking-wider block">
                      Core Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#181A20] text-[11px] font-mono text-[#FAF8F5] border border-[#2A2D35]"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: LinkedIn Link */}
              <div className="p-6 pt-0 border-t border-[#1E212B] mt-4 flex items-center justify-between">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A880] hover:text-[#FAF8F5] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
