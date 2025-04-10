import React, { useState } from 'react';
import { Baby, Brain, Heart, Navigation, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailModal from './EmailModal';

const ProductPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50 pb-20">
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
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
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">Contact Us</a>
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
            <a href="#contact" className="block text-gray-600 hover:text-teal-600">Contact Us</a>
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 via-pink-100/30 to-purple-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover our suite of AI-powered health applications designed to make healthcare 
            more accessible, understandable, and effective for every family member.
          </p>
        </div>
      </section>

      {/* Baby Health App Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1200&q=80"
                alt="Mother with baby using health app"
                className="rounded-2xl shadow-lg relative z-10 transform -rotate-3"
              />
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Baby className="h-8 w-8 text-pink-500 mr-3" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  AI-Powered Baby Health Insights
                </h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our revolutionary app uses advanced AI image recognition to analyze baby stool patterns, 
                providing instant insights into your infant's gut health. Perfect for new parents seeking 
                peace of mind and early detection of potential health concerns.
              </p>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-pink-500 rounded-full mr-3"></div>
                    Instant stool analysis through photo recognition
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-pink-500 rounded-full mr-3"></div>
                    Early warning system for digestive issues
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-pink-500 rounded-full mr-3"></div>
                    Personalized feeding and care recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Report Analyzer Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-purple-500 mr-3" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
                  Understand Your Medical Reports with AI
                </h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Transform complex medical reports into clear, actionable insights with our AI-powered 
                analyzer. Perfect for anyone looking to better understand their health status and make 
                informed decisions about their wellbeing.
              </p>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Instant medical terminology translation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Trend analysis across multiple reports
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Personalized health recommendations
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Family reviewing medical reports together"
                className="rounded-2xl shadow-lg relative z-10 transform -rotate-3"
              />
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hypertension Assistant Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-orange-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=1200&q=80"
                alt="Multi-generational family enjoying meal together"
                className="rounded-2xl shadow-lg relative z-10 transform -rotate-3"
              />
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-teal-500 mr-3" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                  Smarter Eating for a Healthier Heart
                </h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Take control of your blood pressure through AI-powered dietary guidance. Our app provides 
                personalized nutrition recommendations and lifestyle adjustments tailored to your specific 
                health needs.
              </p>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mr-3"></div>
                    Personalized meal planning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mr-3"></div>
                    Real-time nutrition guidance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-teal-500 rounded-full mr-3"></div>
                    Blood pressure tracking and insights
                  </li>
                </ul>
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

export default ProductPage;