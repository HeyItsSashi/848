import React from 'react';
import { Bot, Satellite, Factory, TrendingUp } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Native Platforms",
      description: "Build AI-native platforms with closed-loop intelligence that learn and adapt continuously.",
      features: ["AI Consulting & Solution Design", "AI Product Development", "AI System Modernization"]
    },
    {
      icon: Satellite,
      title: "Edge Systems",
      description: "Design edge systems for real-time automation and analytics at the point of action.",
      features: ["Computer Vision Solutions", "IoT Integration", "Embedded security"]
    },
    {
      icon: Factory,
      title: "Enterprise Solutions",
      description: "Deliver enterprise-ready solutions with clarity and speed for complex business challenges.",
      features: ["Ai Powered Mobile and Enterprise Apps,", "AI Assurance & Cyber security", "Enterprise Automation & Operations"]
    },
    {
      icon: TrendingUp,
      title: "Data & AI Engineering ",
      description: "Help businesses turn data into measurable outcomes through intelligent analysis.",
      features: ["Data Visualization", "Business Intelligence", "Agentic Data solutions"]
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
            We build <HighlightOnScroll>intelligent</HighlightOnScroll> systems that sense, think, decide, and act across edge, cloud, and enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-transparent hover:border-gray-100 hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-3 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">{service.title}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;