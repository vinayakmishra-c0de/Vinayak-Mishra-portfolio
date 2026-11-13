import React, { useState } from 'react';
import { 
  Terminal, 
  ExternalLink, 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSec-0rNrSF2-xP_PccbsVgZXdvJ2UmsRWZpJN8VaoXstI38rw/viewform";
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSec-0rNrSF2-xP_PccbsVgZXdvJ2UmsRWZpJN8VaoXstI38rw/viewform?embedded=true";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vinayakmishra923@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Vinayak, I saw your portfolio and would like to discuss custom software development for our operation.`
    );
    window.open(`https://wa.me/919508355456?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#05050A] border-t border-[#1E1E28]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-styled dark container */}
        <div className="p-4 sm:p-8 rounded-3xl bg-[#0E0E14] border border-[#1E1E28] shadow-[0_15px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Top subtle purple accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1E1E28] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6] shrink-0">
                <Terminal className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Have a Problem? Let’s Architect the Solution
                </h3>
                <p className="text-xs font-mono text-[#9494A8] mt-0.5">
                  Vinayak Mishra (IIT Madras Scholar)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Button to open form in new tab */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#161622] hover:bg-[#1E1E28] border border-[#2D2D3F] hover:border-[#8B5CF6] text-xs font-mono text-purple-300 hover:text-white transition-all cursor-pointer group"
              >
                <span>Open in Full Tab</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Terminal status dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>
          </div>

          {/* Embedded Google Form Container */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0A0A10] border border-[#1E1E28] shadow-inner min-h-[640px]">
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0E0E14] z-10 p-6 text-center">
                <div className="w-10 h-10 border-2 border-[#8B5CF6] border-t-transparent rounded-full animate-spin mb-4" />
                <div className="text-xs font-mono text-slate-300">Loading Client Intake Form...</div>
                <div className="text-[11px] font-mono text-slate-500 mt-1">Direct Google Forms Endpoint</div>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-xs font-mono text-[#8B5CF6] hover:underline flex items-center gap-1"
                >
                  <span>Click here if the form doesn't load automatically</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            <iframe
              src={googleFormEmbedUrl}
              title="Vinayak Mishra Client Intake Form"
              width="100%"
              height="740"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-[740px] border-0"
              onLoad={() => setIframeLoading(false)}
            >
              Loading form...
            </iframe>
          </div>

          {/* Direct Contact Bar */}
          <div className="mt-8 pt-6 border-t border-[#1E1E28]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="text-xs font-mono uppercase text-[#9494A8] tracking-wider">
                Prefer Instant Direct Dispatch?
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Response SLA: &lt; 4 hours
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              {/* Direct Email with copy button */}
              <div className="p-2.5 rounded-xl bg-[#05050A] border border-[#1E1E28] flex items-center justify-between">
                <a
                  href="mailto:vinayakmishra923@gmail.com"
                  className="flex items-center gap-1.5 text-[#F4F4F8] hover:text-[#8B5CF6] truncate mr-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                  <span className="truncate">Email Me</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-500 hover:text-white cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* WhatsApp direct link */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="p-2.5 rounded-xl bg-[#05050A] border border-[#1E1E28] hover:border-emerald-800 flex items-center justify-center gap-1.5 text-[#F4F4F8] hover:text-emerald-400 transition-colors cursor-pointer"
                title="Chat on WhatsApp: +91 9508355456"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/vinayakmishra-c0de"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#05050A] border border-[#1E1E28] hover:border-[#8B5CF6] flex items-center justify-center gap-1.5 text-[#F4F4F8] hover:text-[#8B5CF6] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vinayak-mishra-43545a300/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#05050A] border border-[#1E1E28] hover:border-blue-600 flex items-center justify-center gap-1.5 text-[#F4F4F8] hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
