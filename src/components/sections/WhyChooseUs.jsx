import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const bubbles = [
  {
    id: 1,
    title: 'Fast Admission Process',
    desc: 'Get your offer letter in 3-5 working days with our direct admissions channel.',
    color: '#ff9800',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M13 2v9h7L11 22v-9H4L13 2z" />
      </svg>
    ),
  },

  {
    id: 2,
    title: 'Licensed & Registered',
    desc: 'Officially authorized government-registered agency partnering with top Turkish universities.',
    color: '#2196f3',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },

  {
    id: 3,
    title: 'End-to-End Student Support',
    desc: 'From airport pick-up and hostel booking to local equivalence certificates.',
    color: '#e91e63',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5..." />
      </svg>
    ),
  },

  {
    id: 4,
    title: 'Experienced Team',
    desc: 'Multilingual counselors who have successfully placed thousands of students since 2018.',
    color: '#4caf50',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91v6.27h2V9L12 3z" />
      </svg>
    )
  },

  {
    id: 5,
    title: 'Based in Turkey',
    desc: 'Headquartered in Istanbul, providing direct local on-ground support whenever you need it.',
    color: '#3f51b5',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      </svg>
    )
  },

  {
    id: 6,
    title: 'Serving Globally',
    desc: 'Trusted by students from over 28 countries across South Asia, Middle East, and Africa.',
    color: '#9c27b0',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    )
  }
];


export default function WhyChooseUs() {

  return (

    <section id="why-us" className="titan-section">

      <div className="container">


        <div className="titan-container">


          {/* CONNECTOR LINES */}
          <svg
            className="titan-threads-svg"
            viewBox="0 0 1000 600"
          >

            <path className="titan-thread-line"
              d="M500 300 C350 300 300 120 170 120"
            />

            <path className="titan-thread-line"
              d="M500 300 C300 300 250 330 120 330"
            />

            <path className="titan-thread-line"
              d="M500 300 C350 300 300 540 170 540"
            />


            <path className="titan-thread-line"
              d="M500 300 C650 300 700 120 830 120"
            />


            <path className="titan-thread-line"
              d="M500 300 C700 300 750 330 880 330"
            />


            <path className="titan-thread-line"
              d="M500 300 C650 300 700 540 830 540"
            />


          </svg>



          {/* CENTER CONTENT */}
          <div className="titan-center-logo">

            <div className="titan-badge-live">
              ✨ Why Choose Us
            </div>

            <h3 className="titan-hero-text">
              <span>Your Direct Route</span>
              <div className="titan-slanted-card">
                <img
                  src="/assets/logo.png"
                  className="titan-slanted-card__logo"
                />

                <span className="titan-slanted-card__title">
                  ADMISSION TURKEY
                </span>
              </div>
              <span>To Top Universities</span>
            </h3>

          </div>



          {
            bubbles.map((b) => (

              <motion.div

                key={b.id}

                className={`titan-bubble titan-bubble--${b.id}`}

                initial={{
                  opacity: 0,
                  scale: .9,
                  y: 20
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: .5,
                  delay: b.id * .08
                }}

              >


                <div
                  className="titan-bubble__icon-box"

                  style={{
                    color: b.color,
                    backgroundColor: `${b.color}10`
                  }}

                >

                  {b.icon}

                </div>


                <div className="titan-bubble__content">


                  <h4 className="titan-bubble__title">
                    {b.title}
                  </h4>


                  <p className="titan-bubble__desc">
                    {b.desc}
                  </p>


                </div>



              </motion.div>


            ))
          }



        </div>


      </div>


    </section>

  )

}