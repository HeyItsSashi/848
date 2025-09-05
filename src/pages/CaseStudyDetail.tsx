import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Building2, Target, Cog, TrendingUp, Quote, CheckCircle, Star, Heart } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Contact from '../components/Contact';

const CaseStudyDetail = () => {
  const { id } = useParams();

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
      category: "Mobile Apps",
      challenges: [
        "Patients struggling with medication compliance",
        "Limited visibility into patient health between visits",
        "High hospital readmission rates for chronic conditions",
        "Need for 24/7 monitoring without overwhelming medical staff"
      ],
      solutionDetails: [
        "Developed AI-powered medication reminder system with smart notifications",
        "Implemented real-time vital signs monitoring through IoT integration",
        "Created predictive analytics to identify at-risk patients early",
        "Built intuitive mobile interface for patients and healthcare providers"
      ],
      results: [
        "85% improvement in patient medication adherence",
        "40% reduction in hospital readmissions",
        "50,000+ patients actively using the platform",
        "92% patient satisfaction rate",
        "60% reduction in emergency department visits"
      ]
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
      category: "AI Bots",
      challenges: [
        "High volume of repetitive customer inquiries",
        "Limited customer support hours affecting sales",
        "Difficulty providing personalized shopping experiences at scale",
        "Low conversion rates from browsing to purchase"
      ],
      solutionDetails: [
        "Built intelligent chatbot with natural language understanding",
        "Integrated machine learning for personalized product recommendations",
        "Implemented sentiment analysis for better customer interaction",
        "Created seamless handoff system to human agents when needed"
      ],
      results: [
        "300% increase in customer engagement",
        "65% reduction in support tickets",
        "45% boost in average order value",
        "24/7 customer support availability",
        "88% customer satisfaction with bot interactions"
      ]
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
      category: "Manufacturing",
      challenges: [
        "Frequent unexpected equipment failures causing downtime",
        "Inconsistent product quality due to manual processes",
        "Inefficient resource allocation and workflow management",
        "High maintenance costs from reactive repairs"
      ],
      solutionDetails: [
        "Implemented predictive maintenance using IoT sensors and ML",
        "Deployed computer vision for automated quality control",
        "Created intelligent workflow orchestration system",
        "Built real-time monitoring dashboard for operations team"
      ],
      results: [
        "50% reduction in production downtime",
        "30% decrease in manufacturing defects",
        "25% cost savings annually",
        "95% accuracy in predicting equipment failures",
        "40% improvement in overall equipment effectiveness (OEE)"
      ]
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
      category: "Mobile Apps",
      challenges: [
        "Outdated legacy systems causing slow transaction processing",
        "Increasing fraud attempts requiring better security measures",
        "Complex regulatory compliance requirements",
        "Poor mobile user experience affecting customer satisfaction"
      ],
      solutionDetails: [
        "Built modern mobile-first banking platform with Flutter",
        "Implemented AI-powered fraud detection system",
        "Integrated biometric authentication for enhanced security",
        "Automated compliance reporting and regulatory adherence"
      ],
      results: [
        "90% faster transaction processing",
        "99.8% fraud detection accuracy",
        "Full regulatory compliance achieved",
        "95% customer satisfaction with mobile app",
        "70% reduction in security incidents"
      ]
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
      category: "Automation",
      challenges: [
        "One-size-fits-all learning approach not meeting individual needs",
        "Difficulty tracking and measuring student progress effectively",
        "Low student engagement with traditional learning methods",
        "Teachers overwhelmed with personalizing content for each student"
      ],
      solutionDetails: [
        "Developed AI algorithms to adapt content to learning styles",
        "Created real-time progress tracking and analytics dashboard",
        "Built intelligent content recommendation system",
        "Implemented gamification elements to boost engagement"
      ],
      results: [
        "70% improvement in student engagement",
        "55% faster learning progression",
        "95% student satisfaction rate",
        "80% reduction in teacher workload for content personalization",
        "60% improvement in learning outcomes"
      ]
    }
  ];

  const project = clientProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-white relative">
        <ParticleBackground />
        <div className="max-w-4xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl font-bold text-black mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link
            to="/clients"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Clients</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-white relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Back Button */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/clients"
          onClick={handleScrollToTop}
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Clients</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 pt-8">
          <div className="flex items-center space-x-3 mb-8">
            <Building2 className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Case Study</span>
          </div>

          <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 text-white relative overflow-hidden ${
            project.color === 'teal' ? 'bg-teal' :
            project.color === 'purple' ? 'bg-purple' :
            project.color === 'golden' ? 'bg-golden' :
            project.color === 'sky' ? 'bg-sky' :
            'bg-rust'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div>
                  <div className="inline-flex px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white bg-opacity-20 mb-2">
                    {project.industry}
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {project.project}
                  </h1>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white text-opacity-90 mb-4 sm:mb-6 leading-relaxed">
                {project.businessNeed}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 py-1 sm:py-2">
                  <span className="font-semibold text-xs sm:text-sm">{project.category}</span>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 py-1 sm:py-2">
                  <span className="font-semibold text-xs sm:text-sm">{project.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">The Challenge</h2>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              {project.businessNeed}
            </p>
            
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Key Challenges:</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Cog className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Our Solution</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 mb-8">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              {project.solution}
            </p>
            
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Solution Components:</h3>
            <ul className="space-y-3">
              {project.solutionDetails.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Technology Stack:</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.techUsed.split(', ').map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Results & Impact</h2>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200 mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 sm:mb-6">Measurable Outcomes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Quote className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Client Testimonial</h2>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-4 sm:top-6 left-4 sm:left-8">
              <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-white opacity-20" />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 italic">
                "{project.testimonial}"
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-base sm:text-lg">{project.client}</div>
                  <div className="text-sm sm:text-base text-white text-opacity-80">{project.industry}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 via-purple/20 to-golden/20 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Similar Results?</h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
                Let's discuss how we can create a custom solution for your business challenges and drive measurable impact in your industry.
              </p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden font-semibold mx-auto"
              >
                <span>Start Your Project</span>
                <Target className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Contact />
    </div>
  );
};

export default CaseStudyDetail;