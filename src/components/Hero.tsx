
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Cozy Café Interior" 
          className="w-full h-full object-cover image-filter"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 text-white drop-shadow-md animate-fade-in">
          Sott Café & Bakery
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-white/90 drop-shadow-md font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Curated calm. Handcrafted with love. Where slow mornings meet thoughtful details.
        </p>
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span>Discover Our Story</span>
          <ArrowDownCircle size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
