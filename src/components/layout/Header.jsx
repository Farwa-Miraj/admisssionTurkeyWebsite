import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import GlassButton from '../ui/GlassButton.jsx';

const navLinks = [
  { label: 'Study in Turkey', href: '#home' },
  { label: 'Universities', href: '#universities' },
  { label: 'Programs', href: '#programs' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'B2B', href: '#b2b' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleWhatsAppChat = () => {
    const whatsappUrl = buildWhatsAppUrl("Hello Admission Turkey Team! I would like to get a free consultation.");
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className={`top-bar ${scrolled ? 'top-bar--hidden' : ''}`}>
        <div className="container top-bar__inner">
          <div className="top-bar__announcement">
            📢 Admissions Open September/Spring 2026 Intake |{' '}
            <a href="#contact" style={{ color: 'var(--orange-light)', textDecoration: 'underline' }}>
              Scholarships Available (Click here)
            </a>
          </div>
          <div className="top-bar__languages">
            <button
              type="button"
              className={`top-bar__lang-btn ${lang === 'EN' ? 'top-bar__lang-btn--active' : ''}`}
              onClick={() => setLang('EN')}
            >
              🇬🇧 EN
            </button>
            <span className="top-bar__lang-divider">|</span>
            <button
              type="button"
              className={`top-bar__lang-btn ${lang === 'TR' ? 'top-bar__lang-btn--active' : ''}`}
              onClick={() => setLang('TR')}
            >
              🇹🇷 TR
            </button>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
        <div className="header__shell">
          <motion.a
            href="#home"
            className="header__logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="header__logo-blur" aria-hidden="true" />
            <img src="/assets/logo.png" alt="Admission Turkey" loading="eager" />
          </motion.a>

          <div className="header__inner">
            <nav className="header__nav">
              {navLinks.map((link, i) => (
                <span key={link.label} className="header__nav-item">
                  {i > 0 && <span className="header__nav-divider">|</span>}
                  <a href={link.href}>{link.label}</a>
                </span>
              ))}
            </nav>

            <button
              className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-controls="site-mobile-menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>

          <GlassButton
            type="button"
            variant="ghost"
            className="header__cta-whatsapp hero__btn hero__btn--ghost"
            onClick={handleWhatsAppChat}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.99L2 22l5.233-1.371a9.943 9.943 0 004.777 1.218h.005c5.505 0 9.99-4.478 9.99-9.985C22.007 6.478 17.519 2 12.012 2zm0 18.29h-.004a8.27 8.27 0 01-4.22-1.164l-.303-.18-3.141.823.839-3.059-.197-.314a8.275 8.275 0 01-1.267-4.41c.001-4.566 3.722-8.282 8.293-8.282 2.214 0 4.295.862 5.86 2.43a8.23 8.23 0 012.427 5.858c-.002 4.568-3.724 8.288-8.286 8.288z" />
            </svg>
            Chat with Our Team
          </GlassButton>
        </div>

      </header>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                key="mobile-backdrop"
                type="button"
                className="header__mobile-backdrop"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                key="mobile-menu"
                id="site-mobile-menu"
                className={`header__mobile-menu ${scrolled ? 'header__mobile-menu--scrolled' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 28 }}
                transition={{ duration: 0.25 }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <GlassButton
                  type="button"
                  variant="ghost"
                  className="header__cta-whatsapp hero__btn hero__btn--ghost"
                  onClick={() => { setMenuOpen(false); handleWhatsAppChat(); }}
                  style={{ marginTop: '12px' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.99L2 22l5.233-1.371a9.943 9.943 0 004.777 1.218h.005c5.505 0 9.99-4.478 9.99-9.985C22.007 6.478 17.519 2 12.012 2zm0 18.29h-.004a8.27 8.27 0 01-4.22-1.164l-.303-.18-3.141.823.839-3.059-.197-.314a8.275 8.275 0 01-1.267-4.41c.001-4.566 3.722-8.282 8.293-8.282 2.214 0 4.295.862 5.86 2.43a8.23 8.23 0 012.427 5.858c-.002 4.568-3.724 8.288-8.286 8.288z" />
                  </svg>
                  Chat with Our Team
                </GlassButton>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}

