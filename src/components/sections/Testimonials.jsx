import AnimatedSection from '../ui/AnimatedSection.jsx';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #ffffff 45%, #fff0f5 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0f6ff 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0fff5 100%)',
  'linear-gradient(135deg, #ffffff 45%, #fff8f0 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f5f0ff 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0fffe 100%)',
];

const CARD_ACCENTS = [
  {
    avatar: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    name: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',
  },
  {
    avatar: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    name: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
  },
  {
    avatar: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    name: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)',
  },
  {
    avatar: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
    name: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)',
  },
  {
    avatar: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    name: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
  },
  {
    avatar: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
    name: 'linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)',
  },
];

const REPEATS_PER_HALF = 5;

function buildMarqueeTrack(items) {
  const half = Array.from({ length: REPEATS_PER_HALF }, () => items).flat();
  return [...half, ...half];
}

function ReviewCard({ testimonial, gradientIndex }) {
  const accentIndex = gradientIndex % CARD_ACCENTS.length;
  const accent = CARD_ACCENTS[accentIndex];

  return (
    <div
      className="review-card"
      style={{ background: CARD_GRADIENTS[accentIndex] }}
    >
      <div className="review-card__header">
        <div className="review-card__avatar" style={{ background: accent.avatar }}>
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="review-card__name review-card__name--accent" style={{ backgroundImage: accent.name }}>
            {testimonial.name}
          </h4>
          <span className="review-card__role">{testimonial.role}</span>
        </div>
      </div>
      <div className="review-card__stars">{'★'.repeat(testimonial.stars)}</div>
      <p className="review-card__text">“{testimonial.text}”</p>
    </div>
  );
}

const row1 = [
  {
    name: 'Perla Cutler',
    role: 'Student from Pakistan • Medipol University',
    stars: 5,
    text: 'This is the second family member we’ve processed through Admission Turkey. Outstanding, fast, and completely transparent service throughout the admission and visa process.',
    avatar: 'PC',
  },
  {
    name: 'Tiffany Jones',
    role: 'Student from Bangladesh • Istanbul Technical University',
    stars: 5,
    text: 'They did a fantastic job with my study visa and equivalency document checks. The process was stress-free and very smooth! I highly recommend their local team.',
    avatar: 'TJ',
  },
  {
    name: 'Oliver Hooper',
    role: 'Student from Kuwait • Sabanci University',
    stars: 5,
    text: 'Excellent counseling and on-ground support in Istanbul. Highly recommend them for any international student looking to study in Turkey without upfront fees.',
    avatar: 'OH',
  },
];

const row2 = [
  {
    name: 'Abraham Cecola',
    role: 'Student from Saudi Arabia • Koc University',
    stars: 5,
    text: 'It was incredibly easy working with the team. They secured my university admission in just 3 days and guided me step-by-step for the Turkish study visa. Thank you!',
    avatar: 'AC',
  },
  {
    name: 'Hamza Malik',
    role: 'Student from Pakistan • Istanbul University',
    stars: 5,
    text: 'Amazing on-ground support. They met me at the airport, helped me register at my hostel, and guided me through the residency card application details smoothly.',
    avatar: 'HM',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Student from Egypt • Bahcesehir University',
    stars: 5,
    text: 'They helped me secure a 50% scholarship for my Master’s program. Transparent communication and very professional advisors. Absolutely loved the service!',
    avatar: 'SA',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="reviews-section">
      <div className="container">
        <AnimatedSection className="reviews-section__title">
          <h2 className="section-heading">What Our Students Say</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px' }}>
            Hear from some of the thousands of international students we’ve helped place in Turkey.
          </p>
        </AnimatedSection>
      </div>

      {/* Row 1: Moves Left */}
      <div className="reviews-row">
        <div className="reviews-row__track reviews-row__track--left">
          {buildMarqueeTrack(row1).map((t, idx) => (
            <ReviewCard key={`row1-${idx}`} testimonial={t} gradientIndex={idx} />
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right */}
      <div className="reviews-row">
        <div className="reviews-row__track reviews-row__track--right">
          {buildMarqueeTrack(row2).map((t, idx) => (
            <ReviewCard key={`row2-${idx}`} testimonial={t} gradientIndex={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

