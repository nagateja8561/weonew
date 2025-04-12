import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (sectionId: string) => {
    // If we're not on the home page, navigate to home with the section hash
    if (location.pathname !== '/') {
      // First navigate to home page
      navigate('/');
      
      // Then wait for the navigation to complete and scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className={cn(
              "text-2xl font-bold transition-colors", 
              isScrolled ? "text-eco-green" : "text-white"
            )}
          >
            WEO
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Programs', 'Impact', 'Get Involved', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                className={cn(
                  "font-medium transition-colors hover:text-eco-green", 
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {item}
              </button>
            ))}
            <Link 
              to="/donate" 
              className="bg-eco-green text-white font-medium px-5 py-2 rounded-md hover:bg-eco-green-dark transition-colors"
            >
              Donate
            </Link>
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
      </nav>
      
      {/* Full screen mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-eco-green z-40 flex flex-col items-center justify-center md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-6 text-center">
            {['About', 'Programs', 'Impact', 'Get Involved', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                className="text-white text-2xl font-medium hover:text-eco-beige transition-colors"
              >
                {item}
              </button>
            ))}
            <Link 
              to="/donate" 
              className="bg-white text-eco-green font-medium px-8 py-3 rounded-md hover:bg-eco-beige transition-colors text-xl mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
