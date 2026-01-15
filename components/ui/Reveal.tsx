'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variant, type Transition } from 'framer-motion';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  type?: AnimationType;
  blur?: boolean;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
}

const variants: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  'scale': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.1, 
  duration = 0.5,
  type = 'fade-up',
  blur = false,
  className,
  viewport = { once: true, margin: "-10%" }
}: RevealProps) => {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, viewport as any);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const selectedVariant = {
    hidden: { ...variants[type].hidden },
    visible: { ...variants[type].visible },
  };
  
  if (blur) {
    // @ts-expect-error - Framer motion type definition might be missing filter for strict checks
    selectedVariant.hidden.filter = "blur(10px)";
    // @ts-expect-error - Framer motion type definition might be missing filter for strict checks
    selectedVariant.visible.filter = "blur(0px)";
  }

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={selectedVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration, 
          delay, 
          type: "spring", 
          stiffness: 70, 
          damping: 20,
          mass: 1 
        }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
