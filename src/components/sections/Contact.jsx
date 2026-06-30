import AnimatedSection from '../ui/AnimatedSection';
import GlassButton from '../ui/GlassButton.jsx';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <img src="/assets/contact-bg.jpg" alt="" className="contact__header-bg" loading="lazy" />
        <div className="contact__header-overlay">
          <AnimatedSection>
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact__subtitle">
              Don&apos;t wait to build your future. Contact us now for a free consultation
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container contact__body">
        <AnimatedSection className="contact__card" delay={0.1}>
          <div className="contact__info">
            <h3>Get in Touch</h3>
            <p>
              Ready to take the next step? Whether you need advice or want to begin your
              application, we&apos;re just a message away.
            </p>

            <div className="contact__items">
              <div className="contact__item">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <div>
                  <strong>Head Office</strong>
                  <p>123 St, City, Zipcode</p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <div>
                  <strong>Email</strong>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send us a message</h3>
            <div className="contact__form-row">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" />
            </div>
            <div className="contact__form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Message" rows={5} required />
            <GlassButton type="submit" variant="orange">
              Send Message
            </GlassButton>
          </form>
        </AnimatedSection>
      </div>

      <div className="contact__map">
        <img src="/assets/map.jpg" alt="Office location map" loading="lazy" />
      </div>
    </section>
  );
}
