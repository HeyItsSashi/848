import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Factory, Shield, Users, Cog, TrendingUp, Globe, BarChart3, Lock } from 'lucide-react';
import ParticleBackground from '../../components/ParticleBackground';

const EnterpriseSolutions = () => {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden mb-20 -mx-6 px-6">
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
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-all duration-500 hover:rotate-6 shadow-2xl">
              <Factory className="w-12 h-12 text-white" />
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
              <span className="hover:scale-110 inline-block transition-all duration-300 cursor-pointer hover:drop-shadow-lg">Enterprise</span>
              <br />
              <span className="text-gray-600 hover:scale-110 hover:text-black inline-block transition-all duration-300 delay-150 cursor-pointer hover:drop-shadow-lg">Solutions</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 flex items-center justify-center space-x-4 text-gray-600">
              <Globe className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-medium">Scalable AI for Global Operations</span>
              <Globe className="w-6 h-6 animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-5xl leading-relaxed mx-auto">
              Transform your enterprise with AI-powered solutions that integrate seamlessly into your existing infrastructure while delivering 
              <span className="font-semibold text-black"> measurable ROI and competitive advantage</span> at scale.
            </p>

            {/* Feature Highlights */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-6">Enterprise-Grade Excellence</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">SOC 2</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95">
                <span>Transform Your Enterprise</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-black hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                <span>View Success Stories</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Built for the complexity of enterprise operations</p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full relative hover:border-black transition-colors duration-300 cursor-pointer group mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce group-hover:bg-black transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Categories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Complete Solution Suite</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-purple">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-purple transition-colors duration-300">
                AI-Powered Mobile & Enterprise Apps
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Custom applications that leverage AI to enhance user experience, automate processes, and provide intelligent insights across all your business operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Intelligent user interfaces that adapt to behavior</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Predictive analytics built into workflows</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Cross-platform deployment and synchronization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span>Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-teal">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-teal transition-colors duration-300">
                AI Assurance & Cyber Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Advanced security systems that use AI to detect threats, prevent breaches, and ensure compliance in real-time across your entire enterprise infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Real-time threat detection and response</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Behavioral analysis and anomaly detection</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Automated incident response and remediation</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Compliance monitoring and reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-golden">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-golden transition-colors duration-300">
                Enterprise Automation & Operations
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                End-to-end automation solutions that streamline operations, reduce costs, and improve efficiency across your organization's most critical processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Intelligent process automation and optimization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Resource allocation and performance monitoring</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Predictive maintenance and asset management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Cost optimization and efficiency analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Success Stories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Envisioned Enterprise Impact</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            Explore how organizations could transform their operations with our comprehensive enterprise AI solutions
          </p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple to-teal rounded-3xl p-10 border-2 border-purple opacity-90">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Enterprise Financial Vision</h3>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">Large Scale</span>
                  </div>
                  <p className="text-lg text-white opacity-90 mb-6">
                    AI-powered enterprise solutions could revolutionize fraud detection and risk assessment, processing millions of transactions with intelligent real-time analysis.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple mb-1">95%+</div>
                      <div className="text-sm text-gray-600">Target accuracy</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple mb-1">$40M+</div>
                      <div className="text-sm text-gray-600">Projected value</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple mb-1">75%+</div>
                      <div className="text-sm text-gray-600">Speed target</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Continuous operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal to-golden rounded-3xl p-10 border-2 border-teal opacity-90">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-teal" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Manufacturing Intelligence Future</h3>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">Multi-Site Vision</span>
                  </div>
                  <p className="text-lg text-white opacity-90 mb-6">
                    Envisioned enterprise automation could enable predictive maintenance across multiple facilities, potentially reducing downtime and optimizing production efficiency.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-teal mb-1">60%+</div>
                      <div className="text-sm text-gray-600">Potential reduction</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-teal mb-1">30%</div>
                      <div className="text-sm text-gray-600">Expected gain</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-teal mb-1">$20M+</div>
                      <div className="text-sm text-gray-600">Target savings</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-teal mb-1">99%+</div>
                      <div className="text-sm text-gray-600">Quality goal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-golden to-rust rounded-3xl p-10 border-2 border-golden opacity-90">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-golden" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Healthcare Security Vision</h3>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">Network Scale</span>
                  </div>
                  <p className="text-lg text-white opacity-90 mb-6">
                    Future AI-powered security systems could protect healthcare networks with intelligent compliance monitoring and automated patient data safeguards.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-golden mb-1">100%</div>
                      <div className="text-sm text-gray-600">Compliance target</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-golden mb-1">0</div>
                      <div className="text-sm text-gray-600">Breach goal</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-golden mb-1">40%+</div>
                      <div className="text-sm text-gray-600">Time savings</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-golden mb-1">1M+</div>
                      <div className="text-sm text-gray-600">Records capacity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Enterprise-Grade Features</h2>
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple mb-2">99.99%</div>
                <div className="text-gray-300 font-medium">Uptime SLA</div>
                <div className="text-sm text-gray-400 mt-1">Enterprise reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">SOC 2</div>
                <div className="text-gray-300 font-medium">Compliance</div>
                <div className="text-sm text-gray-400 mt-1">Type II certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Support</div>
                <div className="text-sm text-gray-400 mt-1">Dedicated team</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rust mb-2">{"<15min"}</div>
                <div className="text-gray-300 font-medium">Response Time</div>
                <div className="text-sm text-gray-400 mt-1">Critical issues</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Security & Compliance Standards</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">ISO 27001</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">GDPR Compliant</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">HIPAA Ready</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">SOX Controls</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">PCI DSS</span>
                <span className="bg-gray-800 px-6 py-3 rounded-full text-sm font-medium">FedRAMP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Our Implementation Process</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            We follow a proven methodology that minimizes risk and ensures successful deployment at enterprise scale
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-purple text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold text-purple group-hover:text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-purple">Strategic Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of current systems, processes, and business objectives to define the optimal AI strategy.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-teal text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold text-teal group-hover:text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-teal">Solution Architecture</h3>
              <p className="text-gray-600 text-sm">
                Design enterprise-grade architecture that integrates seamlessly with existing infrastructure and scales with growth.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-golden text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-golden group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold text-golden group-hover:text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-golden">Phased Deployment</h3>
              <p className="text-gray-600 text-sm">
                Controlled rollout with pilot programs, user training, and gradual scaling to minimize business disruption.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-rust text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rust group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold text-rust group-hover:text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-rust">Continuous Optimization</h3>
              <p className="text-gray-600 text-sm">
                Ongoing performance monitoring, optimization, and enhancement to ensure maximum ROI and business value.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple to-teal rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Enterprise Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join industry leaders who have revolutionized their operations with our AI-powered enterprise solutions. Start your transformation journey with a strategic consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              onClick={handleScrollToTop}
              className="group bg-white text-purple px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
            >
              <span>Schedule Enterprise Consultation</span>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;