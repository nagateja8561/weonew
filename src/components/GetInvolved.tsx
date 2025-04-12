import React from 'react';
import { Heart, HandHelping, Calendar, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const ways = [
    {
      icon: <Heart className="h-12 w-12 text-eco-green" />,
      title: "Donate",
      description: "Support our work financially to help us expand our impact around the world.",
      action: "Donate Now",
      link: "/donate",
      isExternalLink: false
    },
    {
      icon: <HandHelping className="h-12 w-12 text-eco-green" />,
      title: "Volunteer",
      description: "Join our network of volunteers and contribute your time and skills to our mission.",
      action: "Become a Volunteer",
      link: "#volunteer",
      isExternalLink: false
    },
    {
      icon: <Calendar className="h-12 w-12 text-eco-green" />,
      title: "Attend Events",
      description: "Participate in our events, workshops, and fundraisers in your community.",
      action: "See Events",
      link: "#events",
      isExternalLink: false
    },
    {
      icon: <Share2 className="h-12 w-12 text-eco-green" />,
      title: "Spread the Word",
      description: "Share our message and raise awareness about environmental conservation.",
      action: "Share Now",
      link: "#share",
      isExternalLink: false
    }
  ];

  return (
    <section id="get-involved" className="section bg-white">
      <div className="container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-eco-green mb-4">Get Involved</h2>
          <p className="text-lg max-w-3xl mx-auto text-eco-gray">
            There are many ways you can contribute to our mission. Every action, big or small, helps create a healthier planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index} 
              className="bg-eco-beige p-8 rounded-lg text-center animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">{way.icon}</div>
              <h4 className="mb-3 text-eco-green">{way.title}</h4>
              <p className="mb-4 text-eco-gray">{way.description}</p>
              {way.isExternalLink ? (
                <a 
                  href={way.link} 
                  className="inline-block bg-eco-green text-white font-medium px-4 py-2 rounded-md hover:bg-eco-green-dark transition-colors"
                >
                  {way.action}
                </a>
              ) : (
                <Link 
                  to={way.link} 
                  className="inline-block bg-eco-green text-white font-medium px-4 py-2 rounded-md hover:bg-eco-green-dark transition-colors"
                >
                  {way.action}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
