import React from 'react';
import { Heart } from 'lucide-react';
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
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
  };
  
  return (
    <footer className="bg-eco-green-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">About</h4>
            <p className="mb-4 opacity-90">
              The World Environment Organization is dedicated to protecting nature and conserving our planet's resources.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <button 
                  onClick={() => handleSectionClick('about')} 
                  className="hover:text-eco-beige transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('programs')} 
                  className="hover:text-eco-beige transition-colors text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('impact')} 
                  className="hover:text-eco-beige transition-colors text-left"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('get-involved')} 
                  className="hover:text-eco-beige transition-colors text-left"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('contact')} 
                  className="hover:text-eco-beige transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61560845355012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-eco-beige transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="https://www.instagram.com/weo.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-eco-beige transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://www.youtube.com/@WorldEnvironmentOrganization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-eco-beige transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a 
                href="https://wa.me/7075576601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-eco-beige transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <p className="text-sm opacity-90">
              Email:{" "}
              <a href="mailto:info@weoindia.in" className="text-white hover:underline">
                info@weoindia.in
              </a>
            </p>
            <p className="text-sm opacity-90">
              Phone:{" "}
              <a href="tel:+917075576601" className="text-white hover:underline">
                +91 7075576601
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-emerald-600 mt-12 pt-4 text-center text-sm opacity-90">
          &copy; {currentYear} WEO |{" "}
          <Link to="/policy" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </div>
        
        <div className="mt-8 text-center text-sm opacity-80">
          <p>
            Made with <Heart className="inline h-4 w-4 text-red-400" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
