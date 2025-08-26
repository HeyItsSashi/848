import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, Shield, Users, Cog, TrendingUp, Globe, BarChart3, Lock } from 'lucide-react';

const EnterpriseSolutions = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Back Button - Right Side */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          to="/"
          className="group bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center">
              <Factory className="w-10 h-10 text-gray-800" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-2">
                Enterprise Solutions
              </h1>
              <p className="text-2xl text-gray-600">
                Scalable AI for Global Operations
              </p>
            </div>
          </div>
          
          <p className="text-2xl text-gray-700 leading-relaxed max-w-5xl mb-12">
            Transform your enterprise with AI-powered solutions that integrate seamlessly into your existing infrastructure while delivering measurable ROI and competitive advantage at scale.
          </p>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-black mb-4">Enterprise-Grade Excellence</h3>
            <p className="text-lg text-gray-700">
              Our solutions are built for the complexity and scale of enterprise operations. From Fortune 500 companies to growing startups, we deliver AI that works in the real world of business.
            </p>
          </div>
        </div>

        {/* Solution Categories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12">Complete Solution Suite</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI-Powered Mobile & Enterprise Apps
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Custom applications that leverage AI to enhance user experience, automate processes, and provide intelligent insights across all your business operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Intelligent user interfaces that adapt to behavior</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Predictive analytics built into workflows</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Cross-platform deployment and synchronization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                AI Assurance & Cyber Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Advanced security systems that use AI to detect threats, prevent breaches, and ensure compliance in real-time across your entire enterprise infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Real-time threat detection and response</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Behavioral analysis and anomaly detection</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Automated incident response and remediation</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Compliance monitoring and reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 hover:border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <Cog className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300">
                Enterprise Automation & Operations
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                End-to-end automation solutions that streamline operations, reduce costs, and improve efficiency across your organization's most critical processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Intelligent process automation and optimization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Resource allocation and performance monitoring</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Predictive maintenance and asset management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Cost optimization and efficiency analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Success Stories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8">Industry Success Stories</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl">
            See how leading organizations across industries have transformed their operations with our enterprise solutions
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-black">Global Financial Services</h3>
                    <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">Fortune 100</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Transformed fraud detection and risk assessment systems, processing millions of transactions daily with AI-powered real-time analysis.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">97%</div>
                      <div className="text-sm text-gray-600">Fraud detection accuracy</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">$50M</div>
                      <div className="text-sm text-gray-600">Annual savings</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">80%</div>
                      <div className="text-sm text-gray-600">Faster processing</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-black">Manufacturing Conglomerate</h3>
                    <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">Global Operations</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Implemented enterprise-wide automation and predictive maintenance across 50+ facilities, reducing downtime and optimizing production efficiency.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">65%</div>
                      <div className="text-sm text-gray-600">Downtime reduction</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">30%</div>
                      <div className="text-sm text-gray-600">Efficiency increase</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">$25M</div>
                      <div className="text-sm text-gray-600">Cost savings</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">99.7%</div>
                      <div className="text-sm text-gray-600">Quality rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-2xl font-bold text-black">Healthcare Network</h3>
                    <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">Multi-State</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Deployed AI-powered security and compliance system across 200+ healthcare facilities, ensuring HIPAA compliance and patient data protection.
                  </p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">100%</div>
                      <div className="text-sm text-gray-600">HIPAA compliance</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">0</div>
                      <div className="text-sm text-gray-600">Security breaches</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">45%</div>
                      <div className="text-sm text-gray-600">Admin time saved</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-black mb-1">2M+</div>
                      <div className="text-sm text-gray-600">Records secured</div>
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
                <div className="text-4xl font-bold text-gray-100 mb-2">99.99%</div>
                <div className="text-gray-300 font-medium">Uptime SLA</div>
                <div className="text-sm text-gray-400 mt-1">Enterprise reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">SOC 2</div>
                <div className="text-gray-300 font-medium">Compliance</div>
                <div className="text-sm text-gray-400 mt-1">Type II certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Support</div>
                <div className="text-sm text-gray-400 mt-1">Dedicated team</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-100 mb-2">{"<15min"}</div>
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
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Strategic Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of current systems, processes, and business objectives to define the optimal AI strategy.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Solution Architecture</h3>
              <p className="text-gray-600 text-sm">
                Design enterprise-grade architecture that integrates seamlessly with existing infrastructure and scales with growth.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Phased Deployment</h3>
              <p className="text-gray-600 text-sm">
                Controlled rollout with pilot programs, user training, and gradual scaling to minimize business disruption.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-400 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Continuous Optimization</h3>
              <p className="text-gray-600 text-sm">
                Ongoing performance monitoring, optimization, and enhancement to ensure maximum ROI and business value.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Enterprise Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join industry leaders who have revolutionized their operations with our AI-powered enterprise solutions. Start your transformation journey with a strategic consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
            >
              <span>Schedule Enterprise Consultation</span>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
  );
};

export default EnterpriseSolutions;