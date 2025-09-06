import React from 'react';
import { Bot, Users, Shield, Cog } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const AINativePlatforms = () => {
  const serviceData = {
    icon: Bot,
    title: "AI-Native Platforms",
    subtitle: "Intelligence That Learns, Adapts & Evolves",
    description: "Build platforms where AI isn't an add-on feature—it's the foundation. Our AI-native systems think, learn, and evolve with your business.",
    sections: [
      {
        title: "Complete Solution Suite",
        items: [
          {
            icon: Users,
            title: "AI Consulting & Solution Design",
            description: "Strategic consulting to design and implement AI-native architectures that align with your business goals.",
            features: ["AI strategy and roadmap development", "Technical architecture design", "Implementation planning and execution"]
          },
          {
            icon: Shield,
            title: "AI Product Development",
            description: "End-to-end development of AI-powered products that deliver intelligent user experiences.",
            features: ["Custom AI application development", "Intelligent user interface design", "Machine learning model integration"]
          },
          {
            icon: Cog,
            title: "AI System Modernization",
            description: "Transform legacy systems into intelligent, adaptive platforms that learn from data.",
            features: ["Legacy system AI integration", "Performance optimization with AI", "Continuous learning implementation"]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default AINativePlatforms;