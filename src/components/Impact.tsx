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
            <h3 className="mb-4">Our Commitment</h3>
            <p className="mb-4">
              We are dedicated to creating measurable environmental impact through our conservation efforts. Our projects focus on ecosystem restoration, biodiversity protection, and sustainable resource management. By working with local communities and leveraging scientific expertise, we ensure that our interventions are effective and sustainable.
            </p>
            <p>
              Our impact extends beyond environmental metrics to include social benefits such as improved livelihoods, enhanced community resilience, and increased environmental awareness. We believe that lasting environmental change requires both ecological restoration and community engagement.
            </p>
          </div>
          <div className="h-80 rounded-lg overflow-hidden animate-on-scroll shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1566201902016-fb52a7730f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
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
