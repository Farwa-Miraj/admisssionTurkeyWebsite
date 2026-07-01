import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import GlassButton from '../ui/GlassButton.jsx';

const trustFactors = [
  { value: '1000+', label: 'students placed' },
  { value: '97%', label: 'Visa Success Ratio' },
  { value: '50+', label: 'Partnered Universities' },
  { value: '5+', label: 'years of experience' },
  { value: '80+', label: 'B2B Partners' },
];

const floatingUniList = [
  'Istanbul Medipol • MBBS',
  'Koc University • Medicine',
  'Bahcesehir • Engineering',
  'Sabanci University • Business',
  'Istanbul University • Law',
];

export default function Hero() {
  const { openApplyForm } = useApplyForm();
  const [isPlaying, setIsPlaying] = useState(false);
  const [uniIndex, setUniIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUniIndex((prev) => (prev + 1) % floatingUniList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTalkToAdvisor = () => {
    const message = "Hi! I am interested in studying in Turkey. Please connect me with an advisor.";
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        
        {/* Main Grid: Left Column Info, Right Column Video */}
        <div className="hero__grid">
          {/* Left Column Content */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glass capsule open badge */}
            <a href="#contact" className="glass-badge">
              <span className="glass-badge__bullet" />
              <span>Admissions Open September/Spring 2026 Intake | Scholarships Available</span>
            </a>

            <h1 className="hero__title">
              Get admitted to a top
              <br />
              <span className="hero__title-navy">Turkish university —</span>
              <br />
              <span className="hero__title-accent">in weeks, not months.</span>
            </h1>

            <p className="hero__subtitle">
              Since 2019, Admission Turkey has placed students from 28 countries into Türkiye's top
              public and foundation universities — from medicine in Istanbul to engineering in Ankara.
              Free consultation, no upfront fees.
            </p>

            <div className="hero__buttons">
              <GlassButton
                type="button"
                variant="orange"
                className="hero__btn"
                onClick={openApplyForm}
              >
                Apply for admission &rarr;
              </GlassButton>
              <GlassButton
                type="button"
                variant="ghost"
                className="hero__btn hero__btn--ghost"
                onClick={handleTalkToAdvisor}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.99L2 22l5.233-1.371a9.943 9.943 0 004.777 1.218h.005c5.505 0 9.99-4.478 9.99-9.985C22.007 6.478 17.519 2 12.012 2zm0 18.29h-.004a8.27 8.27 0 01-4.22-1.164l-.303-.18-3.141.823.839-3.059-.197-.314a8.275 8.275 0 01-1.267-4.41c.001-4.566 3.722-8.282 8.293-8.282 2.214 0 4.295.862 5.86 2.43a8.23 8.23 0 012.427 5.858c-.002 4.568-3.724 8.288-8.286 8.288z" />
                </svg>
                Talk to an advisor
              </GlassButton>
            </div>
          </motion.div>

          {/* Right Column Video with Floating Badge */}
          <motion.div
            className="hero__video-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Rotating University Tag */}
            <div className="hero__floating-uni-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={uniIndex}
                  className="hero__floating-uni"
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="hero__floating-check">✓</span>
                  <span>{floatingUniList[uniIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hero__video-wrap">
              {!isPlaying ? (
                <div className="hero__video-placeholder" onClick={() => setIsPlaying(true)}>
                  <img
                    src="/assets/university-campus.jpg"
                    alt="Study in Turkey Student Campus Life"
                    className="hero__video-thumbnail"
                  />
                  <div className="hero__video-play-btn">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/l5_3Q2eWq5w?autoplay=1"
                  title="Study in Turkey Guide Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="hero__video-iframe"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* 3 Staggered Stat Cards */}
        <div className="hero__stat-cards">
          {/* Card 1: Orange */}
          <motion.div
            className="hero__stat-card hero__stat-card--orange"
            tabIndex={0}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, rotate: -1.5, scale: 1.04 }}
            whileFocus={{ y: -8, rotate: -1.5, scale: 1.04 }}
          >
            <div className="hero__stat-card-badge">PLACEMENT</div>
            <div className="hero__stat-card-value">1,000+</div>
            <div className="hero__stat-card-label">students placed</div>
          </motion.div>

          {/* Card 2: Navy */}
          <motion.div
            className="hero__stat-card hero__stat-card--navy"
            tabIndex={0}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -9, rotate: 1.5, scale: 1.04 }}
            whileFocus={{ y: -9, rotate: 1.5, scale: 1.04 }}
          >
            <div className="hero__stat-card-badge">VISA SUCCESS</div>
            <div className="hero__stat-card-value">97%</div>
            <div className="hero__stat-card-label">Visa Success Ratio</div>
          </motion.div>

          {/* Card 3: Light Gray */}
          <motion.div
            className="hero__stat-card hero__stat-card--gray"
            tabIndex={0}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, rotate: -1, scale: 1.04 }}
            whileFocus={{ y: -8, rotate: -1, scale: 1.04 }}
          >
            <div className="hero__stat-card-badge">GLOBAL NETWORK</div>
            <div className="hero__stat-card-value">80+</div>
            <div className="hero__stat-card-label">B2B Partners</div>
          </motion.div>
        </div>

        {/* Small Horizontal Stats Row */}
        <ul className="hero__small-stats-bar" aria-label="Admission Turkey highlights">
          {trustFactors.map((factor) => (
            <li key={factor.label} className="hero__small-stats-item">
              <strong>{factor.value}</strong>
              <span>{factor.label}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

