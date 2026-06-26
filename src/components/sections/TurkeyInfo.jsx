import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

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
    title: 'Tuition Fee that Makes Sense',
    desc: 'Affordable world-class education starting from $2,500/year, far cheaper than European or North American options.',
  },
  {
    category: 'Recognition',
    value: '100+ Countries',
    title: 'Degrees Internationally Recognized',
    desc: 'Fully compatible with European Union standards (Bologna process) and recognized in 100+ countries globally.',
  },
  {
    category: 'Culture & Life',
    value: '250K+ Students',
    title: 'Rich History, Culture & City Life',
    desc: 'Study at the historical crossroads of East and West, sharing experiences with 250k+ other international students.',
  },
  {
    category: 'Environment',
    value: '99% Halal',
    title: 'Environmental Familiar-Friendly',
    desc: 'Warm hospitality with culturally familiar elements, featuring 99% Muslim populations and halal food everywhere.',
  },
  {
    category: 'Cost of Living',
    value: '50+ Free Activities',
    title: 'Almost Free For Students',
    desc: 'Countless student discounts on transport, museums, health insurance, and 50+ free activities/excursions.',
  },
];

export default function TurkeyInfo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const updateMobile = (event) => setIsMobile(event.matches);

    updateMobile(mediaQuery);
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  const rotations = [-5, 3, -2, 3, -4];
  const yOffsets = [16, -6, -22, -6, 14];
  const cardVariants = ['navy', 'orange', 'white', 'blue', 'orange'];

  return (
    <section id="turkey-info" className="turkey-info">
      <div className="container turkey-info__grid">
        <AnimatedSection direction="left">
          <div className="turkey-info__top-area">
            <h2 className="turkey-info__title">
              Why choose Turkey for higher education?
            </h2>
            <p className="turkey-info__intro">
              Turkey has become a leading global education hub. Combining historic charm with cutting-edge academic facilities, it provides unparalleled prospects for international students.
            </p>
          </div>
        </AnimatedSection>

        <div className="turkey-info__floating-cards">
          {highlights.map((h, i) => (
            <motion.div
              key={h.category}
              className={`turkey-info__floating-card turkey-info__floating-card--${cardVariants[i]}`}
              style={{ rotate: isMobile ? 0 : rotations[i], zIndex: 1 }}
              initial={{ opacity: 0, y: isMobile ? 30 : yOffsets[i] + 20, scale: 0.98 }}
              animate={{ opacity: 1, y: isMobile ? 0 : yOffsets[i], scale: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -15, rotate: 0, zIndex: 20 }}
            >
              <span className="turkey-info__floating-card-category">
                {h.category}
              </span>
              <div className="turkey-info__floating-card-value">{h.value}</div>
              <div className="turkey-info__floating-card-title">{h.title}</div>
              <p className="turkey-info__floating-card-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection direction="right" delay={0.2}>
          <div className="turkey-info__right-content">
            <div className="turkey-info__stat-cards">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="turkey-info__stat-card"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="turkey-info__stat-val">{stat.value}</div>
                  <div className="turkey-info__stat-lbl">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="turkey-info__university-image">
              <img
                src="/assets/aerial-university.jpg"
                alt="Beautiful Turkish University Campus Aerial View"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

