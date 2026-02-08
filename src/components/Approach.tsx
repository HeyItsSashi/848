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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Approach
          </h2>
          <p className="text-lg sm:text-xl text-black-600 max-w-3xl">
            From <span className="relative group cursor-pointer">
              <span className="group-hover:underline decoration-2 decoration-stone-400 underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
            </span> to <span className="relative group cursor-pointer">
              <span className="group-hover:underline decoration-2 decoration-stone-400 underline-offset-2 hover:scale-105 transition-all duration-300">Impact</span>
            </span>, a structured methodology that ensures every project delivers meaningful results.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:scale-[1.02] ${
                index === 0 ? 'bg-black bg-opacity-100 border-black' : 
                index === 1 ? 'bg-black bg-opacity-100 border-black' : 
                'bg-black bg-opacity-100 border-black'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg ${
                  index === 0 ? 'bg-black' : 
                  index === 1 ? 'bg-black' : 
                  'bg-black'
                }`}>
                  <step.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                    <span className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                      index === 0 ? 'text-white' : 
                      index === 1 ? 'text-white' : 
                      'text-white'
                    }`}>{step.number}</span>
                    <h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                      index === 0 ? 'text-white' : 
                      index === 1 ? 'text-white' : 
                      'text-white'
                    }`}>{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg !text-white opacity-70
 leading-relaxed">
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