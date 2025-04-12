import React, { useEffect } from 'react';
import { FaHandHoldingHeart, FaGlobe, FaTree, FaUsers, FaBuilding } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, Users, Calendar, Share2, Leaf } from 'lucide-react';

const Donate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationMethods = [
    {
      title: 'Scan QR Code',
      description: 'Scan this QR code with your mobile payment app to make a donation.',
      image: '/qr-code.png',
      action: 'Scan Now',
      link: '#'
    },
    {
      title: 'Direct Bank Transfer',
      description: 'Transfer directly to our bank account using the details below.',
      details: [
        { label: 'Bank Name', value: 'Example Bank' },
        { label: 'Account Number', value: '1234 5678 9012 3456' },
        { label: 'Account Name', value: 'World Environment Organization' },
        { label: 'Swift Code', value: 'EXAMPLEXXX' }
      ],
      action: 'Copy Details',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 text-white">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Your contribution helps us create a sustainable future for generations to come.
          </p>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-16 bg-eco-beige">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* QR Code Donation */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 text-eco-green">Scan to Donate</h2>
              <p className="text-lg leading-relaxed text-eco-gray mb-6">
                Use your mobile device to scan the QR code below and make a
                donation conveniently.
              </p>
              <div className="w-56 h-56 mx-auto rounded-lg shadow-md overflow-hidden bg-white p-4">
                <img
                  src="/qr-code.png"
                  alt="Scan to Donate QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Direct Donation */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 text-eco-green">Direct Donation</h2>
              <p className="text-lg leading-relaxed text-eco-gray mb-6">
                Prefer to donate directly? Use the details below for bank
                transfers or direct payments.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-left">
                <p className="text-lg font-bold mb-2">Bank Details:</p>
                <p>Account Name: WORLD ENVIRONMENT ORGANIZATION</p>
                <p>Account Number: 053411100006001</p>
                <p>IFSC Code: UBIN0805343</p>
                <p>Branch: Somajiguda, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-eco-green">Ways to Support</h2>
            <p className="text-lg max-w-3xl mx-auto text-eco-gray">
              Choose the donation option that best suits your preferences and make a difference today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* One-time Donation */}
            <div className="bg-eco-beige rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <FaHandHoldingHeart className="text-4xl text-eco-green" />
                <div>
                  <h3 className="text-lg font-semibold text-eco-gray">One-time Donation</h3>
                  <p className="text-sm text-eco-gray">Make a single contribution to support our initiatives</p>
                </div>
              </div>
            </div>

            {/* Monthly Donation */}
            <div className="bg-eco-beige rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-4xl text-eco-green" />
                <div>
                  <h3 className="text-lg font-semibold text-eco-gray">Monthly Donation</h3>
                  <p className="text-sm text-eco-gray">Support us regularly with a monthly contribution</p>
                </div>
              </div>
            </div>

            {/* Project-specific Donation */}
            <div className="bg-eco-beige rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <FaTree className="text-4xl text-eco-green" />
                <div>
                  <h3 className="text-lg font-semibold text-eco-gray">Project-specific</h3>
                  <p className="text-sm text-eco-gray">Support specific environmental projects</p>
                </div>
              </div>
            </div>

            {/* Corporate Partnership */}
            <div className="bg-eco-beige rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <FaUsers className="text-4xl text-eco-green" />
                <div>
                  <h3 className="text-lg font-semibold text-eco-gray">Corporate Partnership</h3>
                  <p className="text-sm text-eco-gray">Partner with us for larger impact</p>
                </div>
              </div>
            </div>

            {/* CSR Initiative */}
            <div className="bg-eco-beige rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <FaBuilding className="text-4xl text-eco-green" />
                <div>
                  <h3 className="text-lg font-semibold text-eco-gray">CSR Initiative</h3>
                  <p className="text-sm text-eco-gray">Fulfill your CSR commitments through environmental projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate; 