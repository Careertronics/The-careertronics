"use client";

import { motion } from "framer-motion";

export default function AnimatedWrapper({
  children,
  initial = { opacity: 0, y: -50 }, // Default Initial Animation
  whileInView = { opacity: 1, y: 0, x:0 }, // Default Animate State
  viewport={once: true },
  transition = { duration: 0.5, ease: "easeOut" }, // Default Transition
  className = "", // Additional Tailwind Classes
}) {
  return (
    <motion.div initial={initial} viewport={ viewport} whileInView={whileInView} transition={transition} className={className}>
      {children}
    </motion.div>
  );
}