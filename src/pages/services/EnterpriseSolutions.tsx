import React from 'react';
import { Factory, Users, Shield, Cog } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const EnterpriseSolutions = () => {
  const serviceData = {
    icon: Factory,
    title: "Enterprise Solutions",
    subtitle: "Scalable AI for Global Operations",
    description: "Transform your enterprise with AI-powered solutions that integrate seamlessly into your existing infrastructure while delivering measurable ROI and competitive advantage at scale.",
    sections: [
      {
        title: "Enterprise Solution Portfolio",
        items: [
          {
            icon: Users,
            title: "AI-Powered Mobile & Enterprise Apps",
            description: "Custom applications that leverage AI to enhance user experience and automate processes.",
            features: ["Intelligent user interfaces that adapt to behavior", "Predictive analytics built into workflows", "Cross-platform deployment and synchronization"]
          },
          {
            icon: Shield,
            title: "AI Assurance & Cyber Security",
            description: "Advanced security systems that use AI to detect threats and prevent breaches.",
            features: ["Real-time threat detection and response", "Behavioral analysis and anomaly detection", "Automated incident response and remediation"]
          },
          {
            icon: Cog,
            title: "Enterprise Automation & Operations",
            description: "End-to-end automation solutions that streamline operations and reduce costs.",
            features: ["Intelligent process automation and optimization", "Resource allocation and performance monitoring", "Predictive maintenance and asset management"]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default EnterpriseSolutions;