import React from 'react';
import { Leaf, Droplets, ThermometerSun, TreePine, Fish, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      id: 'forest-conservation',
      icon: <TreePine className="h-8 w-8" />,
      title: "Forest Conservation",
      description: "Protecting and restoring forests to combat deforestation and preserve biodiversity.",
      color: "bg-eco-green-light"
    },
    {
      id: 'clean-water',
      icon: <Droplets className="h-8 w-8" />,
      title: "Clean Water Initiatives",
      description: "Ensuring access to clean water while protecting marine and freshwater ecosystems.",
      color: "bg-eco-blue-light"
    },
    {
      id: 'climate-action',
      icon: <ThermometerSun className="h-8 w-8" />,
      title: "Climate Action",
      description: "Developing solutions to reduce carbon emissions and build climate resilience.",
      color: "bg-eco-brown-light"
    },
    {
      id: 'sustainable-agriculture',
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Agriculture",
      description: "Promoting farming practices that protect soil health and reduce environmental impact.",
      color: "bg-eco-green-light"
    },
    {
      id: 'ocean-conservation',
      icon: <Fish className="h-8 w-8" />,
      title: "Ocean Conservation",
      description: "Protecting marine ecosystems and promoting sustainable fisheries management.",
      color: "bg-eco-blue-light"
    },
    {
      id: 'urban-sustainability',
      icon: <Building className="h-8 w-8" />,
      title: "Urban Sustainability",
      description: "Creating greener cities through urban planning and nature-based solutions.",
      color: "bg-eco-brown-light"
    }
  ];

  return (
    <section id="programs" className="section bg-eco-beige">
      <div className="container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-eco-green mb-4">Our Programs</h2>
          <p className="text-lg max-w-3xl mx-auto text-eco-gray">
            We focus on critical environmental challenges through targeted initiatives that create lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02] animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("p-4 text-white", program.color)}>
                {program.icon}
              </div>
              <div className="p-6">
                <h4 className="mb-3 text-eco-green">{program.title}</h4>
                <p className="text-eco-gray">{program.description}</p>
                <Link 
                  to={`/programs/${program.id}`}
                  className="mt-4 inline-block text-eco-blue font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
