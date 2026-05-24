"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  threshold?: number;
}

export const FadeIn = React.forwardRef<HTMLDivElement, MotionWrapperProps>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      direction = "up",
      distance = 30,
      className = "",
      threshold = 0.1,
      ...props
    },
    ref
  ) => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: { x: 0, y: 0 },
    };

    const initialOffset = directions[direction];

    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          ...initialOffset,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, amount: threshold }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1], // easeInOut-ish cubic bezier
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  threshold?: number;
}

export const StaggerContainer = React.forwardRef<HTMLDivElement, StaggerContainerProps>(
  (
    {
      children,
      staggerChildren = 0.1,
      delayChildren = 0,
      className = "",
      threshold = 0.1,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: threshold }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: staggerChildren,
              delayChildren: delayChildren,
            },
          },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}

export const StaggerItem = React.forwardRef<HTMLDivElement, StaggerItemProps>(
  (
    {
      children,
      direction = "up",
      distance = 20,
      duration = 0.5,
      className = "",
      ...props
    },
    ref
  ) => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: { x: 0, y: 0 },
    };

    const initialOffset = directions[direction];

    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
            ...initialOffset,
          },
          show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: duration,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  threshold?: number;
}

export const ScaleIn = React.forwardRef<HTMLDivElement, ScaleInProps>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      initialScale = 0.92,
      className = "",
      threshold = 0.1,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          scale: initialScale,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: threshold }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.34, 1.56, 0.64, 1], // subtle bounce easeOutBack
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScaleIn.displayName = "ScaleIn";
