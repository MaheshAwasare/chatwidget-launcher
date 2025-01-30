import React from 'react';
import { Mail } from 'lucide-react';

function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Join Our Team</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <Mail className="h-12 w-12 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-4">We're Always Looking for Talent</h2>
          <p className="text-gray-600 mb-6">
            Please share your CVs with us at{' '}
            <a href="mailto:careers@jaica-link.com" className="text-cyan-500 hover:text-cyan-600">
              careers@jaica-link.com
            </a>
          </p>
          <p className="text-gray-600">
            We'll review your application and get back to you if there's a potential match.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Careers;