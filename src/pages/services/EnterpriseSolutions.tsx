import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Factory, Shield, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const EnterpriseSolutions = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const capabilities = [
    {
      icon: Smartphone,
      title: "Enterprise Applications",
      description: "Custom mobile and web applications powered by AI for enhanced user experiences and business outcomes."
    },
    {
      icon: Shield,
      title: "AI Security & Assurance",
      description: "Comprehensive cybersecurity solutions with AI-powered threat detection and automated response systems."
    },
    {
      icon: Factory,
      title: "Process Automation",
      description: "End-to-end automation of complex business processes using AI and intelligent workflow orchestration."
    }
  ];

  const features = [
    "AI-Powered Mobile Apps",
    "Enterprise Web Applications", 
    "AI Assurance & Cybersecurity",
    "Business Process Automation",
    "Legacy System Modernization",
    "Enterprise Integration"
  ];

  const useCases = [
    {
      title: "Financial Services Automation",
      description: "Automate loan processing, risk assessment, and compliance reporting with AI-powered decision engines."
    },
    {
      title: "Healthcare Management Systems",
      description: "Build comprehensive patient management platforms with AI-assisted diagnostics and treatment recommendations."
    },
    {
      title: "Supply Chain Optimization",
      description: "Implement intelligent supply chain management with predictive analytics and automated decision making."
    },
    {
      title: "Human Resources Intelligence",
      description: "Deploy AI-powered HR systems for talent acquisition, performance management, and employee engagement."
    }
  ];

  const benefits = [
    {
      title: "Faster Time-to-Market",
      description: "Accelerate development cycles with proven frameworks and AI-assisted development processes."
    },
    {
      title: "Enhanced Security",
      description: "Built-in security measures and AI-powered threat detection to protect your enterprise assets."
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native solutions designed to grow with your business and handle increasing demands."
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
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Factory className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Enterprise Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Enterprise-Grade <HighlightOnScroll>Intelligence</HighlightOnScroll>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            We deliver enterprise-ready solutions with clarity and speed for complex business challenges. 
            From AI-powered applications to cybersecurity, we build systems that scale with your ambitions.
          </p>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleBackToHome}
              className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Transform Your Enterprise</span>
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
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-green-200 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-300">
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
                Our enterprise solutions combine cutting-edge AI with proven business practices to deliver 
                systems that are secure, scalable, and ready for mission-critical operations.
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
                  <span className="font-medium text-black">Frontend:</span>
                  <span className="text-gray-600 ml-2">React, Vue.js, Angular, React Native</span>
                </div>
                <div>
                  <span className="font-medium text-black">Backend:</span>
                  <span className="text-gray-600 ml-2">Node.js, Python, .NET, Java Spring</span>
                </div>
                <div>
                  <span className="font-medium text-black">Database:</span>
                  <span className="text-gray-600 ml-2">PostgreSQL, MongoDB, Redis, Elasticsearch</span>
                </div>
                <div>
                  <span className="font-medium text-black">Security:</span>
                  <span className="text-gray-600 ml-2">OAuth 2.0, JWT, SSL/TLS, RBAC</span>
                </div>
                <div>
                  <span className="font-medium text-black">Infrastructure:</span>
                  <span className="text-gray-600 ml-2">Kubernetes, Docker, AWS, Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 cursor-pointer hover:border-green-200"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Why Choose Our Enterprise Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 cursor-pointer">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our enterprise solutions can transform your business operations and drive sustainable growth.
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

export default EnterpriseSolutions;