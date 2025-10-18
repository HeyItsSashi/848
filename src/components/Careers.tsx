import React from 'react';
import { Brain, Users, Zap, Mail, ArrowRight, Heart, Target } from 'lucide-react';
import HighlightOnScroll from './HighlightOnScroll';

const Careers = () => {
  const roles = [
    {
      title: "AI Engineer",
      description: "Build and deploy agentic systems for real-time decisions. Work with LLMs, edge-AI, and domain-specific models."
    },
    {
      title: "Frontend Engineer (React/Tailwind)",
      description: "Bring our systems to life with intuitive interfaces. Strong eye for detail and performance."
    },
    {
      title: "Product Designer",
      description: "Shape the feel and function of agent-first tools. Experience in motion, systems thinking, and data UI is a plus."
    },
    {
      title: "Platform Engineer",
      description: "Help us scale safely. Secure, observable, resilient infrastructure is your craft."
    },
    {
      title: "Zero-to-One PM",
      description: "Own products from blank page to first users. Navigate ambiguity with energy, vision, and clarity."
    }
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
      title: "Human-First Culture",
      description: "No \"always on\" expectations. Space to recover, reset, and be human."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-left mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Careers at Acantix
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            We don't just hire. We build with <HighlightOnScroll>people who build</HighlightOnScroll>.
          </p>
        </div>

        {/* Why Join Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl">👋</span>
            <h2 className="text-3xl font-bold text-black">Why Join Acantix?</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
              At Acantix, we create technologies that think, adapt, and scale. Our products aren't just smart—they're 
              <HighlightOnScroll className="font-semibold text-black"> agentic</HighlightOnScroll>, 
              <HighlightOnScroll className="font-semibold text-black"> autonomous</HighlightOnScroll>, and 
              <HighlightOnScroll className="font-semibold text-black"> purpose-built</HighlightOnScroll> for real-world impact.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-400">
              <p className="text-xl font-semibold text-black mb-4">But here's the secret:</p>
              <p className="text-lg">It's not about the tools. It's about the people behind them.</p>
            </div>
            
            <p>
              We're building a company for <HighlightOnScroll>deep thinkers</HighlightOnScroll>, 
              <HighlightOnScroll> restless builders</HighlightOnScroll>, and 
              <HighlightOnScroll> clear communicators</HighlightOnScroll>—people who care about what gets shipped, 
              what it does, and how it feels to use.
            </p>
          </div>
        </div>

        {/* How We Hire Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl">🔍</span>
            <h2 className="text-3xl font-bold text-black">How We Hire</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-700">We don't run job ads.</p>
                <p className="text-lg text-gray-700">We don't chase resumes.</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg font-semibold text-black">Instead, we:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Follow curiosity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Find people doing interesting things</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Build roles around exceptional individuals</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg font-semibold text-black mb-4">If you're someone who:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Asks questions that unlock better systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Wants ownership without hand-holding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Thrives in ambiguity but acts with clarity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Cares as much about "how" as about "what"</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-black mt-6">…you might be in the right place.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🗣</span>
              <p className="text-lg font-semibold text-black">We hire primarily through referrals and conversations.</p>
            </div>
            <p className="text-gray-700">
              If someone at Acantix knows you, start there. If not, email us at 
              <span className="relative group cursor-pointer mx-1">
                <span className="font-semibold text-black hover:scale-105 transition-transform duration-300">join@Acantix.com</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full" style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), #9333ea)'}}></span>
              </span>
              with a note on what you're obsessed with solving.
            </p>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-12">
            <span className="text-2xl">💛</span>
            <h2 className="text-3xl font-bold text-black">How We Work</h2>
          </div>
          
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
        </div>

        {/* Roles Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl">👇</span>
            <h2 className="text-3xl font-bold text-black">A Few Roles We're Always Exploring</h2>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            Don't see your title here? Doesn't matter.<br />
            We're hiring <HighlightOnScroll>humans</HighlightOnScroll>, not roles.
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
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-3xl p-12 text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-3xl">✉️</span>
            <h2 className="text-3xl font-bold">Ready to Build With Us?</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Acantix is a next-generation technology company focused on building intelligent, balanced, 
            and scalable systems that drive real-world impact through closed-loop intelligence.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl">📩</span>
              <span>Drop us a note at</span>
              <span className="relative group cursor-pointer">
                <span className="font-bold hover:scale-105 transition-transform duration-300">join@Acantix.com</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
            <p className="text-gray-300">Tell us what excites you and where you want to make an impact.</p>
          </div>
          
          <button className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden mx-auto mt-8">
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;