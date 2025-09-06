import React from 'react';
import { Users, GraduationCap, BrainCircuit, Crown } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const HiringSolutions = () => {
  const serviceData = {
    icon: Users,
    title: "Hiring Solutions",
    subtitle: "From Campus to Enterprise Excellence",
    description: "Deploy trained AI team members from college to campus with cost optimization and expert talent acquisition across all levels.",
    sections: [
      {
        title: "Complete Hiring Solutions",
        items: [
          {
            icon: GraduationCap,
            title: "AI-Trained Campus Talent",
            description: "Fresh graduates trained in AI technologies and ready to contribute from day one.",
            features: ["AI/ML engineering graduates", "Data science and analytics specialists", "Software development talent"]
          },
          {
            icon: BrainCircuit,
            title: "Senior Tech & Leadership Roles",
            description: "Experienced professionals and technical leaders who can drive innovation.",
            features: ["Senior engineers and architects", "Technical leads and managers", "Product and engineering directors"]
          },
          {
            icon: Crown,
            title: "Permanent FTE & Executive Hiring",
            description: "Full-time permanent placements and C-suite executive searches.",
            features: ["Permanent FTE placements", "C-suite executive search", "Strategic leadership roles"]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default HiringSolutions;