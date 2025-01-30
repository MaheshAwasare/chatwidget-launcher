import React from 'react';
import { Code, MessageCircle, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-2 px-4 rounded-full bg-gradient-to-r from-cyan-200 to-cyan-100 text-cyan-800 mb-6">
            Introducing JAICA-LINK
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
            Intelligent AI Assistant for Your Website
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enhance your website with AI-powered support. One line of code, endless possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-500 transition flex items-center justify-center shadow-lg shadow-cyan-200"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="/demo.html" 
              className="bg-white border border-cyan-200 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition text-cyan-600"
            >
              View Demo
            </a>
          </div>
        </div>
      </header>

      {/* Integration Demo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Simple Integration</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 shadow-xl shadow-cyan-100">
            <code className="text-cyan-400 block">
              &lt;script src="https://jaica-link.com/widget.js"&gt;&lt;/script&gt;
              <br />
              &lt;jaica-link-widget api-key="your-key"&gt;&lt;/jaica-link-widget&gt;
            </code>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-cyan-500" />}
              title="Natural Conversations"
              description="AI-powered responses that feel human and understand context"
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-cyan-500" />}
              title="Easy Integration"
              description="Add to any website with just two lines of code"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-cyan-500" />}
              title="Lightning Fast"
              description="Instant responses with minimal latency"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-cyan-500" />}
              title="Secure"
              description="Enterprise-grade security and data protection"
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-cyan-500" />}
              title="Multilingual"
              description="Supports 50+ languages automatically"
            />
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-cyan-500" />}
              title="Customizable"
              description="Adapt the appearance to match your brand"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Website?</h2>
            <p className="text-xl mb-8 text-cyan-50">
              Join thousands of websites already using JAICA-LINK
            </p>
            <Link
              to="/onboarding"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition shadow-lg inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;