import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection.jsx';
import GlassButton from '../ui/GlassButton.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter">
      <div className="container">
        <AnimatedSection>
          <form
            className="newsletter__bar"
            onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
          >
            <span className="newsletter__text">Subscribe to our newsletter</span>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <GlassButton type="submit" variant="pill" className="newsletter__submit">
              Subscribe
            </GlassButton>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
