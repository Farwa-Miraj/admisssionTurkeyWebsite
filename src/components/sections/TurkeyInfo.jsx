import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.js';

const statCardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -56 : 56,
    scale: 0.9,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatingCardVariants = {
  hidden: (custom) => ({
    opacity: 0,
    y: custom.y + 40,
    x: custom.x,
    rotate: custom.rotate,
    scale: 0.92,
  }),
  visible: (custom) => ({
    opacity: 1,
    y: custom.y,
    x: custom.x,
    rotate: custom.rotate,
    scale: 1,
    transition: {
      delay: custom.i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const stats = [
  { value: '417K+', label: 'International Students' },
  { value: '$100k+', label: 'Min scholarships given' },
  { value: '300%', label: 'ROI (Return on Investment)' },
  { value: '2.1M+', label: 'Active Turkish Students' },
  { value: '50+', label: 'Free Activities / Trips' },
];

const highlights = [
  {
    category: 'Tuition Fee',
    value: '$2,500/yr',
    title: 'Affordable Tuition',
    desc: 'Quality degrees from $2,500/year.',
  },
  {
    category: 'Recognition',
    value: '100+ Countries',
    title: 'Global Recognition',
    desc: 'Degrees accepted in 100+ countries.',
  },
  {
    category: 'Culture & Life',
    value: '250K+ Students',
    title: 'Culture & City Life',
    desc: 'Study where East meets West.',
  },
  
  {
    category: 'Cost of Living',
    value: '50+ Free Activities',
    title: 'Student Savings',
    desc: 'Discounts, trips, and activities.',
  },
  {
    category: 'Environment',
    value: '99% Halal',
    title: 'Familiar Environment',
    desc: 'Welcoming culture with halal food.',
  },
];

export default function TurkeyInfo() {
  const [isMobile, setIsMobile] = useState(false);
  const [statCardsRef, statCardsVisible] = useScrollAnimation(0.12);
  const [floatingRef, floatingVisible] = useScrollAnimation(0.08);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const updateMobile = (event) => setIsMobile(event.matches);

    updateMobile(mediaQuery);
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  const cardVariants = ['navy', 'orange', 'white', 'blue', 'orange'];

  const floatingLayout = isMobile
    ? highlights.map((_, i) => ({ rotate: 0, y: 0, x: 0, i }))
    : [
        { rotate: -10, y: 18, x: -8, i: 0 },
        { rotate: -5, y: 6, x: -4, i: 1 },
        { rotate: 0, y: -28, x: 0, i: 2 },
        { rotate: 5, y: 6, x: 4, i: 3 },
        { rotate: 10, y: 18, x: 8, i: 4 },
      ];

  return (
    <section id="turkey-info" className="turkey-info">
      <div className="container turkey-info__grid">
        <AnimatedSection direction="left">
          <div className="turkey-info__top-area">
            <h2 className="turkey-info__title section-heading">
              Why choose Turkey for higher education?
            </h2>
            <p className="turkey-info__intro">
              Turkey offers affordable, recognized degrees with a rich student life and modern campuses.
            </p>
          </div>
        </AnimatedSection>

        <div className="turkey-info__floating-cards" ref={floatingRef}>
          {highlights.map((h, i) => {
            const layout = floatingLayout[i];
            return (
            <motion.div
              key={h.category}
              className={`turkey-info__floating-card turkey-info__floating-card--${cardVariants[i]} turkey-info__floating-card--pos-${i + 1}`}
              custom={layout}
              variants={floatingCardVariants}
              initial="hidden"
              animate={floatingVisible ? 'visible' : 'hidden'}
              whileHover={
                isMobile
                  ? { scale: 1.03, y: -6 }
                  : { scale: 1.06, y: layout.y - 14, rotate: 0, zIndex: 20 }
              }
            >
              <span className="turkey-info__floating-card-category">
                {h.category}
              </span>
              <div className="turkey-info__floating-card-value">{h.value}</div>
              <div className="turkey-info__floating-card-title">{h.title}</div>
              <p className="turkey-info__floating-card-desc">{h.desc}</p>
            </motion.div>
            );
          })}
        </div>

        <AnimatedSection direction="right" delay={0.2}>
          <div className="turkey-info__right-content">
            <div className="turkey-info__stat-cards" ref={statCardsRef}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`turkey-info__stat-card turkey-info__stat-card--glass turkey-info__stat-card--tone-${(i % 3) + 1}`}
                  custom={i}
                  variants={statCardVariants}
                  initial="hidden"
                  animate={statCardsVisible ? 'visible' : 'hidden'}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { type: 'spring', stiffness: 320, damping: 22 },
                  }}
                >
                  <span className="turkey-info__stat-card-shine" aria-hidden="true" />
                  <div className="turkey-info__stat-card-content">
                    <div className="turkey-info__stat-val">{stat.value}</div>
                    <div className="turkey-info__stat-lbl">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="turkey-info__university-image">
              <img
                src="/assets/aerial-university.jpg"
                alt="Beautiful Turkish University Campus Aerial View"
              />
            </div> */}
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

