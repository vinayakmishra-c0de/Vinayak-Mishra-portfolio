import React, { useState } from 'react';
import { DollarSign, Building2, Flame, AlertOctagon, CheckCircle2, Zap, SlidersHorizontal } from 'lucide-react';

export const WholesalerCapitalEngine: React.FC = () => {
  // Module 2B simulation state
  const [breached, setBreached] = useState(false);
  const creditLimit = 400000;
  const currentExposure = breached ? 420000 : 240000;

  // Module 2C liquidation state
  const [liquidationTriggered, setLiquidationTriggered] = useState(false);

  return (
    <div className="space-y-6">
      {/* Deployment Heading with Razorpay Docs breadcrumb style */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#1E293B]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
            <span className="text-[#0066FF]">VM.ENGINE</span>
            <span>/</span>
            <span>DEPLOYMENTS</span>
            <span>/</span>
            <span className="text-white">CAPITAL RISK ENGINE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
            B. B2B Capital Allocation &amp; Credit Exposure Dashboard (Wholesaler System)
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-900 px-2.5 py-1 rounded">
            [● REAL-TIME RISK ENCLAVE]
          </span>
        </div>
      </div>

      {/* Module 2A (12 cols, banner): Capital Allocation Command Bar */}
      <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B] text-xs font-mono">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#0066FF]" />
            <span className="font-bold text-white uppercase tracking-wider">
              Module 2A: Capital Allocation Command Bar
            </span>
          </div>
          <span className="text-slate-400 text-[11px]">
            Working Capital: <span className="text-white font-bold">₹48,50,000</span>
          </span>
        </div>

        {/* The 5 Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 text-xs font-mono">
          <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B]">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Total Capital Pool</span>
            <span className="text-xl font-bold text-white block mt-1 tabular-nums">₹48,50,000</span>
            <span className="text-[10px] text-emerald-400 mt-0.5 block">100% Accounted</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B]">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Active Stock Asset</span>
            <span className="text-xl font-bold text-blue-400 block mt-1 tabular-nums">₹28,10,000</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">58% of Pool</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B]">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Uncollected Credit</span>
            <span className="text-xl font-bold text-amber-400 block mt-1 tabular-nums">₹14,90,000</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">31% Outstanding</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B]">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Net Realized Margin</span>
            <span className="text-xl font-bold text-emerald-400 block mt-1 tabular-nums">+18%</span>
            <span className="text-[10px] text-emerald-400 mt-0.5 block">Realized Profit</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B] col-span-2 md:col-span-1">
            <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Stalled Capital</span>
            <span className="text-xl font-bold text-rose-400 block mt-1 tabular-nums">₹5,50,000</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Requires Clearance</span>
          </div>
        </div>
      </div>

      {/* Grid: Module 2B (6 cols) and Module 2C (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Module 2B (6 cols): Retailer Credit Limit & Risk Profiler */}
        <div className="lg:col-span-6 bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0066FF]" />
                <span className="font-bold text-white uppercase tracking-wider">
                  Module 2B: Retailer Credit Limit &amp; Risk Profiler
                </span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold font-mono ${
                breached 
                  ? 'bg-rose-950/80 text-rose-400 border border-rose-900 shadow-[0_0_10px_rgba(244,63,94,0.2)]' 
                  : 'bg-emerald-950/80 text-emerald-400 border border-emerald-900'
              }`}>
                {breached ? '[● DISPATCH LOCKED]' : '[● DISPATCH ACTIVE]'}
              </span>
            </div>

            {/* Mock Profile */}
            <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B] mb-4 text-xs font-mono">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-sm">Sugandh Fragrance Emporium</span>
                <span className="text-slate-400 text-[11px]">GSTIN: 27AAACS1429B1Z0</span>
              </div>
              <div className="text-slate-400 text-xs mt-1.5 flex items-center justify-between">
                <span>Payment Velocity:</span>
                <span className="text-white font-semibold">18 days avg settlement</span>
              </div>
            </div>

            {/* Dynamic Credit Exposure Bar */}
            <div className="mb-4 text-xs font-mono">
              <div className="flex justify-between text-slate-300 mb-2">
                <span>Dynamic Credit Exposure Bar:</span>
                <span className="font-bold text-white tabular-nums">
                  ₹{currentExposure.toLocaleString('en-IN')} / ₹{creditLimit.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    breached 
                      ? 'bg-gradient-to-r from-amber-500 to-rose-600' 
                      : 'bg-gradient-to-r from-blue-600 to-[#0066FF]'
                  }`}
                  style={{ width: `${Math.min(100, (currentExposure / creditLimit) * 100)}%` }}
                />
              </div>

              {breached && (
                <div className="mt-3 p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-mono flex items-start gap-2 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                  <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Auto-halt dispatch lock on limit breach:</strong> Exposure (₹4,20,000) exceeds ₹4,00,000 ceiling. Dispatches automatically locked at warehouse gate.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E293B]">
            <button
              onClick={() => setBreached(!breached)}
              className="w-full py-2.5 px-3 text-xs font-mono font-semibold rounded-lg bg-[#070A12] hover:bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors cursor-pointer"
            >
              {breached ? 'Reset: Clear Simulation' : 'Simulate New Order (+₹1,80,000) To Test Auto-Halt Dispatch Lock'}
            </button>
          </div>
        </div>

        {/* Module 2C (6 cols): Dynamic SKU Velocity & Dead Capital Matrix */}
        <div className="lg:col-span-6 bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-white uppercase tracking-wider">
                  Module 2C: Dynamic SKU Velocity &amp; Dead Capital Matrix
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Turnover Analytics
              </span>
            </div>

            {/* High Velocity SKUs */}
            <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B] mb-3 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-white font-bold">High Velocity SKU: Amber Oud</span>
                <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">
                  48 units/wk
                </span>
              </div>
              <div className="text-slate-400 text-[11px] mt-1.5 flex justify-between">
                <span>Realized Margin:</span>
                <span className="text-emerald-400 font-bold">34% margin</span>
              </div>
            </div>

            {/* Stalled Dead Stock */}
            <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B] mb-4 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-white font-bold">Stalled Dead Stock: Citrus Bloom</span>
                <span className="text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-900">
                  94 days idle
                </span>
              </div>
              <div className="text-slate-400 text-[11px] mt-1.5 flex justify-between">
                <span>Capital Locked:</span>
                <span className="text-rose-400 font-bold">₹1.20L capital locked</span>
              </div>
            </div>

            {liquidationTriggered && (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono mb-3 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auto-recommendation triggered: Clearance flash deployed to liquidate ₹1.20L stalled capital.</span>
              </div>
            )}
          </div>

          {/* Auto-recommendation trigger for inventory liquidation */}
          <div className="pt-3 border-t border-[#1E293B]">
            <button
              onClick={() => setLiquidationTriggered(!liquidationTriggered)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-mono font-semibold rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white transition-all shadow-[0_0_15px_rgba(0,102,255,0.3)] cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>
                {liquidationTriggered ? 'Reset Liquidation Trigger' : 'Auto-recommendation trigger for inventory liquidation'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
