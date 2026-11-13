import React from 'react';
import { ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const TelemetryWidget: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 sm:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.6)] relative overflow-hidden">
      {/* Top subtle glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-80" />

      {/* Top Header Bar with Status Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#1E293B]/80 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-[#F8FAFC] font-semibold tracking-wider uppercase text-[11px]">
            TELEMETRY NODE // LIVE RECONCILIATION
          </span>
          <span className="hidden sm:inline-block text-slate-500 text-[11px]">
            · IN-MEMORY LEDGER ENGINE
          </span>
        </div>

        <span className="text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          [● LIVE SYNC]
        </span>
      </div>

      {/* 3 Telemetry Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="p-4 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-[#10B981]/50 transition-colors group">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Inventory Leakage</span>
            <ShieldCheck className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold font-mono text-[#10B981] tracking-tight tabular-nums">
              0.00%
            </span>
            <span className="text-[11px] font-mono text-slate-500 uppercase">tolerance</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
            Zero unaccounted shrinkage across physical registers and shelf racks.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-[#0066FF]/50 transition-colors group">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Reconciliation Latency</span>
            <Zap className="w-4 h-4 text-[#0066FF] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">
              12<span className="text-lg text-slate-400 font-normal">ms</span>
            </span>
            <span className="text-[11px] font-mono text-[#0066FF] bg-blue-950/80 border border-blue-900 px-1.5 py-0.5 rounded">
              P99 &lt; 20ms
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
            Deterministic sub-frame state reconciliation before render cycles.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-[#6366F1]/50 transition-colors group">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Capital Traced</span>
            <Activity className="w-4 h-4 text-[#6366F1] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold font-mono text-[#F8FAFC] tracking-tight tabular-nums">
              100%
            </span>
            <span className="text-[11px] font-mono text-indigo-300">Rupee-for-Rupee</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
            Every movement verified against physical rack location and bank clearance.
          </p>
        </div>
      </div>

      {/* Sub-strip: Checksum verification */}
      <div className="mt-4 pt-3.5 border-t border-[#1E293B]/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>4,821 / 4,821 transactions cryptographically balanced</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SHA-256 State Root: <span className="text-slate-300">0x38fa...ec71</span></span>
        </div>
      </div>
    </div>
  );
};
