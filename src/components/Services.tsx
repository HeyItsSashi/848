import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Satellite, Factory, TrendingUp } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Services = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            We build <HighlightOnScroll>End-to-End Intelligence</HighlightOnScroll> across systems from Edge to Enterprise that sense, think, decide, and act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              onClick={handleScrollToTop}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-transparent hover:border-gray-100 hover:scale-[1.02] block"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-3 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full transition-colors duration-300"></span>
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