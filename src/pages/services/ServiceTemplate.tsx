import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

interface ServiceTemplateProps {
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  sections: {
    title: string;
    items: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
      features: string[];
    }[];
  }[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  sections
}) => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-teal/10 via-purple/5 to-golden/10">
      {/* Back Button */}
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
          <ParticleBackground />
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-6 shadow-2xl">
              <Icon className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">{title.split(' ')[0]}</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">{title.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <Icon className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">{subtitle}</span>
              <Icon className="w-6 h-6 animate-pulse" />
            </div>

            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <h2 className="text-4xl font-bold text-black mb-12">{section.title}</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {section.items.map((item, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-teal cursor-pointer">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-teal rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal via-purple to-golden rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's build intelligent solutions that drive real-world impact.
            </p>
            
            <Link
              to="/#contact"
              onClick={handleScrollToTop}
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold mx-auto w-fit"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;