import React from 'react';
import { Cpu, Link2, Network } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <Cpu className="h-6 w-6 text-cyan-600" />
        <div className="h-4 w-0.5 bg-cyan-500 mx-1" /> {/* Hyphen */}
        <Network className="h-6 w-6 text-cyan-500" />
      </div>
      <span className="text-xl font-bold text-cyan-600">JAICA-LINK</span>
    </div>
  );
}

export default Logo;