
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-green-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">EcoGlobal</h4>
            <p className="mb-4 opacity-90">
              Dedicated to protecting our planet and creating a sustainable future for all living beings.
            </p>
            <p className="opacity-90">
              Tax ID: 12-3456789
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#about" className="hover:text-eco-beige transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-eco-beige transition-colors">Our Programs</a></li>
              <li><a href="#impact" className="hover:text-eco-beige transition-colors">Our Impact</a></li>
              <li><a href="#get-involved" className="hover:text-eco-beige transition-colors">Get Involved</a></li>
              <li><a href="#contact" className="hover:text-eco-beige transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-eco-beige transition-colors">News & Blog</a></li>
              <li><a href="#" className="hover:text-eco-beige transition-colors">Research & Reports</a></li>
              <li><a href="#" className="hover:text-eco-beige transition-colors">Educational Materials</a></li>
              <li><a href="#" className="hover:text-eco-beige transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-eco-beige transition-colors">Career Opportunities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4 opacity-90">
              Subscribe to our newsletter to receive updates on our work and ways to get involved.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-foreground"
              />
              <button 
                type="submit" 
                className="bg-eco-blue px-4 py-2 rounded-r-md hover:bg-eco-blue-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-90 mb-4 md:mb-0">
            &copy; {currentYear} EcoGlobal. All rights reserved.
          </p>
          <div className="flex space-x-6 opacity-90">
            <a href="#" className="hover:text-eco-beige transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-eco-beige transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-eco-beige transition-colors">Cookie Policy</a>
          </div>
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
