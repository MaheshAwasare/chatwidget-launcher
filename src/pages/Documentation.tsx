import React from 'react';
import { Code, BookOpen, Terminal, Zap } from 'lucide-react';

function Documentation() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-cyan-500" />
              Getting Started
            </h2>
            <p className="mb-4">
              JAICA-LINK can be integrated into your website with just a few lines of code. Follow these simple steps to get started.
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <code className="text-cyan-400 block whitespace-pre">
{`<!-- Add the JAICA-LINK script to your HTML -->
<script src="https://cdn.jsdelivr.net/gh/MaheshAwasare/ai-chat-assistant/frontend/chat-widget-scraper.bundle.js"></script>

<!-- Add the container element -->
<div id="ai-chat-widget"></div>

<!-- Initialize the widget -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    window.ChatWidget.init({
      apiUrl: 'https://ai-ca-backend.onrender.com/api',
      containerId: 'ai-chat-widget',
      customerId: 'YOUR_CUSTOMER_ID',
      apiKey: 'YOUR_API_KEY'
    });
  });
</script>`}
              </code>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Terminal className="h-6 w-6 mr-2 text-cyan-500" />
              Configuration Options
            </h2>
            <p className="mb-4">
              Customize the behavior and appearance of your chat widget using these configuration options:
            </p>
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Option</th>
                  <th className="border p-3 text-left">Type</th>
                  <th className="border p-3 text-left">Required</th>
                  <th className="border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">apiUrl</td>
                  <td className="border p-3">string</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">The base URL for API requests</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">containerId</td>
                  <td className="border p-3">string</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">ID of the container element for the widget</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">customerId</td>
                  <td className="border p-3">string</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">Your unique customer identifier</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">apiKey</td>
                  <td className="border p-3">string</td>
                  <td className="border p-3">Yes</td>
                  <td className="border p-3">Your API authentication key</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">theme</td>
                  <td className="border p-3">object</td>
                  <td className="border p-3">No</td>
                  <td className="border p-3">Custom theme colors and styles</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">position</td>
                  <td className="border p-3">string</td>
                  <td className="border p-3">No</td>
                  <td className="border p-3">Widget position (bottom-right, bottom-left)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-cyan-500" />
              Advanced Usage
            </h2>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Styling</h3>
            <p className="mb-4">
              Customize the appearance of your chat widget by providing a theme object:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <code className="text-cyan-400 block whitespace-pre">
{`window.ChatWidget.init({
  // ... other options
  theme: {
    primaryColor: '#00B5D8',
    secondaryColor: '#E6FFFA',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '8px'
  }
});`}
              </code>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Event Handling</h3>
            <p className="mb-4">
              Listen to chat events and implement custom behavior:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <code className="text-cyan-400 block whitespace-pre">
{`window.ChatWidget.on('message', (message) => {
  console.log('New message:', message);
});

window.ChatWidget.on('open', () => {
  console.log('Chat widget opened');
});

window.ChatWidget.on('close', () => {
  console.log('Chat widget closed');
});`}
              </code>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">API Methods</h3>
            <p className="mb-4">
              Control the chat widget programmatically:
            </p>
            <div className="bg-gray-900 rounded-lg p-6">
              <code className="text-cyan-400 block whitespace-pre">
{`// Open the chat widget
window.ChatWidget.open();

// Close the chat widget
window.ChatWidget.close();

// Send a message programmatically
window.ChatWidget.sendMessage('Hello!');

// Clear chat history
window.ChatWidget.clearHistory();`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Documentation;