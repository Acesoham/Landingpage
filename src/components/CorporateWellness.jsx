import useReveal from '../hooks/useReveal';
import foodImg from '../assets/food.jpg';

export default function CorporateWellness() {
  const ref = useReveal();

  return (
    <section className="section corporate-wellness reveal" ref={ref}>
      <div className="section-inner">
        <div className="cw-card">
          <div className="cw-image">
            <img src={foodImg} alt="Corporate Wellness food and juice offerings" />
          </div>
          <div className="cw-content">
            <h2 className="cw-title">Corporate Wellness Programs</h2>
            <p className="cw-desc">
              Elevate your team's health with our customized corporate wellness
              programs. From engaging wellness days to tailored workshops, we
              provide the resources and knowledge to cultivate a thriving
              workplace culture. Our team of experts can deliver it all to you.
              We offer a variety of options, including snack boxes, healthy lunch
              spreads, and interactive cooking demonstrations to promote a
              vibrant workplace culture.
            </p>
            <a href="#assessment" className="cw-btn">CONTACT US</a>
          </div>
        </div>
      </div>
    </section>
  );
}
