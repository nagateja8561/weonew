import React, { useEffect, useRef } from 'react';
import { Globe, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const values = [
    {
      icon: <Globe className="h-12 w-12 text-eco-green" />,
      title: "Global Impact",
      description: "We work in over 5 countries to implement sustainable solutions that benefit both people and the planet."
    },
    {
      icon: <Users className="h-12 w-12 text-eco-green" />,
      title: "Community Focus",
      description: "We empower local communities to become stewards of their environment through education and capacity building."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-eco-green" />,
      title: "Scientific Approach",
      description: "Our work is grounded in scientific research and evidence-based solutions for maximum effectiveness."
    }
  ];

  return (
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-eco-green mb-4">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-eco-gray">
            World Environment Organization is an environmental organization dedicated to protecting the planet's most vital natural resources and creating a sustainable future for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-eco-green mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We strive to empower communities and individuals by promoting environmental sustainability and innovation. Our mission is to build a world where progress is inclusive, impactful, and aligned with our planet's needs.
              </p>
            </div>
            <p>
              Since our founding in 1995, we've protected more than 1 million hectares of critical habitats, helped establish hundreds of marine conservation areas, and worked with communities to develop sustainable practices.
            </p>
          </div>
          <div className="h-80 rounded-lg overflow-hidden animate-on-scroll shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Environmental conservation" 
              className="w-full h-100 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-eco-beige p-8 rounded-lg text-center animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h4 className="mb-3 text-eco-green">{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
