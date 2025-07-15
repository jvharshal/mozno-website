import React from 'react';
import { TrendingUp, PieChart, BarChart3, Target } from 'lucide-react';

const WealthManagement = () => {
  const services = [
    {
      icon: PieChart,
      title: 'Mutual Funds',
      description: 'Carefully selected mutual fund portfolios based on your risk profile and investment goals.'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Management Services (PMS)',
      description: 'Professional portfolio management with personalized investment strategies for high net worth individuals.'
    },
    {
      icon: Target,
      title: 'Alternative Investment Funds (AIFs)',
      description: 'Exclusive investment opportunities in AIFs for sophisticated investors seeking higher returns.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Wealth Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end wealth advisory tailored to suit your goals and risk appetite. 
              Our services range from mutual fund selection to portfolio management and exclusive AIF opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="bg-green-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our experts create a personalized wealth management strategy for you.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default WealthManagement;