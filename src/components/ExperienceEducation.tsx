import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Calendar } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#05050A] border-t border-[#1E1E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#2D2D3F] text-xs font-mono text-[#8B5CF6] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
            <span>EXPERIENCE &amp; EDUCATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F4F4F8] tracking-tight">
            My Work Experience &amp; Pedigree.
          </h2>
          <p className="text-[#9494A8] text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on custom software delivery for real businesses paired with foundational mathematical and computational rigor from IIT Madras.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ============================================================ */}
          {/* LEFT: WORK EXPERIENCE & CLIENT ENGAGEMENTS */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#1E1E28]">
              <div className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6]">
                <Briefcase className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                Work Experience &amp; Client Engagements
              </h3>
            </div>

            {/* Experience Item 1 */}
            <div className="p-6 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-md group">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-sm font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  Custom Software Developer
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-purple-300 bg-purple-950/40 border border-purple-900/60 px-2.5 py-0.5 rounded-full">
                  <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                  <span>2024 — Present</span>
                </span>
              </div>

              <div className="text-xs font-mono text-[#8B5CF6] mb-3">
                Independent Practice &amp; Bespoke Client Systems
              </div>

              <p className="text-xs text-[#9494A8] leading-relaxed mb-4">
                Designing tailored internal tools, custom ERP extensions, and single-click automated operational dashboards for SMEs and regional enterprises bleeding time on manual paperwork.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sub-second deterministic state reconciliation engines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Automated credit ceiling and warehouse dispatch locks</span>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="p-6 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-md group">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-sm font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  Systems &amp; Database Engineer
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#9494A8] bg-[#161622] border border-[#2D2D3F] px-2.5 py-0.5 rounded-full">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>Contract Engagements</span>
                </span>
              </div>

              <div className="text-xs font-mono text-[#8B5CF6] mb-3">
                API Architecture &amp; Data Normalization
              </div>

              <p className="text-xs text-[#9494A8] leading-relaxed mb-4">
                Architecting high-throughput REST APIs, relational schemas with ACID guarantees, and automated ETL ingestion pipelines for fast reporting.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>PostgreSQL &amp; SQLite deterministic schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Legacy spreadsheet interoperability with zero format corruption</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: ACADEMIC BACKGROUND (IIT MADRAS) */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#1E1E28]">
              <div className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6]">
                <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                Academic Background
              </h3>
            </div>

            {/* IIT Madras Card */}
            <div className="p-6 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all shadow-md group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-sm font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  IIT Madras Scholar
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2.5 py-0.5 rounded-full">
                  [● ACTIVE SCHOLAR]
                </span>
              </div>

              <div className="text-xs font-mono text-[#8B5CF6] mb-1">
                Indian Institute of Technology Madras
              </div>
              <div className="text-sm font-semibold text-[#F4F4F8] mb-3">
                BS in Data Science &amp; Applications
              </div>

              <p className="text-xs text-[#9494A8] leading-relaxed mb-4">
                Undergraduate scientific education grounded in mathematical rigor, computational statistics, stochastic systems, and algorithmic software engineering.
              </p>

              {/* Coursework Tags */}
              <div className="pt-3 border-t border-[#1E1E28] space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                  Core Mathematical &amp; Systems Coursework:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>Algorithmic Thinking</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>Database Systems (ACID)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>Stochastic Operations</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>Computational Statistics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
