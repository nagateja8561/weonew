import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

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
      title: "Our Location",
      details: "H No- 8-3-231/A/11/1,Sri Krishna Nagar Main Road, Jubilee Hills,India, Hyderabad-500033"
    },
    {
      icon: <Phone className="h-6 w-6 text-eco-green" />,
      title: "Phone",
      details: "+91 7075576601"
    },
    {
      icon: <Mail className="h-6 w-6 text-eco-green" />,
      title: "Email",
      details: "info@weoindia.in"
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
                    {item.title === "Phone" ? (
                      <a href={`tel:${item.details.replace(/\s+/g, '')}`} className="text-eco-gray hover:text-eco-blue hover:underline">
                        {item.details}
                      </a>
                    ) : item.title === "Email" ? (
                      <a href={`mailto:${item.details}`} className="text-eco-gray hover:text-eco-blue hover:underline">
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-eco-gray">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61560845355012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition duration-300"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a 
                    href="https://www.instagram.com/weo.earth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-400 transition duration-300"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@WorldEnvironmentOrganization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-400 transition duration-300"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                  <a 
                    href="https://wa.me/7075576601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-lime-400 transition duration-300"
                  >
                    <FaWhatsapp className="text-xl" />
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
