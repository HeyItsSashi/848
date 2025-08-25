import React from 'react';
import { Factory, ArrowLeft, CheckCircle, Smartphone, Shield, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const EnterpriseSolutions = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const features = [
    {
      icon: Smartphone,
      title: "AI Powered Mobile and Enterprise Apps",
      description: "Custom applications with embedded AI capabilities for enhanced user experiences",
      benefits: ["Cross-platform development", "AI-driven features", "Enterprise integration"]
    },
    {
      icon: Shield,
      title: "AI Assurance & Cyber Security",
      description: "Comprehensive security frameworks powered by AI for threat detection and prevention",
      benefits: ["Real-time threat detection", "Automated response systems", "Compliance management"]
    },
    {
      icon: Cog,
      title: "Enterprise Automation & Operations",
      description: "Streamline business processes with intelligent automation and operational excellence",
      benefits: ["Process optimization", "Workflow automation", "Performance monitoring"]
    }
  ];

  const solutions = [
    {
      title: "Digital Transformation",
      description: "Complete modernization of legacy systems with AI-first architecture",
      items: ["Legacy system migration", "Cloud-native solutions", "API-first design"]
    },
    {
      title: "Intelligent Automation",
      description: "Automate complex business processes with AI-driven decision making",
      items: ["RPA with AI", "Document processing", "Workflow orchestration"]
    },
    {
      title: "Enterprise Analytics",
      description: "Advanced analytics platforms for data-driven decision making",
      items: ["Real-time dashboards", "Predictive analytics", "Business intelligence"]
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Manufacturing", "Government", 
    "Telecommunications", "Energy & Utilities", "Retail", "Transportation"
  ];

  const benefits = [
    "Reduced operational costs by up to 40%",
    "Improved decision-making speed by 3x",
    "Enhanced customer satisfaction scores",
    "Streamlined compliance and reporting",
    "Scalable architecture for future growth",
    "24/7 monitoring and support"
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
              <Factory className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-600">Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Enterprise Solutions
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            Deliver enterprise-ready solutions with <HighlightOnScroll>clarity and speed</HighlightOnScroll> for complex business challenges.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Enterprise-Grade Solutions</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Enterprise Solutions service delivers comprehensive, scalable, and secure systems designed for large-scale 
              operations. We understand the complexity of enterprise environments and build solutions that integrate seamlessly 
              with existing infrastructure while providing the agility needed for modern business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From mobile applications to cybersecurity frameworks, we provide end-to-end solutions that drive efficiency, 
              reduce costs, and enable digital transformation at enterprise scale.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Our Capabilities</h2>
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

        {/* Solutions Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Solution Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Business Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
              >
                <span className="text-gray-700 group-hover:text-black font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs" },
              { step: "02", title: "Design", desc: "Architecture and solution planning" },
              { step: "03", title: "Develop", desc: "Agile development and testing" },
              { step: "04", title: "Deploy", desc: "Implementation and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-black mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Transform Your Enterprise</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build scalable, secure, and intelligent solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              onClick={handleScrollToTop}
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your Project</span>
              <Factory className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default EnterpriseSolutions;