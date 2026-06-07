'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Brain, Database, BarChart2 } from 'lucide-react';

interface CounterProps {
  value: string | number;
  duration?: number;
  suffix?: string;
}

function Counter({ value, duration = 1.5, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value.toString());
    if (isNaN(end)) {
      return;
    }

    const totalSteps = 40;
    const increment = (end - start) / totalSteps;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const displayVal = value.toString().includes('.') ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={ref} className="font-mono">
      {displayVal}
      {suffix}
    </span>
  );
}

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreFocus = [
    {
      icon: <Database className="h-5 w-5 text-cyber-cyan" />,
      title: 'Data Analytics',
      desc: 'Sifting through raw data to build automated dashboards, clean anomalies, and construct insightful models.',
    },
    {
      icon: <Brain className="h-5 w-5 text-cyber-purple" />,
      title: 'Artificial Intelligence',
      desc: 'Developing intelligent systems, recommendations algorithms, NLP flows, and LLM integrations.',
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-cyber-pink" />,
      title: 'Third-year B.Tech CSE (AI) student',
      desc: 'Laying a solid foundations in computational logic, neural nets, data structures, and database query optimization.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/10 w-[300px] h-[300px] bg-cyber-pink/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Header & Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={cardVariants} className="space-y-2">
              <span className="font-mono text-sm tracking-widest text-cyber-purple uppercase block">
                [01] // INTRO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                ABOUT ME
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full" />
            </motion.div>

            <motion.p
              variants={cardVariants}
              className="text-gray-400 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            >
              I am <strong>Kancharla Lakshmi Vyshnavi</strong>, a third-year B.Tech student in Computer Science and Engineering (Artificial Intelligence) at <strong>Narayana Engineering College, Nellore</strong>. I am passionate about Data Analytics, Machine Learning, and Software Development, with a strong interest in transforming data into meaningful insights that support better decision-making.
            </motion.p>

            <motion.p
              variants={cardVariants}
              className="text-gray-400 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            >
              I have built hands-on projects in Data Analysis, Machine Learning, Recommendation Systems, and AI-powered applications using Python, SQL, Power BI, and modern web technologies. Through these projects, I have developed skills in data cleaning, visualization, predictive modeling, and problem-solving.
            </motion.p>

            <motion.p
              variants={cardVariants}
              className="text-gray-400 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            >
              My goal is to build a successful career as a <strong>Data Analyst and AI</strong> professional, leveraging data-driven solutions and intelligent systems to solve real-world challenges while continuously learning and growing in the field of technology.
            </motion.p>

            {/* Sub-Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {coreFocus.map((focus, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-black/25 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-start"
                >
                  <div className="mb-3 p-2 rounded-lg bg-black/10 dark:bg-white/5 w-fit">
                    {focus.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-foreground">{focus.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{focus.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:pt-12">
            {[
              {
                value: '8.8',
                label: 'B.Tech CGPA',
                suffix: '',
                desc: 'Narayana Eng. College',
                glow: 'border-cyber-cyan/35 shadow-[0_0_15px_rgba(0,245,255,0.15)]',
                color: 'text-cyber-cyan',
              },
              {
                value: '85',
                label: 'Model Accuracy',
                suffix: '%+',
                desc: 'Recommendation Engine',
                glow: 'border-cyber-purple/35 shadow-[0_0_15px_rgba(139,92,246,0.15)]',
                color: 'text-cyber-purple',
              },
              {
                value: '22',
                label: 'Prediction Improvement',
                suffix: '%',
                desc: 'Predictive Analytics',
                glow: 'border-cyber-pink/35 shadow-[0_0_15px_rgba(236,72,153,0.15)]',
                color: 'text-cyber-pink',
              },
              {
                value: '40',
                label: 'Data Noise Reduction',
                suffix: '%',
                desc: 'Feature Engineering',
                glow: 'border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.15)]',
                color: 'text-emerald-400',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-2xl bg-black/30 dark:bg-[#0c0c0c] border border-black/5 dark:border-white/5 backdrop-blur-sm flex flex-col justify-center transition-all duration-300 ${stat.glow}`}
              >
                <div className={`text-3xl sm:text-4xl font-extrabold mb-1 ${stat.color}`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
