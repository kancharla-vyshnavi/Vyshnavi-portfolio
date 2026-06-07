'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  glowClass: string;
  barColor: string;
}

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const categories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code2 className="h-5 w-5 text-cyber-cyan" />,
      glowClass: 'hover:border-cyber-cyan/40 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]',
      barColor: 'bg-cyber-cyan',
      skills: [
        { name: 'Python', level: 90 },
      ],
    },
    {
      title: 'Data Analytics',
      icon: <Database className="h-5 w-5 text-cyber-purple" />,
      glowClass: 'hover:border-cyber-purple/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
      barColor: 'bg-cyber-purple',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Excel', level: 80 },
        { name: 'Pandas', level: 85 },
      ],
    },
    {
      title: 'Tools & APIs',
      icon: <Wrench className="h-5 w-5 text-cyber-pink" />,
      glowClass: 'hover:border-cyber-pink/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]',
      barColor: 'bg-cyber-pink',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'Google Colab', level: 80 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'REST APIs', level: 75 },
      ],
    },
  ];

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-cyber-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-cyber-cyan uppercase block">
            [02] // CORE COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            SKILLS & TOOLKITS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mx-auto" />
        </div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={categoryVariants}
              className={`p-6 rounded-2xl bg-black/30 dark:bg-[#0c0c0c] border border-black/5 dark:border-white/5 backdrop-blur-sm transition-all duration-300 ${cat.glowClass}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-black/5 dark:border-white/5">
                <div className="p-2 rounded-lg bg-black/10 dark:bg-white/5">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground">{cat.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full rounded-full bg-black/20 dark:bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${cat.barColor} shadow-[0_0_8px_currentColor]`}
                        initial={{ width: '0%' }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: '0%' }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: skillIdx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
