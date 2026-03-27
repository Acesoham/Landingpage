import useReveal from '../hooks/useReveal';
import desktopFemale from '../assets/desktop-size02new-267976746473912_s(1).jpg';
import desktopMale from '../assets/desktop-size03new1-268017567497052_s.jpg';
import mobileFemale from '../assets/mobile-size021-13541551527137_m.jpg';
import mobileMale from '../assets/mobile-size031-91014212369902_m.jpg';

export default function BeforeAfter() {
  const ref = useReveal();

  return (
    <section className="section ba-section reveal" ref={ref}>
      <div className="section-inner">
        <div className="ba-grid">
          {/* Left: text + results */}
          <div className="reveal-left">
            <div className="label">Real Client Results</div>
            <h2 className="big">
              What Happens When the Plan Fits <em>Your</em> Body
            </h2>
            <p className="body-text" style={{ marginBottom: '36px' }}>
              These aren't generic results from a generic plan. Every single one
              of these clients started with the same assessment you're about to
              take.
            </p>
            <div className="ba-results">
              <div className="ba-result-item">
                <div className="ba-result-kg">−8 KG</div>
                <div className="ba-result-name">Sarah K. — Dubai Marina</div>
                <div className="ba-result-detail">Women's Reset · 30 Days</div>
                <div className="ba-result-quote">
                  "The expert looked at my gut symptoms and stress levels and
                  said 'this is why you're not losing weight.' Everything clicked
                  from there."
                </div>
              </div>
              <div
                className="ba-result-item"
                style={{ borderLeftColor: 'var(--earth)' }}
              >
                <div className="ba-result-kg" style={{ color: 'var(--earth)' }}>
                  −5 KG
                </div>
                <div className="ba-result-name">Ahmed R. — Abu Dhabi</div>
                <div className="ba-result-detail">
                  Men's Belly Fat Reset · 20 Days
                </div>
                <div className="ba-result-quote">
                  "I thought belly fat was just something I had to accept. The
                  GoOrganic expert identified my liver congestion. 5KG gone in 20
                  days."
                </div>
              </div>
            </div>
          </div>

          {/* Right: before / after photos */}
          <div className="reveal-right">
            <div className="ba-photos">
              {/* Female client */}
              <div className="ba-photo-card">
                <picture>
                  <source media="(max-width: 900px)" srcSet={mobileFemale} />
                  <img src={desktopFemale} alt="Sarah K. — Before and After transformation, lost 8 KG in 30 days" />
                </picture>
                <div className="ba-photo-overlay">
                  <span className="ba-photo-name">Sarah K.</span>
                  <span className="ba-photo-result">−8 KG · 30 Days</span>
                </div>
              </div>

              {/* Male client */}
              <div className="ba-photo-card">
                <picture>
                  <source media="(max-width: 900px)" srcSet={mobileMale} />
                  <img src={desktopMale} alt="Ahmed R. — Before and After transformation, lost 5 KG in 20 days" />
                </picture>
                <div className="ba-photo-overlay">
                  <span className="ba-photo-name">Ahmed R.</span>
                  <span className="ba-photo-result">−5 KG · 20 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
