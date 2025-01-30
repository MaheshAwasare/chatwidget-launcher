import React from 'react';
import { Users, Award, Target } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We're on a mission to revolutionize customer support through AI technology. Our chat assistant helps businesses provide instant, accurate, and personalized support to their customers 24/7.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="font-semibold mb-2">Team</h3>
              <p className="text-gray-600">A passionate team of AI experts and developers</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Years of experience in AI and customer support</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="font-semibold mb-2">Vision</h3>
              <p className="text-gray-600">Making AI support accessible to everyone</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, Chat Assistant emerged from a simple idea: make customer support more efficient and accessible. Today, we serve thousands of businesses worldwide, helping them provide better customer experiences through AI technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;