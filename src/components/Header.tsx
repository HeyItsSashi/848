import React, { useState, useEffect } from 'react';
import { Menu, X, Infinity, ChevronDown, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('848labs-authenticated');
    window.location.reload();
  };
  const industries = [
    {
      name: "Manufacturing",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Smart manufacturing and industrial automation"
    },
    {
      name: "Oil & Gas",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Energy sector optimization and monitoring"
    },
    {
      name: "Utilities",
      image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Power grid and utility management"
    },
    {
      name: "Financial Services",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Fintech and banking solutions"
    },
    {
      name: "Defense & Intelligence",
      image: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Security and defense systems"
    },
    {
      name: "Government",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Public sector digital transformation"
    },
    {
      name: "Life Sciences and Healthcare",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Healthcare innovation and medical technology"
    },
    {
      name: "Retail",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Retail analytics and customer experience"
    },
    {
      name: "Telecommunications",
      image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Network optimization and connectivity"
    },
    {
      name: "Transportation",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Smart mobility and logistics"
    }
  ];

  const handleContactClick = (e) => {
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
  };

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

  const handleCareersClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-black hover:scale-105 transition-transform duration-200 cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center group">
              <Infinity className="w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{color: 'rgba(59, 130, 246, 0.5)'}} />
              <div className="absolute inset-0 w-10 h-10">
                <div className="w-1 h-1 bg-gray-600 rounded-full animate-infinity-dot"></div>
              </div>
            </div>
            <span>
              848Labs
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 relative">
            {location.pathname === '/' ? (
              <>
                {['About'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
                  </a>
                ))}
                
                <div 
                  className="relative"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105">
                    <span>Industries</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
                  </button>
                  
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                    isIndustriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[1100px] mx-auto">
                      <div className="grid grid-cols-5 gap-6">
                        {industries.map((industry, index) => (
                          <div
                            key={index}
                            className="text-center p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                          >
                            <div className="mb-2 overflow-hidden rounded-lg">
                              <img 
                                src={industry.image} 
                                alt={industry.name}
                                className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors duration-300 text-xs">
                              {industry.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/services"
                  onClick={handleScrollToTop}
                  className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
                </Link>
                
              </>
            ) : (
              <Link
                to="/"
                onClick={handleScrollToTop}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
              </Link>
            )}
            
            <Link
              to="/stack"
              onClick={handleScrollToTop}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
            </Link>
            <Link
              to="/careers"
              onClick={handleCareersClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
            </Link>
            
            <Link
              to={location.pathname === '/' ? '#contact' : '/#contact'}
              onClick={handleContactClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
            </Link>
            
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
        }`}>
          <nav className="pt-4 pb-2 space-y-2">
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#industries"
                  className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </a>
              </>
            ) : (
              <Link
                to="/"
                onClick={handleScrollToTop}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Home
              </Link>
            )}
            <Link
              to="/stack"
              onClick={handleScrollToTop}
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Stack
            </Link>
            <Link
              to="/careers"
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              onClick={handleCareersClick}
            >
              Careers
            </Link>
            {location.pathname === '/' && (
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            )}
            {location.pathname !== '/' && (
              <Link
                to="/#contact"
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
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
    </header>
  );
};

export default Header;