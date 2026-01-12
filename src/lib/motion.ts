"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement } from "react";
import type { ReactNode } from "react";

export const useMotionEnabled = () => !useReducedMotion();

export const transitions = {
  fast: { duration: 0.2, ease: "easeOut" },
  normal: { duration: 0.32, ease: "easeOut" }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: transitions.normal }
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};

export const hoverLift = {
  y: -2,
  scale: 1.01,
  transition: transitions.fast
};

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion;
};

const renderFallback = (as: keyof typeof motion, className?: string, children?: ReactNode) =>
  createElement(as as keyof JSX.IntrinsicElements, { className }, children);

export const MotionSection = ({ children, className, as = "div" }: MotionWrapperProps) => {
  const enabled = useMotionEnabled();
  const MotionTag = motion[as] as typeof motion.div;
  if (!enabled) {
    return renderFallback(as, className, children);
  }
  return createElement(
    MotionTag,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.2 },
      variants: fadeUp
    },
    children
  );
};

export const MotionStagger = ({ children, className, as = "div" }: MotionWrapperProps) => {
  const enabled = useMotionEnabled();
  const MotionTag = motion[as] as typeof motion.div;
  if (!enabled) {
    return renderFallback(as, className, children);
  }
  return createElement(
    MotionTag,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount: 0.2 },
      variants: staggerContainer
    },
    children
  );
};

export const MotionItem = ({ children, className, as = "div" }: MotionWrapperProps) => {
  const enabled = useMotionEnabled();
  const MotionTag = motion[as] as typeof motion.div;
  if (!enabled) {
    return renderFallback(as, className, children);
  }
  return createElement(
    MotionTag,
    {
      className,
      variants: fadeUp,
      whileHover: hoverLift,
      whileTap: { scale: 0.98 }
    },
    children
  );
};
