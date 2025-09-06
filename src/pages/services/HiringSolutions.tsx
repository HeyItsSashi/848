import React from 'react';
import { Users, GraduationCap, Crown, Target, Award } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const HiringSolutions = () => {
  const serviceData = {
    icon: Users,
    title: "Hiring Solutions",
    subtitle: "From Campus to C-Suite Excellence",
    description: "Deploy trained AI team members from college to campus with 40-60% cost optimization. We provide talent across all levels - from fresh graduates to executive leadership.",
    sections: [
      {
        title: "Core Hiring Services",
        items: [
          {
            icon: GraduationCap,
            title: "AI-Trained Campus Talent",
            description: "Fresh graduates pre-trained in AI technologies, ready to contribute from day one with 40-60% cost savings.",
            features: [
              "AI/ML engineering graduates with project experience",
              "Data science specialists trained on real datasets", 
              "Software developers proficient in modern frameworks",
              "3-month performance guarantee with replacements",
              "Immediate deployment with minimal onboarding",
              "Continuous learning and upskilling included"
            ]
          },
          {
            icon: Crown,
            title: "Senior Tech & Leadership",
            description: "Experienced professionals and technical leaders who drive innovation, mentor teams, and execute complex projects.",
            features: [
              "Senior engineers with 5-15 years experience",
              "Technical leads and engineering managers",
              "Product and engineering directors",
              "AI/ML research scientists and architects",
              "DevOps and infrastructure experts",
              "Cross-functional team leadership"
            ]
          },
          {
            icon: Target,
            title: "Executive & Permanent FTE",
            description: "Strategic leadership placements and full-time permanent hires for mission-critical organizational roles.",
            features: [
              "C-suite executive search (CTO, CPO, CRO, CDO)",
              "VP and Director level technical leadership", 
              "Permanent full-time employee placements",
              "Board advisory and consultant roles",
              "90-day integration support included",
              "Competitive compensation benchmarking"
            ]
          }
        ]
      },
      {
        title: "Specialized Solutions",
        items: [
          {
            icon: Award,
            title: "Quality & Performance Assurance",
            description: "Comprehensive quality assurance with ongoing support and performance guarantees for all placements.",
            features: [
              "Multi-stage technical and cultural assessment",
              "30-60-90 day performance review cycles",
              "6-month replacement guarantee",
              "Ongoing mentorship and development support",
              "Regular check-ins with clients and candidates"
            ]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default HiringSolutions;