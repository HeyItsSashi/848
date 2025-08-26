import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, Brain, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const AINativePlatforms = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const capabilities = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI systems that learn from data patterns and make autonomous decisions with human-like reasoning."
    },
    {
      icon: Zap,
      title: "Real-Time Adaptation",
      description: "Platforms that continuously evolve and adapt to changing conditions without manual intervention."
    },
    {
      icon: Bot,
      title: "Conversational Interfaces",
      description: "Natural language processing for seamless human-AI interaction across all touchpoints."
    }
  ];

  const features = [
    "AI Consulting & Solution Design",
    "Custom AI Model Development", 
    "AI System Integration",
    "Performance Optimization",
    "Continuous Learning Implementation",
    "AI Ethics & Compliance"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Deploy intelligent chatbots and voice agents that understand context and provide personalized responses."
    },
    {
      title: "Predictive Analytics Platform",
      description: "Build systems that forecast trends, identify risks, and recommend actions based on historical data."
    },
    {
      title: "Content Intelligence System",
      description: "Automatically analyze, categorize, and generate content with AI-powered understanding."
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
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">AI-Native Platforms</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Build AI That <HighlightOnScroll>Thinks</HighlightOnScroll> and <HighlightOnScroll>Adapts</HighlightOnScroll>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            We create AI-native platforms with closed-loop intelligence that learn, adapt, and evolve continuously. 
            From intelligent automation to predictive systems, we build AI that doesn't just process—it understands.
          </p>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleBackToHome}
              className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your AI Project</span>
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
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
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
                Our AI-native platforms are built from the ground up to be intelligent, adaptive, and scalable. 
                We don't just integrate AI features—we architect entire systems around AI capabilities.
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
                  <span className="font-medium text-black">AI/ML Frameworks:</span>
                  <span className="text-gray-600 ml-2">TensorFlow, PyTorch, Hugging Face</span>
                </div>
                <div>
                  <span className="font-medium text-black">Language Models:</span>
                  <span className="text-gray-600 ml-2">GPT, Claude, Custom LLMs</span>
                </div>
                <div>
                  <span className="font-medium text-black">Cloud Platforms:</span>
                  <span className="text-gray-600 ml-2">AWS, Azure, GCP</span>
                </div>
                <div>
                  <span className="font-medium text-black">Vector Databases:</span>
                  <span className="text-gray-600 ml-2">Pinecone, Weaviate, Chroma</span>
                </div>
                <div>
                  <span className="font-medium text-black">Orchestration:</span>
                  <span className="text-gray-600 ml-2">Kubernetes, Docker, MLOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Real-World Applications</h2>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 cursor-pointer hover:border-blue-200"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your AI-Native Platform?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI-native platforms can transform your business operations and create competitive advantages.
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

export default AINativePlatforms;