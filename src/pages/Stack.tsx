import React from 'react';
import { Target, Users, Heart, Infinity, ArrowRight, Building2, Lightbulb, Rocket, CheckCircle, Star } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';

const Stack = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stackPrinciples = [
    {
      icon: Building2,
      title: "Foundation First",
      description: "A solid foundation is not just the start—it’s the strength that carries growth long term.."
    },
    {
      icon: Lightbulb,
      title: "Efficiencies Next",
      description: "Once the foundation is set, efficiency becomes the driver that accelerates progress and performance.."
    },
    {
      icon: Rocket,
      title: "Innovation Always",
      description: "Innovation is woven into our culture, driving us to reimagine possibilities and shape the future.."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="text-left mb-20 pt-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="relative w-8 h-8 flex items-center justify-center group">
              <Infinity className="w-8 h-8 text-gray-400 group-hover:text-teal transition-colors duration-300" />
              <div className="absolute inset-0 w-8 h-8">
                <div className="w-1 h-1 bg-teal rounded-full animate-infinity-dot"></div>
              </div>
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Our Foundation</span>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 leading-tight">
              <HighlightOnScroll className="font-semibold">SevenX Stack</HighlightOnScroll>
              <span className="block text-gray-600 mt-2"></span>
            </h1>
          </div>

          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
              More than technology. More than process. A complete foundation for building 
              <span className="font-semibold text-black"> </span>.
            </p>
            
            <div className="flex items-center space-x-4 text-gray-600 mb-12">
              <Star className="w-5 h-5" />
              <span className="text-lg">The DNA of intelligent transformation</span>
              <Star className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-teal group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Core Layers</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-purple group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Possibilities</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-golden group-hover:scale-110 transition-transform duration-300">1</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Foundation</div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">The Complete Foundation</h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              At <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll>, we don't just build products. We go by strong values, principles build systems that think, behind every system there is a foundation of SevenX stack that makes it all possible.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 my-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-black mb-3">Our stack isn't just technical.</p>
                  <p className="text-lg text-gray-700">It's the complete DNA of how we think, work, and deliver impact.</p>
                </div>
              </div>
            </div>
            
            <p>
              The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> is built on three interconnected layers: <HighlightOnScroll>Purpose</HighlightOnScroll> (why we exist), 
              <HighlightOnScroll>Strategy</HighlightOnScroll> (how we deliver), and
               <HighlightOnScroll> Culture</HighlightOnScroll> (the values that drive us). 
              Together, they form the foundation for everything we create.
            </p>
          </div>
        </section>

        {/* Stack Principles */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-12">
            <Building2 className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">Core Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stackPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:border-gray-400"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Stack Layers Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Rocket className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">The Stack Layers</h2>
          </div>
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-4 max-w-4xl">
              Each layer of our stack serves a specific function, but they work together as an integrated whole.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl">
              Purpose defines our direction, Strategy guides our execution, and Culture ensures we stay true to our values as we scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Purpose Stack */}
            <div className="bg-teal rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                    <Target className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">Purpose Stack</h3>
                </div>
                
                <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                  Why & What for We Exist
                </p>

                <div className="space-y-8">
                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Vision</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      A world where every decision enriches human experience.
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Mission</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Empower businesses to transform data into decisive intelligence.
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Brand Promise</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Data to Decisions — Intelligently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy Stack */}
            <div className="bg-purple rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                    <Users className="w-6 h-6 text-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">Strategy Stack</h3>
                </div>
                
                <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                  How We Deliver Results
                </p>

                <div className="space-y-8">
                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">People</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Visionaries · Leaders · Executors
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Process</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Repeatable. Reliable. Measurable
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Technology</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Future-Ready · Innovative
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Stack */}
            <div className="bg-golden rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 cursor-pointer hover:bg-opacity-90 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                    <Heart className="w-6 h-6 text-golden" />
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">Culture Stack</h3>
                </div>
                
                <p className="text-sm font-medium text-white text-opacity-80 uppercase tracking-wider mb-8">
                  Values That Drive Us
                </p>

                <div className="space-y-8">
                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Mindset First</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Well-Being · Merit that wins
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Integrity Always</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Transparent and Explainable
                    </p>
                  </div>

                  <div className="group/item">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 relative cursor-pointer">
                      <span className="group-hover/item:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">Impact Forever</span>
                    </h4>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      Being a change agent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <CheckCircle className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">How We Apply Our Stack</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mb-12">
            <p>
              The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> isn't just theory—it's how we operate every day. From product decisions to team dynamics, 
              every aspect of our work is guided by these three foundational layers.
            </p>
          </div>
            
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-10 border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Stack in Action</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-black mb-3">In Product Development</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Every feature aligns with our mission to transform data into decisive intelligence</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-black mb-3">In Team Collaboration</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Cross-functional teams work with shared processes and clear accountability</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibent text-black mb-3">In Client Relationships</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Integrity and transparency guide every interaction and delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 via-purple/20 to-golden/20 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 text-lg mb-6">
                <Star className="w-6 h-6 text-golden" />
                <span className="font-bold text-2xl">Ready to Build on Our Stack?</span>
                <Star className="w-6 h-6 text-golden" />
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Whether you're looking to join our team or partner with us on your next intelligent system, our stack provides the foundation for exceptional outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => window.location.href = '/careers'}
                  className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden font-semibold"
                >
                  <span>Explore Careers</span>
                  <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden font-semibold"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stack;