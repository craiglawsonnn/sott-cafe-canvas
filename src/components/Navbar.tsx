
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-accent font-serif text-2xl md:text-3xl font-semibold">
          Sott
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Menu', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-sans text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button onClick={toggleMenu} className="md:hidden text-accent">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-8 items-center">
          {['Home', 'About', 'Menu', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-sans text-lg uppercase tracking-wider hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
