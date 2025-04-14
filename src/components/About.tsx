
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/utils/translations';

const About: React.FC = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="section bg-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={ref as React.RefObject<HTMLDivElement>} className={`order-2 md:order-1 fade-up ${isVisible ? 'in-view' : ''}`}>
            <h2 className="text-3xl md:text-4xl mb-6">{t.about.title}</h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-[#AAB69B] text-lg italic">
              {t.about.quote}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative hover-scale">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#AAB69B]/30"></div>
              <img 
                src="/placeholder.svg" 
                alt="Artisanal baking" 
                className="w-full h-auto object-cover aspect-[4/3] image-filter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
