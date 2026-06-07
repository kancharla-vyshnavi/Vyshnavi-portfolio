'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: 'Data Science' | 'AI / Web';
  desc: string;
  features: string[];
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Data Science' | 'AI / Web'>('All');

  const projects: Project[] = [
    {
      title: 'SkillVerse-AI',
      category: 'AI / Web',
      desc: 'An interactive game-like AI Career Guidance platform that helps developers chart customized paths, analyze resumes, and test coding skills.',
      features: [
        'Personalized Roadmap generator',
        'AI Mentor chatbot assistant',
        'Resume Score Analyzer',
        'Coding Challenge Playground',
        'XP & Achievement tracking',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      image: '/project-skillverse.png',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      title: 'NovaX-AI (VoiceCare)',
      category: 'AI / Web',
      desc: 'A voice-first healthcare companion app designed to facilitate elderly medication compliance and medical checkups.',
      features: [
        'AI Voice Companion agent',
        'Medication compliance checkers',
        'Interactive appointment booking',
        'Emergency Twilio SMS triggers',
        'Multilingual translation flows',
      ],
      tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Eleven Labs', 'Twilio', 'Tailwind CSS'],
      image: '/project-novax.png',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Movie Recommendation System',
      category: 'Data Science',
      desc: 'An end-to-end recommendation pipeline utilizing vector search math to match movie attributes and user search intent.',
      features: [
        'TF-IDF vector text mapping',
        'Cosine Similarity search matrix',
        '85%+ recommendation accuracy',
        'Preprocessed data noise reduction by 40%',
        'Analytical similarity dashboards',
      ],
      tech: ['Python', 'Pandas', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
      image: '/project-recommendation.png',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeTab === 'All' || p.category === activeTab
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Neon glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-cyber-pink/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-cyber-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center">
          <span className="font-mono text-sm tracking-widest text-cyber-pink uppercase block">
            [04] // DEVELOPED APPLICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mx-auto" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {(['All', 'Data Science', 'AI / Web'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyber-cyan to-cyber-purple text-black border-transparent shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                  : 'bg-black/10 dark:bg-white/5 border-black/5 dark:border-white/5 text-gray-400 hover:text-foreground hover:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl bg-black/30 dark:bg-[#0c0c0c] border border-black/5 dark:border-white/5 overflow-hidden backdrop-blur-sm hover:border-cyber-cyan/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual preview */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/5 dark:border-white/5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-bold tracking-wider px-2 py-1 bg-black/80 border border-white/15 text-cyber-cyan rounded-md">
                    {p.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-extrabold text-foreground group-hover:text-cyber-cyan transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-300 leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 pt-1">
                      {p.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                          <span className="text-cyber-purple font-mono font-bold">»</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & Actions */}
                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono font-semibold text-gray-300 hover:text-white hover:border-white/15 hover:bg-white/10 transition-all cursor-pointer"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </a>

                      <a
                        href={p.demoUrl}
                        className="flex-grow flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-xs font-mono font-semibold text-cyber-cyan hover:text-black hover:bg-cyber-cyan hover:shadow-[0_0_12px_rgba(0,245,255,0.3)] transition-all cursor-pointer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
