'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);
  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  const outerSpringConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const innerSpringConfig = { damping: 15, stiffness: 450, mass: 0.1 };

  const outerXSpring = useSpring(outerX, outerSpringConfig);
  const outerYSpring = useSpring(outerY, outerSpringConfig);
  const innerXSpring = useSpring(innerX, innerSpringConfig);
  const innerYSpring = useSpring(innerY, innerSpringConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      outerX.set(e.clientX - 24);
      outerY.set(e.clientY - 24);
      innerX.set(e.clientX - 4);
      innerY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [outerX, outerY, innerX, innerY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 opacity-80 mix-blend-screen transition-all duration-150"
        style={{
          x: outerXSpring,
          y: outerYSpring,
          width: isHovering ? 64 : 48,
          height: isHovering ? 64 : 48,
          translateX: isHovering ? -8 : 0,
          translateY: isHovering ? -8 : 0,
          borderColor: isHovering ? 'var(--cyber-pink)' : 'var(--cyber-cyan)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(236, 72, 153, 0.4)' 
            : '0 0 15px rgba(0, 245, 255, 0.2)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-2 w-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_var(--cyber-cyan)] mix-blend-screen"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          backgroundColor: isHovering ? 'var(--cyber-pink)' : 'var(--cyber-cyan)',
        }}
      />
    </>
  );
}
