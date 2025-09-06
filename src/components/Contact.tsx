import React from 'react';
import HighlightOnScroll from './HighlightOnScroll';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, CheckCircle, X } from 'lucide-react';

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

  // Helper function to encode form data for Netlify
  const encode = React.useCallback((data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }, []);

  const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    e.preventDefault();

    // Send data to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact", // This must match the 'name' attribute of your form
        "name": formData.name,
        "email": formData.email,
        "message": formData.message,
        "bot-field": "" // Include the honeypot field, even if empty
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Form submission failed:", response.statusText);
        } else {
          console.log("Form submitted successfully");
          // Show confirmation modal after successful submission
          setShowConfirmation(true);
          
          // Reset form after showing confirmation
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        // Still show confirmation even if there's an error
        setShowConfirmation(true);
        
        // Reset form
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }, 1000);
      });
  }, [formData, encode]);

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Next Intelligent Move Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Partner with <HighlightOnScroll className="font-semibold text-black">SevenX Global</HighlightOnScroll> to scale impact powered by purposeful AI and actionable insights, scalable solutions that drive real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Get in Touch</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                  <a 
                    href="mailto:200@sevenx.global"
                    className="text-gray-800 font-semibold text-base sm:text-lg transition-colors duration-300 relative group cursor-pointer hover:text-teal"
                  >
                    200@sevenx.global
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Phone</p>
                  <a 
                    href="tel:+910000000000"
                    className="text-gray-800 font-semibold text-base sm:text-lg transition-colors duration-300 relative group cursor-pointer hover:text-purple"
                  >
                    +91 0000 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-golden rounded-lg flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">Location</p>
                  <p className="text-gray-800 font-semibold text-base sm:text-lg transition-colors duration-300 relative group cursor-pointer hover:text-golden">
                    Global • Remote First
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal via-purple to-golden rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 relative overflow-hidden">
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white drop-shadow-lg">Start Your Project</h3>
            
              <form 
                className="space-y-4" 
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-emails="200@sevenx.global"
                action="/success.html"
              >
                {/* Hidden input for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Additional hidden fields for better email formatting */}
                <input type="hidden" name="subject" value="New Contact Form Submission - SevenX Global Website" />
                
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
                    className="w-full bg-white bg-opacity-95 border-2 border-white border-opacity-30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-30 focus:bg-white transition-all duration-300 hover:border-golden font-medium shadow-sm text-sm sm:text-base"
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
                    className="w-full bg-white bg-opacity-95 border-2 border-white border-opacity-30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-30 focus:bg-white transition-all duration-300 hover:border-golden font-medium shadow-sm text-sm sm:text-base"
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
                    className="w-full bg-white bg-opacity-95 border-2 border-white border-opacity-30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden focus:ring-opacity-30 focus:bg-white transition-all duration-300 resize-none hover:border-golden font-medium shadow-sm text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white bg-opacity-95 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-xl active:scale-95 relative overflow-hidden text-base sm:text-lg shadow-sm"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="SevenX Global Logo" 
                className="h-8 sm:h-10 w-auto hover:scale-110 transition-all duration-300"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap">
                Seven<span className="text-teal">X</span> Global
              </span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://x.com/sevenxglobal"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <span className="font-bold text-sm sm:text-base">𝕏</span>
              </a>
              <a
                href="https://www.linkedin.com/company/sevenx-global/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
            
            {/* Footer Info */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-2 sm:space-x-4 text-gray-500 text-xs sm:text-sm text-center">
              <span>© 2025 SevenX Global Solutions.</span>
              <span>•</span>
              <span>AI Product Engineering & Tech Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;