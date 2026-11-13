import React, { useState } from 'react';
import { ShoppingCart, ArrowLeftRight, CheckCircle2, AlertTriangle, Lock, Download, Upload, Terminal, Code2 } from 'lucide-react';

export const SchoolPosEngine: React.FC = () => {
  const [swapped, setSwapped] = useState(false);
  const [activeTab, setActiveTab] = useState<'ui' | 'payload'>('ui');

  const handleExportCSV = () => {
    const csvContent = 
      "Student,Grade,Item,Size,Shelf_Deduction,Amount_INR,Latency,Status\n" +
      "Aarav Sharma,Grade 8A,Senior Oxford Shirt,Size 34,RACK-B-04,650,42ms,Reconciled\n" +
      "Aarav Sharma,Grade 8A,Grade 8 NCERT Books,Bundle,SHELF-D-12,1200,42ms,Reconciled\n" +
      "Royal Apparels,Vendor,Torn Zips & Stitching Defects,24 units,QUARANTINE-01,-15600,Auto-Debit,Accounted\n";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reconciled_ledger_${Date.now()}.csv`;
    link.click();
  };

  return (
    <div className="space-y-4">
      {/* Deployment Heading with Razorpay Docs breadcrumb style */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#1E293B]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
            <span className="text-[#0066FF]">VM.ENGINE</span>
            <span>/</span>
            <span>DEPLOYMENTS</span>
            <span>/</span>
            <span className="text-white">INSTITUTIONAL POS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
            A. Institutional Inventory &amp; Closed-Loop POS Engine (School System)
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2.5 py-1 rounded">
            [● PRODUCTION READY]
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Module 1A (7 cols): POS Billing & Instant Exchange Console */}
        <div className="lg:col-span-7 bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div>
            {/* Header with Razorpay Docs API badge & tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#0066FF] text-white font-bold text-[10px]">
                  POST
                </span>
                <span className="font-bold text-white uppercase tracking-wider">
                  Module 1A: POS Billing &amp; Instant Exchange Console
                </span>
              </div>

              {/* View Switcher: Console UI vs Live Payload */}
              <div className="flex items-center gap-1 p-0.5 bg-[#070A12] border border-[#1E293B] rounded">
                <button
                  onClick={() => setActiveTab('ui')}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded cursor-pointer ${
                    activeTab === 'ui' ? 'bg-[#0066FF] text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive UI
                </button>
                <button
                  onClick={() => setActiveTab('payload')}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded cursor-pointer ${
                    activeTab === 'payload' ? 'bg-[#0066FF] text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  JSON Payload
                </button>
              </div>
            </div>

            {activeTab === 'ui' ? (
              <>
                {/* Mock UI showing active student lookup */}
                <div className="bg-[#070A12] border border-[#1E293B] rounded-lg p-3 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Active Student Lookup
                    </span>
                    <span className="text-sm font-bold text-white font-mono">
                      Aarav Sharma - Grade 8A
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded">
                    [● VERIFIED]
                  </span>
                </div>

                {/* Cart: Uniforms & Books */}
                <div className="space-y-2 mb-4 text-xs font-mono">
                  <div className="flex justify-between text-slate-400 uppercase text-[11px] px-1">
                    <span>Cart: Uniforms &amp; Books</span>
                    <span>Shelf Deduction</span>
                  </div>

                  {/* Item 1: Shirt */}
                  <div className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                    swapped 
                      ? 'bg-blue-950/20 border-[#0066FF]/60 shadow-[0_0_15px_rgba(0,102,255,0.15)]' 
                      : 'bg-[#070A12] border-[#1E293B]'
                  }`}>
                    <div>
                      <div className="text-white font-semibold flex items-center gap-2">
                        <span>Uniform: Senior Boys Shirt</span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded font-mono">
                          {swapped ? 'Size 34' : 'Size 32'}
                        </span>
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Deducted Shelf: <span className="text-[#0066FF] font-semibold">{swapped ? 'RACK-B-04' : 'RACK-B-02'}</span>
                      </div>
                    </div>
                    <span className="text-white font-bold">₹650</span>
                  </div>

                  {/* Item 2: Books */}
                  <div className="p-3 rounded-lg bg-[#070A12] border border-[#1E293B] flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">
                        Books: Grade 8 Academic Textbooks
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Curriculum Kit · Shelf: AISLE-03
                      </div>
                    </div>
                    <span className="text-white font-bold">₹1,200</span>
                  </div>
                </div>

                {/* Return/Exchange Protocol */}
                <div className="p-3.5 rounded-lg bg-[#070A12] border border-[#1E293B] mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white font-mono">
                        <ArrowLeftRight className="w-3.5 h-3.5 text-[#0066FF]" />
                        <span>Return/Exchange Protocol:</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Shirt size 32 swapped to size 34 ➔ automatic shelf deduction without manual ledger overwrites.
                      </p>
                    </div>

                    <button
                      onClick={() => setSwapped(!swapped)}
                      className="px-3.5 py-2 text-xs font-mono font-semibold rounded bg-[#0066FF] hover:bg-[#0052cc] text-white transition-all shadow-[0_0_15px_rgba(0,102,255,0.3)] cursor-pointer shrink-0"
                    >
                      {swapped ? 'Revert to Size 32' : 'Swap Size 32 ➔ Size 34'}
                    </button>
                  </div>

                  {swapped && (
                    <div className="mt-2.5 p-2 rounded bg-emerald-950/40 border border-emerald-900/60 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Size 34 deducted from shelf RACK-B-04. Size 32 returned to inventory. Latency: 42ms.</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Live Payload tab showing Razorpay Docs code style */
              <div className="bg-[#070A12] border border-[#1E293B] rounded-lg p-4 font-mono text-xs text-slate-300 mb-4 overflow-x-auto">
                <div className="text-slate-500 text-[10px] mb-2 uppercase">
                  // Deterministic Exchange Event Payload
                </div>
                <pre className="text-[11px] leading-relaxed text-blue-300">
{`{
  "event": "pos.inventory.instant_exchange",
  "student": {
    "name": "Aarav Sharma",
    "grade": "8A",
    "status": "cleared"
  },
  "exchange_protocol": {
    "returned_sku": "UNI-SHIRT-M-32",
    "allocated_sku": "UNI-SHIRT-M-34",
    "allocated_shelf": "RACK-B-04",
    "reconciliation_latency_ms": 42,
    "manual_ledger_overwrite": false,
    "checksum": "0x7F4A...92B1"
  },
  "cart_total_inr": 1850
}`}
                </pre>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-emerald-400 font-semibold">
              Latency: 42ms | Single-Click Reconciled
            </span>
            <span className="text-white font-bold">
              Cart Total: ₹1,850
            </span>
          </div>
        </div>

        {/* Right Column: Module 1B (top) & Module 1C (bottom) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Module 1B (5 cols, top): Defective Stock Quarantine Ledger */}
          <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white uppercase">
                  Module 1B: Defective Stock Quarantine Ledger
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-1.5 py-0.5 rounded">
                100% Accounted
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              Isolates torn zips, stitching defects directly to vendor account.
            </p>

            <div className="p-3 rounded-lg bg-[#070A12] border border-[#1E293B] text-xs font-mono mb-3">
              <div className="text-white font-bold">
                Royal Apparels - 24 units quarantined, auto-billed to vendor debit
              </div>
              <div className="text-slate-400 text-[11px] mt-1">
                Torn zips (14 units) · Stitching defects (10 units)
              </div>
              <div className="text-emerald-400 text-[11px] mt-1.5 font-semibold">
                Auto-debited to Vendor Account #RA-883 (+₹15,600)
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-[#1E293B]">
              <span className="text-emerald-400">Recovery Rate: 100% Accounted</span>
              <span className="text-slate-400">0% Untracked loss</span>
            </div>
          </div>

          {/* Module 1C (5 cols, bottom): Single-Accountant Security Vault */}
          <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl p-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#6366F1]" />
                <span className="font-bold text-white uppercase">
                  Module 1C: Single-Accountant Security Vault
                </span>
              </div>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-900 px-1.5 py-0.5 rounded">
                AES-256 Vault
              </span>
            </div>

            <div className="p-3 rounded-lg bg-[#070A12] border border-[#1E293B] text-xs font-mono mb-3">
              <div className="text-white font-bold">
                AES-256 protected access restriction (tamper-proof)
              </div>
              <div className="text-slate-400 text-[11px] mt-1">
                Role: Single-Accountant Enclave · Cryptographically signed session
              </div>
            </div>

            {/* 1-Click Excel Ingest/Export buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                onClick={handleExportCSV}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#070A12] hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>1-Click Excel Export</span>
              </button>

              <button
                onClick={() => alert('Excel Ingest: Ready to map legacy register files with schema validation.')}
                className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#070A12] hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-[#0066FF] transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>1-Click Excel Ingest</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
