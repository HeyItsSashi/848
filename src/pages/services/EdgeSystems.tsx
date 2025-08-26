import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Satellite, Eye, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const EdgeSystems = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const capabilities = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analytics for real-time object detection, tracking, and behavior analysis."
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "High-performance processing at the data source with minimal latency and maximum efficiency."
    },
    {
      icon: Satellite,
      title: "IoT Integration",
      description: "Seamless connectivity and management of IoT devices across distributed environments."
    }
  ];

  const features = [
    "Real-Time Video Analytics",
    "IoT Device Management",
    "Edge AI Deployment",
    "Sensor Data Processing",
    "Embedded Security Systems",
    "Edge-to-Cloud Synchronization"
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Deploy edge AI for quality control, predictive maintenance, and real-time production optimization."
    },
    {
      title: "Retail Analytics",
      description: "Implement computer vision for customer behavior analysis, inventory management, and loss prevention."
    },
    {
      title: "Smart City Infrastructure",
      description: "Build intelligent traffic management, environmental monitoring, and public safety systems."
    },
    {
      title: "Healthcare Monitoring",
      description: "Create patient monitoring systems with real-time alerts and automated health assessments."
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
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Satellite className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Edge Systems</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Intelligence at the <HighlightOnScroll>Edge</HighlightOnScroll>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            We design edge systems for real-time automation and analytics at the point of action. 
            From computer vision to IoT integration, we bring intelligence where decisions matter most.
          </p>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleBackToHome}
              className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Deploy Edge Intelligence</span>
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
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-purple-200 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <capability.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">
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
                Our edge systems bring AI processing directly to where data is generated, enabling real-time decisions 
                with minimal latency. We architect solutions that work reliably in challenging environments.
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
                  <span className="font-medium text-black">Edge Hardware:</span>
                  <span className="text-gray-600 ml-2">NVIDIA Jetson, Intel NUC, Raspberry Pi</span>
                </div>
                <div>
                  <span className="font-medium text-black">Computer Vision:</span>
                  <span className="text-gray-600 ml-2">OpenCV, YOLO, TensorFlow Lite</span>
                </div>
                <div>
                  <span className="font-medium text-black">IoT Platforms:</span>
                  <span className="text-gray-600 ml-2">AWS IoT, Azure IoT Hub, Google Cloud IoT</span>
                </div>
                <div>
                  <span className="font-medium text-black">Communication:</span>
                  <span className="text-gray-600 ml-2">MQTT, LoRaWAN, 5G, WiFi</span>
                </div>
                <div>
                  <span className="font-medium text-black">Edge Runtime:</span>
                  <span className="text-gray-600 ml-2">Docker, Kubernetes Edge, FreeRTOS</span>
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
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 cursor-pointer hover:border-purple-200"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy Edge Intelligence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how edge systems can bring real-time intelligence to your operations and unlock new possibilities.
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

export default EdgeSystems;