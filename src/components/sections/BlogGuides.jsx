import AnimatedSection from '../ui/AnimatedSection.jsx';

const guides = [
  {
    tag: 'Visa',
    title: 'How to get a Turkish student visa from Pakistan - step-by-step guide for 2026',
    desc: 'A complete walkthrough of documents, embassy appointments, costs, timelines, and common rejection reasons for Pakistani students applying in 2026.',
    link: '#contact',
  },
  {
    tag: 'Admissions',
    title: 'Best universities in Istanbul for international medical students in 2026',
    desc: 'Compare tuition fees, accreditation status, English-taught programs, and admission requirements for top Istanbul medical faculties.',
    link: '#contact',
  },
  {
    tag: 'Denklik',
    title: 'What is Denklik and how do international students apply for it in Turkey?',
    desc: 'Everything about the equivalency (Denklik) certificate - who needs it, required documents, application steps, and processing timelines.',
    link: '#contact',
  },
  {
    tag: 'Student Life',
    title: 'Cost of living in Istanbul for international students in 2026 - a real monthly breakdown',
    desc: 'Honest numbers on rent, food, transport, health insurance, and student discounts - based on actual student budgets in Istanbul.',
    link: '#contact',
  },
];

export default function BlogGuides() {
  return (
    <section id="blogs" className="guides-section">
      <div className="container">
        <AnimatedSection className="guides-section__header">
          <span className="guides-section__badge">Resources</span>
          <h2 className="guides-section__heading">
            Student guides for <span className="guides-section__heading-accent">studying in Turkey</span> in 2026
          </h2>
          <div className="guides-section__intro glass-card">
            <p>
              In-depth guides covering Turkish university selections, student visa steps, equivalency (Denklik)
              process, Istanbul student life, and tuition costs - written for students from Pakistan, Bangladesh,
              Saudi Arabia, and Kuwait.
            </p>
          </div>
        </AnimatedSection>

        <div className="guides-grid">
          {guides.map((g, idx) => (
            <AnimatedSection key={g.tag} delay={idx * 0.08}>
              <article className="guide-card glass-card">
                <span className="guide-card__badge-tag">{g.tag}</span>
                <h4 className="guide-card__title">{g.title}</h4>
                <p className="guide-card__desc">{g.desc}</p>
                <a href={g.link} className="guide-card__link">
                  Read guide
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
