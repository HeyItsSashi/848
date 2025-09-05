import React from 'react';
import HighlightOnScroll from './HighlightOnScroll';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = React.useCallback(() => {
    // Don't prevent default - let Netlify handle the submission
    // e.preventDefault(); // Commented out to allow Netlify to process the form
    
    // Show confirmation modal after a brief delay
    setTimeout(() => {
      setShowConfirmation(true);
    }, 100);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  }, []);

  const closeConfirmation = React.useCallback(() => {
    setShowConfirmation(false);
  }, []);

  return (
    <section id="contact" className="py-20 text-gray-800 bg-white relative">
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto text-center relative animate-fadeInUp">
            <button
              onClick={closeConfirmation}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for reaching out to us. We've received your message and will get back to you within a couple of hours.
            </p>
            
            <button
              onClick={closeConfirmation}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
Your Next Intelligent Move Starts Here.

          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Partner with <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll> to scale impact powered by purposeful AI and actionable insights, scalable solutions that drive real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-gray-800 font-medium transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-teal underline-offset-2 hover:scale-105 transition-all duration-300">200@sevenx.global</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-gray-800 font-medium transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-purple underline-offset-2 hover:scale-105 transition-all duration-300">+91 0000 000 000</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-golden rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-800 font-medium transition-colors duration-300 relative group cursor-pointer">
                    <span className="group-hover:underline decoration-2 decoration-golden underline-offset-2 hover:scale-105 transition-all duration-300">Global • Remote First</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal to-purple rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-white">Start Your Project</h3>
            
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white border border-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-20 transition-all duration-300 hover:border-golden"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white border border-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-20 transition-all duration-300 hover:border-golden"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full bg-white border border-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-20 transition-all duration-300 resize-none hover:border-golden"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-teal px-6 py-3 rounded-lg font-medium hover:bg-golden hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-lg active:scale-95 relative overflow-hidden"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/848labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/848labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/848labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Footer Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
            <span>200@SevenX.global</span>
            <span className="hidden md:block">•</span>
            <span>+91 00000 00000</span>
            <span className="hidden md:block">•</span>
            <span>AI Product Engineering & Tech Consulting</span>
            <span className="hidden md:block">•</span>
            <span>© 2025 SevenX Global Solutions.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;