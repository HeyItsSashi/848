import React from 'react';
import { TrendingUp, ArrowLeft, CheckCircle, BarChart3, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';
import HighlightOnScroll from '../../components/HighlightOnScroll';

const DataAIEngineering = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Transform complex data into intuitive, interactive dashboards and visual insights",
      benefits: ["Real-time dashboards", "Interactive reports", "Custom visualizations"]
    },
    {
      icon: Database,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions that turn raw data into strategic business insights",
      benefits: ["KPI monitoring", "Trend analysis", "Predictive modeling"]
    },
    {
      icon: Brain,
      title: "Agentic Data Solutions",
      description: "Autonomous data agents that continuously learn and optimize data processing workflows",
      benefits: ["Automated data pipelines", "Smart data cleaning", "Adaptive analytics"]
    }
  ];

  const dataServices = [
    {
      title: "Data Pipeline Engineering",
      description: "Build robust, scalable data pipelines for seamless data flow",
      items: ["ETL/ELT processes", "Real-time streaming", "Data quality assurance"]
    },
    {
      title: "Machine Learning Operations",
      description: "End-to-end MLOps for deploying and managing ML models at scale",
      items: ["Model deployment", "A/B testing", "Performance monitoring"]
    },
    {
      title: "Data Governance",
      description: "Establish comprehensive data governance frameworks",
      items: ["Data lineage tracking", "Privacy compliance", "Access control"]
    }
  ];

  const technologies = [
    "Python", "Apache Spark", "Snowflake", "dbt", "Apache Airflow", "Kubernetes",
    "TensorFlow", "PyTorch", "Tableau", "Power BI", "Looker", "Databricks"
  ];

  const useCases = [
    "Customer analytics and segmentation",
    "Operational efficiency optimization",
    "Financial risk assessment",
    "Supply chain optimization",
    "Marketing campaign analysis",
    "Quality control and monitoring",
    "Fraud detection systems",
    "Recommendation engines"
  ];

  const benefits = [
    "Faster decision-making with real-time insights",
    "Improved data accuracy and consistency",
    "Reduced manual data processing by 80%",
    "Enhanced compliance and governance",
    "Scalable architecture for growing data needs",
    "Self-service analytics capabilities"
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <Link 
          to="/services" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="text-left mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-gray-700" />
            </div>
            <span className="text-sm font-medium tracking-wider uppercase text-gray-600">Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Data & AI Engineering
          </h1>
          
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            Help businesses turn data into <HighlightOnScroll>measurable outcomes</HighlightOnScroll> through intelligent analysis.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Data-Driven Intelligence</h2>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Data & AI Engineering service transforms your data ecosystem into a powerful engine for business growth. 
              We design and build comprehensive data solutions that not only organize and visualize your information but 
              also provide intelligent, actionable insights through advanced AI and machine learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From data pipelines to autonomous analytics agents, we create systems that continuously learn from your data 
              to deliver increasingly valuable insights and automated decision-making capabilities.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer hover:border-blue-200"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-12">Data Engineering Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
              >
                <span className="text-gray-700 group-hover:text-black font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Business Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black mb-8">Our Data Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Assess", desc: "Data landscape evaluation" },
              { step: "02", title: "Design", desc: "Architecture planning" },
              { step: "03", title: "Build", desc: "Pipeline development" },
              { step: "04", title: "Deploy", desc: "System implementation" },
              { step: "05", title: "Optimize", desc: "Continuous improvement" }
            ].map((phase, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-2">{phase.step}</div>
                <h3 className="text-sm font-bold text-black mb-1">{phase.title}</h3>
                <p className="text-gray-600 text-xs">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black rounded-3xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Unlock Your Data's Potential</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform raw data into strategic business intelligence with our comprehensive data engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/#contact"
              className="group bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>Start Your Project</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataAIEngineering;