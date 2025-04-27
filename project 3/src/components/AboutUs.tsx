import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Sparkles, Menu, X } from 'lucide-react';
import EmailModal from './EmailModal';
import ContactModal from './ContactModal';

const AboutUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      {/* Full-page background image with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
          alt="Serene lake with mountains"
          className="w-full h-full object-cover"
        />
        {/* Hero section overlay - darker and more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 to-transparent h-[60vh]"></div>
        {/* Main content overlay - gradual fade to lighter background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/85 to-teal-50/95"></div>
        {/* Blend overlay for richer image */}
        <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Navigation className="h-8 w-8 text-teal-600" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                  Teal Canoe Holdings Limited
                </h1>
                <p className="text-xs text-gray-600">Navigating Health with AI</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-teal-600 transition">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-teal-600 transition">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-teal-600 transition">About Us</Link>
              <button 
                onClick={() => setIsContactModalOpen(true)} 
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Contact Us
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/90 backdrop-blur-lg`}>
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-teal-600">Home</Link>
            <Link to="/products" className="block text-gray-600 hover:text-teal-600">Products</Link>
            <Link to="/about" className="block text-gray-600 hover:text-teal-600">About Us</Link>
            <button 
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-600 hover:text-teal-600"
            >
              Contact Us
            </button>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Teal Canoe Holdings Limited
            </h1>
            <p className="text-2xl text-white/95 drop-shadow">
              Navigating the future of healthcare with AI
            </p>
          </div>

          {/* Mission Statement Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-md p-12 rounded-3xl relative overflow-hidden border border-white/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              <div className="relative space-y-12 text-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  <span className="relative">
                    <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      A venture foundry
                    </span>
                    <Sparkles className="absolute -right-8 -top-6 h-6 w-6 text-teal-600/50" />
                  </span>
                </h2>
                
                <div className="space-y-8 text-lg md:text-xl leading-relaxed">
                  <p>
                    Our mission is to make scientifically sound, universally beneficial, and affordable health 
                    knowledge and support accessible to a broader audience.
                  </p>
                  
                  <p>
                    We envision a world where every individual can lead a healthier, more comfortable, more 
                    poised, and more scientifically informed life.
                  </p>
                  
                  <p>
                    Our aim goes beyond merely extending lifespans; we strive to enrich lives, infusing them 
                    with vitality and purpose.
                  </p>
                  
                  <p>
                    We believe that every ordinary person, regardless of their background, should have the equal 
                    opportunity to gaze upon the stars with wonder and aspiration.
                  </p>

                  <div className="pt-12 text-center space-y-4 relative">
                    <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    <p className="text-teal-600 font-semibold tracking-wide">Contact@tealcanoe.com</p>
                    <p className="text-gray-600">We are excited to work with you and grow together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 border-t border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 text-gray-600 text-sm">
            <span>&copy; 2025 Teal Canoe Holdings Limited. All rights reserved.</span>
            <span className="text-gray-300">|</span>
            <Link to="/privacy-policy" className="hover:text-teal-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms-of-service" className="hover:text-teal-600 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;