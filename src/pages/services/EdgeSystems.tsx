import React from 'react';
import { Satellite, ArrowLeft, CheckCircle, Eye, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const EdgeSystems = () => {
  const features = [
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Real-time image and video processing at the edge for instant decision-making",
      benefits: ["Object detection & tracking", "Quality control automation", "Security & surveillance"]
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Seamless integration of IoT devices with intelligent edge processing capabilities",
      benefits: ["Sensor data processing", "Device orchestration", "Real-time monitoring"]
    },
    {
      icon: Shield,
      title: "Embedded Security",
      description: "Built-in security measures for edge devices and data transmission",
      benefits: ["Encryption at rest & transit", "Secure device authentication", "Threat detection"]
    }
  ];

  const useCases = [
    "Industrial automation and monitoring",
    "Smart city infrastructure management",
    "Autonomous vehicle systems",
    "Healthcare device monitoring",
    "Agricultural precision farming",
    "Energy grid optimization",
    "Retail analytics and inventory",
    "Environmental monitoring systems"
  ];

  const technologies = [
    "NVIDIA Jetson", "Intel OpenVINO", "TensorFlow Lite", "ONNX Runtime", 
    "Docker Edge", "Kubernetes Edge", "Azure IoT Edge", "AWS Greengrass"
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <Link 
          to="/services" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="text-left mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <Satellite className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-600">Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Edge Systems
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            Design edge systems for <HighlightOnScroll>real-time automation</HighlightOnScroll> and analytics at the point of action.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Edge Computing Excellence</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Edge Systems service brings intelligence directly to where data is generated. We design and deploy systems 
              that process information locally, reducing latency, improving reliability, and enabling real-time decision-making 
              without dependence on cloud connectivity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From manufacturing floors to remote monitoring stations, our edge solutions deliver immediate insights and 
              automated responses exactly where and when they're needed most.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:border-blue-200"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
              >
                <span className="text-gray-700 group-hover:text-black font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Why Choose Edge Systems?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Satellite className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Ultra-Low Latency</h3>
              <p className="text-gray-600">Process data locally for millisecond response times</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Keep sensitive data local with built-in security</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Reduce bandwidth costs and cloud dependencies</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Deploy Intelligence at the Edge</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your operations with real-time processing and automation where it matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your Project</span>
              <Satellite className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EdgeSystems;