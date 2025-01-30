import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

function Status() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">System Status</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <h2 className="text-2xl font-semibold">All Systems Operational</h2>
              <p className="text-gray-600">Updated 2 minutes ago</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">API</span>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-500">Operational</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[99.9%]"></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">99.9% uptime</div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Chat Widget</span>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-500">Operational</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[99.95%]"></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">99.95% uptime</div>
            </div>

            <div className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Dashboard</span>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-500">Operational</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[99.8%]"></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">99.8% uptime</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Incident History</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <h3 className="font-semibold">Scheduled Maintenance</h3>
                <p className="text-gray-600 mb-1">System upgrade and maintenance</p>
                <p className="text-sm text-gray-500">March 1, 2024 • Resolved</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold">Minor Service Disruption</h3>
                <p className="text-gray-600 mb-1">Brief API latency increase</p>
                <p className="text-sm text-gray-500">February 15, 2024 • Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;