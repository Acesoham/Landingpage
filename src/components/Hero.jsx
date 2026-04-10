import { useEffect, useRef, useState } from 'react';

const stats = [
  { num: '100,000', suffix: '+', label: 'Clients Helped' },
  { num: '11', suffix: ' Years', label: 'In the UAE' },
  { num: '5–10', suffix: ' KG', label: 'Average Loss' },
  { num: '300', suffix: '+', label: 'Google Reviews ⭐' },
];

function AnimatedStat({ num, suffix, label }) {
  const [display, setDisplay] = useState(num);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animated.current) {
            animated.current = true;
            // Only animate pure numbers
            const parsed = parseInt(num.replace(/,/g, ''), 10);
            if (!isNaN(parsed) && parsed > 0) {
              let start = 0;
              const duration = 1800;
              const startTime = performance.now();
              const tick = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                start = Math.floor(eased * parsed);
                setDisplay(start.toLocaleString());
                if (progress < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            }
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <div className="hero-stat" ref={ref}>
      <div className="hero-stat-num">
        {display}{suffix}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <a href="https://wa.me/+971556250664" className="hero-eyebrow" style={{ fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
        Free 1:1 Weightloss Assessment.
      </a>


      <h1>
        Tried Everything,
        <br />
        Still Not Losing Weight?
        <br />
        <em>
          Your Body Deserves
          <br />a Real Answer.
          <br /> Lose 5- 20 KG Effortlessly.
        </em>
      </h1>

      <p className="hero-sub-headline">
        <strong>No injections. No powders. Just real food</strong> — built for your body.
      </p>

      <p className="hero-desc">
        <strong>
          Most weight loss programs fail because they're built for someone else.
          Our qualified nutrition experts study your body, your symptoms and your
          lifestyle — then build a plan that actually works.
        </strong>
      </p>

      <a href="https://form.typeform.com/to/Zear9f4V" className="hero-cta">
        Take 2 Minute Assessment. Power Of REAL Food. →
      </a>


      <p className="hero-note">
        🔒 Free. Confidential. One of our experts will call you within 24 hours.
      </p>

      <div className="hero-stats">
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
