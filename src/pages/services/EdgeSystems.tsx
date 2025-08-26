import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Satellite, Eye, Cpu, Wifi, Shield, Zap, Camera, MapPin } from 'lucide-react';

const EdgeSystems = () => {
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
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center">
              <Satellite className="w-10 h-10 text-gray-800" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-2">
                Edge Systems
              </h1>
              <p className="text-2xl text-gray-600">
                Intelligence at the Speed of Life
              </p>
            </div>
          </div>
          
          <p className="text-2xl text-gray-700 leading-relaxed max-w-5xl mb-12">
            When milliseconds matter and connectivity can't be guaranteed, our edge systems bring AI processing directly to where decisions need to be made. Real-time intelligence without compromise.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-6 h-6 text-gray-800" />
                <span className="font-semibold text-black">Ultra-Low Latency</span>
              </div>
              <p className="text-gray-700">Process data in microseconds, not minutes. Critical for safety systems and real-time decisions.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-gray-800" />
                <span className="font-semibold text-black">Offline Capability</span>
              </div>
              <p className="text-gray-700">Continue operations even when internet fails. Perfect for remote locations and critical systems.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Eye className="w-6 h-6 text-gray-800" />
                <span className="font-semibold text-black">Local Processing</span>
              </div>
              <p className="text-gray-700">Keep sensitive data secure by processing locally. No data leaves your premises.</p>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Core Technologies</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Computer Vision at Edge
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Advanced vision AI that runs directly on edge devices. Real-time object detection, facial recognition, and scene analysis without cloud dependency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Real-time object detection</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Quality inspection systems</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Security and surveillance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Edge AI Processing
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Deploy sophisticated AI models on specialized edge hardware. From NVIDIA Jetson to custom FPGA solutions for maximum performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Neural network acceleration</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Custom model optimization</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Hardware-specific tuning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Wifi className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Smart Connectivity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Intelligent networking that adapts to bandwidth constraints and automatically optimizes data transmission based on priority and availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Adaptive bandwidth management</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Multi-protocol support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Failover mechanisms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Edge Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Military-grade security protocols that protect data and systems at the network edge with encrypted communication and secure boot processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Hardware security modules</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Encrypted data streams</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Zero-trust architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Industry Applications</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            Edge systems are transforming industries where real-time processing and reliable operation are mission-critical
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Autonomous Vehicles</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Safety-critical AI systems that process sensor data in real-time with ultra-low latency. Every millisecond counts when lives are at stake.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">{"<10ms"}</div>
                      <div className="text-sm text-gray-600">Decision latency</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">360°</div>
                      <div className="text-sm text-gray-600">Sensor coverage</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">99.99%</div>
                      <div className="text-sm text-gray-600">Reliability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Smart Manufacturing</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Real-time quality control and predictive maintenance using edge AI to monitor equipment performance and detect anomalies instantly.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">99.5%</div>
                      <div className="text-sm text-gray-600">Quality detection rate</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">75%</div>
                      <div className="text-sm text-gray-600">Downtime reduction</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Smart Cities & Infrastructure</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Traffic optimization, environmental monitoring, and public safety systems that operate continuously even during network outages.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">40%</div>
                      <div className="text-sm text-gray-600">Traffic improvement</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">85%</div>
                      <div className="text-sm text-gray-600">Energy savings</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-black mb-1">100%</div>
                      <div className="text-sm text-gray-600">Uptime guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Technical Excellence</h2>
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">{"<1ms"}</div>
                <div className="text-gray-300">Processing Latency</div>
                <div className="text-sm text-gray-400 mt-1">Ultra-low response times</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">99.99%</div>
                <div className="text-gray-300">System Uptime</div>
                <div className="text-sm text-gray-400 mt-1">Enterprise reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">256-bit</div>
                <div className="text-gray-300">Encryption</div>
                <div className="text-sm text-gray-400 mt-1">Military-grade security</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">-40°C</div>
                <div className="text-gray-300">Operating Range</div>
                <div className="text-sm text-gray-400 mt-1">Extreme environments</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Hardware Partners</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">NVIDIA Jetson</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">Intel Movidius</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">Google Coral</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">Qualcomm Snapdragon</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">Custom FPGA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Edge Intelligence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your operations with AI systems that think and act at the edge, delivering unprecedented speed and reliability where it matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
            >
              <span>Start Your Edge Project</span>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeSystems;