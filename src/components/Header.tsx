'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Infinity as InfinityIcon, LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') {
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
  }, [pathname]);

  // Handle scrolling to contact section after navigation to home page
  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  const handleLinkClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, []);

  const services = [
    { name: 'AI-Native Platforms', path: '/services/ai-native-platforms' },
    { name: 'Edge Systems', path: '/services/edge-systems' },
    { name: 'Enterprise Solutions', path: '/services/enterprise-solutions' },
    { name: 'Data & AI Engineering', path: '/services/data-ai-engineering' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-black hover:scale-105 transition-transform duration-200 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="SevenX Global Logo" 
              className="h-10 w-auto hover:scale-110 transition-all duration-300"
            />
            <span className="text-2xl font-bold">
              Seven<span className="text-teal">X</span> Global
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 relative"
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {pathname === '/' ? (
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
                href="/"
                onClick={handleLinkClick}
                passHref
              >
                <a 
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-teal"></span>
                </a>
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
                      href={service.path}
                      onClick={handleLinkClick}
                      passHref
                    >
                      <a 
                        onClick={handleLinkClick}
                        className="block px-6 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
                      >
                        {service.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/stack"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Stack
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-purple"></span>
              </a>
            </Link>
            <Link
              href="/clients"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Clients
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-sky"></span>
              </a>
            </Link>
            
            <a
              href="https://blog.sevenx.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-rust"></span>
            </a>
            
            <Link
              href="/careers"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-golden"></span>
              </a>
            </Link>
            
            <Link
              href={pathname === '/' ? '#contact' : '/#contact'}
              onClick={handleContactClick}
              passHref
            >
              <a 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-black transition-all duration-300 relative group hover:scale-105"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-sky"></span>
              </a>
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
        } bg-white rounded-b-lg border-t border-gray-100`}>
          <nav className="pt-4 pb-2 space-y-2">
            {pathname === '/' ? (
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
                href="/"
                onClick={handleLinkClick}
                passHref
              >
                <a 
                  onClick={handleLinkClick}
                  className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                >
                  Home
                </a>
              </Link>
            )}
            
            <div className="py-2">
              <div className="py-2 text-gray-700 font-medium text-sm uppercase tracking-wider">Services</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.path}
                  onClick={handleLinkClick}
                  passHref
                >
                  <a 
                    onClick={handleLinkClick}
                    className="block py-2 pl-4 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </Link>
              ))}
            </div>
            
            <Link
              href="/stack"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Stack
              </a>
            </Link>
            <Link
              href="/clients"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Clients
              </a>
            </Link>
            
            <a
              href="https://blog.sevenx.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              Blogs
            </a>
            
            <Link
              href="/careers"
              onClick={handleLinkClick}
              passHref
            >
              <a 
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Careers
              </a>
            </Link>
            {pathname === '/' && (
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
              >
                Contact
              </a>
            )}
            {pathname !== '/' && (
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                passHref
              >
                <a 
                  onClick={handleLinkClick}
                  className="block py-2 text-gray-700 hover:text-black transition-colors duration-200"
                >
                  Contact
                </a>
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