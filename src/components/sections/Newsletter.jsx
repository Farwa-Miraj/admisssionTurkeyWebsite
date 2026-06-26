import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="newsletter">
      <div className="newsletter__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.63000570535!2d28.847113177651084!3d41.00523297059737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e9415c0a0c4!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Admission Turkey Location"
          className="newsletter__map-iframe"
        />
      </div>

      <div className="container">
        <AnimatedSection>
          <div className="newsletter__card">
            <div className="newsletter__content">
              <h2>Subscribe to our newsletter</h2>
              <p>
                Join our newsletter to get exclusive insights, timely updates, and expert tips
                that help you to find great opportunities of learning and growing abroad.
              </p>
            </div>
            <div className="newsletter__form-wrap">
              <label htmlFor="newsletter-email">Stay Informed</label>
              <form
                className="newsletter__form"
                onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
              >
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="newsletter__submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="newsletter__privacy">
                By subscribing you agree to our <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
