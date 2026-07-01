import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import GlassButton from '../ui/GlassButton.jsx';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';

const universities = [
  {
    name: 'Istanbul University',
    location: 'Istanbul • Founded 1453',
    type: 'Public',
    programs: '100+',
    tuition: '$1,200/yr',
    image: '/assets/istanbul-university.png',
    },
  {
    name: 'Istanbul Medipol University',
    location: 'Istanbul • Medical specialty',
    type: 'Private',
    programs: '85+',
    tuition: '$4,000/yr',
    image: '/assets/medipol.png',
  },
  {
    name: 'Hacettepe University',
    location: 'Ankara • Top-ranked',
    type: 'Public',
    programs: '95+',
    tuition: '$1,500/yr',
    image: '/assets/HacettepeUniversity.png',
  },
  {
    name: 'Koc University',
    location: 'Istanbul • Research-focused',
    type: 'Private',
    programs: '50+',
    tuition: '$15,000/yr',
    image: '/assets/KOC.png',
  },
  {
    name: 'Istanbul Technical University',
    location: 'Istanbul • Engineering',
    type: 'Public',
    programs: '75+',
    tuition: '$1,800/yr',
    image: '/assets/ITU.png',
  },
  {
    name: 'Istanbul Aydin University',
    location: 'Istanbul • Diverse programs',
    type: 'Private',
    programs: '110+',
    tuition: '$3,200/yr',
    image: '/assets/aydin.png',
  },
];

export default function FindUniversity() {
  const { openApplyForm } = useApplyForm();

  return (
    <section id="universities" className="universities-section">
      <div className="container">
        <AnimatedSection className="universities-section__title">
          <h2 className="section-heading">Where our students study</h2>
          <p className="universities-section__subtitle">
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

              <div className="university-card__content">
                <h4 className="university-card__title">{uni.name}</h4>
                <span className="university-card__location">{uni.location}</span>

                <div className="university-card__meta">
                  <div className="university-card__meta-item">
                    <span className="university-card__meta-val">{uni.programs}</span>
                    <span className="university-card__meta-lbl">Programs</span>
                  </div>
                  <div className="university-card__meta-item">
                    <span className="university-card__meta-val university-card__meta-val--tuition">
                      {uni.tuition}
                    </span>
                    <span className="university-card__meta-lbl">From</span>
                  </div>
                </div>

                <GlassButton
                  type="button"
                  variant="outline-navy"
                  className="university-card__btn"
                  onClick={openApplyForm}
                >
                  View Programs
                </GlassButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="universities-section__btn-wrap">
          <GlassButton
            type="button"
            variant="orange"
            size="lg"
            onClick={openApplyForm}
          >
            Browse all 80+ universities →
          </GlassButton>
        </AnimatedSection>
      </div>
    </section>
  );
}

