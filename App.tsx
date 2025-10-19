import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const AnimatedSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref} className="section-hidden">{children}</div>;
}


const App: React.FC = () => {
  return (
    <div className="relative bg-[#0a192f] text-slate-200 font-sans leading-relaxed tracking-tight overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a192f] via-[#172a45] to-[#0a192f]"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <AnimatedSection><Hero /></AnimatedSection>
          <AnimatedSection><Features /></AnimatedSection>
          <AnimatedSection><Pricing /></AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;