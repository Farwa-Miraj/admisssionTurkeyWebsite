import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We analyze your academic background, budget, and career goals to outline your best pathways.',
    accent: '#fdd835',
    rotate: -5,
  },
  {
    num: '02',
    title: 'Program/University Selection',
    desc: 'We present a tailored list of top public and foundation universities for your program.',
    accent: '#42a5f5',
    rotate: 4,
  },
  {
    num: '03',
    title: 'Documents Preparation',
    desc: 'Our sworn translators translate and notarize transcripts, passports, and certifications.',
    accent: '#ab47bc',
    rotate: -4,
  },
  {
    num: '04',
    title: 'Application & Offer Letter',
    desc: 'We submit applications and secure your conditional acceptance letter in 3–5 working days.',
    accent: '#fdd835',
    rotate: 3,
  },
  {
    num: '05',
    title: 'Acceptance & Visa Processing',
    desc: 'We assist with fee deposits and prepare your complete student visa dossier.',
    accent: '#42a5f5',
    rotate: -3,
  },
  {
    num: '06',
    title: 'Pre-Departure & Arrival Support',
    desc: 'Airport pick-up, hostel booking, and university registration on the ground.',
    accent: '#ab47bc',
    rotate: 4,
  },
  {
    num: '07',
    title: 'Start Studying',
    desc: 'Attend orientation, complete Denklik registration, and begin your classes.',
    accent: '#fdd835',
    rotate: -5,
  },
];

const PIN_DURATION = 0.38;
const CARD_OFFSET = 0.14;
const LINE_DURATION = 0.55;
const SEGMENT_GAP = 0.1;
const CONNECTOR_DASH_COUNT = 13;

function getSegmentStart(index) {
  if (index === 0) return 0;
  return getSegmentStart(index - 1) + PIN_DURATION + CARD_OFFSET + LINE_DURATION + SEGMENT_GAP;
}

function Pushpin({ id }) {
  const headGrad = `pushpin-head-${id}`;
  const baseGrad = `pushpin-base-${id}`;

  return (
    <svg viewBox="0 0 60 28" width="28" height="13" className="sticky-note__pushpin" aria-hidden="true">
      <defs>
        <radialGradient id={headGrad} cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#90caf9" />
          <stop offset="45%" stopColor="#42a5f5" />
          <stop offset="100%" stopColor="#1565c0" />
        </radialGradient>
        <linearGradient id={baseGrad} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2196f3" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>
      </defs>

      <ellipse cx="36" cy="25" rx="10" ry="1.6" fill="rgba(0,0,0,0.16)" />
      <rect x="4" y="12.2" width="15" height="1.8" rx="0.9" fill="#b0bec5" />
      <path d="M 2 13.1 L 7.5 10.6 L 7.5 15.6 Z" fill="#eceff1" stroke="#90a4ae" strokeWidth="0.35" />
      <path
        d="M 18.5 20.2 L 41.5 20.2 L 39.8 25.2 L 20.2 25.2 Z"
        fill={`url(#${baseGrad})`}
        stroke="#0d47a1"
        strokeWidth="0.55"
        strokeLinejoin="round"
      />
      <path
        d="M 18.5 20.2 C 17.2 20.2 16.2 18.8 16.5 16.2 C 17 10.5 21 6.2 28.5 5.2 C 36.5 4 41.5 7.5 42.5 12.8 C 43.2 17.2 42.2 19.8 41.5 20.2 Z"
        fill={`url(#${headGrad})`}
        stroke="#1565c0"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <ellipse cx="29" cy="9.5" rx="8" ry="3.8" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="26" cy="8.2" rx="3.2" ry="1.4" fill="rgba(255,255,255,0.62)" />
    </svg>
  );
}

function CurvedConnector({ index, isActive, fromLeft }) {
  const pathRef = useRef(null);
  const [pathLen, setPathLen] = useState(0);
  const baseDelay = getSegmentStart(index) + PIN_DURATION + CARD_OFFSET;
  const pathD = fromLeft
    ? 'M 22 6 C 38 18, 62 48, 78 74'
    : 'M 78 6 C 62 18, 38 48, 22 74';

  useLayoutEffect(() => {
    if (pathRef.current) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  const hiddenOffset = pathLen || 1;
  const dashSegment = pathLen > 0 ? pathLen / (CONNECTOR_DASH_COUNT * 2) : 0;
  const strokeDasharray = dashSegment > 0 ? `${dashSegment} ${dashSegment}` : undefined;

  return (
    <div
      className={`sticky-connector sticky-connector--vertical ${fromLeft ? 'sticky-connector--to-right' : 'sticky-connector--to-left'}`}
      aria-hidden="true"
    >
      <svg className="sticky-connector__svg" viewBox="0 0 100 80" preserveAspectRatio="none">
        <motion.path
          ref={pathRef}
          className="sticky-connector__path"
          d={pathD}
          fill="none"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: hiddenOffset, opacity: 0 }}
          animate={
            isActive
              ? { strokeDashoffset: 0, opacity: pathLen > 0 ? 1 : 0 }
              : { strokeDashoffset: hiddenOffset, opacity: 0 }
          }
          transition={{ delay: baseDelay, duration: LINE_DURATION, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function StickyNote({ step, index, isActive, isLeft }) {
  const noteDelay = getSegmentStart(index);

  return (
    <motion.div
      className={`sticky-note-card-wrapper ${isLeft ? 'sticky-note-card-wrapper--left' : 'sticky-note-card-wrapper--right'}`}
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: noteDelay, duration: 0.01 }}
    >
      <motion.div
        className="sticky-note-card"
        style={{
          '--note-accent': step.accent,
          rotate: step.rotate,
        }}
        initial={{ scale: 0.9, y: -16, opacity: 0 }}
        animate={
          isActive
            ? { scale: 1, y: 0, opacity: 1, rotate: step.rotate }
            : { scale: 0.9, y: -16, opacity: 0, rotate: step.rotate }
        }
        transition={{
          delay: noteDelay + CARD_OFFSET,
          duration: 0.45,
          type: 'spring',
          stiffness: 340,
          damping: 22,
        }}
      >
        <div className="sticky-note-pin-wrap">
          <motion.div
            className="sticky-note-pin-motion"
            initial={{ y: -24, opacity: 0, scale: 0.55 }}
            animate={
              isActive
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: -24, opacity: 0, scale: 0.55 }
            }
            transition={{
              delay: noteDelay,
              duration: PIN_DURATION,
              type: 'spring',
              stiffness: 520,
              damping: 16,
            }}
          >
            <Pushpin id={step.num} />
          </motion.div>
        </div>

        <div className="sticky-note-card__wash" aria-hidden="true" />

        <div className="sticky-note-card__content">
          <div className="sticky-note-card__head">
            <span className="sticky-note-card__num" style={{ color: step.accent }}>
              {step.num}
            </span>
            <h4 className="sticky-note-card__title">{step.title}</h4>
          </div>
          <p className="sticky-note-card__desc">{step.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurProcess() {
  const boardRef = useRef(null);
  const isActive = useInView(boardRef, { once: true, amount: 0.15 });

  return (
    <section id="process" className="sticky-timeline-section">
      <div className="container">
        <AnimatedSection className="sticky-timeline-section__title">
          <h2 className="section-heading">How It Works</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
            A transparent, step-by-step guidance process from initial contact to your first day of class in Turkey.
          </p>
        </AnimatedSection>

        <div className="sticky-timeline-board sticky-timeline-board--vertical" ref={boardRef}>
          <div className="sticky-notes-track sticky-notes-track--vertical">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={step.num} className="sticky-notes-segment sticky-notes-segment--vertical">
                  <StickyNote step={step} index={idx} isActive={isActive} isLeft={isLeft} />
                  {idx < steps.length - 1 && (
                    <CurvedConnector index={idx} isActive={isActive} fromLeft={isLeft} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
