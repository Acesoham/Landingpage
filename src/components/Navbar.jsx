import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="nav-logo-text">
        <a href="https://www.goorganic.me/">
          Go<span>Organic</span>
        </a>
      </div>
      <div className="form-url">

            
      <a href="https://form.typeform.com/to/Zear9f4V" className="nav-btn">
        Take the Free Assessment →
      </a>
      </div>
    </nav>
  );
}

