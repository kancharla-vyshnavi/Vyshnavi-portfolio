'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

export default function FloatingDock() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/kancharla-vyshnavi',
      color: 'hover:text-cyber-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.45)] hover:border-cyber-cyan',
      borderColor: 'hover:border-cyber-cyan/50',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/kancharla-lakshmi-vyshnavi-37445833a/',
      color: 'hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.45)] hover:border-sky-400',
      borderColor: 'hover:border-sky-400/50',
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:vyshuv474@gmail.com',
      color: 'hover:text-cyber-pink hover:shadow-[0_0_15px_rgba(236,72,153,0.45)] hover:border-cyber-pink',
      borderColor: 'hover:border-cyber-pink/50',
    },
    {
      name: 'Phone',
      icon: <Phone className="h-5 w-5" />,
      url: 'tel:+919912324198',
      color: 'hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.45)] hover:border-emerald-400',
      borderColor: 'hover:border-emerald-400/50',
    },
    {
      name: 'Resume',
      icon: <FileText className="h-5 w-5" />,
      url: '/resume/Vyshnavi_Resume.pdf',
      color: 'hover:text-cyber-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.45)] hover:border-cyber-purple',
      borderColor: 'hover:border-cyber-purple/50',
      download: true,
    },
  ];

  return (
    <motion.div
      initial={{ y: 80, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 120, damping: 22 }}
      className="fixed bottom-6 left-1/2 z-40 flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      {socialLinks.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.url}
          target={item.name === 'Email' || item.name === 'Phone' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gray-400 transition-all duration-300 ${item.color} ${item.borderColor} cursor-pointer`}
          title={item.name}
          download={item.download ? 'Vyshnavi_Resume.pdf' : undefined}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
