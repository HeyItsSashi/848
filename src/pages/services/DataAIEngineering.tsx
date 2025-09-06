import React from 'react';
import { TrendingUp, BarChart3, Database, Brain } from 'lucide-react';
import ServiceTemplate from './ServiceTemplate';

const DataAIEngineering = () => {
  const serviceData = {
    icon: TrendingUp,
    title: "Data AI Engineering",
    subtitle: "Turn Data Into Decisive Advantage",
    description: "We help businesses unlock the full potential of their data through intelligent analysis, visualization, and AI-powered insights that drive measurable outcomes.",
    sections: [
      {
        title: "Complete Data Intelligence Stack",
        items: [
          {
            icon: BarChart3,
            title: "Data Visualization",
            description: "Transform complex data into compelling visual stories that drive understanding and action.",
            features: ["Real-time interactive dashboards", "Custom reporting and alerting", "Self-service analytics platforms"]
          },
          {
            icon: Database,
            title: "Business Intelligence",
            description: "Comprehensive BI solutions that centralize data from multiple sources.",
            features: ["Multi-source data integration", "Advanced analytics and KPI tracking", "Automated insight generation"]
          },
          {
            icon: Brain,
            title: "Agentic Data Solutions",
            description: "AI agents that autonomously analyze data, identify patterns, and generate insights.",
            features: ["Autonomous data analysis agents", "Intelligent anomaly detection", "Predictive modeling and forecasting"]
          }
        ]
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DataAIEngineering;