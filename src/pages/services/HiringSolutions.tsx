import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Target, CheckCircle, Zap, Clock, Brain } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const HiringSolutions = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whyChoosePoints = [
    {
      icon: Zap,
      title: "Speed + Precision",
      description: "Talent delivered without compromise on quality"
    },
    {
      icon: Target,
      title: "Scalable", 
      description: "From one critical role to large project teams, we can scale quickly"
    },
    {
      icon: Brain,
      title: "AI-Powered & Human-Led",
      description: "The perfect balance of technology and expertise"
    },
    {
      icon: CheckCircle,
      title: "Outcome-Driven",
      description: "Not just filling seats, but ensuring the right impact"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-rust/10 via-golden/5 to-purple/10">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="group bg-teal text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rust/20 via-golden/10 to-purple/15 relative overflow-hidden mb-20 -mx-6 px-6">
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
            <div className="w-24 h-24 bg-purple rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-6 shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">Hiring</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Solutions</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <Clock className="w-6 h-6 animate-pulse text-golden" />
              <span className="text-xl font-medium">We understand, we act, we fill</span>
              <Clock className="w-6 h-6 animate-pulse text-golden" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              At SevenX Global, we don't just promise talent—<span className="font-semibold text-black">we deliver it</span>. 
              We take your hiring needs, move fast, and place the right people where they're needed most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-golden text-white px-8 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Find Talent Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-purple text-purple px-8 py-4 rounded-lg hover:border-purple hover:bg-purple hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>Learn Our Process</span>
              </button>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple mb-12">Staffing Made Simple</h2>
          
          <div className="bg-gradient-to-r from-teal/10 to-purple/10 rounded-3xl p-8 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Staffing doesn't need to be complicated. The traditional hiring process often feels slow, uncertain, and disconnected from business urgency. At SevenX Global, we've built a straightforward, outcomes-first approach to staffing:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-rust cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rust group-hover:text-white transition-all duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                We Understand
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We start by deeply grasping your role requirements, culture fit, and business goals. No copy-paste resumes—just clarity.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-golden cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                We Act
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team mobilizes immediately, tapping into a proven talent network, advanced AI-driven screening, and domain experts to accelerate the process.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                We Fill
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We don't stop at shortlisting—we fill your positions with the right people who can deliver impact from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple mb-12">Why Choose SevenX Global as Your Staffing Partner?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer ${
                  index === 0 ? 'hover:border-golden' : 
                  index === 1 ? 'hover:border-teal' : 
                  index === 2 ? 'hover:border-purple' : 
                  'hover:border-rust'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:text-white transition-all duration-300 flex-shrink-0 ${
                    index === 0 ? 'group-hover:bg-golden' : 
                    index === 1 ? 'group-hover:bg-teal' : 
                    index === 2 ? 'group-hover:bg-purple' : 
                    'group-hover:bg-rust'
                  }`}>
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-black mb-2 transition-colors duration-300 ${
                      index === 0 ? 'group-hover:text-golden' : 
                      index === 1 ? 'group-hover:text-teal' : 
                      index === 2 ? 'group-hover:text-purple' : 
                      'group-hover:text-rust'
                    }`}>
                      {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rust via-golden to-purple rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Your business doesn't wait—and neither do we.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              When you need talent, we move. Staffing made simple: we understand, we act, we fill.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/#contact"
                onClick={handleScrollToTop}
                className="group bg-white text-teal px-8 py-4 rounded-lg hover:bg-teal hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
              >
                <span>Start Hiring Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringSolutions;