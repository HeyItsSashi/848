import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Lock, Globe } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const PrivacyPolicy = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-white relative">
      <Helmet>
        <title>Privacy Policy | Acantix Global</title>
        <meta name="description" content="Privacy Policy for Acantix Global. Learn how we collect, use, and protect your personal information and data privacy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, cookies, GDPR, data privacy, Acantix privacy" />
        <link rel="canonical" href="https://acantix.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Acantix Global" />
        <meta property="og:description" content="Learn how Acantix Global protects your privacy and handles your personal information." />
        <meta property="og:url" content="https://acantix.com/privacy-policy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Back Button */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 pt-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Legal</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Privacy Policy
          </h1>
          
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Effective Date:</strong> January 19, 2025
            </p>
            <p className="text-base text-gray-600">
              At Acantix Global, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, share, and protect information about you when you use our services.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Personal Information You Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Contact information (name, email address, phone number)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Company information and job titles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Messages and communications you send to us</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Resume and career-related information (for job applications)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Automatically Collected Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Device and browser information</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>IP address and location data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Website usage patterns and analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Service Delivery</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Provide and improve our AI solutions</li>
                <li>• Respond to your inquiries and requests</li>
                <li>• Process job applications and recruitment</li>
                <li>• Deliver customer support and technical assistance</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Business Operations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Analyze website usage and improve user experience</li>
                <li>• Send relevant business communications</li>
                <li>• Comply with legal obligations</li>
                <li>• Protect against fraud and security threats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">Information Sharing</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information in the following limited circumstances:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700"><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our business</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700"><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700"><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">Data Security</h2>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Encryption of data in transit and at rest</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Access controls and authentication</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Regular security assessments</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Employee training and confidentiality</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Your Privacy Rights</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-black mb-2">Access and Correction</h3>
              <p className="text-gray-700 text-sm">Request access to your personal information and correct any inaccuracies</p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-black mb-2">Deletion</h3>
              <p className="text-gray-700 text-sm">Request deletion of your personal information, subject to legal requirements</p>
            </div>
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-black mb-2">Opt-Out</h3>
              <p className="text-gray-700 text-sm">Unsubscribe from marketing communications at any time</p>
            </div>
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-black mb-2">Data Portability</h3>
              <p className="text-gray-700 text-sm">Request a copy of your data in a portable format</p>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Cookies and Tracking</h2>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-black mb-2">Types of Cookies We Use:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Essential:</strong> Required for website functionality</li>
                <li>• <strong>Analytics:</strong> Help us understand how visitors use our site</li>
                <li>• <strong>Functional:</strong> Remember your preferences and settings</li>
                <li>• <strong>Marketing:</strong> Deliver relevant content and measure campaign effectiveness</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
          
          <div className="bg-black rounded-xl p-8 text-white">
            <p className="text-lg mb-6">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Email</h3>
                <a href="mailto:ai@acantix.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  ai@acantix.com
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Address</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  30 N Gould St.<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-300">
                We will respond to your privacy-related requests within 30 days of receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-8">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-2xl font-bold text-black mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of significant changes by posting the updated policy on our website with a new effective date. 
              Your continued use of our services after such updates constitutes acceptance of the revised policy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;