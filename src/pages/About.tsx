import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Mozno Advisory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by Harshal Jain, CA, we simplify your financial journey with expert guidance 
              in wealth management, tax planning, and comprehensive financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To make strategic financial advice accessible to every Indian by simplifying complex 
                financial concepts and providing personalized solutions that align with individual goals 
                and risk appetites.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-teal-600" />
                <span className="text-lg font-semibold text-gray-900">Goal-Oriented Approach</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become India's most trusted financial advisory firm, known for transparency, 
                expertise, and unwavering commitment to client success in their financial journey.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-teal-600" />
                <span className="text-lg font-semibold text-gray-900">Client-First Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/IMG_0756.jpeg"
                alt="Harshal Jain"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet the Founder
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-2">Harshal Jain</h3>
                <p className="text-lg text-gray-600 mb-4">Chartered Accountant & Founder</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Harshal Jain is a Chartered Accountant and Founder of Mozno Advisory. With experience 
                spanning auditing, investment advisory, tax, and compliance, Harshal brings a vision 
                to simplify financial journeys. Mozno aims to make strategic financial advice accessible 
                to every Indian.
              </p>
              
              <blockquote className="border-l-4 border-teal-600 pl-6 mb-8">
                <p className="text-lg italic text-gray-700">
                  "We simplify financial lives so that you can focus on what truly matters."
                </p>
              </blockquote>
              
              <a
                href="https://linkedin.com/in/harshaljain"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every aspect of our service delivery and client relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Building long-term relationships based on transparency, honesty, and reliable advice.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving our approach to meet changing financial landscapes and client needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;