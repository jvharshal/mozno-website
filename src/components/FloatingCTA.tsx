import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Talk to Our Advisor</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors"
            >
              <Phone className="h-5 w-5 text-teal-600" />
              <div>
                <div className="font-medium text-gray-900">Call Now</div>
                <div className="text-sm text-gray-600">+91 98765 43210</div>
              </div>
            </a>
            
            <a
              href="mailto:info@moznoadvisory.com"
              className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">Email Us</div>
                <div className="text-sm text-gray-600">info@moznoadvisory.com</div>
              </div>
            </a>
            
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-teal-600" />
              <div>
                <div className="font-medium text-gray-900">WhatsApp</div>
                <div className="text-sm text-gray-600">Quick Response</div>
              </div>
            </a>
            
            <a
              href="/contact"
              className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingCTA;