import React from 'react';
import { MessageCircle, Code, Zap, Shield, Globe, Palette, Brain, Cloud } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features</h1>
        <p className="text-xl text-gray-600">
          Everything you need to provide exceptional customer support with AI
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={<Brain className="h-8 w-8 text-cyan-500" />}
          title="AI-Powered Responses"
          description="Advanced natural language processing for human-like conversations"
        />
        <FeatureCard
          icon={<Code className="h-8 w-8 text-cyan-500" />}
          title="Simple Integration"
          description="Get started with just two lines of code"
        />
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-cyan-500" />}
          title="Real-time Responses"
          description="Lightning-fast responses with minimal latency"
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-cyan-500" />}
          title="Enterprise Security"
          description="Bank-grade encryption and data protection"
        />
        <FeatureCard
          icon={<Globe className="h-8 w-8 text-cyan-500" />}
          title="Multi-language Support"
          description="Communicate with customers in their preferred language"
        />
        <FeatureCard
          icon={<Palette className="h-8 w-8 text-cyan-500" />}
          title="Custom Styling"
          description="Match your brand's look and feel perfectly"
        />
        <FeatureCard
          icon={<MessageCircle className="h-8 w-8 text-cyan-500" />}
          title="Smart Routing"
          description="Automatically direct complex queries to human agents"
        />
        <FeatureCard
          icon={<Cloud className="h-8 w-8 text-cyan-500" />}
          title="Cloud Infrastructure"
          description="Reliable and scalable cloud-based solution"
        />
      </div>
    </div>
  );
}

export default Features;