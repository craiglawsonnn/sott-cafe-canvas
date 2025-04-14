
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/utils/translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = translations[language];

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const navItems = [
    { label: t.nav.home, href: 'home' },
    { label: t.nav.about, href: 'about' },
    { label: t.nav.menu, href: 'menu' },
    { label: t.nav.reviews, href: 'reviews' },
    { label: t.nav.contact, href: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-[#AAB69B] font-serif text-2xl md:text-3xl font-semibold">
          Sott
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={`#${item.href}`} 
              className="font-sans text-sm uppercase tracking-wider hover:text-[#AAB69B] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="font-sans text-sm uppercase tracking-wider hover:text-[#AAB69B] transition-colors"
          >
            {language === 'en' ? 'PL' : 'EN'}
          </button>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-[#AAB69B]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={`#${item.href}`} 
              className="font-sans text-lg uppercase tracking-wider hover:text-[#AAB69B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="font-sans text-lg uppercase tracking-wider hover:text-[#AAB69B] transition-colors"
          >
            {language === 'en' ? 'PL' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
