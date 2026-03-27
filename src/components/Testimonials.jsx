import useReveal from '../hooks/useReveal';

const testimonials = [
  {
    text: "I've tried every diet in Dubai — keto, intermittent fasting, juice cleanses. Nothing stuck. The expert call was completely different. She looked at my gut symptoms, my cortisol and my sleep and said 'this is why you're not losing weight.' I lost 7KG in 28 days and I wasn't starving once.",
    author: 'Sarah K.',
    detail: "Dubai Marina · Women's Reset Program",
    badge: '−7 KG in 28 Days',
  },
  {
    text: "As a man with a desk job and high stress, I thought belly fat was just something I had to accept. The GoOrganic expert identified liver congestion and elevated cortisol. 5KG gone in 20 days. My energy is completely different now. I didn't change my gym routine — just the food.",
    author: 'Ahmed R.',
    detail: "Abu Dhabi · Men's Belly Fat Reset",
    badge: '−5 KG in 20 Days',
  },
  {
    text: "After my second baby I was exhausted, bloated and couldn't shift the weight. The assessment showed hormonal imbalance and gut dysbiosis. 40 days later I'm down 9KG, my bloating is gone and I feel like myself again. The food delivered to my door was actually delicious.",
    author: 'Noor Al M.',
    detail: "Sharjah · Women's 10KG Transformation",
    badge: '−9 KG in 40 Days',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="section testimonials reveal" ref={ref}>
      <div className="section-inner">
        <div className="label">Client Stories</div>
        <h2 className="big">
          Over 100,000 Happy Clients.
          <br />
          <em>Their Words, Not Ours.</em>
        </h2>
        <div className="testi-grid reveal-stagger">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.author}>
              <div className="testi-mark">"</div>
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">{t.author}</div>
              <div className="testi-detail">{t.detail}</div>
              <div className="testi-badge">{t.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
