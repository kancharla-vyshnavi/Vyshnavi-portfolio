'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Github, Linkedin, Send } from 'lucide-react';

const roles = ["Aspiring Data Analyst", "Third-Year CSE (AI) Student"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    const type = () => {
      if (!isDeleting) {
        setSubText(prev => currentFullText.substring(0, prev.length + 1));
        
        if (subText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
        
        timer = setTimeout(type, 80);
      } else {
        setSubText(prev => currentFullText.substring(0, prev.length - 1));
        
        if (subText === '') {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
          return;
        }
        
        timer = setTimeout(type, 40);
      }
    };

    timer = setTimeout(type, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [subText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyber-cyan/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-cyber-purple/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Texts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-6 w-fit select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
            SYSTEM_ONLINE // PROTOCOL: PORTFOLIO
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-foreground leading-[1.15]">
            Hi, I&apos;m <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent">Kancharla Lakshmi Vyshnavi</span>
          </h1>

          <div className="h-8 mb-6">
            <p className="text-lg sm:text-xl font-mono text-gray-400">
              <span className="text-cyber-cyan cursor-typing">{subText}</span>
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground/80 mb-8 max-w-xl leading-relaxed">
            &quot;Transforming Data into Insights and Building Intelligent AI Solutions.&quot;
          </h2>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/resume/Vyshnavi_Resume.pdf"
              download="Vyshnavi_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-black font-bold hover:shadow-[0_0_20px_rgba(0,245,255,0.45)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] font-bold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Contact Recruiter
            </a>

            <div className="flex gap-3 sm:ml-2">
              <a
                href="https://github.com/kancharla-vyshnavi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-black/20 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground/60 hover:text-cyber-cyan hover:border-cyber-cyan/40 hover:bg-cyber-cyan/5 transition-all duration-300 cursor-pointer"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kancharla-lakshmi-vyshnavi-37445833a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-black/20 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground/60 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-300 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Profile Image with Cyberpunk Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
            {/* Tech glowing background structures */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyber-cyan via-cyber-purple to-cyber-pink opacity-20 dark:opacity-25 blur-xl animate-pulse" />
            
            {/* Rotating neon outer frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyber-cyan via-cyber-purple to-cyber-pink animate-[spin_10s_linear_infinite]" />

            {/* Inner box */}
            <div className="absolute inset-1.5 rounded-xl bg-[#0a0a0a] overflow-hidden flex items-center justify-center border border-white/5">
              <Image
                src="/images/vyshnavi.jpeg"
                alt="Kancharla Lakshmi Vyshnavi"
                width={360}
                height={360}
                className="object-cover object-top h-full w-full opacity-90 scale-100 hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                priority
              />

              {/* Holographic scanner effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent h-1/2 w-full animate-scanline pointer-events-none" />
              
              {/* Corner crosshairs for cyberpunk style */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyber-cyan/70" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyber-cyan/70" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyber-cyan/70" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyber-cyan/70" />
            </div>

            {/* Floating details badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-black/90 dark:bg-black/90 light:bg-white/95 border border-cyber-cyan/40 rounded-xl shadow-[0_0_15px_rgba(0,245,255,0.2)] backdrop-blur-sm select-none"
            >
              <div className="text-[9px] font-mono text-gray-500 uppercase">LOCATION</div>
              <div className="text-xs font-mono font-bold text-foreground tracking-wide">INDIA // NELLORE</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-black/90 dark:bg-black/90 light:bg-white/95 border border-cyber-purple/40 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-sm select-none"
            >
              <div className="text-[9px] font-mono text-gray-500 uppercase">FOCUS</div>
              <div className="text-xs font-mono font-bold text-foreground tracking-wide">AI & DATA ANALYTICS</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
