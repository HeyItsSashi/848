import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Stack = () => {
  return (
    <section id="stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
           <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll> 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our foundation built on <HighlightOnScroll>purpose</HighlightOnScroll>, strategy, and culture that drives intelligent solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Purpose Stack */}
          <div className="bg-teal rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Target className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">Purpose Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
              Why & What for We Exist
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-teal underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  A world where every decision enriches human experience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-teal underline-offset-2 hover:scale-105 transition-all duration-300">Mission</span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Empower businesses to transform data into decisive intelligence.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-teal underline-offset-2 hover:scale-105 transition-all duration-300">Brand Promise</span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Data to Decisions — Intelligently.
                </p>
              </div>
            </div>
          </div>

          {/* Strategy Stack */}
          <div className="bg-purple rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Users className="w-5 h-5 text-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">Strategy Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
              How We Deliver Results
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">People</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Visionaries · Leaders · Executors
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">Process</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Repeatable. Reliable. Measurable
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">Technology</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Future-Ready · Innovative
                </p>
              </div>
            </div>
          </div>

          {/* Culture Stack */}
          <div className="bg-golden rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Heart className="w-5 h-5 text-golden" />
              </div>
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">Culture Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
              Values That Drive Us
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">Mindset First</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Well-Being · Merit that wins
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">Integrity Always</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Transparent and Explainable
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="hover:scale-105 transition-transform duration-300">Impact Forever</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"></span>
                </h4>
                <p className="text-white text-opacity-90 leading-relaxed">
                  Being a change agent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;