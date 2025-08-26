import React from 'react';
import { useNavigate } from 'react-router-dom';
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
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Intelligent Decision Making
              </h3>
              <p className="text-gray-600 leading-relaxed">AI systems that learn from data patterns and make autonomous decisions with human-like reasoning.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Real-Time Adaptation
              </h3>
              <p className="text-gray-600 leading-relaxed">Platforms that continuously evolve and adapt to changing conditions without manual intervention.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Conversational Interfaces
              </h3>
              <p className="text-gray-600 leading-relaxed">Natural language processing for seamless human-AI interaction across all touchpoints.</p>
            </div>
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