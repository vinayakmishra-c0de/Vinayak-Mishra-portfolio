import React from 'react';
import { SchoolPosEngine } from './SchoolPosEngine.tsx';
import { WholesalerCapitalEngine } from './WholesalerCapitalEngine.tsx';

export const BentoShowcase: React.FC = () => {
  return (
    <section id="engines" className="py-16 md:py-24 bg-[#080C14] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div>
          <div className="mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0066FF] bg-blue-950/40 border border-blue-900/60 px-2.5 py-1 rounded">
              [ REAL-WORLD DEPLOYMENTS // 12-COLUMN BENTO GRID ]
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
            Flagship Client Deployments
          </h2>
        </div>

        {/* Flagship A */}
        <SchoolPosEngine />

        {/* Flagship B */}
        <WholesalerCapitalEngine />
      </div>
    </section>
  );
};
