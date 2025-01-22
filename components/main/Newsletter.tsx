"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Newsletter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { offsetX, offsetY, target } = e.nativeEvent as MouseEvent;
    const { width, height } = (target as HTMLElement).getBoundingClientRect();

    // Increase movement range for a more dramatic effect
    const moveX = (offsetX - width / 2) / 2;
    const moveY = (offsetY - height / 2) / 2;

    setPosition({ x: moveX, y: moveY });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-16 px-6 text-white text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        Let’s
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Talk
        </span>
      </motion.h2>

      <motion.div
        className="flex flex-col items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <a
          href="https://cal.com/ameenalam/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="bg-purple-900 w-[130px] h-[130px] flex flex-col items-center justify-center rounded-full text-white text-lg shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 50, damping: 5 }}
          >
            <span className="text-2xl">↗</span>
            <span>Chat</span>
          </motion.button>
        </a>

        <h3 className="text-lg font-semibold mt-16">Newsletter for Updates</h3>

        <div className="flex items-center mt-4 bg-[#0c0920] p-2 rounded-full border border-[#fff] border-opacity-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-2 text-white outline-none w-[250px] md:w-[300px]"
          />
          <button className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-full max-w-[200px] text-sm md:text-base inline-flex items-center gap-2">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
