"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedWrapper({
  children,
  initial = { opacity: 0, y: -50 }, // Default Initial Animation
  whileInView = { opacity: 1, y: 0, x: 0 }, // Default Animate State
  viewport = { once: true },
  transition = { duration: 0.5, ease: "easeOut" }, // Default Transition
  className = "", // Additional Tailwind Classes
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      initial={isMobile ? false : initial}
      whileInView={isMobile ? false : whileInView}
      transition={isMobile ? {} : transition}
      viewport={isMobile ? {} : viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}