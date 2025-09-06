import React from 'react';
import { Satellite, Camera, Wifi, Shield } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const EdgeSystems = () => {
  const serviceData = {
    icon: Satellite,
    title: "Edge Systems",
    subtitle: "Intelligence at the Speed of Life",
    description: "When milliseconds matter and connectivity can't be guaranteed, our edge systems bring AI processing directly to where decisions need to be made.",
    sections: [
      {
        title: "Core Technologies",
        items: [
          {
            icon: Camera,
            title: "Computer Vision Solutions",
            description: "Advanced visual recognition and analysis systems that process images and video in real-time at the edge.",
            features: ["Object detection and classification", "Facial recognition and biometric analysis", "Quality control and defect detection"]
          },
          {
            icon: Wifi,
            title: "IoT Integration",
            description: "Seamless connectivity and data processing for Internet of Things devices.",
            features: ["Multi-protocol device connectivity", "Real-time sensor data processing", "Automated response and control systems"]
          },
          {
            icon: Shield,
            title: "Embedded Security",
            description: "Hardware-level security built into every edge device, ensuring data protection.",
            features: ["Hardware-based encryption", "Secure boot and firmware protection", "Zero-trust network architecture"]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default EdgeSystems;