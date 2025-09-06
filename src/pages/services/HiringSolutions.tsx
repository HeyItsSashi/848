import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, GraduationCap, BrainCircuit, Target, Crown, Briefcase, Award } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const HiringSolutions = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-sky/10 via-golden/5 to-purple/10">
      {/* Back Button - Right Side */}
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

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky/20 via-golden/10 to-purple/15 relative overflow-hidden mb-20 -mx-6 px-6">
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-400 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Icon */}
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-6 shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">Hiring</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Solutions</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <GraduationCap className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">From Campus to Enterprise Excellence</span>
              <GraduationCap className="w-6 h-6 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              Deploy trained AI team members from college to campus with 
              <span className="font-semibold text-black"> cost optimization and expert talent acquisition</span> across all levels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Explore Hiring Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>View Talent Pool</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hiring Categories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Complete Hiring Solutions</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-sky cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI-Trained Campus Talent
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Fresh graduates trained in AI technologies and ready to contribute from day one. Cost-effective talent that brings energy and latest academic insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-sky rounded-full"></div>
                  <span>AI/ML engineering graduates</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-sky rounded-full"></div>
                  <span>Data science and analytics specialists</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-sky rounded-full"></div>
                  <span>Software development talent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Senior Tech & Leadership Roles
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Experienced professionals and technical leaders who can drive innovation, mentor teams, and deliver complex solutions at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Senior engineers and architects</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Technical leads and managers</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Product and engineering directors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-golden cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <Crown className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Permanent FTE & Executive Hiring
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Full-time permanent placements and C-suite executive searches for organizations looking to build long-term strategic capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Permanent FTE placements</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>C-suite executive search</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Strategic leadership roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Hiring Solutions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Extended Hiring Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal/10 to-teal/5 border-2 border-teal/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-8 h-8 text-teal" />
                <h3 className="text-2xl font-bold text-black">Contract & Project-Based Hiring</h3>
              </div>
              <p className="text-gray-700 mb-4">Flexible talent solutions for specific projects and time-bound requirements.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Short-term AI project specialists</li>
                <li>• Remote and hybrid work arrangements</li>
                <li>• Consultant and advisory roles</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple/10 to-purple/5 border-2 border-purple/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Award className="w-8 h-8 text-purple" />
                <h3 className="text-2xl font-bold text-black">Specialized Skill Acquisition</h3>
              </div>
              <p className="text-gray-700 mb-4">Access niche expertise and specialized skill sets for cutting-edge technology implementations.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• AI research and development experts</li>
                <li>• Domain-specific technical specialists</li>
                <li>• Innovation and transformation leaders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-sky via-golden to-purple rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI-Powered Team?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether you need fresh AI talent from campus or seasoned executives, we deliver the right people to drive your intelligent transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/#contact"
                onClick={handleScrollToTop}
                className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
              >
                <span>Start Hiring Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringSolutions;