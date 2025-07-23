import React from 'react';
import { ArrowRight, Infinity } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import HighlightOnScroll from './HighlightOnScroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <div className="mb-8 flex items-center justify-start space-x-2 text-gray-600">
          <span className="text-sm font-medium tracking-wider uppercase">We are</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight text-left">
          <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg hover:text-blue-400">8</span>
          <span className="hover:scale-110 inline-block transition-all duration-300 delay-75 cursor-pointer hover:drop-shadow-lg hover:text-blue-400">4</span>
          <span className="hover:scale-110 inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg hover:text-blue-400">8</span>
          <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-225 cursor-pointer hover:drop-shadow-lg">Labs</span>
        </h1>

        <div className="mb-8 flex items-center justify-start space-x-4 text-gray-600">
          <Infinity className="w-6 h-6 animate-pulse" />
          <span className="text-lg font-medium">HTTP/1.1 200 OK : Always ON for Businesses to build Intelligence</span>
          <Infinity className="w-6 h-6 animate-pulse" />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl leading-relaxed text-left">
          848Labs is a next-gen AI company turning real-world data into intelligent, Scalable voice agents, vision systems, and automation that <HighlightOnScroll className="font-semibold text-black">drive impact.</HighlightOnScroll>.
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), #9333ea)'}}></div>
            <span className="relative">
Experience AI That Sees, Speaks & Solves            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <span className="relative">
See it in Action            </span>
          </button>
        </div>

        <div className="mt-16 text-left">
          <p className="text-gray-500 text-sm mb-4">Scroll to discover our approach</p>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative hover:border-black transition-colors duration-300 cursor-pointer group">
            <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce group-hover:bg-black transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;