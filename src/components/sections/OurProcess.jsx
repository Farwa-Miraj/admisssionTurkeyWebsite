import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We analyze your academic background, financial budget, and career goals to outline your best pathways.',
    accent: '#fdd835', // Yellow
    rotate: -5,
  },
  {
    num: '02',
    title: 'Program/University Selection',
    desc: 'We present a tailored list of top public and foundation universities offering your chosen program.',
    accent: '#2196f3', // Blue
    rotate: 4,
  },
  {
    num: '03',
    title: 'Documents Preparation',
    desc: 'Our sworn translators translate and notarize all school transcripts, passports, and certifications.',
    accent: '#9c27b0', // Purple
    rotate: -4,
  },
  {
    num: '04',
    title: 'Application & Offer Letter',
    desc: 'We submit application details directly and secure your conditional acceptance letter in 3-5 working days.',
    accent: '#ff9800', // Orange
    rotate: 3,
  },
  {
    num: '05',
    title: 'Acceptance & Visa Processing',
    desc: 'We assist with university fee deposit transfers and prepare your complete student visa dossier.',
    accent: '#4caf50', // Green
    rotate: -3,
  },
  {
    num: '06',
    title: 'Pre-Departure & Arrival Support',
    desc: 'On-ground assistance including airport pick-up, local student hostel booking, and university registration.',
    accent: '#3f51b5', // Indigo
    rotate: 4,
  },
  {
    num: '07',
    title: 'Start Studying',
    desc: 'Attend orientation, complete your equivalence (Denklik) registration, and begin your study classes!',
    accent: '#ef5350', // Red/Pink
    rotate: -5,
  },
];

function Pushpin() {
  return (
    <svg viewBox="0 0 100 100" width="34" height="34" className="sticky-note__pushpin" aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="47" cy="74" rx="7" ry="2.5" fill="rgba(0,0,0,0.18)" />
      {/* Metallic Pin */}
      <path d="M 50 48 L 47 74 L 53 74 Z" fill="#b0bec5" stroke="#78909c" strokeWidth="0.8" />
      {/* Blue Plastic Head */}
      <path
        d="M 36 28 C 36 23, 64 23, 64 28 L 59 44 C 67 44, 67 48, 59 48 L 41 48 C 33 48, 33 44, 41 44 Z"
        fill="url(#blue-pushpin-gradient)"
        stroke="#0d47a1"
        strokeWidth="1.2"
      />
      {/* Glass Highlight */}
      <ellipse cx="46" cy="30" rx="5" ry="2.2" fill="rgba(255,255,255,0.4)" />
      <defs>
        <radialGradient id="blue-pushpin-gradient" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#42a5f5" />
          <stop offset="50%" stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d47a1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function OurProcess() {
  const { openApplyForm } = useApplyForm();

  const handleBookCall = () => {
    const message = "Hello! I am planning my studies in Turkey and would like to book a consultation call.";
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="process" className="sticky-timeline-section">
      <div className="container">
        <AnimatedSection className="sticky-timeline-section__title">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy)' }}>How It Works</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
            A transparent, step-by-step guidance process from initial contact to your first day of class in Turkey.
          </p>
        </AnimatedSection>

        {/* Timeline wrapper with graph paper background */}
        <div className="sticky-timeline-board">
          
          {/* Curved Connector SVG Path for Desktop (Alternating Columns) */}
          <svg className="sticky-timeline-board__svg" viewBox="0 0 1000 1350" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="sticky-timeline-board__dashed-line"
              d="
                M 320 130
                C 420 130, 470 140, 520 210
                S 600 340, 540 420
                S 460 520, 520 600
                S 620 720, 540 800
                S 430 880, 520 960
                S 620 1040, 520 1120
              "
            />
          </svg>

          {/* Staggered Sticky Notes List */}
          <div className="sticky-notes-container">
            {steps.map((step, idx) => {
              const isRight = idx % 2 === 1;
              const wrapperStyle = {
                gridRow: idx + 1,
              };

              return (
                <motion.div
                  key={step.num}
                  className={`sticky-note-card-wrapper ${isRight ? 'sticky-note-card-wrapper--right' : 'sticky-note-card-wrapper--left'}`}
                  style={wrapperStyle}
                  initial={{ opacity: 0, y: 60, rotate: step.rotate - 8 }}
                  whileInView={{ opacity: 1, y: 0, rotate: step.rotate }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
                >
                  <div 
                    className="sticky-note-card"
                    style={{ borderBottom: `8px solid ${step.accent}` }}
                  >
                    <Pushpin />
                    <div className="sticky-note-card__content">
                      <span className="sticky-note-card__label" style={{ color: step.accent }}>
                        {step.num}
                      </span>
                      <h4 className="sticky-note-card__title">{step.title}</h4>
                      <p className="sticky-note-card__desc">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Center Bottom CTA Card */}
        <AnimatedSection className="sticky-timeline-cta-wrap">
          <div className="sticky-timeline-cta">
            <Pushpin />
            <h3 className="sticky-timeline-cta__title">Not sure where to start?</h3>
            <p className="sticky-timeline-cta__desc">
              Don’t get overwhelmed by complex admissions details. Speak to our lead admissions advisor directly.
            </p>
            <div className="sticky-timeline-cta__actions">
              <button type="button" className="btn btn--orange" onClick={openApplyForm}>
                Apply for Admission
              </button>
              <button
                type="button"
                className="btn btn--outline-white"
                onClick={handleBookCall}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Book a Consultation Call
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


