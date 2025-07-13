import React from 'react';
import { Search, Palette, Rocket } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover Deeply",
      description: "We dig beneath the surface to uncover insights that drive relevance and success."
    },
    {
      icon: Palette,
      number: "02", 
      title: "Design Thoughtfully",
      description: "We create intuitive, empowering experiences that balance usability and beauty."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Deliver Flawlessly", 
      description: "We engineer robust, scalable, and secure solutions with excellence and precision."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            From <span className="relative group cursor-pointer">
              <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
            </span> to <span className="relative group cursor-pointer">
              <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Impact</span>
            </span> — A structured methodology that ensures every project 
            delivers meaningful results.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:border-blue-200 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <step.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">{step.number}</span>
                    <h3 className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;