import React from 'react';
import { Building2, Heart, Star, Quote, ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';
import HighlightOnScroll from '../components/HighlightOnScroll';
import ParticleBackground from '../components/ParticleBackground';
import Contact from '../components/Contact';

const Clients = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const clientProjects = [
    {
      id: 'healthcare',
      project: "HealthTrack Mobile App",
      industry: "Healthcare",
      businessNeed: "Remote patient monitoring and medication adherence tracking for chronic disease management",
      solution: "AI-powered mobile health platform with predictive analytics and automated alert systems",
      techUsed: "React Native, TensorFlow Lite, Node.js, PostgreSQL, AWS IoT, Machine Learning APIs",
      impact: "85% improvement in patient medication adherence, 40% reduction in hospital readmissions, serving 50K+ patients",
      testimonial: "SevenX Global transformed our patient care delivery. The AI-driven insights have revolutionized how we monitor and support our chronic disease patients.",
      client: "Dr. Sarah Johnson, Chief Medical Officer",
      color: "teal",
      category: "Mobile Apps"
    },
    {
      id: 'retail',
      project: "RetailBot Assistant",
      industry: "Retail & E-commerce",
      businessNeed: "24/7 customer support automation and personalized product recommendations to increase sales conversion",
      solution: "Intelligent conversational AI bot with natural language processing and recommendation engine integration",
      techUsed: "Python, OpenAI GPT, Dialogflow, React, MongoDB, Redis, Stripe API, Analytics Dashboard",
      impact: "300% increase in customer engagement, 65% reduction in support tickets, 45% boost in average order value",
      testimonial: "Our customers love the instant, personalized support. The bot handles complex queries beautifully and has significantly improved our sales metrics.",
      client: "Michael Chen, VP of Customer Experience",
      color: "purple",
      category: "AI Bots"
    },
    {
      id: 'manufacturing',
      project: "SmartFactory Automation",
      industry: "Manufacturing",
      businessNeed: "Streamline production workflows, reduce manual errors, and optimize equipment maintenance scheduling",
      solution: "End-to-end workflow automation system with predictive maintenance and quality control AI",
      techUsed: "Python, Apache Airflow, Docker, Kubernetes, Industrial IoT sensors, Computer Vision, PostgreSQL",
      impact: "50% reduction in production downtime, 30% decrease in manufacturing defects, 25% cost savings annually",
      testimonial: "The automation platform has transformed our manufacturing efficiency. We now predict equipment failures before they happen and maintain consistent quality.",
      client: "Jennifer Rodriguez, Operations Director",
      color: "golden",
      category: "Manufacturing"
    },
    {
      id: 'finance',
      project: "FinanceFlow Mobile Suite",
      industry: "Financial Services",
      businessNeed: "Modernize legacy banking systems with secure mobile banking and automated compliance reporting",
      solution: "AI-native fintech platform with biometric security, automated fraud detection, and regulatory compliance",
      techUsed: "Flutter, Node.js, Blockchain, AI/ML APIs, Biometric Authentication, AWS Security, Compliance APIs",
      impact: "90% faster transaction processing, 99.8% fraud detection accuracy, full regulatory compliance achieved",
      testimonial: "SevenX Global delivered a banking solution that exceeds industry security standards while providing an exceptional user experience.",
      client: "Robert Kim, Chief Technology Officer",
      color: "sky",
      category: "Mobile Apps"
    },
    {
      id: 'education',
      project: "EduAdapt Learning Platform",
      industry: "Education Technology",
      businessNeed: "Personalized learning experiences that adapt to individual student progress and learning styles",
      solution: "Adaptive AI tutoring system with real-time progress tracking and personalized curriculum generation",
      techUsed: "React, Python, TensorFlow, Natural Language Processing, Learning Analytics, Cloud Infrastructure",
      impact: "70% improvement in student engagement, 55% faster learning progression, 95% student satisfaction rate",
      testimonial: "The platform has revolutionized how our students learn. Each student now gets a truly personalized education experience that adapts to their needs.",
      client: "Dr. Amanda Foster, Head of Digital Learning",
      color: "rust",
      category: "Automation"
    }
  ];

  const projectCategories = [
    { name: "All Projects", key: "all" },
    { name: "Mobile Apps", key: "Mobile Apps" },
    { name: "AI Bots", key: "AI Bots" },
    { name: "Manufacturing", key: "Manufacturing" },
    { name: "Automation", key: "Automation" }
  ];

  const filteredProjects = activeTab === 0 
    ? clientProjects 
    : clientProjects.filter(project => project.category === projectCategories[activeTab].key);
  return (
    <div className="min-h-screen pt-20 bg-white relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="text-left mb-20 pt-8">
          <div className="flex items-center space-x-3 mb-8">
            <Building2 className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Client Success Stories</span>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 leading-tight">
              <HighlightOnScroll className="font-semibold">Transforming Industries</HighlightOnScroll>
              <span className="block text-gray-600 mt-2">One Solution at a Time</span>
            </h1>
          </div>

          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
              From startups to enterprises, we've partnered with organizations across industries to deliver 
              <span className="font-semibold text-black"> measurable results through intelligent solutions</span>.
            </p>
            
            <div className="flex items-center space-x-4 text-gray-600 mb-12">
              <Star className="w-5 h-5" />
              <span className="text-lg">Real projects. Real impact. Real testimonials.</span>
              <Star className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-teal group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-purple group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Industries</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-golden group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Client Projects Table */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-12">
            <Users className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-black">Project Portfolio</h2>
          </div>

          {/* Tabbed Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-2 rounded-2xl">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 min-w-fit ${
                  activeTab === index
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-transparent text-gray-600 hover:text-black hover:bg-white hover:shadow-md hover:scale-102'
                }`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{category.name}</span>
                  {activeTab === index && (
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
                      {index === 0 ? clientProjects.length : filteredProjects.length}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Display */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 cursor-pointer hover:scale-[1.02] text-white relative overflow-hidden ${
                  project.color === 'teal' ? 'bg-teal' :
                  project.color === 'purple' ? 'bg-purple' :
                  project.color === 'golden' ? 'bg-golden' :
                  project.color === 'sky' ? 'bg-sky' :
                  'bg-rust'
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  {/* Heart Icon */}
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Industry Badge */}
                  <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-white bg-opacity-20">
                    {project.industry}
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
                    {project.project}
                  </h3>
                  
                  {/* Category */}
                  <p className="text-white text-opacity-90 mb-4 font-medium">
                    {project.category}
                  </p>
                  
                  {/* Business Need - Shortened */}
                  <p className="text-white text-opacity-80 text-sm leading-relaxed mb-4">
                    {project.businessNeed.length > 100 ? 
                      `${project.businessNeed.substring(0, 100)}...` : 
                      project.businessNeed
                    }
                  </p>
                  
                  {/* Impact Highlight */}
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
                    <p className="text-white text-sm font-semibold">
                      {project.impact.split(',')[0]}
                    </p>
                  </div>
                  
                  {/* View Details Button */}
                  <div className="flex items-center justify-center space-x-2 text-white text-opacity-80 group-hover:text-white transition-all duration-300 text-sm">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state for filtered results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 col-span-full">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category to view our work.</p>
            </div>
          )}
        </section>


        {/* CTA Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 via-purple/20 to-golden/20 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 text-lg mb-6">
                <Star className="w-6 h-6 text-golden" />
                <span className="font-bold text-2xl">Ready to Join Our Success Stories?</span>
                <Star className="w-6 h-6 text-golden" />
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                Whether you're looking to streamline operations, enhance customer experience, or drive innovation, we're here to transform your vision into measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden font-semibold"
                >
                  <span>Start Your Success Story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Contact />
    </div>
  );
};

export default Clients;