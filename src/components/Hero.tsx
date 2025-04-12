import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1617184236360-66bd2e7217c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/logo.png" 
            alt="WEO Logo" 
            className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto rounded-2xl"
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          Protecting Our Planet For Future Generations
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-up opacity-90">
          World Environment Organization works<br className="hidden sm:block" />
          to create sustainable solutions that protect nature, combat climate change, and ensure a healthier planet for all.
        </p>
        <div className="flex justify-center animate-fade-up" style={{animationDelay: '200ms'}}>
          <Link 
            to="/volunteer" 
            className="btn-primary"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default Hero;
