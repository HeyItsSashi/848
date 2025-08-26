import React, { useState, useEffect } from 'react';
import { Menu, X, Infinity, ChevronDown, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <Infinity className="w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-stone-500" />
              <div className="absolute inset-0 w-10 h-10">
                <div className="w-1 h-1 bg-gray-600 rounded-full animate-infinity-dot"></div>
              </div>
            </div>
            <span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-stone-500"></span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-stone-500"></span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 relative">
            {location.pathname === '/' ? (
              <>
                {['About'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
                  </a>
                ))}
              </>
            ) : (
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-stone-500"></span>
              </Link>
            )}
            
            <Link
              to="/stack"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Stack
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-600"></span>
            </Link>
            <Link
              to="/careers"
              onClick={handleLinkClick}
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
            <Link
              to="/stack"
              onClick={handleLinkClick}
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Stack
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
    </header>
  );
};

export default Header;