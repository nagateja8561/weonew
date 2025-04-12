
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (in a real app, you'd handle this differently)
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-eco-green" />,
      title: "Our Headquarters",
      details: "123 Green Street, Earth City, Global 12345"
    },
    {
      icon: <Phone className="h-6 w-6 text-eco-green" />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-6 w-6 text-eco-green" />,
      title: "Email",
      details: "info@ecoglobal.org"
    }
  ];

  return (
    <section id="contact" className="section bg-eco-beige">
      <div className="container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-eco-green mb-4">Contact Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-eco-gray">
            Have questions or want to learn more about our work? Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 animate-on-scroll">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-eco-green mb-6">Get In Touch</h3>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start mb-6">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-eco-gray">{item.details}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Social media icons placeholders */}
                  <a href="#" className="bg-eco-green text-white p-2 rounded-full hover:bg-eco-green-dark transition-colors">
                    F
                  </a>
                  <a href="#" className="bg-eco-green text-white p-2 rounded-full hover:bg-eco-green-dark transition-colors">
                    T
                  </a>
                  <a href="#" className="bg-eco-green text-white p-2 rounded-full hover:bg-eco-green-dark transition-colors">
                    I
                  </a>
                  <a href="#" className="bg-eco-green text-white p-2 rounded-full hover:bg-eco-green-dark transition-colors">
                    L
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-eco-green mb-6">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Question</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-eco-green text-white font-medium px-6 py-3 rounded-md hover:bg-eco-green-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
