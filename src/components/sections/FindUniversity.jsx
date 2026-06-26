import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';

const universities = [
  {
    name: 'Istanbul University',
    location: 'Istanbul • Founded 1453',
    type: 'Public',
    programs: '100+',
    tuition: '$1,200/yr',
    image: '/assets/university-campus.jpg',
    logoInitials: 'IU',
  },
  {
    name: 'Istanbul Medipol University',
    location: 'Istanbul • Medical specialty',
    type: 'Private',
    programs: '85+',
    tuition: '$4,000/yr',
    image: '/assets/medipol-university.jpg',
    logoInitials: 'IMU',
  },
  {
    name: 'Hacettepe University',
    location: 'Ankara • Top-ranked',
    type: 'Public',
    programs: '95+',
    tuition: '$1,500/yr',
    image: '/assets/aerial-university.jpg',
    logoInitials: 'HU',
  },
  {
    name: 'Koc University',
    location: 'Istanbul • Research-focused',
    type: 'Private',
    programs: '50+',
    tuition: '$15,000/yr',
    image: '/assets/students-group.jpg',
    logoInitials: 'KU',
  },
  {
    name: 'Istanbul Technical University',
    location: 'Istanbul • Engineering',
    type: 'Public',
    programs: '75+',
    tuition: '$1,800/yr',
    image: '/assets/university-campus.jpg',
    logoInitials: 'ITU',
  },
  {
    name: 'Istanbul Aydin University',
    location: 'Istanbul • Diverse programs',
    type: 'Private',
    programs: '110+',
    tuition: '$3,200/yr',
    image: '/assets/medipol-university.jpg',
    logoInitials: 'IAU',
  },
];

export default function FindUniversity() {
  const { openApplyForm } = useApplyForm();

  return (
    <section id="universities" className="universities-section">
      <div className="container">
        <AnimatedSection className="universities-section__title">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>
            Where our students study
          </h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
            Hand-picked institutions across Türkiye - from world-renowned public universities to specialized private faculties with full English instruction.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="university-grid">
          {universities.map((uni, idx) => (
            <motion.div
              key={uni.name}
              className="university-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Cover Image */}
              <div className="university-card__image-container">
                <img src={uni.image} alt={uni.name} className="university-card__image" />
                <span
                  className={`university-card__badge university-card__badge--${uni.type.toLowerCase()}`}
                >
                  {uni.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="university-card__content">
                <div className="university-card__header-info">
                  <div className="university-card__logo-placeholder">
                    {uni.logoInitials}
                  </div>
                  <div>
                    <h4 className="university-card__title">{uni.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-text)' }}>
                      {uni.location}
                    </span>
                  </div>
                </div>

                <div className="university-card__meta">
                  <div className="university-card__meta-item">
                    <span className="university-card__meta-lbl">Programs</span>
                    <span className="university-card__meta-val">{uni.programs}</span>
                  </div>
                  <div className="university-card__meta-item">
                    <span className="university-card__meta-lbl">Tuition From</span>
                    <span className="university-card__meta-val" style={{ color: 'var(--orange)', fontWeight: 700 }}>
                      {uni.tuition}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn--outline-navy university-card__btn"
                  onClick={openApplyForm}
                  style={{ fontSize: '0.8rem', padding: '10px 16px' }}
                >
                  View Programs
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="universities-section__btn-wrap">
          <motion.button
            type="button"
            className="btn btn--orange btn--lg"
            onClick={openApplyForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Browse all 80+ universities →
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}

