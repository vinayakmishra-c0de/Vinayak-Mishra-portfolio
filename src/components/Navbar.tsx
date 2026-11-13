import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="w-full rounded-2xl border border-[#1E1E28] bg-[#0E0E14]/85 backdrop-blur-md px-5 sm:px-6 h-16 flex items-center justify-between gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        {/* Left: VM.DEV wordmark in Unbounded font with purple accent dot */}
        <a 
          href="#" 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-[#161622] border border-[#2D2D3F] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
            <span className="font-display font-extrabold text-xs text-white">V</span>
          </div>
          <span className="font-display font-bold text-sm tracking-wider text-[#F4F4F8]">
            VM<span className="text-[#8B5CF6]">.DEV</span>
          </span>
        </a>

        {/* Center Links: About, Projects, Experience, Skills, Contact */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-[#9494A8]">
          <button 
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollTo('experience')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollTo('skills')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: "Let's Talk" CTA button with glowing hover border */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9494A8] hover:text-white rounded-lg bg-[#161622] border border-[#1E1E28]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-[#1E1E28] bg-[#0E0E14]/95 backdrop-blur-xl p-5 space-y-3 shadow-2xl">
          <div className="flex flex-col gap-1 text-xs font-mono uppercase tracking-wider text-[#9494A8]">
            <button 
              onClick={() => scrollTo('about')}
              className="text-left py-2.5 px-3 rounded hover:bg-[#161622] hover:text-white cursor-pointer"
            >
              01 // About
            </button>
            <button 
              onClick={() => scrollTo('projects')}
              className="text-left py-2.5 px-3 rounded hover:bg-[#161622] hover:text-white cursor-pointer"
            >
              02 // Projects
            </button>
            <button 
              onClick={() => scrollTo('experience')}
              className="text-left py-2.5 px-3 rounded hover:bg-[#161622] hover:text-white cursor-pointer"
            >
              03 // Experience
            </button>
            <button 
              onClick={() => scrollTo('skills')}
              className="text-left py-2.5 px-3 rounded hover:bg-[#161622] hover:text-white cursor-pointer"
            >
              04 // Skills
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="text-left py-2.5 px-3 rounded hover:bg-[#161622] hover:text-white cursor-pointer"
            >
              05 // Contact
            </button>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl transition-all cursor-pointer mt-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
