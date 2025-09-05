import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';

const Stack = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-left mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
          </div>
          <div className="flex items-center space-x-3 mb-8">
            <h2 className="text-3xl font-bold text-black">
              <HighlightOnScroll className="font-semibold">SevenX Global</HighlightOnScroll> Stack
            </h2>
            <span className="text-2xl"></span>
          </div>
          <p className="text-2xl text-gray-700 mb-12 max-w-4xl">
            More than technology. More than process. A complete foundation for building intelligent systems.
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              At <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll>, we don't just build products. We go by strong values, principles build systems that think, behind every system there is a foundation of SevenX stack that makes it all possible.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-400 my-10">
              <p className="text-xl font-semibold text-black mb-4">Our stack isn't just technical.</p>
              <p className="text-lg">It's the complete DNA of how we think, work, and deliver impact.</p>
            </div>
            
            <p>
              The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> is built on three interconnected layers: <HighlightOnScroll>Purpose</HighlightOnScroll> (why we exist), 
              <HighlightOnScroll>Strategy</HighlightOnScroll> (how we deliver), and
               <HighlightOnScroll>Culture</HighlightOnScroll> (the values that drive us). 
              Together, they form the foundation for everything we create.
            </p>
          </div>
        </section>
        
        {/* Stack Layers Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
            <h2 className="text-3xl font-bold text-black">The Stack Layers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Each layer of our stack serves a specific function, but they work together as an integrated whole.<br />
            Purpose defines our direction, Strategy guides our execution, and Culture ensures we stay true to our values as we scale.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Purpose Stack */}
            <div className="bg-teal rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                  <Target className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300">Purpose Stack</h3>
              </div>
              
              <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                Why & What for We Exist
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    A world where every decision enriches human experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Mission</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Empower businesses to transform data into decisive intelligence.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Brand Promise</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Data to Decisions — Intelligently.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Stack */}
            <div className="bg-purple rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                  <Users className="w-5 h-5 text-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300">Strategy Stack</h3>
              </div>
              
              <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                How We Deliver Results
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">People</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Visionaries · Leaders · Executors
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Process</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Repeatable. Reliable. Measurable
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Technology</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Future-Ready · Innovative
                  </p>
                </div>
              </div>
            </div>

            {/* Culture Stack */}
            <div className="bg-golden rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02]">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                  <Heart className="w-5 h-5 text-golden" />
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors duration-300">Culture Stack</h3>
              </div>
              
              <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                Values That Drive Us
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Mindset First</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Well-Being · Merit that wins
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Integrity Always</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Transparent and Explainable
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Impact Forever</span>
                  </h4>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    Being a change agent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
            <h2 className="text-3xl font-bold text-black">How We Apply Our Stack</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> isn't just theory—it's how we operate every day. From product decisions to team dynamics, 
              every aspect of our work is guided by these three foundational layers.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 my-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">In Product Development</h4>
                  <p className="text-sm text-gray-600">Every feature aligns with our mission to transform data into decisive intelligence</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">In Team Collaboration</h4>
                  <p className="text-sm text-gray-600">Cross-functional teams work with shared processes and clear accountability</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">In Client Relationships</h4>
                  <p className="text-sm text-gray-600">Integrity and transparency guide every interaction and delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 text-center text-white mb-20">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl"></span>
              <span className="font-bold group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Ready to Build on Our Stack?</span>
            </div>
            <p className="text-gray-300">Whether you're looking to join our team or partner with us on your next intelligent system, our stack provides the foundation for exceptional outcomes.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <button className="group bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden">
              <span>Explore Careers</span>
              <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden">
              <span>Start a Project</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stack;