
import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary/10 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl text-accent mb-2">Sott Café & Bakery</h3>
            <p className="text-foreground/70 text-sm max-w-xs">
              Curated calm. Handcrafted with love. Where slow mornings meet thoughtful details.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/sott.cafe.bakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tertiary hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-tertiary hover:text-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-accent hover:underline"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Sott Café & Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
