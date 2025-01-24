"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading duration (3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }}  // Slide-up effect
          >
            {/* Animated logo or brand name */}
            <motion.h1
              className="text-5xl font-extrabold tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hello Maniac!
            </motion.h1>

            {/* Elegant loading animation */}
            <motion.div className="mt-6 w-72 h-3 bg-gray-700 rounded-full shadow-lg overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Subtle fade-in message */}
            <motion.p
              className="mt-4 text-sm text-gray-400 uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            >
              Preparing your experience...
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
