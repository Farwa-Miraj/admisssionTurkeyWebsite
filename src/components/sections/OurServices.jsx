import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const services = [
  {
    id: 'admissions',
    title: 'University Admissions',
    shortDesc: 'Direct channel access & high acceptance rate search.',
    desc: 'We secure your acceptance letter at top public and private universities with fast processing. We handle the communication and documentation details with the university directly.',
    points: ['Direct Access & Quick Offers', '90% Average Acceptance Rate', 'University Scholarship Placements'],
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    shortDesc: 'Personalized visa guidance & interview prep.',
    desc: 'Navigating study visa paperwork can be confusing. We provide checklist verification and preparatory counseling to make sure your visa success ratio is close to 100%.',
    points: ['Personalized File Guidance', 'Detailed Checklist Verification', 'Mock Interview Sessions'],
  },
  {
    id: 'residency',
    title: 'Residency Permit',
    shortDesc: 'Smooth residence card applications on arrival.',
    desc: 'All international students in Turkey must secure a student residency card (İkamet). We guide you through all legal forms, booking appointments, and required contracts.',
    points: ['Online Application Filing', 'Appointment Booking & Assistance', 'Tax Clearance & Student Insurance'],
  },
  {
    id: 'housing',
    title: 'Student Housing & Airport Pickup',
    shortDesc: 'Door-to-door arrival support and accommodation.',
    desc: 'Touch down in Turkey with confidence. We meet you at the airport and transfer you straight to your pre-arranged hostel or private student apartment.',
    points: ['Door-to-Door Airport Transfer', 'Public & Private Hostel Placements', 'Private Apartment Renting Advice'],
  },
  {
    id: 'translation',
    title: 'Translation Services',
    shortDesc: 'Certified sworn Turkish document translations.',
    desc: 'Most Turkish universities require official sworn translations of your academic records. We translate and notarize all documents into Turkish rapidly.',
    points: ['Diploma & Transcripts translation', 'Passport translations', 'Sworn Notary Legalization in Turkey'],
  },
  {
    id: 'equivalency',
    title: 'Documents Equivalency (Denklik)',
    shortDesc: 'Official degree verification with Ministry of Education.',
    desc: 'We assist with the Denklik (Equivalency) certificate from the Turkish Ministry of Education, certifying that your foreign diplomas correspond to local Turkish diplomas.',
    points: ['High School Denklik filing', 'University Denklik assistance', 'Ministry of Education representation'],
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <AnimatedSection className="services-section__title">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>Our Services</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px' }}>
            Comprehensive on-ground and online support for your entire academic journey in Turkey.
          </p>
        </AnimatedSection>

        <div className="services-grid">
          {/* Left Side Accordions */}
          <AnimatedSection direction="left" className="services-accordion">
            {services.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={s.id}
                  className={`services-accordion__item ${
                    isActive ? 'services-accordion__item--active' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="services-accordion__header"
                    onClick={() => setActiveIndex(idx)}
                  >
                    <span>{s.title}</span>
                    <svg
                      className="services-accordion__chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="services-accordion__body"
                      >
                        <p style={{ marginBottom: '12px' }}>{s.shortDesc}</p>
                        <div style={{ display: 'none' /* Handled on the right details pane */ }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatedSection>

          {/* Right Side Detail Pane */}
          <AnimatedSection direction="right" delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="services-detail"
              >
                <div className="services-detail__title">
                  <span className="services-detail__title-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <h3>{activeService.title}</h3>
                </div>

                <p className="services-detail__desc">{activeService.desc}</p>

                <div className="services-detail__list">
                  {activeService.points.map((pt, i) => (
                    <div key={i} className="services-detail__item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
