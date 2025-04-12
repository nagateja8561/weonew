import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Policy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1652976327183-775e1c9ffe87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-eco-green mb-6">Introduction</h2>
              <p className="mb-6">
                At World Environment Organization (WEO), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="mb-6">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal information (such as name, email address, phone number)</li>
                <li>Donation information (such as payment details)</li>
                <li>Volunteer registration information</li>
                <li>Communication preferences</li>
                <li>Information you provide when contacting us</li>
              </ul>

              <h2 className="text-2xl font-bold text-eco-green mb-6">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Process your donations and send receipts</li>
                <li>Communicate with you about our programs and initiatives</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for processing your information</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Cookies</h2>
              <p className="mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Children's Privacy</h2>
              <p className="mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold text-eco-green mb-6">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>Email:</strong> info@weoindia.in</p>
                <p className="mb-2"><strong>Phone:</strong> +91 7075576601</p>
                <p><strong>Address:</strong> India</p>
              </div>

              <p className="text-sm text-gray-500 italic">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Policy; 