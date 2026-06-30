import { motion } from 'framer-motion';
import GlassButton from '../ui/GlassButton.jsx';

export default function Footer() {
  return (
    <footer className="footer-redesign">
     
      <div className="container">
        <div className="footer-redesign__main">
          {/* Footer Top Links Grid */}
          <div className="footer-redesign__grid">
          {/* Brand Info */}
          <div className="footer-redesign__col-brand">
            <a href="#home" className="footer-redesign__logo" aria-label="Admission Turkey">
              <img src="/assets/logo.png" alt="Admission Turkey" loading="lazy" />
            </a>
            <p>
              We help international students from Pakistan, Bangladesh, Saudi Arabia, and beyond
              secure admissions to top Turkish public and private universities with zero hassle.
            </p>
            <div className="footer-redesign__socials">
              <GlassButton as="a" href="#" variant="social" className="footer-redesign__social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </GlassButton>
              <GlassButton as="a" href="#" variant="social" className="footer-redesign__social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </GlassButton>
              <GlassButton as="a" href="#" variant="social" className="footer-redesign__social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </GlassButton>
              <GlassButton as="a" href="#" variant="social" className="footer-redesign__social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </GlassButton>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="footer-redesign__col-title">Main Pages</h4>
            <ul className="footer-redesign__links">
              <li><a href="#home">Study in Turkey</a></li>
              <li><a href="#universities">Universities</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-redesign__col-title">Services</h4>
            <ul className="footer-redesign__links">
              <li><a href="#services">University Admissions</a></li>
              <li><a href="#services">Visa Assistance</a></li>
              <li><a href="#services">Residency Permit</a></li>
              <li><a href="#services">Student Housing</a></li>
              <li><a href="#services">Translation Services</a></li>
              <li><a href="#services">Documents Equivalency</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-redesign__col-title">Company</h4>
            <ul className="footer-redesign__links">
              <li><a href="#contact">Contact Support</a></li>
              <li><a href="#about">Careers</a></li>
              <li><a href="#home">Terms & Conditions</a></li>
              <li><a href="#home">Privacy Policy</a></li>
              <li><a href="#home">FAQs</a></li>
            </ul>
          </div>
          </div>

          {/* Map and Calendly Contact Card */}
          <div className="footer-redesign__widgets">
            <div className="footer-map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.63000570535!2d28.847113177651084!3d41.00523297059737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e9415c0a0c4!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Admission Turkey Head Office Location"
              />
            </div>

            <div className="footer-talk-card">
              <h4>Ready to Talk?</h4>
              <p>Book a free 15-min counseling session on Calendly.</p>
              <GlassButton
                as="a"
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="orange"
                size="sm"
                className="footer-talk-card__btn"
              >
                Book Call on Calendly
              </GlassButton>
            </div>
          </div>
        </div>

        <motion.div
          className="footer-redesign__bg-text"
          aria-hidden="true"
          initial={{ opacity: 0.18 }}
          animate={{ opacity: 0.21 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          TURKIYE
        </motion.div>

        {/* Footer Bottom info */}
        <div className="footer-redesign__bottom">
          <p>© {new Date().getFullYear()} Admission Turkey. All Rights Reserved.</p>
          <div className="footer-redesign__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

