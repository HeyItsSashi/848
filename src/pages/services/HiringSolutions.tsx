import React from 'react';
import { Users, GraduationCap, BrainCircuit, Crown, Target, Clock, DollarSign, Award } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const HiringSolutions = () => {
  const serviceData = {
    icon: Users,
    title: "Hiring Solutions",
    subtitle: "From Campus to Enterprise Excellence",
    description: "Deploy trained AI team members from college to campus with cost optimization and expert talent acquisition across all levels. We bridge the gap between fresh talent and enterprise needs with comprehensive hiring solutions.",
    sections: [
      {
        title: "Campus to Corporate Pipeline",
        items: [
          {
            icon: GraduationCap,
            title: "AI-Trained Campus Talent",
            description: "Fresh graduates trained in AI technologies and ready to contribute from day one with specialized skills in modern technology stacks.",
            features: [
              "AI/ML engineering graduates with hands-on project experience",
              "Data science and analytics specialists trained on real datasets",
              "Software development talent proficient in modern frameworks",
              "Pre-trained in industry best practices and methodologies",
              "Ready for immediate deployment with minimal onboarding time",
              "Cost-effective talent acquisition at 40-60% lower costs",
              "3-month performance guarantee with replacement options",
              "Continuous learning and upskilling support included"
            ]
          },
          {
            icon: BrainCircuit,
            title: "Senior Tech & Leadership Roles",
            description: "Experienced professionals and technical leaders who can drive innovation, mentor teams, and execute complex projects.",
            features: [
              "Senior engineers with 5-15 years of proven experience",
              "Technical leads and engineering managers",
              "Product and engineering directors with scaling experience",
              "Architecture specialists for complex system design",
              "DevOps and infrastructure experts for enterprise scaling",
              "AI/ML research scientists and principal engineers",
              "Cross-functional team leaders with delivery track records",
              "Mentorship capabilities for junior team development"
            ]
          },
          {
            icon: Crown,
            title: "Executive & Permanent FTE Hiring",
            description: "Strategic leadership placements and full-time permanent hires for mission-critical roles across all organizational levels.",
            features: [
              "C-suite executive search (CTO, CPO, CRO, CDO)",
              "VP and Director level technical leadership",
              "Permanent full-time employee placements",
              "Strategic leadership roles with P&L responsibility",
              "Board advisory and consultant placement services",
              "Retention-focused placement with cultural fit assessment",
              "90-day integration support and performance tracking",
              "Competitive compensation benchmarking and negotiation"
            ]
          }
        ]
      },
      {
        title: "Specialized Hiring Services",
        items: [
          {
            icon: Target,
            title: "Contract & Project-Based Hiring",
            description: "Flexible hiring solutions for short-term projects, seasonal demands, and specialized skill requirements.",
            features: [
              "3-12 month contract placements for specific projects",
              "Rapid deployment within 2-3 weeks of requirement",
              "Specialized skill acquisition (AI, blockchain, cybersecurity)",
              "Remote-first and hybrid work arrangements",
              "Scalable team augmentation services",
              "Project completion guarantees with milestone-based delivery"
            ]
          },
          {
            icon: Clock,
            title: "Rapid Deployment Teams",
            description: "Pre-assembled teams ready for immediate deployment on urgent projects and initiatives.",
            features: [
              "Pre-vetted team formations for common project types",
              "48-72 hour deployment for urgent requirements",
              "Cross-functional teams with complementary skills",
              "Proven team chemistry and collaboration history",
              "Agile and DevOps methodology expertise",
              "Communication and project management included"
            ]
          },
          {
            icon: DollarSign,
            title: "Cost Optimization Solutions",
            description: "Strategic hiring approaches designed to maximize talent acquisition ROI while maintaining quality standards.",
            features: [
              "Campus talent programs reducing hiring costs by 40-60%",
              "Offshore and nearshore development teams",
              "Hybrid hiring models combining permanent and contract staff",
              "Performance-based compensation structures",
              "Training and development cost sharing programs",
              "Long-term talent retention strategies with career pathing"
            ]
          },
          {
            icon: Award,
            title: "Quality Assurance & Support",
            description: "Comprehensive quality assurance throughout the hiring process with ongoing support for placed candidates.",
            features: [
              "Multi-stage technical and cultural assessment process",
              "Reference verification and background checks",
              "30-60-90 day performance review cycles",
              "Ongoing mentorship and career development support",
              "Replacement guarantee within first 6 months",
              "Performance improvement plans and coaching",
              "Career advancement planning and skill development",
              "Regular check-ins with both client and candidate"
            ]
          }
        ]
      },
      {
        title: "Industry-Specific Talent Solutions",
        items: [
          {
            icon: BrainCircuit,
            title: "AI & Machine Learning Specialists",
            description: "Deep expertise in AI/ML technologies with proven track records in implementing intelligent systems.",
            features: [
              "Machine Learning Engineers with production experience",
              "Data Scientists specialized in predictive analytics",
              "AI Research Scientists with publication records",
              "Computer Vision and NLP specialists",
              "MLOps engineers for model deployment and monitoring",
              "AI Product Managers with technical depth"
            ]
          },
          {
            icon: Shield,
            title: "Cybersecurity & Infrastructure",
            description: "Security-focused professionals who can protect and scale your technology infrastructure.",
            features: [
              "Cybersecurity architects and penetration testers",
              "Cloud infrastructure specialists (AWS, Azure, GCP)",
              "DevSecOps engineers with automation expertise",
              "Compliance and risk management professionals",
              "Network security and monitoring specialists",
              "Identity and access management experts"
            ]
          },
          {
            icon: Users,
            title: "Product & Business Roles",
            description: "Business-focused professionals who bridge technology and market needs with strategic thinking.",
            features: [
              "Product Managers with technical AI/tech background",
              "Business Development and Sales professionals",
              "Marketing technologists and growth hackers",
              "Operations managers with process optimization skills",
              "Customer Success and Technical Account Managers",
              "Business Analysts with data-driven decision making"
            ]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default HiringSolutions;