"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("darsh_intro_seen");
    // Also check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!hasSeenIntro && !prefersReducedMotion) {
      setShowIntro(true);
      
      // Auto-hide after animation sequence
      const timer = setTimeout(() => {
        hideIntro();
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const hideIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem("darsh_intro_seen", "true");
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center cursor-pointer"
          onClick={hideIntro}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-serif text-5xl md:text-6xl text-primary tracking-widest z-10 bg-background px-4"
            >
              DARSH
            </motion.h1>
            
            {/* Thin gold line drawing animation */}
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none" 
              viewBox="0 0 300 100" 
              fill="none"
            >
              <motion.path
                d="M 20 50 L 280 50"
                stroke="var(--color-accent)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-10 text-xs text-muted uppercase tracking-widest font-sans"
          >
            Skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
