import useReveal from '../hooks/useReveal';

const items = [
  {
    icon: '🫃',
    title: 'Stubborn Belly Fat',
    desc: "Cutting calories and still not losing from the middle. This is almost always a liver, cortisol or hormonal issue — not willpower.",
  },
  {
    icon: '🫧',
    title: 'Bloating & Gut Discomfort',
    desc: "Feeling heavy, gassy or uncomfortable after meals. A sign your microbiome is imbalanced and your gut needs resetting.",
  },
  {
    icon: '🧠',
    title: 'Brain Fog & Fatigue',
    desc: "Low energy by 3pm, difficulty concentrating. Poor gut health directly impacts how sharp and energised you feel every day.",
  },
  {
    icon: '🍬',
    title: 'Sugar Cravings',
    desc: "Mood swings, energy crashes and constant cravings for sweet things. This is a metabolic and gut bacteria issue, not a lack of discipline.",
  },
  {
    icon: '😴',
    title: 'Poor Sleep & High Stress',
    desc: "Elevated cortisol from stress and poor sleep directly causes fat storage — especially around the belly. We address this in the plan.",
  },
  {
    icon: '⚖️',
    title: 'Resistant Metabolism',
    desc: "You've tried everything — keto, intermittent fasting, low carb — and the scale won't move. Your metabolism needs a clinical reset.",
  },
];

export default function Struggles() {
  const ref = useReveal();

  return (
    <section className="section struggles reveal" ref={ref}>
      <div className="section-inner">
        <div className="label">Sound Familiar?</div>
        <h2 className="big">
          If You're Experiencing Any of These,
          <br />
          Your Body Is Telling You Something.
        </h2>
        <div className="struggles-grid reveal-stagger">
          {items.map((item) => (
            <div className="struggle-item" key={item.title}>
              <div className="struggle-icon">{item.icon}</div>
              <div className="struggle-title">{item.title}</div>
              <div className="struggle-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
