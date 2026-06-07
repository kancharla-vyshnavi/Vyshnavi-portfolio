'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const [showButton, setShowButton] = useState(false);
  const [scrollProgressPercent, setScrollProgressPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgressPercent(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgressPercent * circumference;

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink shadow-[0_0_8px_var(--cyber-cyan)]"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black/85 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:border-cyber-cyan hover:text-white transition-colors duration-300 cursor-pointer"
            title="Scroll to top"
          >
            <svg className="absolute -rotate-90" width="44" height="44">
              <circle
                className="text-white/5"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="22"
                cy="22"
              />
              <circle
                className="text-cyber-cyan transition-all duration-75"
                strokeWidth="2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="22"
                cy="22"
              />
            </svg>
            <ArrowUp className="h-4 w-4 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
