import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowLeftRight, 
  CheckCircle2, 
  AlertOctagon, 
  Download, 
  Zap, 
  Terminal, 
  ShoppingCart, 
  Building2, 
  FileSpreadsheet,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

const cardMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export const ProjectsShowcase: React.FC = () => {
  // Project 01 state: Instant Exchange
  const [swapped, setSwapped] = useState(false);

  // Project 02 state: Credit Breach Simulation
  const [creditBreached, setCreditBreached] = useState(false);

  // Project 03 state: CSV Export
  const handleExportCSV = () => {
    const csvContent = 
      "Transaction_ID,Batch_Ref,Original_SKU,Normalized_SKU,Amount_INR,Audit_Hash,Reconciliation_Status\n" +
      "TXN-2026-8801,BATCH-441,UNI-SHIRT-M-32,UNI-SHIRT-M-34,650,SHA256:7f4a...92b1,RECONCILED\n" +
      "TXN-2026-8802,BATCH-442,BKS-STEM-GR8,BKS-STEM-GR8,1200,SHA256:3c8d...18a0,RECONCILED\n" +
      "TXN-2026-8803,BATCH-443,RET-MUM-892,SUGANDH-CREDIT,-240000,SHA256:a1e2...54d9,SETTLED\n";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `normalized_ledger_${Date.now()}.csv`;
    link.click();
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#05050A] border-t border-[#1E1E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#2D2D3F] text-xs font-mono text-[#8B5CF6] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
            <span>FEATURED CLIENT SOLUTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F4F4F8] tracking-tight">
            I Make Incredible Projects.
          </h2>
          <p className="text-[#9494A8] text-sm sm:text-base mt-3 leading-relaxed">
            Custom software architectures built to replace leaking spreadsheets, manual registers,
            and uncollected debt with deterministic automation.
          </p>
        </div>

        {/* Project Cards Grid with Massive Editorial Numerals */}
        <div className="space-y-12">
          {/* ============================================================ */}
          {/* PROJECT 01 */}
          {/* ============================================================ */}
          <motion.div
            {...cardMotion}
            data-cursor-magnetic="true"
            className="p-6 sm:p-8 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.7)] group relative overflow-hidden"
          >
            {/* Massive Numeral in Unbounded font */}
            <div className="absolute top-4 right-6 font-display font-black text-6xl sm:text-8xl text-[#1E1E28]/60 group-hover:text-[#8B5CF6]/20 transition-colors pointer-events-none select-none">
              01
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Project Details (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6]">
                  <ShoppingCart className="w-4 h-4 text-[#8B5CF6]" />
                  <span>K-12 ACADEMIC SYSTEM · CLOSED-LOOP POS</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Institutional Closed-Loop Inventory &amp; POS Engine
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-[#8B5CF6] font-mono font-bold block mb-1">Client Problem:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Manual ledger overwrites, untracked inventory shrinkage, and chaotic uniform exchanges across 2,400 students causing unaccounted revenue loss.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">Tailored Solution:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Single-click 42ms barcode reconciliation, quarantined defect state machine billing vendor debit memos, and tamper-proof cashier sessions.
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    React 19
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    PostgreSQL
                  </span>
                </div>
              </div>

              {/* Right Column: Live Interactive Simulator (6 cols) */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#05050A] border border-[#1E1E28] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#1E1E28]">
                  <span className="text-slate-300 font-bold uppercase">
                    Interactive Exchange Console
                  </span>
                  <span className="text-emerald-400">
                    Latency: 42ms | Single-Click
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E28] text-xs font-mono space-y-2">
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Active Student:</span>
                    <span className="text-white font-bold">Aarav Sharma - Grade 8A</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Uniform Item:</span>
                    <span className="text-white font-semibold">
                      Senior Boys Shirt ({swapped ? 'Size 34' : 'Size 32'})
                    </span>
                  </div>
                  <div className="flex justify-between text-[#9494A8] text-[11px]">
                    <span>Shelf Location:</span>
                    <span className="text-[#8B5CF6] font-bold">
                      {swapped ? 'RACK-B-04 (Auto Deducted)' : 'RACK-B-02'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSwapped(!swapped)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>{swapped ? 'Revert to Size 32' : 'Test Swap: Size 32 ➔ Size 34'}</span>
                </button>

                {swapped && (
                  <div className="p-2 rounded bg-emerald-950/60 border border-emerald-900 text-[11px] font-mono text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Automatic shelf deduction without manual ledger overwrites.</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* PROJECT 02 */}
          {/* ============================================================ */}
          <motion.div
            {...cardMotion}
            data-cursor-magnetic="true"
            className="p-6 sm:p-8 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.7)] group relative overflow-hidden"
          >
            {/* Massive Numeral in Unbounded font */}
            <div className="absolute top-4 right-6 font-display font-black text-6xl sm:text-8xl text-[#1E1E28]/60 group-hover:text-[#8B5CF6]/20 transition-colors pointer-events-none select-none">
              02
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Project Details (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6]">
                  <Building2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>FMCG &amp; WHOLESALER · CAPITAL ALLOCATION</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  B2B Capital Allocation &amp; Credit Exposure Dashboard
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-[#8B5CF6] font-mono font-bold block mb-1">Client Problem:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Wholesaler bleeding money through untracked credit limits, idle stalled stock, and delayed merchant settlements across hundreds of retailers.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">Tailored Solution:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Real-time credit exposure limiters with automated dispatch locks on breach, dynamic margin computation (+18%), and dead capital liquidation triggers.
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    Tailwind CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    Financial Vector Math
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    REST APIs
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Credit Exposure & Breach Simulator */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#05050A] border border-[#1E1E28] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#1E1E28]">
                  <span className="text-slate-300 font-bold uppercase">
                    Credit Ceiling Risk Profiler
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    creditBreached ? 'bg-rose-950 text-rose-400 border border-rose-900' : 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                  }`}>
                    {creditBreached ? '[● DISPATCH LOCKED]' : '[● DISPATCH ACTIVE]'}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E28] text-xs font-mono space-y-2">
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Retailer Client:</span>
                    <span className="text-white font-bold">Sugandh Fragrance Emporium</span>
                  </div>
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Payment Velocity:</span>
                    <span className="text-white font-semibold">18 days avg settlement</span>
                  </div>
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Dynamic Credit Exposure:</span>
                    <span className="text-white font-bold tabular-nums">
                      ₹{creditBreached ? '4,20,000' : '2,40,000'} / ₹4,00,000
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full transition-all duration-300 ${
                        creditBreached ? 'bg-rose-600' : 'bg-[#8B5CF6]'
                      }`}
                      style={{ width: creditBreached ? '100%' : '60%' }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setCreditBreached(!creditBreached)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#161622] hover:bg-[#1E1E28] border border-[#2D2D3F] hover:border-[#8B5CF6] transition-all cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>
                    {creditBreached ? 'Reset Simulation' : 'Simulate Order (+₹1.80L) to Trigger Auto-Lock'}
                  </span>
                </button>

                {creditBreached && (
                  <div className="p-2 rounded bg-rose-950/60 border border-rose-900 text-[11px] font-mono text-rose-300 flex items-start gap-2">
                    <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Auto-halt dispatch lock engaged: Credit ceiling exceeded by ₹20,000.</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* PROJECT 03 */}
          {/* ============================================================ */}
          <motion.div
            {...cardMotion}
            data-cursor-magnetic="true"
            className="p-6 sm:p-8 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.7)] group relative overflow-hidden"
          >
            {/* Massive Numeral in Unbounded font */}
            <div className="absolute top-4 right-6 font-display font-black text-6xl sm:text-8xl text-[#1E1E28]/60 group-hover:text-[#8B5CF6]/20 transition-colors pointer-events-none select-none">
              03
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Left Column: Project Details (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6]">
                  <FileSpreadsheet className="w-4 h-4 text-[#8B5CF6]" />
                  <span>ENTERPRISE DATA · ETL &amp; AUDIT PIPELINE</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  High-Volume Workflow Normalization Pipeline
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-[#8B5CF6] font-mono font-bold block mb-1">Client Problem:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Cluttered multi-batch spreadsheets leading to accounting errors, corrupted dates, and slow report generation across disparate operational teams.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#05050A] border border-[#1E1E28]">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">Tailored Solution:</span>
                    <p className="text-[#9494A8] leading-relaxed">
                      Bidirectional Excel/CSV ingestion engine with schema validation, cryptographic audit trails, and deterministic 1-click normalization exports.
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    Fast In-Memory Parser
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161622] border border-[#2D2D3F] text-[11px] font-mono text-purple-300">
                    SHA-256 Hashing
                  </span>
                </div>
              </div>

              {/* Right Column: 1-Click Verification Test */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#05050A] border border-[#1E1E28] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#1E1E28]">
                  <span className="text-slate-300 font-bold uppercase">
                    Audit Verification Node
                  </span>
                  <span className="text-emerald-400">
                    Invariants: Cryptographically Validated
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#0E0E14] border border-[#1E1E28] text-xs font-mono space-y-2">
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Ingestion Format:</span>
                    <span className="text-white font-semibold">CSV / XLSX Streams</span>
                  </div>
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Normalization Speed:</span>
                    <span className="text-purple-300 font-semibold">10,000 rows &lt; 85ms</span>
                  </div>
                  <div className="flex justify-between text-[#9494A8]">
                    <span>Ledger State Root:</span>
                    <span className="text-slate-400 truncate max-w-[170px]">0x7f4a...92b1</span>
                  </div>
                </div>

                <button
                  onClick={handleExportCSV}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Normalized Reconciled Ledger (CSV)</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
