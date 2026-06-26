export default function TrustedBy() {
  return (
    <section className="logo-slider">
      <div className="container">
        <h3 className="logo-slider__title">Partnered with Top Universities</h3>
      </div>
      <div className="logo-slider__track">
        {/* Render twice for seamless continuous scroll loop */}
        <img src="/assets/university-logos.png" alt="Partner Universities" />
        <img src="/assets/university-logos.png" alt="Partner Universities" />
        <img src="/assets/university-logos.png" alt="Partner Universities" />
      </div>
    </section>
  );
}

