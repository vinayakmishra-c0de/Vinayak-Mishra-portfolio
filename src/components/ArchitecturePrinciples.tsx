import React from 'react';
import { FileText, FileSpreadsheet, ShieldAlert, TrendingUp, ShieldCheck, Lock, Check } from 'lucide-react';

export const ArchitecturePrinciples: React.FC = () => {
  const principles = [
    {
      number: '1',
      title: 'Audit-Proof Ledgers',
      subtitle: '(Zero manual overwrite)',
      description: 'Immutable append-only event log. Ledger balances are calculated deterministically from genesis transactions, preventing post-hoc register edits or manual tampering.',
      tag: 'IMMUTABLE STATE',
      icon: FileText
    },
    {
      number: '2',
      title: 'Bidirectional Excel Sync',
      subtitle: '(Legacy spreadsheet interoperability)',
      description: 'Maintains familiar spreadsheet habits for administrative staff while enforcing strict schema validation and idempotency keys to keep production databases incorruptible.',
      tag: 'STREAMING CSV',
      icon: FileSpreadsheet
    },
    {
      number: '3',
      title: 'Quarantined State Machines',
      subtitle: '(Damaged goods auto-isolated)',
      description: 'Damaged or defective stock is partitioned into quarantined state machines that automatically bill debit notes against vendor accounts instead of leaking as inventory shrinkage.',
      tag: 'FSM RECOVERY',
      icon: ShieldAlert
    },
    {
      number: '4',
      title: 'Real-Time Dynamic Margins',
      subtitle: '(Rupee-for-rupee capital allocation)',
      description: 'Continuous calculation of true gross and net realized margins on every SKU movement, factoring batch acquisition cost, freight surcharges, and credit carrying costs.',
      tag: 'MARGIN GUARD',
      icon: TrendingUp
    },
    {
      number: '5',
      title: 'Behavioral Risk Engines',
      subtitle: '(Automated credit ceilings)',
      description: 'Dynamic credit scoring tied to historical settlement velocity. Breaching exposure thresholds automatically initiates a warehouse dispatch halt with zero bypass loopholes.',
      tag: 'CIRCUIT BREAKER',
      icon: ShieldCheck
    },
    {
      number: '6',
      title: 'High-Security Role Enclaves',
      subtitle: '(Tamper-proof accounting access)',
      description: 'Isolated single-accountant enclaves secured by cryptographic signatures, preventing unauthorized discounting, register overrides, and staff collusion.',
      tag: 'AES-256 RBAC',
      icon: Lock
    }
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 bg-[#080C14] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Razorpay Docs breadcrumb style */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-[#0066FF]">VM.ENGINE</span>
            <span>/</span>
            <span>SYSTEM CAPABILITIES</span>
            <span>/</span>
            <span className="text-white">ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
            Engineering Principles
          </h2>
          <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1 max-w-2xl">
            Mathematical invariants enforced across all inventory registers, credit locks, and POS pipelines.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-6 rounded-xl bg-[#0B0F19] border border-[#1E293B] hover:border-[#0066FF]/60 transition-all shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/5 rounded-full blur-xl group-hover:bg-[#0066FF]/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#070A12] border border-[#1E293B] flex items-center justify-center text-[#0066FF] shadow-inner group-hover:border-[#0066FF]/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#0066FF] bg-blue-950/60 border border-blue-900/60 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-mono mb-0.5">
                    {item.number}. {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#0066FF] mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
