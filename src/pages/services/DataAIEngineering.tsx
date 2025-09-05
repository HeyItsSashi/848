'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Database, Brain, BarChart3, Zap, Target, LineChart, PieChart } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const DataAIEngineering = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-golden/10 via-sky/5 to-purple/10">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          href="/"
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
         <a onClick={handleScrollToTop} className="flex items-center space-x-2">
           <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
           <span>Back to Home</span>
         </a>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-golden/20 via-sky/10 to-purple/15 relative overflow-hidden mb-20 -mx-6 px-6">
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-400 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Icon */}
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-6 shadow-2xl">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">Data & AI</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Engineering</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <BarChart3 className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">Turn Data Into Decisive Advantage</span>
              <BarChart3 className="w-6 h-6 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              We help businesses unlock the full potential of their data through intelligent analysis, visualization, and 
              <span className="font-semibold text-black"> AI-powered insights that drive measurable outcomes</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Start Your Data Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>View Impact Stories</span>
              </button>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Complete Data Intelligence Stack</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-teal cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Data Visualization
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Transform complex data into compelling visual stories that drive understanding and action. Interactive dashboards and reports that make data accessible to everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Real-time interactive dashboards</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Custom reporting and alerting</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Self-service analytics platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Business Intelligence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Comprehensive BI solutions that centralize data from multiple sources, providing unified insights across your entire organization's operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Multi-source data integration</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Advanced analytics and KPI tracking</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Automated insight generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-golden cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Agentic Data Solutions
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                AI agents that autonomously analyze data, identify patterns, generate insights, and even take actions based on predefined business rules and objectives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Autonomous data analysis agents</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Intelligent anomaly detection</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Predictive modeling and forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-golden via-sky to-purple rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Into Intelligence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Stop letting valuable data sit unused. Let's build AI-powered systems that turn your information into competitive advantage and measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/#contact"
                className="group bg-white text-teal px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
              >
               <a onClick={handleScrollToTop} className="flex items-center space-x-2">
                 <span>Start Your Data Journey</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
               </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAIEngineering;