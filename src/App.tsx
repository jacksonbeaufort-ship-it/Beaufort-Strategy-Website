import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { StrategyAssessor } from './components/StrategyAssessor';
import { MeetTheTeam } from './components/MeetTheTeam';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedTopic, setPreselectedTopic] = useState('');
  const [contactFormService, setContactFormService] = useState('');

  const handleOpenConsultation = (topic = '') => {
    setPreselectedTopic(topic);
    setIsConsultationModalOpen(true);
  };

  const handleExploreCapabilities = () => {
    const servicesElem = document.querySelector('#services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForConsultation = (serviceTitle: string) => {
    setContactFormService(serviceTitle);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleWithBlueprint = (bottleneckTitle: string) => {
    setContactFormService(`Blueprint Review: ${bottleneckTitle}`);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#EFECE6] font-sans selection:bg-[#C5A880]/30 selection:text-[#FAF8F5]">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Executive Growth Consultation')}
          onExploreCapabilities={handleExploreCapabilities}
        />

        {/* 2. Philosophy & Introduction Section */}
        <Introduction />

        {/* 3. Core Services & Capabilities Showcase */}
        <Services
          onSelectServiceForConsultation={handleSelectServiceForConsultation}
        />

        {/* 4. Interactive Strategy & System Assessor */}
        <StrategyAssessor
          onScheduleWithBlueprint={handleScheduleWithBlueprint}
        />

        {/* 5. Leadership & Team */}
        <MeetTheTeam />

        {/* 6. Contact & Consultation Scheduler */}
        <Contact preselectedService={contactFormService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Consultation Popover Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedTopic={preselectedTopic}
      />
    </div>
  );
}
