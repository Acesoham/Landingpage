import useReveal from '../hooks/useReveal';

export default function Assessment() {
  const ref = useReveal();

  return (
    <section className="assessment reveal" id="assessment" ref={ref}>
      <div className="assessment-inner">
        <div className="label">
          Free. No Obligation. Takes 2 Minutes.<br/>
          <a href="https://wa.me/+971556250664" style={{ fontWeight: 900, textDecoration: 'none', color: 'inherit', display: 'inline-block', marginTop: '8px' }}>
            Lose Upto 20 KG.
          </a>
        </div>
        <h2 className="big">
          <a href="https://wa.me/+971556250664" style={{ textDecoration: 'none', color: 'inherit' }}>
            Apply for Your Free
            <br />
            1:1 Weight Loss Consultation
          </a>
        </h2>
        <p className="body-text">
          Tell us about your body, your symptoms and your goals. The more
          honestly you answer, the more precisely our experts can help you. One
          of our qualified nutritionists will call you within 24 hours.
        </p>
        <p className="assessment-note">
          🔒 &nbsp;Your information is completely private and seen only by your
          assigned expert.
        </p>
        <div className="form-box">
          {/* ══ REPLACE THIS BLOCK WITH YOUR TYPEFORM EMBED ══ */}
          <div className="form-placeholder-inner">
            <div className="form-icon">📋</div>
            <div className="form-placeholder-title">
              <a href="https://wa.me/+971556250664" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get a Personalized Weight / Fat Loss Plan 
              </a>
            </div>
            <div className="form-placeholder-body">
             
            </div>
          
            <a
              href="https://form.typeform.com/to/Zear9f4V"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
            >
             Take the 2 Minute Assessment To Lose 5- 20 KG →
            </a>
          </div>
          {/*
            PASTE YOUR TYPEFORM EMBED CODE HERE. EXAMPLE:
            <div data-tf-live="YOUR_FORM_ID" style={{width:'100%',height:'700px'}}></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
          */}
        </div>
      </div>
    </section>
  );
}
