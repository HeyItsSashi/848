import React from 'react';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 tracking-tight text-left">
          <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer">
            Seven<span className="text-teal">X</span>
          </span>
          <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 ml-2 sm:ml-4"> Global</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl leading-relaxed text-left">
          <span className="font-semibold text-black">SevenX Global</span> is a next-gen AI company turning real-world data into intelligent, scalable systems that <span className="font-semibold text-black">drive impact</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden w-full sm:w-auto justify-center sm:justify-start">
            <span>Experience Intelligence</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group border-2 border-stone-300 text-stone-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-gray-700 hover:text-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden w-full sm:w-auto justify-center">
            <span>See it in Action</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;