'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, BarChart3, Database, Cpu, Presentation } from 'lucide-react';

interface TimelineEvent {
  phase: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  metric?: string;
  techs?: string[];
}

export default function Experience() {
  const internshipMilestones: TimelineEvent[] = [
    {
      phase: 'PHASE 01',
      title: 'Movie Recommendation System',
      icon: <Cpu className="h-5 w-5 text-cyber-cyan" />,
      desc: 'Engineered a content-based movie recommendation system using TF-IDF vectorization and cosine similarity across a dataset of 5,000+ movies.',
      metric: 'Achieved 85%+ relevance accuracy',
      techs: ['Python', 'TF-IDF', 'Cosine Similarity', 'Scikit-Learn'],
    },
    {
      phase: 'PHASE 02',
      title: 'Data Preprocessing & Cleaning',
      icon: <Database className="h-5 w-5 text-cyber-purple" />,
      desc: 'Structured preprocessing pipelines handling missing values, duplicate removal, and feature extraction to optimize model performance.',
      metric: 'Reduced data noise by 40%',
      techs: ['Pandas', 'Data Preprocessing', 'Feature Extraction'],
    },
    {
      phase: 'PHASE 03',
      title: 'ML Models & Predictive Analytics',
      icon: <BarChart3 className="h-5 w-5 text-cyber-pink" />,
      desc: 'Built and evaluated 3 machine learning models for predictive analytics, applying cross-validation and hyperparameter tuning.',
      metric: 'Improved prediction accuracy by 22% over baseline',
      techs: ['Cross-Validation', 'Hyperparameter Tuning', 'Model Evaluation'],
    },
    {
      phase: 'PHASE 04',
      title: 'Dashboards & Visualizations',
      icon: <Presentation className="h-5 w-5 text-emerald-400" />,
      desc: 'Produced interactive dashboards and detailed plots to translate raw data into actionable business insights for stakeholders.',
      metric: '10+ Interactive Dashboards & Visualizations',
      techs: ['Matplotlib', 'Seaborn', 'Pandas', 'Data Visualization'],
    },
    {
      phase: 'PHASE 05',
      title: 'End-to-End Workflow Delivery',
      icon: <Award className="h-5 w-5 text-amber-400" />,
      desc: 'Delivered the complete data science cycle—from initial data collection and EDA through to final model deployment—for 2 distinct projects.',
      metric: 'Delivered 2 complete end-to-end projects',
      techs: ['EDA', 'Model Deployment', 'Project Delivery'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background neon orb */}
      <div className="absolute bottom-1/3 left-1/10 w-[300px] h-[300px] bg-cyber-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-cyber-purple uppercase block">
            [03] // INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            WORK HISTORY
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mx-auto" />
        </div>

        {/* Company Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 p-6 rounded-2xl bg-black/30 dark:bg-[#0c0c0c] border border-black/5 dark:border-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)] flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground">Data Science Intern</h3>
              <p className="text-sm font-semibold text-cyber-purple">Innoknowvex Edutech Pvt. Ltd.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <Calendar className="h-4 w-4 text-cyber-pink" />
            NOV. 2025 - JAN. 2026 // REMOTE, INDIA
          </div>
        </motion.div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l-2 border-dashed border-white/10 dark:border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {internshipMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-black border border-white/10 text-foreground shadow-[0_0_10px_rgba(0,0,0,0.8)] z-10 hover:border-cyber-cyan transition-colors duration-300">
                {item.icon}
              </div>

              {/* Card Body */}
              <div className="p-6 rounded-2xl bg-black/20 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-all duration-300">
                <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 px-2 py-0.5 rounded-md mb-3 inline-block">
                  {item.phase}
                </span>

                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 dark:text-gray-300 mb-4 leading-relaxed">{item.desc}</p>

                {/* Highlight Metric Badge */}
                {item.metric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                    <Award className="h-3.5 w-3.5" />
                    {item.metric}
                  </div>
                )}

                {/* Tech Tags */}
                {item.techs && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5 dark:border-white/5">
                    {item.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-gray-400 bg-black/30 px-2 py-1 rounded-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
