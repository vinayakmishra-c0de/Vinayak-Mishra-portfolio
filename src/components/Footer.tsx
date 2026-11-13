import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E1E28] bg-[#05050A] text-[#9494A8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1E1E28]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-bold tracking-tight">
              <div className="w-6 h-6 rounded-lg bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6]">
                <span className="font-display font-extrabold text-[10px] text-white">V</span>
              </div>
              <span className="font-display text-sm">
                VM<span className="text-[#8B5CF6]">.DEV</span>
              </span>
              <span className="text-xs text-slate-500 font-normal">
                — Vinayak Mishra
              </span>
            </div>
            <p className="text-xs text-[#9494A8] max-w-md font-sans">
              Custom Software Developer &amp; Systems Engineer. IIT Madras Scholar.
              Engineering bespoke internal engines for operational bottlenecks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Vinayak Mishra. All rights reserved. Built with precision for physical operations.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a 
              href="mailto:vinayakmishra923@gmail.com" 
              className="hover:text-[#8B5CF6] transition-colors"
            >
              vinayakmishra923@gmail.com
            </a>
            <span>·</span>
            <a 
              href="https://wa.me/919508355456?text=Hi%20Vinayak%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21" 
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              +91 9508355456
            </a>
            <span>·</span>
            <a 
              href="https://github.com/vinayakmishra-c0de" 
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8B5CF6] transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a 
              href="https://www.linkedin.com/in/vinayak-mishra-43545a300/" 
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <span className="text-purple-300">IIT Madras Scholar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
