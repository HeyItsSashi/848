import React from 'react';
import { Bot, ArrowLeft, CheckCircle, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const AINativePlatforms = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const features = [
    {
      icon: Bot,
      title: "AI Consulting & Solution Design",
      description: "Strategic AI roadmaps and architecture design tailored to your business objectives",
      benefits: ["Custom AI strategy development", "Technology stack selection", "ROI analysis and planning"]
    },
    {
      icon: Zap,
      title: "AI Product Development",
      description: "End-to-end development of AI-powered products and applications",
      benefits: ["MVP to production scaling", "User experience optimization", "Performance monitoring"]
    },
    {
      icon: Target,
      title: "AI System Modernization",
      description: "Upgrade legacy systems with modern AI capabilities and architectures",
      benefits: ["Legacy system integration", "Modern AI framework adoption", "Scalability improvements"]
    }
  ];

  const useCases = [
    "Intelligent document processing and automation",
    "Predictive analytics and forecasting systems", 
    "Natural language processing applications",
    "Computer vision and image recognition",
    "Recommendation engines and personalization",
    "Automated decision-making systems"
  ];

  const industries = [
    "Financial Services", "Healthcare", "Manufacturing", "Retail", "Technology", "Government"
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/services" 
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:text-black transition-all duration-300 group hover:scale-105 hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-left mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-600">Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            AI-Native Platforms
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            Build AI-native platforms with <HighlightOnScroll>closed-loop intelligence</HighlightOnScroll> that learn and adapt continuously.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">What We Deliver</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our AI-Native Platform service transforms your business with intelligent systems that don't just process data—they learn, 
              adapt, and evolve. We build platforms that think ahead, make autonomous decisions, and continuously improve their performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From initial strategy to full deployment, we ensure your AI platform delivers measurable business value while 
              maintaining transparency, reliability, and scalability.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Our Approach</h2>
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
          <h2 className="text-3xl font-bold text-black mb-8">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your AI-Native Platform?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent systems that learn, adapt, and deliver continuous value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              onClick={handleScrollToTop}
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your Project</span>
              <Bot className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              onClick={handleScrollToTop}
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

export default AINativePlatforms;