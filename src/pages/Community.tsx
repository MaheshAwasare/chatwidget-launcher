import React, { useState } from 'react';
import { MessageSquare, Github } from 'lucide-react';

function Community() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Community</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-cyan-500 mr-2" />
              <h2 className="text-xl font-semibold">Discussion Forum</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Join our community forum to discuss best practices, share experiences, and get help.
            </p>
            <div className="relative">
              <button 
                onClick={() => setShowComingSoon(true)}
                className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
              >
                Join Discussion
              </button>
              {showComingSoon && (
                <div className="absolute top-full left-0 mt-2 p-3 bg-gray-800 text-white rounded-md shadow-lg z-10">
                  Coming Soon!
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Github className="h-6 w-6 text-cyan-500 mr-2" />
              <h2 className="text-xl font-semibold">Open Source</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Contribute to our open-source projects and help improve the platform.
            </p>
            <a 
              href="https://github.com/MaheshAwasare/ai-chat-assistant/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition inline-block"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;