import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApplyForm } from '../../context/ApplyFormContext.jsx';
import { buildApplicationMessage, buildWhatsAppUrl } from '../../utils/whatsapp';

const initialForm = {
  fullName: '',
  fatherName: '',
  email: '',
  phone: '',
  degreeType: '',
  nationality: '',
  preferredCourse: '',
  message: '',
};

const degreeOptions = [
  "Bachelor's Degree",
  "Master's Degree",
  'PhD / Doctorate',
  'Diploma',
  'Language Course',
  'Other',
];

export default function ApplyFormModal() {
  const { isOpen, closeApplyForm } = useApplyForm();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setForm(initialForm);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const message = buildApplicationMessage(form);
    const whatsappUrl = buildWhatsAppUrl(message);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    closeApplyForm();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="apply-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="apply-modal__backdrop"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="apply-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-modal-title"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              type="button"
              className="apply-modal__close"
              onClick={handleClose}
              aria-label="Close form"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                className="apply-modal__success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="apply-modal__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2>Application Sent via WhatsApp!</h2>
                <p>
                  Thank you, {form.fullName.split(' ')[0]}! Your application details have been
                  sent to WhatsApp. Please tap <strong>Send</strong> in the WhatsApp chat to
                  complete your submission. Our team will contact you shortly.
                </p>
                <motion.button
                  type="button"
                  className="btn btn--orange"
                  onClick={handleClose}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div className="apply-modal__header">
                  <img src="/assets/logo.png" alt="" className="apply-modal__logo" />
                  <h2 id="apply-modal-title">Apply for Admission</h2>
                  <p>Fill in your details below and our team will guide you through the process.</p>
                </div>

                <form className="apply-modal__form" onSubmit={handleSubmit}>
                  <div className="apply-modal__row">
                    <div className="apply-modal__field">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="apply-modal__field">
                      <label htmlFor="fatherName">Father&apos;s Name *</label>
                      <input
                        id="fatherName"
                        name="fatherName"
                        type="text"
                        placeholder="Enter father's name"
                        value={form.fatherName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="apply-modal__row">
                    <div className="apply-modal__field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="apply-modal__field">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (123) 456-7890"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="apply-modal__row">
                    <div className="apply-modal__field">
                      <label htmlFor="degreeType">Degree Type *</label>
                      <select
                        id="degreeType"
                        name="degreeType"
                        value={form.degreeType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select degree type</option>
                        {degreeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="apply-modal__field">
                      <label htmlFor="nationality">Nationality *</label>
                      <input
                        id="nationality"
                        name="nationality"
                        type="text"
                        placeholder="Your nationality"
                        value={form.nationality}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="apply-modal__field">
                    <label htmlFor="preferredCourse">Preferred Course / Program</label>
                    <input
                      id="preferredCourse"
                      name="preferredCourse"
                      type="text"
                      placeholder="e.g. Computer Science, Medicine, Business"
                      value={form.preferredCourse}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="apply-modal__field">
                    <label htmlFor="message">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your goals or any questions..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn--orange apply-modal__submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.03 }}
                    whileTap={{ scale: submitting ? 1 : 0.97 }}
                  >
                    {submitting ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
