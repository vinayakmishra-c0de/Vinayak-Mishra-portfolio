import React, { useState } from 'react';
import { Terminal, Send, Mail, MessageSquare, Github, Linkedin, Copy, Check } from 'lucide-react';

export const AuditFunnel: React.FC = () => {
  const [inquiryText, setInquiryText] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vinayakmishra923@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent('Operations Audit Request');
    const body = encodeURIComponent(
      `From: ${clientEmail || 'Operations Prospect'}\n\n` +
      `Where our business is bleeding time or money:\n${inquiryText}`
    );
    window.open(`mailto:vinayakmishra923@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Vinayak, I'd like to request an operations audit for our business.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="audit" className="py-16 md:py-24 bg-[#080C14] border-t border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-styled direct inquiry card: "Request an Operations Audit" */}
        <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden relative">
          {/* Top highlight bar */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-80" />

          {/* Terminal Window Header */}
          <div className="bg-[#070A12] border-b border-[#1E293B] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-[#0066FF]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Request an Operations Audit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase mr-2">
                TERMINAL // DISPATCH
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Your Work Email / Contact:
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-[#070A12] border border-[#1E293B] focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] rounded-lg px-4 py-2.5 text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all"
                />
              </div>

              {/* Input prompt requested: "Where is your business bleeding time or money right now?" */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Where is your business bleeding time or money right now?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Manual inventory registers, unreconciled exchanges, slow POS checkout, uncollected credit limits..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="w-full bg-[#070A12] border border-[#1E293B] focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] rounded-lg px-4 py-2.5 text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#0066FF] hover:bg-[#0052cc] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,102,255,0.35)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Operations Audit Request</span>
              </button>

              {sent && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-900 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Audit request dispatched to Vinayak Mishra.</span>
                </div>
              )}
            </form>

            {/* Direct Contact Links: Email, WhatsApp, GitHub, LinkedIn */}
            <div className="mt-8 pt-6 border-t border-[#1E293B]">
              <div className="text-xs font-mono uppercase text-slate-500 mb-3 tracking-wider">
                Direct Contact Links:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                {/* Email */}
                <div className="p-2.5 rounded-lg bg-[#070A12] border border-[#1E293B] flex items-center justify-between">
                  <a 
                    href="mailto:vinayakmishra923@gmail.com" 
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white truncate mr-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    <span className="truncate">Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-500 hover:text-white cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="p-2.5 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-emerald-800 flex items-center justify-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-slate-600 flex items-center justify-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#070A12] border border-[#1E293B] hover:border-blue-700 flex items-center justify-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
