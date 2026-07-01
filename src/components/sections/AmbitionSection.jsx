import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const links = [
  { label: 'ACADEMIC STUDIES', href: '#services' },
  { label: 'ADMISSION', href: '#contact' },
  { label: 'YOUR FUTURE', href: '#about' },
];

export default function AmbitionSection() {
  return (
    <section className="ambition">
      <div className="container ambition__inner">
        <AnimatedSection className="ambition__content" direction="left">
          <h2 className="ambition__title section-heading">
            When Ambition Meets <span className="section-heading__accent">Opportunity</span>, Anything is Possible
          </h2>
          <div className="ambition__text-block">
            <span className="ambition__line" />
            <p>
              StudyinTurkey.com provides resources to guide all international students who wish to
              study in Turkey. We offer comprehensive support from university selection to visa
              processing, ensuring a smooth transition to your academic journey abroad.
            </p>
          </div>
          <div className="ambition__links">
            {links.map((link, i) => (
              <span key={link.label} className="ambition__link-wrap">
                {i > 0 && <span className="ambition__link-divider">|</span>}
                <motion.a
                  href={link.href}
                  className="ambition__link"
                  whileHover={{ x: 4, color: 'var(--orange)' }}
                >
                  {link.label} →
                </motion.a>
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="ambition__images" direction="right" delay={0.15}>
          <motion.div
            className="ambition__img ambition__img--student"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/assets/student-girl.jpg" alt="International student" loading="lazy" />
          </motion.div>
          <motion.div
            className="ambition__img ambition__img--building"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/assets/medipol-university.jpg" alt="Medipol University" loading="lazy" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
