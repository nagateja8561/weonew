import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [activeProgram, setActiveProgram] = useState<any>(null);
  
  const programs = [
    {
      id: 'forest-conservation',
      title: "Forest Conservation",
      shortDescription: "Protecting and restoring forests to combat deforestation and preserve biodiversity.",
      longDescription: "Our Forest Conservation program focuses on protecting and restoring forests worldwide. We work with local communities, governments, and organizations to combat deforestation, preserve biodiversity, and promote sustainable forest management practices. Through reforestation initiatives, protected area establishment, and community-based conservation, we aim to ensure the long-term health of forest ecosystems.",
      color: "bg-eco-green-light",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      stats: [
        { label: "Acres Protected", value: "2.5M+" },
        { label: "Trees Planted", value: "1.2M+" },
        { label: "Communities Supported", value: "150+" }
      ],
      initiatives: [
        "Reforestation Projects",
        "Protected Area Management",
        "Community Forest Stewardship",
        "Wildlife Corridor Creation"
      ]
    },
    {
      id: 'clean-water',
      title: "Clean Water Initiatives",
      shortDescription: "Ensuring access to clean water while protecting marine and freshwater ecosystems.",
      longDescription: "Our Clean Water Initiatives program works to ensure access to clean water while protecting marine and freshwater ecosystems. We implement water conservation projects, develop sustainable water management systems, and protect watersheds from pollution. By working with communities and governments, we create solutions that balance human needs with environmental protection.",
      color: "bg-eco-blue-light",
      image: "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      stats: [
        { label: "Water Projects", value: "75+" },
        { label: "People Benefited", value: "500K+" },
        { label: "Watersheds Protected", value: "30+" }
      ],
      initiatives: [
        "Water Filtration Systems",
        "Watershed Protection",
        "Marine Conservation",
        "Water Education Programs"
      ]
    },
    {
      id: 'climate-action',
      title: "Climate Action",
      shortDescription: "Developing solutions to reduce carbon emissions and build climate resilience.",
      longDescription: "Our Climate Action program focuses on developing solutions to reduce carbon emissions and build climate resilience. We work with communities, businesses, and governments to implement renewable energy projects, promote energy efficiency, and develop adaptation strategies for climate impacts. Through education, advocacy, and direct action, we aim to create a more sustainable and resilient future.",
      color: "bg-eco-brown-light",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      stats: [
        { label: "Carbon Reduced", value: "50K+ tons" },
        { label: "Renewable Projects", value: "40+" },
        { label: "Communities Supported", value: "100+" }
      ],
      initiatives: [
        "Renewable Energy Implementation",
        "Carbon Reduction Strategies",
        "Climate Education",
        "Resilience Planning"
      ]
    },
    {
      id: 'sustainable-agriculture',
      title: "Sustainable Agriculture",
      shortDescription: "Promoting farming practices that protect soil health and reduce environmental impact.",
      longDescription: "Our Sustainable Agriculture program promotes farming practices that protect soil health and reduce environmental impact. We work with farmers to implement regenerative agriculture techniques, reduce chemical inputs, and improve soil health. Through education, training, and direct support, we help create agricultural systems that are both productive and environmentally sustainable.",
      color: "bg-eco-green-light",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      stats: [
        { label: "Farmers Supported", value: "1,000+" },
        { label: "Acres Converted", value: "25K+" },
        { label: "Training Sessions", value: "200+" }
      ],
      initiatives: [
        "Regenerative Farming",
        "Organic Certification",
        "Soil Health Programs",
        "Water Conservation"
      ]
    },
    {
      id: 'ocean-conservation',
      title: "Ocean Conservation",
      shortDescription: "Protecting marine ecosystems and promoting sustainable fisheries management.",
      longDescription: "Our Ocean Conservation program works to protect marine ecosystems and promote sustainable fisheries management. We implement marine protected areas, reduce plastic pollution, and support sustainable fishing practices. Through research, education, and direct action, we aim to ensure the health and sustainability of ocean ecosystems for future generations.",
      color: "bg-eco-blue-light",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      stats: [
        { label: "Marine Areas Protected", value: "1M+ acres" },
        { label: "Plastic Removed", value: "100+ tons" },
        { label: "Fisheries Supported", value: "50+" }
      ],
      initiatives: [
        "Marine Protected Areas",
        "Plastic Reduction",
        "Sustainable Fisheries",
        "Coral Reef Protection"
      ]
    },
    {
      id: 'urban-sustainability',
      title: "Urban Sustainability",
      shortDescription: "Creating greener cities through urban planning and nature-based solutions.",
      longDescription: "Our Urban Sustainability program focuses on creating greener cities through urban planning and nature-based solutions. We work with municipalities to implement green infrastructure, improve public transportation, and create urban green spaces. Through partnerships with local governments, businesses, and communities, we help create cities that are more sustainable, resilient, and livable.",
      color: "bg-eco-brown-light",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      stats: [
        { label: "Cities Supported", value: "25+" },
        { label: "Green Spaces Created", value: "100+" },
        { label: "Carbon Reduced", value: "10K+ tons" }
      ],
      initiatives: [
        "Green Infrastructure",
        "Public Transportation",
        "Urban Forests",
        "Waste Reduction"
      ]
    }
  ];

  useEffect(() => {
    if (programId) {
      const program = programs.find(p => p.id === programId);
      if (program) {
        setActiveProgram(program);
        // Scroll to top of page when a program is selected
        window.scrollTo(0, 0);
      } else {
        navigate('/programs');
      }
    }
  }, [programId, navigate]);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {activeProgram ? (
        // Single Program View
        <div>
          {/* Hero Section */}
          <div className="relative h-[50vh] w-full flex items-center justify-center text-white">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('${activeProgram.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="container relative z-10 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {activeProgram.title}
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
                {activeProgram.shortDescription}
              </p>
            </div>
          </div>
          
          {/* Program Content */}
          <div className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-eco-green mb-6">About This Program</h2>
                  <p className="text-eco-gray mb-8">
                    {activeProgram.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold text-eco-green mb-4">Key Initiatives</h3>
                  <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    {activeProgram.initiatives.map((initiative: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-eco-green rounded-full mr-3"></span>
                        <span className="text-eco-gray">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-eco-beige p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-eco-green mb-4">Get Involved</h3>
                    <p className="text-eco-gray mb-4">
                      You can support our {activeProgram.title} program by volunteering, donating, or spreading awareness about our initiatives.
                    </p>
                    <button 
                      onClick={handleContactClick}
                      className="btn-primary inline-block"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="bg-eco-beige p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-eco-green mb-4">Program Impact</h3>
                    <div className="space-y-4">
                      {activeProgram.stats.map((stat: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-eco-gray">{stat.label}</span>
                          <span className="font-bold text-eco-green">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-eco-green mb-4">Other Programs</h3>
                    <ul className="space-y-3">
                      {programs
                        .filter(p => p.id !== activeProgram.id)
                        .map(program => (
                          <li key={program.id}>
                            <Link 
                              to={`/programs/${program.id}`}
                              className="text-eco-blue hover:underline flex items-center"
                            >
                              {program.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // All Programs View
        <div className="pt-24 pb-16">
          <div className="container">
            <div className="mb-16 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-green mb-4">Our Programs</h1>
              <p className="text-lg max-w-3xl mx-auto text-eco-gray">
                We focus on critical environmental challenges through targeted initiatives that create lasting change.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div 
                  key={program.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
                >
                  <div className={`h-40 bg-cover bg-center`} style={{ backgroundImage: `url('${program.image}')` }}>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3 text-eco-green">{program.title}</h4>
                    <p className="text-eco-gray mb-4">{program.shortDescription}</p>
                    <Link 
                      to={`/programs/${program.id}`}
                      className="text-eco-blue font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Programs; 