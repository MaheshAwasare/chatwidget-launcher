import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">
          Choose the plan that's right for your business
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Starter</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹199</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Up to 10,000 messages/month</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Basic AI responses</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Email support</span>
            </li>
          </ul>
          <Link
            to="/onboarding"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition block text-center"
          >
            Get Started
          </Link>
        </div>

        {/* Basic Plan */}
        <div className="bg-gradient-to-b from-cyan-50 to-white rounded-lg shadow-xl p-8 border-2 border-cyan-500 transform scale-105">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm">Popular</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹770</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Up to 40,000 messages/month</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Advanced AI capabilities</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Priority support</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Custom branding</span>
            </li>
          </ul>
          <Link
            to="/onboarding"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition block text-center"
          >
            Get Started
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹999</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Up to 100,000 messages/month</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>Custom AI training</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>24/7 dedicated support</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-cyan-500 mr-2" />
              <span>SLA guarantee</span>
            </li>
          </ul>
          <Link
            to="/onboarding"
            className="w-full bg-white text-cyan-500 px-6 py-3 rounded-md font-semibold border-2 border-cyan-500 hover:bg-cyan-50 transition block text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;