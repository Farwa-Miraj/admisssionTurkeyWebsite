import AnimatedSection from '../ui/AnimatedSection.jsx';
import GlassButton from '../ui/GlassButton.jsx';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export default function LetsConnect() {
  const { openApplyForm } = useApplyForm();

  const handleWhatsApp = () => {
    const message = "Hello! I saw the bottom banner on your website and would like to get a personalized university shortlist. Here are my goals.";
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="cta-banner">
      <div className="container">
        <AnimatedSection className="cta-banner__card">
          <h2 className="cta-banner__title">
            Your future starts with a{' '}
            <span className="cta-banner__title-accent">single message.</span>
          </h2>
          <p className="cta-banner__desc">
            Tell us your field, your country, and your goals. We&apos;ll send back a personalized university shortlist within 24 hours.
          </p>
          <div className="cta-banner__buttons">
            <GlassButton
              type="button"
              variant="orange"
              className="cta-banner__btn"
              onClick={openApplyForm}
            >
              Apply for admission &rarr;
            </GlassButton>
            <GlassButton
              type="button"
              variant="ghost"
              className="cta-banner__btn cta-banner__btn--ghost"
              onClick={handleWhatsApp}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.99L2 22l5.233-1.371a9.943 9.943 0 004.777 1.218h.005c5.505 0 9.99-4.478 9.99-9.985C22.007 6.478 17.519 2 12.012 2zm0 18.29h-.004a8.27 8.27 0 01-4.22-1.164l-.303-.18-3.141.823.839-3.059-.197-.314a8.275 8.275 0 01-1.267-4.41c.001-4.566 3.722-8.282 8.293-8.282 2.214 0 4.295.862 5.86 2.43a8.23 8.23 0 012.427 5.858c-.002 4.568-3.724 8.288-8.286 8.288z" />
              </svg>
              Chat on WhatsApp
            </GlassButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
