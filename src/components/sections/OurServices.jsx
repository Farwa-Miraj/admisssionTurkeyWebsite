import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import GlassButton from '../ui/GlassButton.jsx';

const services = [
  {
    id: 'admissions',
    title: 'University Admissions',
    shortDesc: 'Direct channel access & high acceptance rate search.',
    desc: 'We secure your acceptance letter at top public and private universities with fast processing. We handle the communication and documentation details with the university directly.',
    points: ['Direct Access & Quick Offers', '90% Average Acceptance Rate', 'University Scholarship Placements'],
    shade: { active: '#d4ecff', accent: '#4a9fd4', border: 'rgba(74, 159, 212, 0.28)' },
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    shortDesc: 'Personalized visa guidance & interview prep.',
    desc: 'Navigating study visa paperwork can be confusing. We provide checklist verification and preparatory counseling to make sure your visa success ratio is close to 100%.',
    points: ['Personalized File Guidance', 'Detailed Checklist Verification', 'Mock Interview Sessions'],
    shade: { active: '#d0f0e2', accent: '#4caf7a', border: 'rgba(76, 175, 122, 0.28)' },
  },
  {
    id: 'residency',
    title: 'Residency Permit',
    shortDesc: 'Smooth residence card applications on arrival.',
    desc: 'All international students in Turkey must secure a student residency card (İkamet). We guide you through all legal forms, booking appointments, and required contracts.',
    points: ['Online Application Filing', 'Appointment Booking & Assistance', 'Tax Clearance & Student Insurance'],
    shade: { active: '#e6dcff', accent: '#8b6fd4', border: 'rgba(139, 111, 212, 0.28)' },
  },
  {
    id: 'housing',
    title: 'Student Housing & Airport Pickup',
    shortDesc: 'Door-to-door arrival support and accommodation.',
    desc: 'Touch down in Turkey with confidence. We meet you at the airport and transfer you straight to your pre-arranged hostel or private student apartment.',
    points: ['Door-to-Door Airport Transfer', 'Public & Private Hostel Placements', 'Private Apartment Renting Advice'],
    shade: { active: '#ffe8d6', accent: '#e8956c', border: 'rgba(232, 149, 108, 0.3)' },
  },
  {
    id: 'translation',
    title: 'Translation Services',
    shortDesc: 'Certified sworn Turkish document translations.',
    desc: 'Most Turkish universities require official sworn translations of your academic records. We translate and notarize all documents into Turkish rapidly.',
    points: ['Diploma & Transcripts translation', 'Passport translations', 'Sworn Notary Legalization in Turkey'],
    shade: { active: '#ffe0ec', accent: '#e87b9a', border: 'rgba(232, 123, 154, 0.28)' },
  },
  {
    id: 'equivalency',
    title: 'Documents Equivalency (Denklik)',
    shortDesc: 'Official degree verification with Ministry of Education.',
    desc: 'We assist with the Denklik (Equivalency) certificate from the Turkish Ministry of Education, certifying that your foreign diplomas correspond to local Turkish diplomas.',
    points: ['High School Denklik filing', 'University Denklik assistance', 'Ministry of Education representation'],
    shade: { active: '#fff0c8', accent: '#d4a843', border: 'rgba(212, 168, 67, 0.3)' },
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (idx) => {
    setActiveIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <AnimatedSection className="services-section__title">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>Our Services</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px' }}>
            Comprehensive on-ground and online support for your entire academic journey in Turkey.
          </p>
        </AnimatedSection>

        <AnimatedSection className="services-grid">
          <div className="services-accordion">
            {services.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={s.id}
                  className={`services-accordion__item ${
                    isActive ? 'services-accordion__item--active' : ''
                  }`}
                  style={{
                    '--service-active-bg': s.shade.active,
                    '--service-accent': s.shade.accent,
                    '--service-border': s.shade.border,
                  }}
                >
                  <GlassButton
                    type="button"
                    variant="inherit"
                    className="services-accordion__header"
                    onClick={() => toggleService(idx)}
                    aria-expanded={isActive}
                  >
                    <span className="services-accordion__title">{s.title}</span>
                    <span className="services-accordion__toggle" aria-hidden="true">
                      {isActive ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </GlassButton>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="services-accordion__panel"
                      >
                        <div className="services-accordion__panel-inner">
                          <p className="services-accordion__subtitle">{s.shortDesc}</p>

                          <div className="services-accordion__tags">
                            {s.points.map((pt) => (
                              <span key={pt} className="services-accordion__tag">
                                {pt}
                              </span>
                            ))}
                          </div>

                          <p className="services-accordion__desc">{s.desc}</p>

                          <ul className="services-accordion__list">
                            {s.points.map((pt) => (
                              <li key={pt} className="services-accordion__list-item">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
