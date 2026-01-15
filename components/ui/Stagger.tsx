'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
}

export const Stagger = ({ 
  children, 
  stagger = 0.1, 
  delay = 0,
  className,
  viewport = { once: true, margin: "-10%" }
}: StaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport as any);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, type = 'fade-up' }: { children: React.ReactNode, className?: string, type?: 'fade-up' | 'scale' | 'fade' }) => {
    const itemVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: type === 'fade-up' ? 20 : 0, 
            scale: type === 'scale' ? 0.9 : 1 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
