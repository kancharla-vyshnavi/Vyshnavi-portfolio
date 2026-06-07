'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  color: string;
}

interface CertificationItem {
  title: string;
  provider: string;
  desc: string;
  glow: string;
}

export default function Achievements() {
  const education: EducationItem[] = [
    {
      degree: 'B.Tech – Computer Science & Engineering (Artificial Intelligence)',
      institution: 'Narayana Engineering College, Nellore, AP',
      grade: 'CGPA 8.8',
      period: 'Aug. 2024 – Jul. 2028',
      color: 'border-cyber-cyan text-cyber-cyan',
    },
    {
      degree: 'Board of Intermediate Education – M.P.C',
      institution: 'Narayana Junior College, Nellore, India',
      grade: '82%',
      period: 'Jun. 2022 – May 2024',
      color: 'border-cyber-purple text-cyber-purple',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Narayana Concept School, Nellore, India',
      grade: '75%',
      period: 'Jun. 2021 – Apr. 2022',
      color: 'border-cyber-pink text-cyber-pink',
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'Google Cloud Generative AI Certification',
      provider: 'Google Cloud',
      desc: 'Completed training on large language models, image generation models, and application developers pipeline on Google Cloud.',
      glow: 'hover:border-cyber-cyan/40 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] border-cyber-cyan/20',
    },
    {
      title: 'Lloyds Banking Group Data Science & Analytics Program',
      provider: 'Forage / Lloyds Banking Group',
      desc: 'Simulated professional consulting work solving customer analytics challenges, model evaluations, and executive visualizations.',
      glow: 'hover:border-cyber-purple/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] border-cyber-purple/20',
    },
  ];

  const highlights = [
    'Data Science Internship Completion',
    'AI Career Guidance Platform Development',
    'AI Voice Assistant System Implementation',
    'Movie Recommendation Algorithms Delivery',
    'Optimized Machine Learning Pipelines',
  ];

  const handleConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#00F5FF', '#8B5CF6', '#EC4899'],
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/10 w-[300px] h-[300px] bg-cyber-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-2">
              <span className="font-mono text-sm tracking-widest text-cyber-cyan uppercase block">
                [05] // ACADEMIC PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                EDUCATION
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full" />
            </div>

            <div className="relative border-l-2 border-dashed border-white/10 dark:border-white/10 ml-4 pl-8 space-y-8">
              {education.map((item, idx) => (
                <motion.div key={idx} variants={cardVariants} className="relative">
                  {/* Timeline icon */}
                  <div className={`absolute -left-[49px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-black border text-foreground shadow-[0_0_10px_rgba(0,0,0,0.8)] z-10 ${item.color}`}>
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  <div className="p-5 rounded-2xl bg-black/25 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                      <h4 className="font-extrabold text-base text-foreground">{item.degree}</h4>
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-400 dark:text-gray-300 mb-3">{item.institution}</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-mono text-cyber-cyan">
                      Grade: {item.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certifications & Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-2">
              <span className="font-mono text-sm tracking-widest text-cyber-purple uppercase block">
                [06] // VERIFIED CREDENTIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                CERTIFICATIONS
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full" />
            </div>

            {/* Certifications Grid */}
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  onClick={handleConfetti}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl bg-black/25 dark:bg-[#0c0c0c] border backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col justify-start select-none ${cert.glow}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-cyber-purple">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-foreground leading-tight">{cert.title}</h4>
                      <p className="text-xs font-bold text-cyber-cyan font-mono mt-0.5">{cert.provider}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-300 leading-relaxed mb-3">{cert.desc}</p>
                  <span className="text-[10px] font-mono text-gray-500 hover:text-white transition-colors">
                    Click card to trigger celebration effect 🪅
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Key Accomplishments List */}
            <motion.div
              variants={cardVariants}
              className="p-6 rounded-2xl bg-black/35 dark:bg-white/5 border border-black/5 dark:border-white/5"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-cyber-pink" />
                <h4 className="font-extrabold text-base text-foreground">Core Milestones</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((high, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {high}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
