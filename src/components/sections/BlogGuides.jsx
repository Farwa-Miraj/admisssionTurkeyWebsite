import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const guides = [
  {
    id: 'visa',
    tag: 'Visa',
    title: 'How to get a Turkish student visa from Pakistan — step-by-step guide for 2026',
    desc: 'Documents, embassy appointments, costs, timelines, and common rejection reasons for Pakistani students applying in 2026.',
    readTime: '8 min read',
    link: '#contact',
    accent: '#4a9fd4',
    tint: '#eef6fc',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M8 17c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      </svg>
    ),
  },
  {
    id: 'admissions',
    tag: 'Admissions',
    title: 'Best universities in Istanbul for international medical students in 2026',
    desc: 'Compare tuition, accreditation, English-taught programs, and admission requirements for top Istanbul medical faculties.',
    readTime: '6 min read',
    link: '#contact',
    accent: '#4caf7a',
    tint: '#edf8f2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
        <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
      </svg>
    ),
  },
  {
    id: 'denklik',
    tag: 'Denklik',
    title: 'What is Denklik and how do international students apply for it in Turkey?',
    desc: 'Everything about the equivalency certificate — who needs it, required documents, and processing timelines.',
    readTime: '5 min read',
    link: '#contact',
    accent: '#8b6fd4',
    tint: '#f3effc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'student-life',
    tag: 'Student Life',
    title: 'Cost of living in Istanbul for international students in 2026 — a real monthly breakdown',
    desc: 'Honest numbers on rent, food, transport, health insurance, and student discounts in Istanbul.',
    readTime: '7 min read',
    link: '#contact',
    accent: '#e8956c',
    tint: '#fdf3ed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GuideCard({ guide, featured = false, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <motion.a
        href={guide.link}
        className={`guide-hub-card${featured ? ' guide-hub-card--featured' : ''}`}
        style={{
          '--guide-accent': guide.accent,
          '--guide-tint': guide.tint,
        }}
        whileHover={{ y: featured ? -6 : -4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="guide-hub-card__icon" aria-hidden="true">
          {guide.icon}
        </div>

        <div className="guide-hub-card__body">
          <div className="guide-hub-card__meta">
            <span className="guide-hub-card__tag">{guide.tag}</span>
            <span className="guide-hub-card__time">{guide.readTime}</span>
          </div>

          <h3 className="guide-hub-card__title">{guide.title}</h3>
          <p className="guide-hub-card__desc">{guide.desc}</p>

          <span className="guide-hub-card__cta">
            Read guide
            <ArrowIcon />
          </span>
        </div>

        {featured && (
          <div className="guide-hub-card__decor" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
      </motion.a>
    </AnimatedSection>
  );
}

export default function BlogGuides() {
  const featured = guides.find((g) => g.featured) ?? guides[0];
  const rest = guides.filter((g) => g.id !== featured.id);

  return (
    <section id="blogs" className="guides-hub">
      <div className="container">
        <AnimatedSection className="guides-hub__header">
          <h2 className="section-heading">
            Student guides for{' '}
            <span className="section-heading__accent">studying in Turkey</span>
          </h2>
          <p className="guides-hub__subtitle">
            In-depth resources on university selection, visas, Denklik, and student life — written
            for students from Pakistan, Bangladesh, Saudi Arabia, and Kuwait.
          </p>

          <div className="guides-hub__topics" aria-label="Guide categories">
            {guides.map((g) => (
              <span
                key={g.id}
                className="guides-hub__topic"
                style={{ '--topic-color': g.accent }}
              >
                {g.tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="guides-hub__grid">
          <GuideCard guide={featured} featured delay={0} />
          {rest.map((guide, idx) => (
            <GuideCard key={guide.id} guide={guide} delay={(idx + 1) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
