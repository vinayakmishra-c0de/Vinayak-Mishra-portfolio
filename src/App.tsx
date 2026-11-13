import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectsShowcase } from './components/ProjectsShowcase.tsx';
import { ExperienceEducation } from './components/ExperienceEducation.tsx';
import { SkillsTools } from './components/SkillsTools.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { motion } from 'motion/react';

// Smooth cubic-bezier curve for high-end SaaS feel
const fadeInUpProps = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#05050A] text-[#F4F4F8] selection:bg-[#8B5CF6] selection:text-white">
      {/* Custom Magnetic Follower Cursor */}
      <CustomCursor />

      {/* SECTION 1: FLOATING GLASS NAVBAR */}
      <Navbar />

      <main>
        {/* SECTION 2: HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Hero />
        </motion.div>

        {/* SECTION 3: NUMBERED CLIENT PROJECTS SHOWCASE (01, 02, 03) */}
        <motion.div {...fadeInUpProps}>
          <ProjectsShowcase />
        </motion.div>

        {/* SECTION 4: WORK EXPERIENCE & IIT MADRAS EDUCATION TIMELINE */}
        <motion.div {...fadeInUpProps}>
          <ExperienceEducation />
        </motion.div>

        {/* SECTION 5: CUSTOM DEVELOPMENT SKILLS & TOOLS */}
        <motion.div {...fadeInUpProps}>
          <SkillsTools />
        </motion.div>

        {/* SECTION 6: CONTACT & AUDIT REQUEST */}
        <motion.div {...fadeInUpProps}>
          <ContactSection />
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
