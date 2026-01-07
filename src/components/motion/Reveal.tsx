"use client";

import { motion } from "framer-motion";
import { useMotionEnabled } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  className
}: RevealProps) {
  const motionEnabled = useMotionEnabled();

  if (!motionEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
