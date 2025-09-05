import React from 'react';
import { RefreshCw, Brain, Target, ArrowRight } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            The Intelligence Loop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            In every intelligent system, there's a <HighlightOnScroll>loop</HighlightOnScroll>  input, analysis & feedback, output.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Arrow between first and second card */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[calc(33.33%-1rem)] hidden md:block z-10">
            <ArrowRight className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          {/* Arrow between second and third card */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[calc(66.66%-1rem)] hidden md:block z-10">
            <ArrowRight className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <RefreshCw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">Infinity</h3>
            <p className="text-gray-600">Continuous learning and adaptation through infinite potential and structured growth.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">Logic</h3>
            
            <p className="text-gray-600">Responsible, structured, human-aware AI that's explainable and sustainable.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">Infinity Again</h3>
            
            <p className="text-gray-600">Delivering outcomes with speed and confidence through continuous feedback loops.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;