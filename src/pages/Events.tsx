import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, MapPin, Clock, Users, ChevronRight } from 'lucide-react';

const Events = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for active tab (upcoming or past events)
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tree Planting Drive",
      date: "2023-06-15",
      time: "09:00 AM - 12:00 PM",
      location: "Central Park, Mumbai",
      description: "Join us for a community tree planting drive. We'll be planting 500 saplings to increase green cover in the city. All tools and saplings will be provided.",
      image: "https://images.unsplash.com/photo-1708593343700-a101f8fe4d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 120,
      category: "Conservation",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Beach Cleanup",
      date: "2023-06-22",
      time: "08:00 AM - 11:00 AM",
      location: "Juhu Beach, Mumbai",
      description: "Help us clean up Juhu Beach and protect marine life. We'll be collecting plastic waste and other debris. Gloves and bags will be provided.",
      image: "https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 85,
      category: "Cleanup",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Environmental Workshop",
      date: "2023-07-05",
      time: "02:00 PM - 05:00 PM",
      location: "Community Center, Mumbai",
      description: "Learn about sustainable living practices and how to reduce your carbon footprint. The workshop includes hands-on activities and take-home materials.",
      image: "https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 45,
      category: "Education",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Wildlife Photography Exhibition",
      date: "2023-07-15",
      time: "10:00 AM - 06:00 PM",
      location: "Art Gallery, Mumbai",
      description: "View stunning wildlife photography from local and international photographers. Proceeds from the exhibition will support our wildlife conservation projects.",
      image: "https://images.unsplash.com/photo-1728467100846-a658a53e0939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 200,
      category: "Awareness",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Eco-Friendly Craft Workshop",
      date: "2023-05-20",
      time: "11:00 AM - 02:00 PM",
      location: "Craft Center, Mumbai",
      description: "Learn to create beautiful crafts using recycled materials. Perfect for families and individuals interested in sustainable art.",
      image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 30,
      category: "Workshop",
      status: "past"
    },
    {
      id: 6,
      title: "Environmental Film Screening",
      date: "2023-05-10",
      time: "06:00 PM - 09:00 PM",
      location: "Cinema Hall, Mumbai",
      description: "Screening of award-winning environmental documentaries followed by a panel discussion with environmental experts.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      attendees: 150,
      category: "Awareness",
      status: "past"
    }
  ];

  // Filter events based on active tab
  const filteredEvents = events.filter(event => event.status === activeTab);

  // Format date for display
  const formatDate = (dateString) => {
    const options = { weekday: 'long' as const, year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582685177366-aacff47c7a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Environmental Events
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Join us at our upcoming events and make a difference for our planet.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16">
        <div className="container">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === 'upcoming'
                    ? 'bg-eco-green text-white'
                    : 'bg-white text-eco-gray border border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === 'past'
                    ? 'bg-eco-green text-white'
                    : 'bg-white text-eco-gray border border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>
          
          {/* Events Calendar */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-eco-green text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-eco-green mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-eco-blue mr-2 mt-0.5" />
                      <span className="text-eco-gray">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-eco-blue mr-2 mt-0.5" />
                      <span className="text-eco-gray">{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-eco-blue mr-2 mt-0.5" />
                      <span className="text-eco-gray">{event.location}</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-eco-blue mr-2 mt-0.5" />
                      <span className="text-eco-gray">{event.attendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-eco-gray mb-4 line-clamp-3">{event.description}</p>
                  <Link 
                    to={`/events/${event.id}`} 
                    className="inline-flex items-center text-eco-blue hover:text-eco-green"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-eco-green mb-2">No {activeTab} events found</h3>
              <p className="text-eco-gray">
                {activeTab === 'upcoming' 
                  ? "Check back soon for new events!" 
                  : "Past events will be displayed here."}
              </p>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-16 bg-eco-beige rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-eco-green mb-4">Stay Updated</h3>
            <p className="text-eco-gray mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, volunteer opportunities, and environmental news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eco-green"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events; 