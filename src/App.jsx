import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import QuoteBand from './components/QuoteBand';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';
import Struggles from './components/Struggles';
import VictoriaQuote from './components/VictoriaQuote';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import Assessment from './components/Assessment';
import WhyBand from './components/WhyBand';
import TrialSection from './components/TrialSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <div className="quote-how-wrapper">
        <QuoteBand />
        <HowItWorks />
      </div>
      <BeforeAfter />
      <Struggles />
      <VictoriaQuote />
      <Experts />
      <Testimonials />
      <div className="assessment-trial-wrapper">
        <Assessment />
        <TrialSection />
      </div>
      <WhyBand />
      <Footer />
      <StickyCTA />
    </>
  );
}

