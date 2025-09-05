import React from 'react';
import { Brain, Users, Zap, Mail, ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';

const Careers = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const roles = [
    {
      title: "AI Engineer",
      description: "Build and deploy agentic systems for real-time decisions. Work with LLMs, edge-AI, and domain-specific models."
    },
    {
      title: "Product Designer",
      description: "Shape the feel and function of agent-first tools. Experience in motion, systems thinking, and data UI is a plus."
    },
    {
      title: "Platform Engineer",
      description: "Help us scale safely. Secure, observable, resilient infrastructure is your craft."
    },
  ];

  const workPrinciples = [
    {
      icon: Brain,
      title: "Deep Work First",
      description: "We respect focus, async thinking, and flow. Our work patterns are designed for clarity and momentum—not noise."
    },
    {
      icon: Zap,
      title: "Growth Without Permission",
      description: "You don't need a promotion to explore. Team members self-initiate projects, experiments, and ideas. We help shape them into product-grade realities."
    },
    {
      icon: Users,
      title: "Systems, Not Silos",
      description: "Engineering works closely with design, product, data, and research. We're small enough to move fast and smart enough to stay aligned."
    },
    {
      icon: Heart,
      title: "Merit wins Culture",
      description: "Its not about democracy, its Meritocrcy."
    }
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Why Join Section */}
        <section className="text-left mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
             <h2 className="text-3xl font-bold text-black">
              <HighlightOnScroll className="font-semibold">SevenX Global</HighlightOnScroll> Careers
            </h2>
          </div>
           <div className="flex items-center space-x-3 mb-8">
                         <h2 className="text-3xl font-bold text-black">We don't just hire. <HighlightOnScroll>Careers aren’t jobs — they’re journeys of building impact</HighlightOnScroll>.</h2>

            <span className="text-2xl"></span>
          </div>
          <p className="text-2xl text-gray-700 mb-12 max-w-4xl">
          </p>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              At <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll> , we create technologies that think, adapt, and scale. Our products aren't just smart, they're 
              agentic , autonomous and purpose-built for real-world impact.
            </p>
            <p>
              We're building a company for deep thinkers restless builders and clear communicators people who care about what gets shipped,  what it does, and how it feels to use.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-400 my-10">
              <p className="text-xl font-semibold text-black mb-4">But here's the secret:</p>
              <p className="text-lg">It's not about the tools. It's about the people behind them.</p>
            </div>
            
            
          </div>
        </section>

        {/* How We Hire Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
            <h2 className="text-3xl font-bold text-black">We don't run job ads, We don't chase resume</h2>
          </div> 
        </section>

        {/* How We Work Section */}
        <section className="mb-20">
        
          
          <div className="grid md:grid-cols-2 gap-8">
            {workPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:scale-[1.02] ${
                  index === 0 ? 'bg-teal hover:bg-opacity-90' : 
                  index === 1 ? 'bg-purple hover:bg-opacity-90' : 
                  index === 2 ? 'bg-golden hover:bg-opacity-90' : 
                  'bg-rust hover:bg-opacity-90'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <principle.icon className={`w-6 h-6 ${
                      index === 0 ? 'text-teal' : 
                      index === 1 ? 'text-purple' : 
                      index === 2 ? 'text-golden' : 
                      'text-rust'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-white text-opacity-90 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl"></span>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
                        <h2 className="text-3xl font-bold text-black">We're hiring for passion not for roles</h2>
          </p>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 cursor-pointer border-2 hover:scale-[1.02] ${
                  index === 0 ? 'bg-teal hover:bg-opacity-90' : 
                  index === 1 ? 'bg-purple hover:bg-opacity-90' : 
                  'bg-golden hover:bg-opacity-90'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                    <span className="text-2xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed text-lg">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 text-center text-white">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl"></span>
                <span className="font-bold group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">join@SevenX.global</span>
            </div>
            <p className="text-gray-300">Tell us what excites you and where you want to make an impact.</p>
          </div>
          <button className="group bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden mx-auto mt-8">
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Careers;