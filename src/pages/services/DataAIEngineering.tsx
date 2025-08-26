import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Database, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const DataAIEngineering = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const capabilities = [
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Robust data pipelines and warehousing solutions that handle massive scale with reliability and performance."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights using machine learning and statistical analysis techniques."
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting systems that empower data-driven decision making across your organization."
    }
  ];

  const features = [
    "Data Pipeline Engineering",
    "Machine Learning Operations", 
    "Business Intelligence Dashboards",
    "Predictive Analytics Models",
    "Data Visualization Systems",
    "Agentic Data Solutions"
  ];

  const useCases = [
    {
      title: "Customer Analytics Platform",
      description: "Build comprehensive customer intelligence systems that track behavior, predict churn, and optimize experiences."
    },
    {
      title: "Supply Chain Intelligence",
      description: "Create data-driven supply chain optimization with demand forecasting and inventory management."
    },
    {
      title: "Financial Risk Analytics",
      description: "Develop sophisticated risk assessment and fraud detection systems using advanced ML techniques."
    },
    {
      title: "Operations Intelligence",
      description: "Implement real-time operational dashboards with predictive maintenance and performance optimization."
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Transform your business with insights derived from comprehensive data analysis and predictive modeling."
    },
    {
      title: "Scalable Infrastructure",
      description: "Build data systems that grow with your business and handle increasing volumes efficiently."
    },
    {
      title: "Competitive Advantage",
      description: "Leverage advanced analytics to identify opportunities and optimize operations ahead of competitors."
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-left mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Data & AI Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Turn Data Into <HighlightOnScroll>Decisions</HighlightOnScroll>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            We help businesses transform data into measurable outcomes through intelligent analysis. 
            From data pipelines to predictive models, we build systems that unlock the value hidden in your data.
          </p>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleBackToHome}
              className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Unlock Your Data's Potential</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleBackToHome}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-orange-200 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Deliver */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">What We Deliver</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our data and AI engineering services transform raw information into strategic assets. 
                We build end-to-end data solutions that are reliable, scalable, and designed for actionable insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-black">Data Processing:</span>
                  <span className="text-gray-600 ml-2">Apache Spark, Kafka, Airflow</span>
                </div>
                <div>
                  <span className="font-medium text-black">Machine Learning:</span>
                  <span className="text-gray-600 ml-2">Python, R, TensorFlow, scikit-learn</span>
                </div>
                <div>
                  <span className="font-medium text-black">Data Storage:</span>
                  <span className="text-gray-600 ml-2">BigQuery, Redshift, Snowflake, MongoDB</span>
                </div>
                <div>
                  <span className="font-medium text-black">Visualization:</span>
                  <span className="text-gray-600 ml-2">Tableau, Power BI, D3.js, Grafana</span>
                </div>
                <div>
                  <span className="font-medium text-black">Cloud Platforms:</span>
                  <span className="text-gray-600 ml-2">AWS, Azure, GCP, Databricks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 cursor-pointer hover:border-orange-200"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Why Invest in Data & AI Engineering</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 cursor-pointer">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how data and AI engineering can unlock insights and drive growth for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleBackToHome}
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleBackToHome}
              className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAIEngineering;