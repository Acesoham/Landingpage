const items = [
  {
    icon: '🌿',
    title: '100% Food Based',
    desc: 'No injections, peptides, powders or supplements. Real food only.',
  },
  {
    icon: '🔬',
    title: 'Clinically Designed',
    desc: 'Every reset is designed by qualified nutritionists and wellness experts.',
  },
  {
    icon: '🚚',
    title: 'Delivered Fresh Daily',
    desc: 'Fresh meals delivered across Dubai, Abu Dhabi, Sharjah and the UAE.',
  },
  {
    icon: '📞',
    title: 'Expert Call Within 24hrs',
    desc: 'A real expert reviews your profile before calling. Not a sales script.',
  },
];

export default function WhyBand() {
  return (
    <div className="why-band">
      <div className="why-grid">
        {items.map((item) => (
          <div className="why-item" key={item.title}>
            <div className="why-icon">{item.icon}</div>
            <div className="why-title">{item.title}</div>
            <div className="why-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
