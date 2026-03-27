import { useEffect, useRef } from 'react';

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the element itself
    io.observe(el);

    // Also observe children that have reveal classes
    const revealChildren = el.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale, .reveal-stagger');
    revealChildren.forEach((child) => io.observe(child));

    return () => io.disconnect();
  }, []);

  return ref;
}
