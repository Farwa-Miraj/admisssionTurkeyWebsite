import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const guides = [
  {
    tag: 'Visa Guide',
    title: 'How to get a Turkish student visa from Pakistan - step-by-step guide for 2026',
    link: '#contact',
  },
  {
    tag: 'Admissions',
    title: 'Best universities in Istanbul for medical students in 2026 - fees, accreditation & requirements',
    link: '#contact',
  },
  {
    tag: 'Dorm Life',
    title: 'What is Dorm life in Turkey and how do Pakistani students apply in 2026?',
    link: '#contact',
  },
  {
    tag: 'Student Life',
    title: 'Cost of living in Istanbul for international students in 2026 - a real monthly breakdown',
    link: '#contact',
  },
];

const successStories = [
  {
    id: 1,
    title: "Ayesha's Medical Journey",
    desc: 'Secured admission at Istanbul Medipol University. “Admission Turkey helped me translate my transcripts and verify equivalency in record time!”',
    img: '/assets/student-girl.jpg',
  },
  {
    id: 2,
    title: "Ali's Engineering Path",
    desc: 'Admitted to Istanbul Technical University. “From airport pick-up to finding a clean apartment, the team was on-ground to support me.”',
    img: '/assets/students-group.jpg',
  },
  {
    id: 3,
    title: "Hassan's Business Success",
    desc: 'Studying MBA at Koc University. “The visa preparation was meticulous. My student visa was approved within 10 days of applying.”',
    img: '/assets/aerial-university.jpg',
  },
];

export default function BlogGuides() {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="blogs" className="guides-section">
      <div className="container">
        <AnimatedSection className="guides-section__title">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>
            Student guides for studying in Turkey in 2026
          </h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px', maxWidth: '700px', margin: '8px auto 0' }}>
            In-depth guides covering Turkish university selections, student visa steps, permit process, Istanbul student life, and tuition costs - written for students from Pakistan, Bangladesh, Saudi Arabia, and Kuwait.
          </p>
        </AnimatedSection>

        <div className="guides-grid">
          {/* Left Column: Guides List */}
          <AnimatedSection direction="left" className="guides-list">
            {guides.map((g, idx) => (
              <div key={idx} className="guide-card">
                <div className="guide-card__content">
                  <span className="guide-card__badge-tag">{g.tag}</span>
                  <h4 className="guide-card__title">{g.title}</h4>
                  <a href={g.link} className="guide-card__link">
                    Read guide
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Right Column: Interactive Projects that Moved the Needle (Student Spotlights) */}
          <AnimatedSection direction="right" delay={0.2} className="success-spotlights">
            <h3 className="success-spotlights__title">Student Success Spotlights</h3>

            <div className="spotlight-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <img
                    src={successStories[activeStory].img}
                    alt={successStories[activeStory].title}
                    className="spotlight-card__img"
                  />
                  <div className="spotlight-card__overlay">
                    <h4 className="spotlight-card__title">{successStories[activeStory].title}</h4>
                    <p className="spotlight-card__desc">{successStories[activeStory].desc}</p>
                    <a
                      href="#contact"
                      className="btn btn--orange btn--sm spotlight-card__btn"
                      style={{ padding: '8px 16px', fontSize: '0.75rem' }}
                    >
                      Read Story
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel dots */}
            <div className="success-spotlights__dots">
              {successStories.map((_, idx) => (
                <span
                  key={idx}
                  className={`success-spotlights__dot ${
                    activeStory === idx ? 'success-spotlights__dot--active' : ''
                  }`}
                  onClick={() => setActiveStory(idx)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
