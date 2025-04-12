import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Volunteer = () => {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    // Navigate to home page and scroll to contact section
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const volunteerOpportunities = [
    {
      title: "Field Conservation",
      description: "Join our field teams in forest restoration, wildlife monitoring, and marine conservation projects. Make a direct impact on the ground.",
      requirements: ["Physical fitness", "Willingness to work outdoors", "Team spirit"],
      commitment: "Weekends or 1-2 weeks"
    },
    {
      title: "Education & Outreach",
      description: "Help spread environmental awareness through workshops, school programs, and community events. Inspire the next generation of environmental stewards.",
      requirements: ["Good communication skills", "Passion for teaching", "Flexibility"],
      commitment: "2-4 hours per week"
    },
    {
      title: "Research Support",
      description: "Assist our research teams with data collection, analysis, and documentation. Contribute to scientific understanding of environmental challenges.",
      requirements: ["Attention to detail", "Basic research skills", "Reliability"],
      commitment: "Flexible, project-based"
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks, event planning, and coordination. Keep our organization running smoothly behind the scenes.",
      requirements: ["Organizational skills", "Computer proficiency", "Dependability"],
      commitment: "Regular weekly hours"
    },
    {
      title: "Digital & Media",
      description: "Create content, manage social media, or help with website updates. Use your digital skills to amplify our environmental message.",
      requirements: ["Creative skills", "Digital literacy", "Self-motivation"],
      commitment: "Flexible, remote possible"
    },
    {
      title: "Fundraising & Events",
      description: "Help organize fundraising events, donor outreach, and community gatherings. Support our mission by ensuring we have the resources to make change.",
      requirements: ["Event planning experience", "People skills", "Enthusiasm"],
      commitment: "Event-based, flexible"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Volunteer With Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Join our community of dedicated volunteers and make a real difference for our planet.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-eco-green mb-6">Why Volunteer With Us?</h2>
              <p className="text-eco-gray mb-6">
                Volunteering with our organization offers you a unique opportunity to contribute to meaningful environmental conservation efforts while gaining valuable experience and connecting with like-minded individuals. Our volunteers are the backbone of our mission, bringing passion, skills, and dedication to every project.
              </p>
              <p className="text-eco-gray mb-6">
                Whether you're a student looking to build experience, a professional wanting to give back, or someone passionate about environmental causes, we have opportunities that match your skills and interests. Our flexible volunteer programs allow you to contribute in ways that fit your schedule and expertise.
              </p>
              <p className="text-eco-gray mb-8">
                By volunteering with us, you'll gain hands-on experience in environmental conservation, develop new skills, expand your network, and most importantly, make a tangible impact on our planet's future.
              </p>
              
              <h3 className="text-xl font-bold text-eco-green mb-4">Volunteer Opportunities</h3>
              <div className="space-y-6">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-eco-beige p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-eco-green mb-2">{opportunity.title}</h4>
                    <p className="text-eco-gray mb-4">{opportunity.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-eco-green mb-2">Requirements:</h5>
                        <ul className="list-disc list-inside text-eco-gray">
                          {opportunity.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-eco-green mb-2">Time Commitment:</h5>
                        <p className="text-eco-gray">{opportunity.commitment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-eco-beige p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-eco-green mb-4">Ready to Get Started?</h3>
                <p className="text-eco-gray mb-4">
                  Email us or call us to request a volunteer application form. We'll send you the form based on your interests and skills. Our team will review your application and get back to you within 5 business days.
                </p>
                <button 
                  onClick={handleContactClick}
                  className="btn-primary inline-block w-full text-center"
                >
                  Contact Us
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-eco-green mb-4">Volunteer Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Gain hands-on experience in environmental conservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Develop new skills and expand your resume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Connect with like-minded individuals and professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Receive training and mentorship from our experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Make a tangible impact on environmental conservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-eco-green rounded-full mr-3 mt-2"></span>
                    <span className="text-eco-gray">Earn recognition and references for future opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Volunteer; 