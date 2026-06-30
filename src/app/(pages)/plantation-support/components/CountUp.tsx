"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({ value, duration = 1, prefix = "", suffix = "" }: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + Math.floor(latest).toLocaleString("en-IN") + suffix;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [value, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}
