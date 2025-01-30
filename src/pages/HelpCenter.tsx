import React from 'react';
import { Search, Book, MessageCircle, FileText } from 'lucide-react';

function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Help Center</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Book className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Documentation</h2>
            <p className="text-gray-600 mb-4">
              Detailed guides and API documentation
            </p>
            <a href="#" className="text-cyan-500 hover:text-cyan-600">Learn more →</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <MessageCircle className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Community Support</h2>
            <p className="text-gray-600 mb-4">
              Get help from our community
            </p>
            <a href="#" className="text-cyan-500 hover:text-cyan-600">Visit forum →</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <FileText className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <p className="text-gray-600 mb-4">
              Common questions and answers
            </p>
            <a href="#" className="text-cyan-500 hover:text-cyan-600">View FAQs →</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Popular Articles</h2>
          
          <div className="space-y-6">
            <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className="font-semibold mb-2">Quick Start Guide</h3>
              <p className="text-gray-600">
                Learn how to integrate JAICA-LINK into your website in just 5 minutes. This guide covers basic setup, API key configuration, and customization options.
              </p>
            </a>
            
            <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className="font-semibold mb-2">Customizing Your Chat Widget</h3>
              <p className="text-gray-600">
                Detailed guide on how to customize the appearance and behavior of your chat widget, including themes, positions, and response templates.
              </p>
            </a>
            
            <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className="font-semibold mb-2">Understanding Analytics</h3>
              <p className="text-gray-600">
                Learn how to use our analytics dashboard to track chat performance, user engagement, and optimize your customer support.
              </p>
            </a>

            <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className="font-semibold mb-2">Training Your AI Assistant</h3>
              <p className="text-gray-600">
                Step-by-step guide on how to train your AI assistant with custom responses and improve its accuracy for your specific use case.
              </p>
            </a>

            <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className="font-semibold mb-2">Integrating with Your CRM</h3>
              <p className="text-gray-600">
                Complete guide on connecting JAICA-LINK with popular CRM systems to streamline your customer support workflow.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;