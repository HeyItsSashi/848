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
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-teal cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI Processing Units
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Custom hardware optimized for AI workloads, delivering maximum performance with minimal power consumption at the edge.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Dedicated neural processing units</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Low-power, high-throughput design</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Real-time inference capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <Wifi className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Edge Connectivity
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Advanced networking solutions that maintain connectivity and data synchronization even in challenging environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Mesh networking capabilities</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Automatic failover and recovery</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Multi-protocol support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Industry Applications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Future Industry Applications</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            Explore how edge systems could transform operations across different industries with real-time intelligence
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal to-purple rounded-3xl p-10 border-2 border-teal relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Camera className="w-8 h-8 text-teal" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">Smart Surveillance Future</h3>
                      <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">Real-time</span>
                    </div>
                    <p className="text-lg text-white mb-6 drop-shadow-md">
                      Edge-powered surveillance systems could provide instant threat detection and response without relying on cloud connectivity.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-teal mb-1">&lt;100ms</div>
                        <div className="text-sm text-gray-700">Response time</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-teal mb-1">99.9%</div>
                        <div className="text-sm text-gray-700">Accuracy target</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-teal mb-1">24/7</div>
                        <div className="text-sm text-gray-700">Operation</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-teal mb-1">Local</div>
                        <div className="text-sm text-gray-700">Processing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple to-golden rounded-3xl p-10 border-2 border-purple relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">Autonomous Vehicle Vision</h3>
                      <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">Mission-Critical</span>
                    </div>
                    <p className="text-lg text-white mb-6 drop-shadow-md">
                      Edge computing could enable split-second decision making in autonomous vehicles, ensuring safety without network dependency.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple mb-1">&lt;10ms</div>
                        <div className="text-sm text-gray-700">Decision time</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple mb-1">360°</div>
                        <div className="text-sm text-gray-700">Awareness</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple mb-1">Zero</div>
                        <div className="text-sm text-gray-700">Cloud dependency</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple mb-1">Instant</div>
                        <div className="text-sm text-gray-700">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeSystems;