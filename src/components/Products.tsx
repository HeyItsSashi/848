import React from 'react';
import { Camera, BarChart3, CheckCircle, Stethoscope, Eye, Brain, Zap } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Products = () => {
  const products = [
   
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Vertical AI Apps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
            At <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll> , we are building intelligent, <HighlightOnScroll>industry-focused</HighlightOnScroll> engines powered by data and analytics transforming how businesses operate in their domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100 hover:border-blue-200 cursor-pointer hover:scale-105"
            >
              <div className="text-center">
                <div className={`w-12 sm:w-16 h-12 sm:h-16 ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-500 group-hover:shadow-lg`}>
                  <product.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-3xl p-6 sm:p-8 lg:p-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            <div className="flex items-center justify-start space-x-3 text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer group">
              <div className="flex items-center justify-start space-x-3 text-white transition-colors duration-300 cursor-pointer group" style={{'&:hover': {color: 'rgba(59, 130, 246, 0.5)'}}}>
                <Eye className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">Built to Observe. Learn. Act.</span>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3 text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer group">
              <div className="flex items-center justify-start space-x-3 text-white transition-colors duration-300 cursor-pointer group" style={{'&:hover': {color: 'rgba(59, 130, 246, 0.5)'}}}>
                <Brain className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">Data-driven. Domain-specific. Always evolving.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;