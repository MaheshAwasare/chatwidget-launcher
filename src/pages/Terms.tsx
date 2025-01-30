import React from 'react';

function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using Chat Assistant's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600">
              We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
            <p className="text-gray-600">
              We strive to provide uninterrupted service but cannot guarantee 100% availability. We reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
            <p className="text-gray-600">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws</li>
              <li>Not misuse our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content and materials available through our service are protected by intellectual property rights and belong to Chat Assistant or its licensors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;