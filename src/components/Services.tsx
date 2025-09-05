import React from 'react';
import Link from 'next/link';
import { Bot, Satellite, Factory, TrendingUp } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Services = () => {
  const handleLinkClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI-Native Platforms",
      description: "Build AI-native platforms with closed-loop intelligence that learn and adapt continuously.",
      features: ["AI Consulting & Solution Design", "AI Product Development", "AI System Modernization"],
      link: "/services/ai-native-platforms"
    },
    {
      icon: Satellite,
      title: "Edge Systems",
      description: "Design edge systems for real-time automation and analytics at the point of action.",
      features: ["Computer Vision Solutions", "IoT Integration", "Embedded Security"],
      link: "/services/edge-systems"
    },
    {
      icon: Factory,
      title: "Enterprise Solutions",
      description: "Deliver enterprise-ready solutions with clarity and speed for complex business challenges.",
      features: ["AI Powered Mobile and Enterprise Apps", "AI Assurance & Cyber Security", "Enterprise Automation & Operations"],
      link: "/services/enterprise-solutions"
    },
    {
      icon: TrendingUp,
      title: "Data & AI Engineering ",
      description: "Help businesses turn data into measurable outcomes through intelligent analysis.",
      features: ["Data Visualization", "Business Intelligence", "Agentic Data Solutions"],
      link: "/services/data-ai-engineering"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <div className="inline-flex items-center space-x-2 text-gray-600 mb-4">
            <Bot className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            We build <HighlightOnScroll>End-to-End Intelligence</HighlightOnScroll> across systems from Edge to Enterprise that sense, think, decide, and act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              onClick={handleLinkClick}
              key={index}
              className={`block rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:scale-[1.02] ${
                index === 0 ? 'bg-golden text-white hover:bg-opacity-90' : 
                index === 1 ? 'bg-teal text-white hover:bg-opacity-90' : 
                index === 2 ? 'bg-purple text-white hover:bg-opacity-90' : 
                'bg-sky text-white hover:bg-opacity-90'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg ${
                  index === 0 ? 'bg-white text-golden' : 
                  index === 1 ? 'bg-white text-teal' : 
                  index === 2 ? 'bg-white text-purple' : 
                  'bg-white text-sky'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-4 leading-relaxed opacity-90">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm opacity-80 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;