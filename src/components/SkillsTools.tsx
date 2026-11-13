import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Layers, 
  GitBranch, 
  Server, 
  Cloud, 
  Box, 
  Workflow, 
  Check,
  Sparkles
} from 'lucide-react';

export const SkillsTools: React.FC = () => {
  const engineeringSkills = [
    {
      title: 'Full-Stack Development',
      stack: 'React, Next.js, Node.js, TypeScript',
      description: 'End-to-end type-safe client dashboards and resilient backend services.',
      icon: Code2
    },
    {
      title: 'Custom Database Architecture',
      stack: 'PostgreSQL, SQLite, Prisma',
      description: 'ACID transactional integrity, normalized schemas, and fast indexing.',
      icon: Database
    },
    {
      title: 'API Design & System Automation',
      stack: 'RESTful Protocols, Webhooks, Idempotency',
      description: 'Single-click automation replacing tedious manual workflows and paper forms.',
      icon: Workflow
    },
    {
      title: 'Data Analytics & Optimization',
      stack: 'Stochastic Models, Vector Math, Python',
      description: 'Dynamic margin modeling, credit ceiling analysis, and stock turnover metrics.',
      icon: Cpu
    }
  ];

  const tools = [
    { name: 'Git & GitHub', category: 'Version Control', icon: GitBranch },
    { name: 'VS Code', category: 'IDE & Debugging', icon: Terminal },
    { name: 'Postman', category: 'API Testing', icon: Server },
    { name: 'Linux Terminal', category: 'Environment', icon: Terminal },
    { name: 'Docker', category: 'Containerization', icon: Box },
    { name: 'Vercel / Cloud Run', category: 'Deployment', icon: Cloud }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#05050A] border-t border-[#1E1E28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#2D2D3F] text-xs font-mono text-[#8B5CF6] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
            <span>CAPABILITIES &amp; TOOLING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F4F4F8] tracking-tight">
            Development Skills &amp; Tools.
          </h2>
          <p className="text-[#9494A8] text-sm sm:text-base mt-3 leading-relaxed">
            The technical arsenal used to build custom, error-proof software engines for high-friction business operations.
          </p>
        </div>

        {/* Bento Grid: 2 Large Compartments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Compartment 1: Core Engineering Skills (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E1E28]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6]">
                  <Layers className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                  Core Engineering Skills
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#8B5CF6] bg-purple-950/40 border border-purple-900/60 px-2.5 py-0.5 rounded-full">
                Production Stack
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="p-4 rounded-xl bg-[#05050A] border border-[#1E1E28] hover:border-[#8B5CF6]/50 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-display font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {skill.title}
                    </h4>
                    <div className="text-[11px] font-mono text-[#8B5CF6] mb-2">
                      {skill.stack}
                    </div>
                    <p className="text-xs text-[#9494A8] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compartment 2: Development & Deployment Tools (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0E0E14] border border-[#1E1E28] shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E28]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6]">
                    <Terminal className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                    Development Tools
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded-full">
                  Workflow
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {tools.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="p-3.5 rounded-xl bg-[#05050A] border border-[#1E1E28] hover:border-[#8B5CF6] transition-all flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6] mb-2 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
                        <ToolIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                        {tool.category}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#05050A] border border-[#1E1E28] text-xs font-mono text-[#9494A8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span>Deterministic CI/CD pipelines with zero production downtime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
