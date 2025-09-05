import React from 'react';
import { Target, Users, Heart, Infinity, ArrowRight, Building2, Lightbulb, Rocket, CheckCircle, Star, Zap, Globe, Shield, Brain, Layers, Award, TrendingUp, Settings, Eye, ChevronRight } from 'lucide-react';
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
      description: "Every system starts with a solid foundation—clear purpose, defined strategy, and strong values that guide every decision.",
      accent: "teal"
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Structure",
      description: "True innovation comes from disciplined thinking and systematic approaches, not random creativity.",
      accent: "purple"
    },
    {
      icon: Rocket,
      title: "Scale with Intelligence",
      description: "Systems that scale intelligently maintain their core principles while adapting to new challenges and opportunities.",
      accent: "golden"
    }
  ];

  const stackFeatures = [
    { icon: Brain, title: "AI-Native Architecture", description: "Built for intelligence from the ground up" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade protection and compliance" },
    { icon: Zap, title: "Real-time Processing", description: "Instant insights and lightning-fast responses" },
    { icon: Globe, title: "Global Scale", description: "Designed to work across continents and cultures" },
    { icon: Layers, title: "Modular Design", description: "Flexible components that adapt to your needs" },
    { icon: Award, title: "Proven Excellence", description: "Battle-tested in demanding environments" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-golden/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="text-left mb-24 pt-12">
          <div className="flex items-center space-x-4 mb-8 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Infinity className="w-10 h-10 text-gray-400 group-hover:text-teal transition-all duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 w-10 h-10">
                <div className="w-1.5 h-1.5 bg-teal rounded-full animate-infinity-dot shadow-lg"></div>
              </div>
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Our Foundation</span>
          </div>

          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight tracking-tight">
              <HighlightOnScroll className="font-semibold">SevenX Global</HighlightOnScroll>
              <span className="block text-gray-600 mt-4 hover:text-black transition-colors duration-500">Stack</span>
            </h1>
          </div>

          <div className="max-w-5xl mb-12">
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-light">
              More than technology. More than process. A complete foundation for building 
              <span className="font-semibold text-black relative">
                <span className="bg-gradient-to-r from-teal/20 via-purple/20 to-golden/20 absolute inset-0 -skew-x-12 transform"></span>
                <span className="relative"> intelligent systems</span>
              </span>.
            </p>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-12 group">
              <Star className="w-6 h-6 text-golden group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-medium group-hover:text-gray-800 transition-colors duration-300">The DNA of intelligent transformation</span>
              <Star className="w-6 h-6 text-golden group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mb-16">
            <div className="text-center group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-teal/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-teal group-hover:scale-110 transition-transform duration-300 mb-2">3</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">Core Layers</div>
            </div>
            <div className="text-center group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-purple/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-purple group-hover:scale-110 transition-transform duration-300 mb-2">∞</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">Possibilities</div>
            </div>
            <div className="text-center group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-golden/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-golden group-hover:scale-110 transition-transform duration-300 mb-2">1</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">Foundation</div>
            </div>
            <div className="text-center group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">Reliable</div>
            </div>
          </div>

          {/* Stack Features Preview */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {stackFeatures.map((feature, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-gray-800 mb-1 group-hover:text-gray-900">{feature.title}</h4>
                <p className="text-xs text-gray-600 leading-tight">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Introduction Section with Enhanced Design */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal/80 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-black">The Complete Foundation</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                At <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll>, we don't just build products. We build systems that think, adapt, and evolve. Behind every intelligent system is the foundation of our SevenX Stack.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border-l-4 border-blue-400">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-black mb-3">Our stack isn't just technical.</p>
                    <p className="text-lg text-gray-700">It's the complete DNA of how we think, work, and deliver transformational impact.</p>
                  </div>
                </div>
              </div>
              
              <p>
                The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> is built on three interconnected layers: <HighlightOnScroll>Purpose</HighlightOnScroll> (why we exist), 
                <HighlightOnScroll>Strategy</HighlightOnScroll> (how we deliver), and <HighlightOnScroll>Culture</HighlightOnScroll> (the values that drive us).
              </p>
            </div>
            
            {/* Visual Stack Representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-teal/10 rounded-xl border border-teal/20">
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Purpose Layer</div>
                      <div className="text-sm text-gray-600">Vision • Mission • Promise</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-purple/10 rounded-xl border border-purple/20">
                    <div className="w-10 h-10 bg-purple rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Strategy Layer</div>
                      <div className="text-sm text-gray-600">People • Process • Technology</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-golden/10 rounded-xl border border-golden/20">
                    <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Culture Layer</div>
                      <div className="text-sm text-gray-600">Mindset • Integrity • Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles with World-Class Design */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-purple to-purple/80 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-black">Core Principles</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {stackPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer hover:border-${principle.accent}/30 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${principle.accent}/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${principle.accent} group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                    <principle.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold text-black mb-4 group-hover:text-${principle.accent} transition-colors duration-300`}>
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
                  
                  <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Enhanced Stack Layers */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-golden to-golden/80 rounded-xl flex items-center justify-center shadow-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-black">The Stack Layers</h2>
          </div>
          
          <div className="mb-16">
            <p className="text-xl text-gray-600 mb-6 max-w-4xl leading-relaxed">
              Each layer of our stack serves a specific function, but they work together as an integrated whole.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
              Purpose defines our direction, Strategy guides our execution, and Culture ensures we stay true to our values as we scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Purpose Stack - Enhanced */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer hover:border-teal/30 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center group-hover:bg-teal group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Target className="w-7 h-7 text-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-teal transition-colors duration-300">Purpose Stack</h3>
                </div>
                
                <div className="bg-teal/5 rounded-xl p-4 mb-10 group-hover:bg-teal/10 transition-colors duration-300">
                  <p className="text-sm font-semibold text-teal uppercase tracking-widest">
                    Why & What for We Exist
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { title: "Vision", content: "A world where every decision enriches human experience." },
                    { title: "Mission", content: "Empower businesses to transform data into decisive intelligence." },
                    { title: "Brand Promise", content: "Data to Decisions — Intelligently." }
                  ].map((item, idx) => (
                    <div key={idx} className="group/item bg-gray-50/50 rounded-xl p-6 group-hover:bg-white/80 transition-all duration-300 border border-transparent group-hover:border-teal/20">
                      <h4 className="text-xl font-bold text-black mb-3 group-hover/item:text-teal transition-colors duration-300 flex items-center">
                        <span>{item.title}</span>
                        <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategy Stack - Enhanced */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer hover:border-purple/30 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-purple/10 rounded-2xl flex items-center justify-center group-hover:bg-purple group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Users className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-purple transition-colors duration-300">Strategy Stack</h3>
                </div>
                
                <div className="bg-purple/5 rounded-xl p-4 mb-10 group-hover:bg-purple/10 transition-colors duration-300">
                  <p className="text-sm font-semibold text-purple uppercase tracking-widest">
                    How We Deliver Results
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { title: "People", content: "Visionaries · Leaders · Executors" },
                    { title: "Process", content: "Repeatable. Reliable. Measurable" },
                    { title: "Technology", content: "Future-Ready · Innovative" }
                  ].map((item, idx) => (
                    <div key={idx} className="group/item bg-gray-50/50 rounded-xl p-6 group-hover:bg-white/80 transition-all duration-300 border border-transparent group-hover:border-purple/20">
                      <h4 className="text-xl font-bold text-black mb-3 group-hover/item:text-purple transition-colors duration-300 flex items-center">
                        <span>{item.title}</span>
                        <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Culture Stack - Enhanced */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer hover:border-golden/30 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-golden/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-golden/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-golden/10 rounded-2xl flex items-center justify-center group-hover:bg-golden group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Heart className="w-7 h-7 text-golden group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-black group-hover:text-golden transition-colors duration-300">Culture Stack</h3>
                </div>
                
                <div className="bg-golden/5 rounded-xl p-4 mb-10 group-hover:bg-golden/10 transition-colors duration-300">
                  <p className="text-sm font-semibold text-golden uppercase tracking-widest">
                    Values That Drive Us
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { title: "Mindset First", content: "Well-Being · Merit that wins" },
                    { title: "Integrity Always", content: "Transparent and Explainable" },
                    { title: "Impact Forever", content: "Being a change agent" }
                  ].map((item, idx) => (
                    <div key={idx} className="group/item bg-gray-50/50 rounded-xl p-6 group-hover:bg-white/80 transition-all duration-300 border border-transparent group-hover:border-golden/20">
                      <h4 className="text-xl font-bold text-black mb-3 group-hover/item:text-golden transition-colors duration-300 flex items-center">
                        <span>{item.title}</span>
                        <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Implementation Section */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-black">How We Apply Our Stack</h2>
          </div>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed max-w-5xl mb-16">
            <p>
              The <HighlightOnScroll className="font-semibold text-black">SevenX Global Stack</HighlightOnScroll> isn't just theory—it's how we operate every day. From product decisions to team dynamics, 
              every aspect of our work is guided by these three foundational layers.
            </p>
          </div>
            
          <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-3xl p-12 border border-gray-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Eye className="w-8 h-8 text-gray-600" />
                <h3 className="text-3xl font-bold text-black">Stack in Action</h3>
                <Eye className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our foundational principles translate into real-world excellence</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="text-center group bg-white rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-teal transition-all duration-300">
                  <Target className="w-10 h-10 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-teal transition-colors duration-300">In Product Development</h4>
                <p className="text-gray-600 leading-relaxed">Every feature aligns with our mission to transform data into decisive intelligence</p>
              </div>
              
              <div className="text-center group bg-white rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-purple transition-all duration-300">
                  <Users className="w-10 h-10 text-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-purple transition-colors duration-300">In Team Collaboration</h4>
                <p className="text-gray-600 leading-relaxed">Cross-functional teams work with shared processes and clear accountability</p>
              </div>
              
              <div className="text-center group bg-white rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-golden/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-golden transition-all duration-300">
                  <Heart className="w-10 h-10 text-golden group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-golden transition-colors duration-300">In Client Relationships</h4>
                <p className="text-gray-600 leading-relaxed">Integrity and transparency guide every interaction and delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class CTA Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal/20 via-purple/20 to-golden/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-golden/20 via-teal/20 to-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-golden to-golden/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Ready to Build on Our Stack?</h2>
                <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <p className="text-gray-300 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                Whether you're looking to join our team or partner with us on your next intelligent system, our stack provides the foundation for exceptional outcomes that transform businesses and enrich human experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <button 
                  onClick={() => window.location.href = '/careers'}
                  className="group bg-white text-black px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-2xl active:scale-95 font-semibold text-lg min-w-64"
                >
                  <Users className="w-6 h-6" />
                  <span>Explore Careers</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 font-semibold text-lg min-w-64 flex items-center space-x-3"
                >
                  <Rocket className="w-6 h-6" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-16 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-6 text-sm font-medium uppercase tracking-wider">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm">Fortune 500</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">Enterprise Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm">Global Scale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm">Industry Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stack;