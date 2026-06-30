import AnimatedSection from '../ui/AnimatedSection.jsx';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #ffffff 45%, #fff0f5 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0f6ff 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0fff5 100%)',
  'linear-gradient(135deg, #ffffff 45%, #fff8f0 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f5f0ff 100%)',
  'linear-gradient(135deg, #ffffff 45%, #f0fffe 100%)',
];

function ReviewCard({ testimonial, gradientIndex }) {
  return (
    <div
      className="review-card"
      style={{ background: CARD_GRADIENTS[gradientIndex % CARD_GRADIENTS.length] }}
    >
      <div className="review-card__header">
        <div className="review-card__avatar">{testimonial.avatar}</div>
        <div>
          <h4 className="review-card__name">{testimonial.name}</h4>
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
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--navy)' }}>
            What Our Students Say
          </h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px' }}>
            Hear from some of the thousands of international students we’ve helped place in Turkey.
          </p>
        </AnimatedSection>
      </div>

      {/* Row 1: Moves Left */}
      <div className="reviews-row">
        <div className="reviews-row__track reviews-row__track--left">
          {/* Double the array for infinite scrolling */}
          {[...row1, ...row1, ...row1].map((t, idx) => (
            <ReviewCard key={idx} testimonial={t} gradientIndex={idx} />
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right */}
      <div className="reviews-row">
        <div className="reviews-row__track reviews-row__track--right">
          {[...row2, ...row2, ...row2].map((t, idx) => (
            <ReviewCard key={idx} testimonial={t} gradientIndex={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

