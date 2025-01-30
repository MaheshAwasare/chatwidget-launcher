import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';

function Security() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Shield className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
            <p className="text-gray-600">
              Enterprise-grade encryption for all data at rest and in transit
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Lock className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Access Control</h2>
            <p className="text-gray-600">
              Strict authentication and authorization protocols
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Key className="h-8 w-8 text-cyan-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Compliance</h2>
            <p className="text-gray-600">
              SOC 2 Type II and GDPR compliant
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Security Measures</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
              <p className="text-gray-600 mb-4">
                All data is encrypted using industry-standard AES-256 encryption. We use TLS 1.3 for all data in transit.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Security</h3>
              <p className="text-gray-600 mb-4">
                Our infrastructure is hosted on secure cloud providers with multiple layers of security controls.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Monitoring & Auditing</h3>
              <p className="text-gray-600 mb-4">
                24/7 security monitoring and regular security audits by third-party security firms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive incident response plan with dedicated security team available 24/7.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;