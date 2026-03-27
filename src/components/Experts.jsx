import useReveal from '../hooks/useReveal';
import victoriaImg from '../assets/victoria.jpg';
import milaImg from '../assets/mila.jpeg';
import bhavanaImg from '../assets/bhavana.jpeg';
import gloriaImg from '../assets/gloria.jpeg';
import danielaImg from '../assets/daniela.jpg';
import coachDenImg from '../assets/coachden.jpeg';

const experts = [
  {
    img: victoriaImg,
    name: 'Victoria Tipper',
    role: 'Nutrition Consultant',
  },
  {
    img: milaImg,
    name: 'Mila Konsina',
    role: 'Nutritionist',
  },
  {
    img: coachDenImg,
    name: 'Coach Den',
    role: 'Fitness and Nutrition Expert',
  },
  {
    img: bhavanaImg,
    name: 'Bhawna Nihalani',
    role: 'Gut Health Specialist',
  },
  {
    img: gloriaImg,
    name: 'Gloria Halim',
    role: 'Nutritionist',
  },
  {
    img: danielaImg,
    name: 'Daniela Donoso',
    role: 'Nutrition Coach',
  },
];

export default function Experts() {
  const ref = useReveal();

  return (
    <section className="section experts-grid-section reveal" ref={ref}>
      <div className="section-inner">
        <div className="experts-grid-header">
          <h2 className="experts-grid-title">Created by Experts</h2>
          <div className="experts-grid-underline" />
        </div>

        <div className="experts-circle-grid reveal-stagger">
          {experts.map((ex) => (
            <div className="experts-circle-item" key={ex.name}>
              <div className="experts-circle-avatar">
                {ex.img ? (
                  <img src={ex.img} alt={ex.name} />
                ) : (
                  <span className="experts-circle-placeholder">
                    {ex.name.split(' ').map(w => w[0]).join('')}
                  </span>
                )}
              </div>
              <h3 className="experts-circle-name">{ex.name}</h3>
              <p className="experts-circle-role">{ex.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
