import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Satellite, Eye, Cpu, Wifi, Shield, Zap, Camera, MapPin } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const EdgeSystems = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden mb-20 -mx-6 px-6">
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
              <Satellite className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">Edge</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Systems</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <Zap className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">Intelligence at the Speed of Life</span>
              <Zap className="w-6 h-6 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              When milliseconds matter and connectivity can't be guaranteed, our edge systems bring AI processing 
              <span className="font-semibold text-black"> directly to where decisions need to be made</span>.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-black">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6 text-gray-800 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-black mb-2 group-hover:text-teal">Ultra-Low Latency</h3>
                <p className="text-gray-800 text-sm">Process data in microseconds, not minutes. Critical for safety systems.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-black">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                  <Shield className="w-6 h-6 text-gray-800 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-black mb-2 group-hover:text-purple">Offline Capability</h3>
                <p className="text-gray-800 text-sm">Continue operations even when internet fails. Perfect for remote locations.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-black">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                  <Eye className="w-6 h-6 text-gray-800 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-black mb-2 group-hover:text-golden">Local Processing</h3>
                <p className="text-gray-800 text-sm">Keep sensitive data secure by processing locally. No data leaves your premises.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Deploy Edge Intelligence</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>View Applications</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Real-time intelligence without compromise</p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative hover:border-black transition-colors duration-300 cursor-pointer group mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce group-hover:bg-black transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Core Technologies</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-black mb-4">Complete Core Technologies Content</h3>
              <p className="text-gray-700">This section needs to be properly implemented with core technologies content.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EdgeSystems;