import useReveal from '../hooks/useReveal';

const steps = [
  {
    num: '01',
    title: 'Fill the Assessment',
    desc: 'Answer questions about your body, symptoms, gut health, lifestyle and goals. Completely confidential. Takes about 5 minutes.',
  },
  {
    num: '02',
    title: 'Expert Reviews Your Profile',
    desc: 'One of our qualified nutritionists reads your full profile before they call you. They arrive on the call already knowing your situation.',
  },
  {
    num: '03',
    title: 'You Get Your Personal Plan',
    desc: 'Your expert recommends the exact reset built for your body. No guesswork. No generic advice. A plan you can start immediately.',
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section className="section how reveal" ref={ref}>
      <div className="section-inner">
        <div className="label">The Process</div>
        <h2 className="big">
          Three Steps to a Plan
          <br />
          Built for <em>Your</em> Body
        </h2>
        <div className="how-grid reveal-stagger">
          {steps.map((s) => (
            <div className="how-item" key={s.num}>
              <div className="how-num">{s.num}</div>
              <div className="how-title">{s.title}</div>
              <div className="how-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
