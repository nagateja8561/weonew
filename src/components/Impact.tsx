import React, { useState, useEffect } from 'react';

const Impact = () => {
  const stats = [
    { value: 5, label: "Countries", suffix: "+" },
    { value: 1, label: "Million Hectares", suffix: "M" },
    { value: 50, label: "Conservation Projects", suffix: "+" },
    { value: 100, label: "Communities Supported", suffix: "+" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('impact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let startValue = 0;
      const endValue = stat.value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / endValue));
      
      const timer = setInterval(() => {
        startValue += 1;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = startValue;
          return newCounters;
        });
        
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, stepTime);
    });
  };

  return (
    <section id="impact" className="section bg-eco-green text-white">
      <div className="container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4">Our Impact</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            For nearly three decades, we've been creating positive change for the environment. Here's what we've accomplished together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/10 rounded-lg animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters[index]}
                {stat.suffix}
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-on-scroll">
            <h3 className="mb-4">Success Stories</h3>
            <p className="mb-4">
              From restoring coral reefs in the Pacific to protecting rainforests in South America, our work has demonstrable positive impacts on ecosystems and communities worldwide.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-eco-green font-medium px-6 py-3 rounded-md hover:bg-eco-beige transition-colors"
            >
              Read Our Stories
            </a>
          </div>
          <div className="h-80 rounded-lg overflow-hidden animate-on-scroll shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Environmental success story" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
