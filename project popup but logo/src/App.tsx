import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navigation, Baby, FileText, Heart, Brain, Camera, Menu, X, Sparkles, Shield, Users, Zap } from 'lucide-react';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ProductPage from './components/ProductPage';
import AboutUs from './components/AboutUs';
import EmailModal from './components/EmailModal';

function MainContent() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    return localStorage.getItem('cookieConsent') === 'accepted';
  });
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookieConsent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50">
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}>
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
                onClick={scrollToFooter}
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
                scrollToFooter();
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
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 via-pink-100/30 to-purple-100/50"></div>
        {/* AI Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-500 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-pink-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Bringing medical science to life with AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of family healthcare with AI-powered insights that make health management simple, 
              accessible, and personalized for every family member.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => navigate('/products')}
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition duration-300"
              >
                Discover More
              </button>
            </div>
          </div>
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1200&q=80"
              alt="Happy family with children using digital health technology"
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Health Solutions
            </h2>
            <p className="mt-4 text-gray-600">Revolutionary health management tools powered by advanced AI technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Baby className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Baby Health App</h3>
              <p className="text-gray-600 mb-6">Advanced AI technology that analyzes baby health through stool recognition, providing instant insights for parents.</p>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Camera className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">AI Vision Analysis</span>
                </div>
                <p className="text-sm text-gray-700">Instant health assessment through image recognition</p>
              </div>
            </div>
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileText className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Medical Report Analyzer</h3>
              <p className="text-gray-600 mb-6">AI that interprets complex medical reports into easy-to-understand insights, making healthcare more accessible.</p>
              <div className="bg-gradient-to-r from-purple-100 to-teal-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Brain className="h-6 w-6 text-purple-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Natural Language AI</span>
                </div>
                <p className="text-sm text-gray-700">Medical terminology simplified instantly</p>
              </div>
            </div>
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Heart className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Hypertension Management</h3>
              <p className="text-gray-600 mb-6">AI-driven dietary guidance and lifestyle recommendations for effective blood pressure management.</p>
              <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Zap className="h-6 w-6 text-teal-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Real-time Monitoring</span>
                </div>
                <p className="text-sm text-gray-700">Personalized health recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50/50 via-pink-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Our AI Technology
            </h2>
            <p className="mt-4 text-gray-600">Advanced artificial intelligence making healthcare more accessible</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl relative group hover:shadow-lg transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Camera className="h-6 w-6 text-teal-500 mr-2" />
                  Image Recognition
                </h3>
                <p className="text-gray-600">Our AI analyzes images with medical-grade accuracy, providing instant health insights.</p>
                <Sparkles className="absolute top-4 right-4 h-5 w-5 text-teal-500/30" />
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl relative group hover:shadow-lg transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-purple-500 mr-2" />
                  Privacy Protection
                </h3>
                <p className="text-gray-600">Advanced encryption and security measures to protect your family's health data.</p>
                <Sparkles className="absolute top-4 right-4 h-5 w-5 text-purple-500/30" />
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl relative group hover:shadow-lg transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-pink-500 mr-2" />
                  Family-Centric Design
                </h3>
                <p className="text-gray-600">Intuitive interfaces designed for all family members, from parents to grandparents.</p>
                <Sparkles className="absolute top-4 right-4 h-5 w-5 text-pink-500/30" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80"
                alt="Family with children using health technology"
                className="rounded-2xl shadow-lg relative z-10 transform -rotate-3"
              />
              {/* AI Processing Indicators */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-6">
                About Teal Canoe Holdings Limited
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Teal Canoe is dedicated to breaking down barriers in scientific health knowledge and providing 
                AI-powered solutions that are universally beneficial, scientifically sound, and affordable. 
                We envision a world where everyone, regardless of background, can lead a healthier, more 
                scientifically informed life.
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300"
              >
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80"
                alt="Family with children enjoying healthy lifestyle"
                className="rounded-2xl shadow-lg relative z-10 transform -rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-gradient-to-b from-white to-teal-50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Navigation className="h-8 w-8 text-teal-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                  Teal Canoe Holdings Limited
                </span>
              </div>
              <p className="mt-4 text-gray-600">
                Empowering families through AI-driven health solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-600 hover:text-teal-600 transition">About Us</a></li>
                <li><a href="#product" className="text-gray-600 hover:text-teal-600 transition">Our Product</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal & Privacy</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-teal-600 transition">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-600 hover:text-teal-600 transition">Terms of Service</Link></li>
                <li>
                  <button 
                    onClick={() => setCookieConsent(false)} 
                    className="text-gray-600 hover:text-teal-600 transition"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">contact@tealcanoe.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 Teal Canoe Holdings Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-600 text-sm md:text-base">
              <p>
                We use cookies to enhance your experience and analyze our website traffic. 
                By clicking "Accept", you consent to our use of cookies. For more information, 
                please read our{' '}
                <Link to="/privacy-policy" className="text-teal-600 hover:text-teal-700 underline">Privacy Policy</Link>.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300"
              >
                Accept
              </button>
              <button
                onClick={() => setCookieConsent(true)}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;