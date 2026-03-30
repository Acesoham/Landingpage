import victoriaImg from '../assets/Vicki-Tipper-small.jpg';

export default function QuoteBand() {
  return (
    <div className="quote-band">
      <div className="quote-container">
        <div className="quote-text-side">
          <blockquote>
            "Years of experience have taught us that restrictive dieting simply does
            not work. A new lifestyle built around real food — that's what changes
            everything."
          </blockquote>
          <cite>
            — Victoria Tipper, MSc Nutrition · Chief Wellness Officer, GoOrganic
          </cite>
        </div>
        <div className="quote-image-side">
          <img src={victoriaImg} alt="Victoria Tipper" className="quote-avatar" />
        </div>
      </div>
    </div>
  );
}
