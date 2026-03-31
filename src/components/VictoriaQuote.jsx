import useReveal from '../hooks/useReveal';
import victoriaImg from '../assets/victoria.jpg';

export default function VictoriaQuote() {
  const ref = useReveal();

  return (
    <section className="section victoria-quote reveal" ref={ref}>
      <div className="section-inner">
        <div className="vq-grid">
          <div className="vq-text-side">
            <h2 className="vq-heading">
              A Word from Nutrition Expert,
              Victoria Tipper
            </h2>
            <div className="vq-heading-underline" />
            
            <div className="vq-quote-mark">“</div>
            <blockquote className="vq-blockquote">
              "I have looked at the GoOrganic Resets, recipes, their ingredients, and
              nutritious offerings from the time they started. As a nutrition expert, I have to say these
              are nutrient-dense Resets that will help in Weight loss, Gut
              Cleanse, Liver Cleanse, and overall whole-body Detox Resets. The
              best part is that they incorporate holistic food and not just a
              typical juice cleanse. Have checked their products from time to
              time and can assure you that I would not have done anything better.
              I am really happy to see a company that is prioritizing health and
              solving problems to the core."
            </blockquote>

            <div style={{ marginTop: '40px' }}>
              <a href="https://wa.me/+971556250664" className="hero-cta">
                Apply 1:1 Assessment. Get The Perfect Plan. →
              </a>
            </div>
          </div>

          <div className="vq-expert-side">
            <div className="vq-avatar">
              <img src={victoriaImg} alt="Victoria Tipper" />
            </div>
            <div className="vq-info">
              <h3 className="vq-name">Victoria Tipper</h3>
              <ul className="vq-credentials">
                <li>MSc Nutrition (Aus)</li>
                <li>BSc Genetics (UK)</li>
                <li>Gut and Psychology Syndrome</li>
                <li>Practitioner (GAPS, UK)</li>
                <li>Personal Fitness Trainer (International</li>
                <li>Sports Sciences Association (ISSA, USA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
