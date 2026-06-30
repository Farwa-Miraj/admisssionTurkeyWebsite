import GlassButton from '../ui/GlassButton.jsx';

const uniLogos = [
  'image_6.png',
  'image_7.png',
  'image_8.png',
  'image_9.png',
  'image_10.png',
  'image_11.png',
  'image_12.png',
  'image_13.png',
  'image_14.png',
];
export default function TrustedBy() {
  return (
    <section className="hp-universities" id="universities">
      <div className="container hp-uni-head">
        <div>
          <span className="hp-eyebrow hp-uni-eyebrow">Partners</span>
          <h2>Trusted by leading universities</h2>
        </div>
        <GlassButton type="button" variant="outline-hp" className="hp-uni-btn">
          View all partners
        </GlassButton>
      </div>
      <div className="hp-uni-marquee" aria-label="Partner university logos">
        <div className="hp-uni-track">
          {[...uniLogos, ...uniLogos].map((filename, i) => (
            <div key={`${filename}-${i}`} className="hp-uni-logo">
              <img
                src={`/assets/uni-logos/${encodeURIComponent(filename)}`}
                alt="Partner university logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
