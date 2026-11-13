import React, { useState } from 'react';
import { 
  GraduationCap, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Activity, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [probed, setProbed] = useState(false);

  const runReconciliationProbe = () => {
    setProbed(true);
    setTimeout(() => setProbed(false), 800);
  };

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-cyber-grid overflow-hidden">
      {/* Background radial purple ambient glow like the reference website */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8B5CF6]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Typographic presence */}
          <div className="lg:col-span-7">
            {/* Role & Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161622] border border-[#2D2D3F] text-xs font-mono text-[#F4F4F8] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></span>
              <span className="text-[#8B5CF6] font-semibold">Custom Software Developer</span>
              <span className="text-[#9494A8]">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                IIT Madras Scholar
              </span>
            </div>

            {/* Large Display Headline in Unbounded font */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F4F4F8] tracking-tight leading-[1.08] mb-6">
              Vinayak <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]">
                Mishra
              </span>
            </h1>

            {/* Subtitle / Focus description */}
            <p className="text-base sm:text-lg text-[#9494A8] leading-relaxed max-w-2xl mb-4 font-normal">
              Transforming complex operational bottlenecks, unorganized data, and leaking offline workflows into bespoke, deterministic software engines.
            </p>

            {/* Core Value Proposition Quote */}
            <div className="p-4 rounded-xl bg-[#0E0E14] border border-[#1E1E28] mb-8">
              <p className="text-xs sm:text-sm font-mono text-purple-300 italic leading-relaxed">
                "I engineer custom, deterministic software architectures specifically tailored to solve unique operational bottlenecks and complex client problems."
              </p>
            </div>

            {/* Horizontal Social Media Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/vinayakmishra-c0de"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6] text-xs font-mono text-[#9494A8] hover:text-white transition-all group cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8B5CF6]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vinayak-mishra-43545a300/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6] text-xs font-mono text-[#9494A8] hover:text-white transition-all group cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8B5CF6]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:vinayakmishra923@gmail.com"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#8B5CF6] text-xs font-mono text-[#9494A8] hover:text-white transition-all group cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8B5CF6]" />
                <span>Email</span>
              </a>

              <a
                href="https://wa.me/919508355456?text=Hi%20Vinayak%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E0E14] border border-[#1E1E28] hover:border-[#10B981] text-xs font-mono text-[#9494A8] hover:text-emerald-400 transition-all group cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#10B981]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Developer Portrait & Systems Enclave */}
          <div className="lg:col-span-5">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#0E0E14] border border-[#1E1E28] shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative group overflow-hidden">
              {/* Ambient purple backglow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Theme-Matched Framed Portrait */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl bg-[#070A12] border border-[#1E1E28]">
                <img
                  src="/assets/aistudio/vinayak_portrait_vignette.png"
                  alt="Vinayak Mishra — Custom Software Developer, IIT Madras Scholar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient scrims ensuring seamless blend with theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/15 to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#05050A]/85 backdrop-blur-md border border-[#2D2D3F] text-[10px] font-mono text-[#F4F4F8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                  <span>Vinayak Mishra</span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#05050A]/85 backdrop-blur-md border border-emerald-900/60 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>[● ONLINE]</span>
                </div>

                {/* Bottom Photo Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E0E14]/90 backdrop-blur-md border border-[#1E1E28] flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-white font-bold text-xs flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>IIT Madras Scholar</span>
                    </div>
                    <div className="text-[10px] text-[#9494A8] mt-0.5">
                      Custom Software Developer
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#9494A8]">Reconcile</div>
                    <div className="text-xs font-bold text-emerald-400 font-mono">12ms P99</div>
                  </div>
                </div>
              </div>

              {/* Compact 3-metric diagnostic strip below photo */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#1E1E28] text-center font-mono">
                <div className="p-2 rounded-lg bg-[#05050A] border border-[#1E1E28]">
                  <div className="text-[9px] text-[#9494A8] uppercase">Leakage</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">0.00%</div>
                </div>
                <div className="p-2 rounded-lg bg-[#05050A] border border-[#1E1E28]">
                  <div className="text-[9px] text-[#9494A8] uppercase">Latency</div>
                  <div className="text-xs font-bold text-white mt-0.5">12ms</div>
                </div>
                <div className="p-2 rounded-lg bg-[#05050A] border border-[#1E1E28]">
                  <div className="text-[9px] text-[#9494A8] uppercase">Traced</div>
                  <div className="text-xs font-bold text-purple-300 mt-0.5">100%</div>
                </div>
              </div>

              {/* Interactive Deterministic Probe Button */}
              <button
                onClick={runReconciliationProbe}
                className="w-full mt-3 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#161622] hover:bg-[#1E1E28] border border-[#2D2D3F] hover:border-[#8B5CF6] transition-all cursor-pointer"
              >
                <Code2 className={`w-3.5 h-3.5 text-[#8B5CF6] ${probed ? 'animate-spin' : ''}`} />
                <span>{probed ? 'Probing Invariants...' : 'Run Deterministic Probe'}</span>
              </button>

              {probed && (
                <div className="mt-1.5 text-center text-[10px] font-mono text-emerald-400">
                  ✓ Ledger balanced in 12ms · Checksum verified
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
