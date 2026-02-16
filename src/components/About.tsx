import React from 'react';
import { RefreshCw, Brain, Target, ArrowRight } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            AI Platform Development Methodology
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Our AI-native platform development follows three proven principles: continuous learning systems, intelligent data processing, and adaptive business outcomes that deliver measurable <HighlightOnScroll>ROI and competitive advantage</HighlightOnScroll>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Arrow between first and second card */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[calc(33.33%-1rem)] hidden md:block z-10">
            <ArrowRight className="w-8 h-8 text-teal hover:text-gray-600 transition-colors duration-300" />
          </div>
          
          {/* Arrow between second and third card */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[calc(66.66%-1rem)] hidden md:block z-10">
            <ArrowRight className="w-8 h-8 text-purple hover:text-gray-600 transition-colors duration-300" />
          </div>

          <div className="text-center group">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <RefreshCw className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-teal mb-3 sm:mb-4 transition-colors duration-300">Infinity</h3>
            <p className="text-sm sm:text-base text-gray-600">Continuous learning and adaptation through infinite potential and structured growth.</p>
          </div>

          <div className="text-center group">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-purple mb-3 sm:mb-4 transition-colors duration-300">Logic</h3>
            
            <p className="text-sm sm:text-base text-gray-600">Responsible, structured, human-aware AI that's explainable and sustainable.</p>
          </div>

          <div className="text-center group">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg cursor-pointer">
              <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-golden mb-3 sm:mb-4 transition-colors duration-300">Infinity Again</h3>
            
            <p className="text-sm sm:text-base text-gray-600">Delivering outcomes with speed and confidence through continuous feedback loops.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;