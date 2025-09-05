import React from 'react';
import { Brain, Users, Zap, Mail, ArrowRight, Heart, Target, Lightbulb } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';

const Careers = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          </div>
           <div className="flex items-center space-x-3 mb-8">
                         <h2 className="text-3xl font-bold text-black">We don't just hire. We build with <HighlightOnScroll>people who build</HighlightOnScroll>.</h2>

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
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:border-blue-200 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
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
          
          <div className="space-y-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                      {role.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-3xl p-12 text-center text-white">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl"></span>
                <span className="font-bold group-hover:underline decoration-2 decoration-white underline-offset-2 hover:scale-105 transition-all duration-300">join@SevenX.global</span>
            </div>
            <p className="text-gray-300">Tell us what excites you and where you want to make an impact.</p>
          </div>
          <button className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden mx-auto mt-8">
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