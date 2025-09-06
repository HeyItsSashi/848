import React from 'react';
import { Building2, Heart, Star, Users, Target, Infinity } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';
import Contact from '../components/Contact';

export const Stack = () => (
  <div className="min-h-screen pt-20 bg-white relative">
    <ParticleBackground />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <section className="text-left mb-20 pt-8">
        <div className="flex items-center space-x-3 mb-8">
          <Infinity className="w-8 h-8 text-gray-400" />
          <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Our Foundation</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 leading-tight">
          <HighlightOnScroll className="font-semibold">SevenX Stack</HighlightOnScroll>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
          More than technology. More than process. A complete foundation for building intelligent solutions.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-teal rounded-3xl p-8 hover:shadow-xl transition-all duration-500 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold">Purpose Stack</h3>
          </div>
          <div className="space-y-4">
            <div><h4 className="font-bold mb-2">Vision</h4><p>A world where every decision enriches human experience.</p></div>
            <div><h4 className="font-bold mb-2">Mission</h4><p>Empower businesses to transform data into decisive intelligence.</p></div>
          </div>
        </div>
        
        <div className="bg-purple rounded-3xl p-8 hover:shadow-xl transition-all duration-500 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold">Strategy Stack</h3>
          </div>
          <div className="space-y-4">
            <div><h4 className="font-bold mb-2">People</h4><p>Visionaries · Leaders · Executors</p></div>
            <div><h4 className="font-bold mb-2">Process</h4><p>Repeatable. Reliable. Measurable</p></div>
          </div>
        </div>
        
        <div className="bg-golden rounded-3xl p-8 hover:shadow-xl transition-all duration-500 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold">Culture Stack</h3>
          </div>
          <div className="space-y-4">
            <div><h4 className="font-bold mb-2">Mindset First</h4><p>Well-Being · Merit that wins</p></div>
            <div><h4 className="font-bold mb-2">Integrity Always</h4><p>Transparent and Explainable</p></div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
  </div>
);

export const Careers = () => (
  <div className="min-h-screen pt-20 bg-white relative">
    <ParticleBackground />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <section className="text-left mb-20 pt-8">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Careers at SevenX Global</h1>
        <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
          We don't just hire. We build with <HighlightOnScroll>people who build</HighlightOnScroll>.
        </p>
      </section>

      <div className="bg-black rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Build With Us?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Email us at <span className="font-bold">join@sevenx.global</span> with what excites you and where you want to make an impact.
        </p>
      </div>
    </div>
    <Contact />
  </div>
);

export const Clients = () => (
  <div className="min-h-screen pt-20 bg-white relative">
    <ParticleBackground />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <section className="text-left mb-20 pt-8">
        <div className="flex items-center space-x-3 mb-8">
          <Building2 className="w-8 h-8 text-gray-400" />
          <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Client Success Stories</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
          <HighlightOnScroll className="font-semibold">Transforming Industries</HighlightOnScroll>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          From startups to enterprises, we've partnered with organizations across industries to deliver 
          <span className="font-semibold text-black"> measurable results through intelligent solutions</span>.
        </p>
      </section>

      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 text-lg mb-6">
            <Star className="w-6 h-6 text-golden" />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl">Ready to Join Our Success Stories?</span>
            <Star className="w-6 h-6 text-golden" />
          </div>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
            Whether you're looking to streamline operations, enhance customer experience, or drive innovation, we're here to transform your vision into measurable results.
          </p>
        </div>
      </div>
    </div>
    <Contact />
  </div>
);