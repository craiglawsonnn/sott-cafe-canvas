
import React from 'react';
import { useInView } from '@/hooks/useInView';

const About: React.FC = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section bg-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`order-2 md:order-1 fade-up ${isVisible ? 'in-view' : ''}`}>
            <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              Nestled in the heart of Kraków, Sott Café & Bakery was born from a passion for artisanal craftsmanship and a love for creating moments of warmth and connection.
            </p>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Each morning, our bakers rise before dawn to prepare handcrafted pastries and bread using traditional techniques and locally-sourced ingredients. Our baristas take equal care in brewing perfectly balanced coffee from ethically sourced beans.
            </p>
            <p className="text-accent text-lg italic">
              "We believe in slowing down, savoring the moment, and appreciating the simple pleasures of a well-crafted cup of coffee and freshly baked bread."
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative hover-scale">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30"></div>
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
