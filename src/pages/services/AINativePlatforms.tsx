import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Brain, Zap, Shield, Target, CheckCircle, Users, Lightbulb } from 'lucide-react';

const AINativePlatforms = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center">
              <Bot className="w-10 h-10 text-black" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-2">
                AI-Native Platforms
              </h1>
              <p className="text-2xl text-gray-600">
                Intelligence Built Into Every Layer
              </p>
            </div>
          </div>
          
          <p className="text-2xl text-gray-700 leading-relaxed max-w-5xl mb-12">
            Unlike traditional systems with AI bolted on, our platforms are designed from the ground up to think, learn, and adapt. Every component is infused with intelligence, creating systems that evolve with your business.
          </p>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-black mb-4">The Difference is in the DNA</h3>
            <p className="text-lg text-gray-700">
              Traditional platforms add AI as a feature. AI-Native platforms use intelligence as their foundation. 
              Every decision, every process, every interaction is powered by adaptive algorithms that learn from your data.
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Core Capabilities</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-blue-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Autonomous Decision Making
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Systems that analyze complex scenarios, weigh multiple factors, and make intelligent decisions without human intervention. From supply chain optimization to customer service routing, our platforms handle the complexity.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Real-Time Learning
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Platforms that continuously learn from every interaction, transaction, and outcome. Performance improves automatically as your business grows, adapting to new patterns and optimizing processes in real-time.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-green-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Predictive Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Security that thinks ahead. Our AI monitors patterns, predicts threats, and automatically implements protections before attacks occur. Zero-trust architecture with intelligent threat assessment.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-orange-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Self-Optimizing Performance
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Infrastructure that monitors itself, predicts bottlenecks, and automatically scales resources. Performance optimization happens behind the scenes, ensuring peak efficiency at all times.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Transformative Use Cases</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            See how AI-Native platforms are revolutionizing businesses across industries
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Intelligent Customer Experience Platform</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    A retail platform that predicts customer needs, personalizes every interaction, and optimizes the entire journey from awareness to advocacy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">40% increase in conversion</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">60% reduction in support costs</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">Real-time personalization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Smart Manufacturing Operations</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Production systems that predict equipment failures, optimize schedules dynamically, and maintain quality standards automatically.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">35% efficiency improvement</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">90% reduction in downtime</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">Predictive maintenance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Adaptive Financial Services</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Banking platforms that assess risk in real-time, detect fraud before it happens, and personalize financial products to individual needs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">95% fraud detection rate</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">50% faster loan approvals</span>
                    <span className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium">Real-time risk assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Technology Excellence</h2>
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-300">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">&lt;50ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Autonomous Operation</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Built on Proven Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Machine Learning</span>
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Deep Learning</span>
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Natural Language Processing</span>
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Computer Vision</span>
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Reinforcement Learning</span>
                <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Edge Computing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Intelligence Into Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your operations with platforms that think, learn, and evolve. Join the leaders who are already benefiting from truly intelligent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
            >
              <span>Start Your AI Journey</span>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINativePlatforms;