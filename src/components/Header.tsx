import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Infinity as InfinityIcon, LogOut, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAICallerOpen, setIsAICallerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('848labs-authenticated');
    window.location.reload();
  }, []);

  const handleContactClick = useCallback((e) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      // The scrolling will be handled by useEffect after navigation
      return; // Let the Link handle navigation
    } else {
      // If on home page, prevent default and scroll to contact
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  // Handle scrolling to contact section after navigation to home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleLinkClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAICallerOpen(false);
  }, []);

  const handleAICallerClick = useCallback(() => {
    setIsAICallerOpen(true);
    setIsMenuOpen(false);
  }, []);

  const closeAICaller = useCallback(() => {
    setIsAICallerOpen(false);
  }, []);

  const services = [
    { name: 'AI-Native Platforms', path: '/services/ai-native-platforms' },
    { name: 'Edge Systems', path: '/services/edge-systems' },
    { name: 'Enterprise Solutions', path: '/services/enterprise-solutions' },
    { name: 'Data & AI Engineering', path: '/services/data-ai-engineering' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-black hover:scale-105 transition-transform duration-200 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-auto hover:scale-110 transition-all duration-300"
            />
          </Link>          
          <nav className="hidden md:flex items-center space-x-8 relative"
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-teal"></span>
                </a>
              </>
            ) : (
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-teal"></span>
              </Link>
            )}
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <button
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105 flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-purple"></span>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleLinkClick}
                      className="block px-6 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/stack"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-purple"></span>
            </Link>
            <Link
              to="/clients"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-sky"></span>
            </Link>
            
           
            
            <Link
              to="/careers"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-golden"></span>
            </Link>
            
            <Link
              to={location.pathname === '/' ? '#contact' : '/#contact'}
              onClick={handleContactClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-sky"></span>
            </Link>
            <button
              onClick={handleAICallerClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105 flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600"
            >
              <Phone className="w-4 h-4" />
              <span>Talk to Riya Now!</span>
            </button>
            
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 relative group hover:scale-105 flex items-center space-x-1"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white rounded-b-lg border-t border-gray-100`}>
          <nav className="pt-4 pb-2 space-y-2">
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                >
                  About
                </a>
              </>
            ) : (
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Home
              </Link>
            )}
            
            <div className="py-2">
              <div className="py-2 text-gray-700 font-medium text-sm uppercase tracking-wider">Services</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={handleLinkClick}
                  className="block py-2 pl-4 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/stack"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Stack
            </Link>
            <Link
              to="/clients"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Case Studies
            </Link>
            
            
            
            <Link
              to="/careers"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Careers
            </Link>
            {location.pathname === '/' && (
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Contact
              </a>
            )}
            {location.pathname !== '/' && (
              <Link
                to="/#contact"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Contact
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
      
      {/* AI Caller Modal */}
      {isAICallerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto text-center relative animate-fadeInUp shadow-2xl">
            <button
              onClick={closeAICaller}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* AI Avatar */}
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-500">R</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">Hi! I'm Riya 👋</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm your AI assistant at Acantix. I can help you learn about our services, answer questions about AI solutions, or connect you with our team.
            </p>
            
            {/* Call Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Ready to chat!</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5" />
                <span>Start Voice Call</span>
              </button>
              
              <button className="w-full border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
                <span>Start Text Chat</span>
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Powered by Acantix AI • Available 24/7
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;