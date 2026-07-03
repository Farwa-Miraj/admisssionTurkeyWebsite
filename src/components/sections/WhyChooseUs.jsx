import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const THREAD_PATHS = [
  'M500 300 C380 300 320 120 240 120',
  'M500 300 C380 300 320 330 200 330',
  'M500 300 C380 300 320 540 240 540',
  'M500 300 C620 300 680 120 760 120',
  'M500 300 C620 300 680 330 800 330',
  'M500 300 C620 300 680 540 760 540',
];

const bubbles = [
  {
    id: 1,
    title: 'Fast Admission Process',
    desc: 'Get your offer letter in 3-5 working days with our direct admissions channel.',
    color: '#2196f3',
    lineEnd: { x: 24, y: 20 },
    side: 'left',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M13 2v9h7L11 22v-9H4L13 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Licensed & Registered',
    desc: 'Officially authorized government-registered agency partnering with top Turkish universities.',
    color: '#4caf50',
    lineEnd: { x: 20, y: 55 },
    side: 'left',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'End-to-End Student Support',
    desc: 'From airport pick-up and hostel booking to local equivalence certificates.',
    color: '#e91e63',
    lineEnd: { x: 24, y: 90 },
    side: 'left',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Experienced Team',
    desc: 'Multilingual counselors who have successfully placed thousands of students since 2018.',
    color: '#ff9800',
    lineEnd: { x: 76, y: 20 },
    side: 'right',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91v6.27h2V9L12 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Based in Turkey',
    desc: 'Headquartered in Istanbul, providing direct local on-ground support whenever you need it.',
    color: '#3f51b5',
    lineEnd: { x: 80, y: 55 },
    side: 'right',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Serving Globally',
    desc: 'Trusted by students from over 28 countries across South Asia, Middle East, and Africa.',
    color: '#9c27b0',
    lineEnd: { x: 76, y: 90 },
    side: 'right',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const updateMobile = (event) => setIsMobile(event.matches);

    updateMobile(mediaQuery);
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  return (
    <section id="why-us" className="titan-section">
      <motion.div
        className="titan-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="titan-header__title section-heading">
          Why do international students choose{' '}
          <span className="section-heading__accent">Admission Turkey?</span>
        </h2>
      </motion.div>

      <div className="titan-body">
        <div className="container">
          <div className="titan-container">
            <svg className="titan-threads-svg" viewBox="0 0 1000 600" aria-hidden="true">
              {THREAD_PATHS.map((d, i) => (
                <motion.path
                  key={d}
                  className="titan-thread-line"
                  d={d}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    pathLength: { duration: 1.1, delay: 0.35 + i * 0.1, ease: 'easeInOut' },
                    opacity: { duration: 0.3, delay: 0.35 + i * 0.1 },
                  }}
                />
              ))}
            </svg>

            <div className="titan-center-logo">
              {/* <motion.div
                className="titan-announcement-pill"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="titan-announcement-pill__badge">Trusted</span>
                <span className="titan-announcement-pill__text">
                  Serving students from 28+ countries 🌍
                </span>
              </motion.div> */}

              <motion.h3
                className="titan-hero-text"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>Your Direct Route</span>
                <motion.div
                  className="titan-slanted-card"
                  initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.06, rotate: -10 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src="/assets/logo.png"
                    alt="Admission Turkey"
                    className="titan-slanted-card__logo"
                  />
                  {/* <span className="titan-slanted-card__title">ADMISSION TURKEY</span> */}
                </motion.div>
                <span>To Top Universities</span>
              </motion.h3>
            </div>

            {bubbles.map((b) => (
              <motion.div
                key={b.id}
                className="titan-bubble"
                data-side={b.side}
                style={
                  isMobile
                    ? undefined
                    : {
                        left: `${b.lineEnd.x}%`,
                        top: `${b.lineEnd.y}%`,
                      }
                }
                transformTemplate={
                  isMobile
                    ? undefined
                    : b.side === 'left'
                      ? ({ scale }) => `translate(-100%, -50%) scale(${scale})`
                      : ({ scale }) => `translate(0, -50%) scale(${scale})`
                }
                initial={
                  isMobile ? { opacity: 0, y: 24, scale: 0.95 } : { opacity: 0, scale: 0.85 }
                }
                whileInView={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={isMobile ? { scale: 1.02 } : { scale: 1.03 }}
                transition={{
                  duration: isMobile ? 0.5 : 0.8,
                  delay: 0.3 + b.id * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="titan-bubble__icon-box"
                  style={{
                    color: b.color,
                    backgroundColor: `${b.color}14`,
                  }}
                >
                  {b.icon}
                </div>
                <div className="titan-bubble__content">
                  <h4 className="titan-bubble__title">{b.title}</h4>
                  <p className="titan-bubble__desc">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
