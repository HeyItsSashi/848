import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, Shield, Cog, TrendingUp, Globe, Lock, Bot, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const AINativePlatforms = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-teal/10 via-purple/5 to-golden/10">
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal/20 via-purple/10 to-golden/15 relative overflow-hidden mb-20 -mx-6 px-6">
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
              <Bot className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">AI-Native</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Platforms</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <Bot className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">Intelligence That Learns, Adapts & Evolves</span>
              <Bot className="w-6 h-6 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              Build platforms where AI isn't an add-on feature—it's the <span className="font-semibold text-black">foundation</span>. 
              Our AI-native systems think, learn, and evolve with your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Explore AI Platforms</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>See Case Studies</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Intelligence built from the ground up</p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative hover:border-black transition-colors duration-300 cursor-pointer group mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce group-hover:bg-black transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Categories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Complete Solution Suite</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-golden cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI Consulting & Solution Design
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Strategic consulting to design and implement AI-native architectures that align with your business goals and technical requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>AI strategy and roadmap development</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Technical architecture design</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Implementation planning and execution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-teal cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI Product Development
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                End-to-end development of AI-powered products that deliver intelligent user experiences and autonomous decision-making capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Custom AI application development</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Intelligent user interface design</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Machine learning model integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI System Modernization
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Transform legacy systems into intelligent, adaptive platforms that learn from data and improve performance over time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Legacy system AI integration</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Performance optimization with AI</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Continuous learning implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple via-teal to-golden rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Build AI-Native?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your business with platforms where AI isn't just a feature—it's the foundation for everything you build.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/#contact"
                onClick={handleScrollToTop}
                className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINativePlatforms;