import ParticleBackground from "@/components/ui/ParticleBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import Header from "@/components/ui/Header";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingDock from "@/components/ui/FloatingDock";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden cyber-grid pb-24">
      {/* Background HTML5 Canvas Particles */}
      <ParticleBackground />

      {/* Hardware-accelerated UI Layers */}
      <CursorGlow />
      <Header />
      <ScrollProgress />
      <FloatingDock />

      {/* Portfolio Main Content grid */}
      <main className="relative z-10 w-full">
        <Hero />
        <div className="max-w-7xl mx-auto px-2">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </main>

      {/* Recruiter-friendly Technical Footer */}
      <footer className="relative z-10 py-12 border-t border-black/5 dark:border-white/5 text-center text-xs font-mono text-gray-500 bg-background/50 backdrop-blur-sm select-none">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} {"//"} KANCHarla lakshMI VYSHNAVI. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 text-[10px] text-gray-600">DECRYPTED PORTFOLIO PROTOCOL {"//"} VERSION 1.5</p>
        </div>
      </footer>
    </div>
  );
}
