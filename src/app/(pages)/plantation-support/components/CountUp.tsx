"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function CountUp({ value, duration = 1, prefix = "", suffix = "", decimals = 0 }: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Round to specified decimals and format
    const multiplier = Math.pow(10, decimals);
    const num = Math.round(latest * multiplier) / multiplier;
    
    return prefix + num.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [value, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}
