"use client";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect"; // ✅ Import mobile detector

export default function AnimatedWrapper({
  children,
  initial = { opacity: 0, y: -50 },
  whileInView = { opacity: 1, y: 0, x: 0 },
  viewport = { once: true },
  transition = { duration: 0.5, ease: "easeOut" },
  className = "",
}) {
  if (isMobile) {
    return <div className={className}>{children}</div>; // 🛑 No animation on mobile
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}