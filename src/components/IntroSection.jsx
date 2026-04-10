import useReveal from '../hooks/useReveal';
import foodImg from '../assets/food.jpg';

const symptoms = [
  'Stubborn belly fat that won\'t move despite dieting',
  'Bloating, gas and digestive discomfort',
  'Low energy, brain fog and afternoon crashes',
  'Sugar cravings and mood swings',
  'Slow metabolism and resistant weight loss',
  'Hormonal imbalance and poor sleep',
];

export default function IntroSection() {
  const ref = useReveal();

  return (
    <section className="section intro reveal" ref={ref}>
      <div className="section-inner">
        <div className="intro-grid">
          <div className="intro-img">
            <div className="intro-img-main">
              <img src={foodImg} alt="Fresh organic meal prepared by GoOrganic" />
            </div>
            <div className="intro-img-badge">
              <div className="intro-img-badge-num">HACCP</div>
              <div className="intro-img-badge-txt">
                Certified
                <br />
                Kitchen
              </div>
            </div>
          </div>

          <div>
            <div className="label">Why GoOrganic Works</div>
            <h2 className="big">
              Say Goodbye to Stubborn Fat, Bloating &amp; Low Energy.{' '}
              <em>For Good.</em>
            </h2>
            <p className="body-text">
              Your weight isn't just about calories. It's about your gut, your
              hormones, your liver and your cortisol. Our experts have been
              solving this in the UAE for over a decade — with real food, not
              injections.
            </p>
            <ul className="symptom-list">
              {symptoms.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              href="https://form.typeform.com/to/Zear9f4V"
              className="hero-cta"
              style={{ display: 'inline-block', marginTop: '20px' }}
            >
              Take the Free Assessment. No Powders / No Pills. →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
