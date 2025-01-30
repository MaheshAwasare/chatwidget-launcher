import React from 'react';
import { Code, MessageCircle, Zap, Shield, Globe, ArrowRight, Mail } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';

// Import all page components
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Community from './pages/Community';
import HelpCenter from './pages/HelpCenter';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
import Contact from './pages/Contact';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" aria-label="JAICA-LINK Home">
                <Logo />
              </Link>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <a href="/demo.html" className="text-gray-600 hover:text-cyan-600">Demo</a>
                  <Link to="/features" className="text-gray-600 hover:text-cyan-600">Features</Link>
                  <Link to="/pricing" className="text-gray-600 hover:text-cyan-600">Pricing</Link>
                  <Link to="/documentation" className="text-gray-600 hover:text-cyan-600">Documentation</Link>
                  <Link to="/contact" className="text-gray-600 hover:text-cyan-600">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>

        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/features" className="hover:text-cyan-300">Features</Link></li>
                  <li><Link to="/pricing" className="hover:text-cyan-300">Pricing</Link></li>
                  <li><Link to="/documentation" className="hover:text-cyan-300">Documentation</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-cyan-300">About</Link></li>
                  <li><Link to="/blog" className="hover:text-cyan-300">Blog</Link></li>
                  <li><Link to="/careers" className="hover:text-cyan-300">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/community" className="hover:text-cyan-300">Community</Link></li>
                  <li><Link to="/help-center" className="hover:text-cyan-300">Help Center</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="hover:text-cyan-300">Privacy</Link></li>
                  <li><Link to="/terms" className="hover:text-cyan-300">Terms</Link></li>
                  <li><Link to="/security" className="hover:text-cyan-300">Security</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>&copy; 2024 JAICA-LINK. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;