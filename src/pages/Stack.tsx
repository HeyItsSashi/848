import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';

const Stack = () => {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-left mb-16">
           <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
          </div>
         
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
                        <h2 className="text-3xl font-bold text-black"> More than technology. More than process. A complete foundation for building intelligent systems.</h2>
          </p>
        </div>

        {/* What is the Stack Section */}
        <div className="mb-20">
      
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              At 848Labs, we don't just build products. We build systems that think , 
              adapt, and scale intelligently but behind every intelligent system is a foundation—a stack—that makes it all possible.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-400">
              <p className="text-xl font-semibold text-black mb-4">Our stack isn't just technical.</p>
              <p className="text-lg">It's the complete DNA of how we think, work, and deliver impact.</p>
            </div>
            
            <p>
              The 848Labs Stack is built on three interconnected layers: <HighlightOnScroll>Purpose</HighlightOnScroll> (why we exist), 
              <HighlightOnScroll>Strategy</HighlightOnScroll> (how we deliver), and
               <HighlightOnScroll>Culture</HighlightOnScroll> (the values that drive us). 
              Together, they form the foundation for everything we create.
            </p>
          </div>
        </div>
        {/* The Three Layers Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-12">
            <span className="text-2xl"></span>
            <h2 className="text-3xl font-bold text-black">The Stack Layers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl">
            Each layer of our stack serves a specific function, but they work together as an integrated whole. Purpose defines our direction, Strategy guides our execution, and Culture ensures we stay true to our values as we scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Purpose Stack */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-gray-100 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 group-hover:text-black transition-colors duration-300">Purpose Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Why & What for We Exist
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A world where every decision enriches human experience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Mission</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Empower businesses to transform data into decisive intelligence.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Brand Promise</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Data to Decisions — Intelligently.
                </p>
              </div>
            </div>
          </div>

          {/* Strategy Stack */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-gray-100 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 group-hover:text-black transition-colors duration-300">Strategy Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              How We Deliver Results
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">People</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Visionaries · Leaders · Executors
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Process</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Repeatable. Reliable. Measurable
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Technology</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Future-Ready · Innovative
                </p>
              </div>
            </div>
          </div>

          {/* Culture Stack */}
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-gray-100 hover:scale-[1.02]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center group-hover:bg-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 group-hover:text-black transition-colors duration-300">Culture Stack</h3>
            </div>
            
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
              Values That Drive Us
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Mindset First</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Well-Being · Merit that wins
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Integrity Always</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Transparent and Explainable
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-2 transition-colors duration-300 relative group cursor-pointer">
                  <span className="group-hover:underline decoration-2 decoration-blue-400 underline-offset-2 hover:scale-105 transition-all duration-300">Impact Forever</span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Being a change agent
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Apply Our Stack Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
            <h2 className="text-3xl font-bold text-black">How We Apply Our Stack</h2>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              The 848Labs Stack isn't just theory it's how we operate every day. From product decisions to team dynamics, 
              every aspect of our work is guided by these three foundational layers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">In Product Development</h4>
                <p className="text-sm text-gray-600">Every feature aligns with our mission to transform data into decisive intelligence</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">In Team Collaboration</h4>
                <p className="text-sm text-gray-600">Cross-functional teams work with shared processes and clear accountability</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-black mb-2">In Client Relationships</h4>
                <p className="text-sm text-gray-600">Integrity and transparency guide every interaction and delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl font-bold">Ready to Build on Our Stack?</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're looking to join our team or partner with us on your next intelligent system, 
            our stack provides the foundation for exceptional outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden">
              <span>Explore Careers</span>
              <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden">
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;