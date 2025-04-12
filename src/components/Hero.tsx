import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#00ff77] z-0"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/logo.png" 
            alt="WEO Logo" 
            className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto rounded-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Protecting Our Planet <br className="hidden md:block" /> For Future Generations
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-up opacity-90">
          World Environment Organization works across the world to create sustainable solutions that protect nature, combat climate change, and ensure a healthier planet for all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '200ms'}}>
          <a 
            href="#get-involved" 
            className="btn-primary"
          >
            Get Involved
          </a>
          <a 
            href="#donate" 
            className="btn-outline border-white text-white hover:bg-white hover:text-eco-green"
          >
            Donate Now
          </a>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default Hero;
