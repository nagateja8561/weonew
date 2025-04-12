
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className={cn(
          "text-2xl font-bold transition-colors", 
          isScrolled ? "text-eco-green" : "text-white"
        )}>
          EcoGlobal
        </a>
        
        <div className="hidden md:flex space-x-8">
          {['About', 'Programs', 'Impact', 'Get Involved', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={cn(
                "font-medium transition-colors hover:text-eco-green", 
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#donate" 
            className="bg-eco-green text-white font-medium px-5 py-2 rounded-md hover:bg-eco-green-dark transition-colors"
          >
            Donate
          </a>
        </div>
        
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['About', 'Programs', 'Impact', 'Get Involved', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-foreground font-medium hover:text-eco-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#donate" 
              className="bg-eco-green text-white font-medium px-5 py-2 rounded-md hover:bg-eco-green-dark transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
