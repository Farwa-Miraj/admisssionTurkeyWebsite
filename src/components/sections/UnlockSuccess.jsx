import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import GlassButton from '../ui/GlassButton.jsx';

const accordionItems = [
  {
    title: 'Top-Ranked Universities',
    content:
      'Explore globally recognized institutions that stand as benchmarks of academic excellence and global prestige. These universities offer world-class education, cutting-edge research facilities, and internationally accredited programs that open doors to global career opportunities.',
  },
  {
    title: 'Quality Education',
    content:
      'Experience high-quality education with modern curricula, experienced faculty, and state-of-the-art facilities. Turkish universities provide diverse programs in English and Turkish, ensuring students receive comprehensive academic training.',
  },
  {
    title: 'Global Opportunities',
    content:
      'Gain access to international networks, exchange programs, and global career pathways. Studying in Turkey connects you with students from around the world and prepares you for success in the global marketplace.',
  },
  {
    title: 'Career Success Path',
    content:
      'Build a strong foundation for your future career with industry-relevant skills, internship opportunities, and professional development programs. Our guidance ensures you choose programs aligned with your career goals.',
  },
];

export default function UnlockSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="unlock">
      <div className="container unlock__inner">
        <AnimatedSection className="unlock__left" direction="left">
          <h2 className="unlock__title">
            Unlocking Your Success Route With Ranked Universities
          </h2>
          <div className="unlock__image-wrap">
            <img
              src="/assets/university-campus.jpg"
              alt="University campus in Turkey"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="unlock__right" direction="right" delay={0.15}>
          <p className="unlock__intro">
            Unlock your path to success with guidance from top-ranked universities. Gain world-class
            education, skills, and opportunities that shape your future. Start your journey today
            and turn your ambitions into achievements.
          </p>
          <h3 className="unlock__subtitle">Your Gateway to Global Education &amp; Career Success</h3>

          <div className="accordion">
            {accordionItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={item.title} className="accordion__item">
                  <GlassButton
                    type="button"
                    variant="inherit"
                    className={`accordion__header ${isActive ? 'accordion__header--active' : ''}`}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                  >
                    <svg
                      className={`accordion__chevron ${isActive ? 'accordion__chevron--open' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {item.title}
                  </GlassButton>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="accordion__body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <p>{item.content}</p>
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
