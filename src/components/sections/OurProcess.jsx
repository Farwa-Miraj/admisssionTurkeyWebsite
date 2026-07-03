import { forwardRef, useCallback, useLayoutEffect, useRef, useState } from 'react';
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
const CARD_PLACE_DURATION = 0.45;
const LINE_DURATION = 0.55;
const SEGMENT_GAP = 0.1;
const LINE_START_OFFSET_Y = 20;
const LINE_END_OFFSET_Y = 20;
const LINE_START_INSET_X = 18;
const DASH_LENGTH = 2;
const DASH_GAP = 3;

function getSegmentStart(index) {
  if (index === 0) return 0;
  return (
    getSegmentStart(index - 1) +
    CARD_PLACE_DURATION +
    PIN_DURATION +
    LINE_DURATION +
    SEGMENT_GAP
  );
}

function getCardDelay(index) {
  return getSegmentStart(index);
}

function getPinDelay(index) {
  return getSegmentStart(index) + CARD_PLACE_DURATION;
}

function getLineSegmentDelay(index) {
  return getSegmentStart(index) + CARD_PLACE_DURATION + PIN_DURATION;
}

function getCurveControls(prev, curr, fromLeft) {
  const dy = curr.y - prev.y;
  const spread = Math.min(Math.abs(curr.x - prev.x) * 0.28, 52);
  return {
    c1x: prev.x + (fromLeft ? -spread : spread),
    c1y: prev.y + dy * 0.55,
    c2x: curr.x + (fromLeft ? spread : -spread),
    c2y: curr.y - dy * 0.35,
  };
}

function buildTimelineSegments(trackEl, cardEls) {
  const cards = cardEls.filter(Boolean);
  if (!trackEl || cards.length < 2) return null;

  const tRect = trackEl.getBoundingClientRect();
  if (tRect.width <= 0 || tRect.height <= 0) return null;

  const anchors = cards.map((card, index) => {
    const rect = card.getBoundingClientRect();
    if (index === 0) {
      return {
        x: rect.right - tRect.left - LINE_START_INSET_X,
        y: rect.top - tRect.top + LINE_START_OFFSET_Y,
      };
    }
    return {
      x: rect.left + rect.width / 2 - tRect.left,
      y: rect.top - tRect.top + LINE_END_OFFSET_Y,
    };
  });

  const segments = anchors.slice(0, -1).map((start, index) => {
    const end = anchors[index + 1];
    const fromLeft = index % 2 === 0;
    const control = getCurveControls(start, end, fromLeft);
    return {
      index,
      pathD: `M ${start.x} ${start.y} C ${control.c1x} ${control.c1y}, ${control.c2x} ${control.c2y}, ${end.x} ${end.y}`,
    };
  });

  return {
    segments,
    width: tRect.width,
    height: tRect.height,
  };
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

function LineSegment({ pathD, index, isActive }) {
  const pathRef = useRef(null);
  const [pathLen, setPathLen] = useState(0);

  useLayoutEffect(() => {
    if (pathRef.current) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  const hiddenOffset = pathLen || 1;

  return (
    <motion.path
      ref={pathRef}
      className="sticky-timeline-line__path"
      d={pathD}
      fill="none"
      strokeDasharray={`${DASH_LENGTH} ${DASH_GAP}`}
      initial={{ strokeDashoffset: hiddenOffset, opacity: 0 }}
      animate={
        isActive
          ? { strokeDashoffset: 0, opacity: pathLen > 0 ? 1 : 0 }
          : { strokeDashoffset: hiddenOffset, opacity: 0 }
      }
      transition={{
        delay: getLineSegmentDelay(index),
        duration: LINE_DURATION,
        ease: 'easeInOut',
      }}
    />
  );
}

function TimelineLine({ isActive, cardRefs, trackRef, layoutVersion }) {
  const [geometry, setGeometry] = useState(null);

  const updateGeometry = useCallback(() => {
    const next = buildTimelineSegments(trackRef.current, cardRefs.current);
    if (next) setGeometry(next);
  }, [cardRefs, trackRef]);

  useLayoutEffect(() => {
    updateGeometry();

    const trackEl = trackRef.current;
    if (!trackEl) return undefined;

    const observer = new ResizeObserver(updateGeometry);
    observer.observe(trackEl);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    window.addEventListener('resize', updateGeometry);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateGeometry);
    };
  }, [cardRefs, trackRef, updateGeometry, layoutVersion]);

  useLayoutEffect(() => {
    if (!isActive) return undefined;

    updateGeometry();
    const t1 = window.setTimeout(updateGeometry, 500);
    const t2 = window.setTimeout(updateGeometry, 1400);
    const t3 = window.setTimeout(updateGeometry, 2800);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [isActive, updateGeometry]);

  const viewBox = geometry ? `0 0 ${geometry.width} ${geometry.height}` : '0 0 1 1';

  return (
    <div className="sticky-timeline-line" aria-hidden="true">
      <svg
        className="sticky-timeline-line__svg"
        viewBox={viewBox}
        width={geometry?.width}
        height={geometry?.height}
      >
        {geometry?.segments.map((segment) => (
          <LineSegment
            key={`line-segment-${segment.index}`}
            pathD={segment.pathD}
            index={segment.index}
            isActive={isActive}
          />
        ))}
      </svg>
    </div>
  );
}

const StickyNote = forwardRef(function StickyNote({ step, index, isActive, isLeft }, ref) {
  const segmentDelay = getSegmentStart(index);
  const cardDelay = getCardDelay(index);
  const pinDelay = getPinDelay(index);

  return (
    <motion.div
      className={`sticky-note-card-wrapper ${isLeft ? 'sticky-note-card-wrapper--left' : 'sticky-note-card-wrapper--right'}`}
      style={{ '--step-row': index + 1 }}
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: segmentDelay, duration: 0.01 }}
    >
      <motion.div
        ref={ref}
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
          delay: cardDelay,
          duration: CARD_PLACE_DURATION,
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
              delay: pinDelay,
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
});

export default function OurProcess() {
  const boardRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const isActive = useInView(boardRef, { once: true, amount: 0.15 });

  const [layoutVersion, setLayoutVersion] = useState(0);

  const setCardRef = useCallback((index) => (node) => {
    cardRefs.current[index] = node;
    if (node && index === steps.length - 1) {
      setLayoutVersion((version) => version + 1);
    }
  }, []);

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
          <div className="sticky-notes-track sticky-notes-track--vertical" ref={trackRef}>
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <StickyNote
                  key={step.num}
                  ref={setCardRef(idx)}
                  step={step}
                  index={idx}
                  isActive={isActive}
                  isLeft={isLeft}
                />
              );
            })}
            <TimelineLine
              isActive={isActive}
              cardRefs={cardRefs}
              trackRef={trackRef}
              layoutVersion={layoutVersion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
