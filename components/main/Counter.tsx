"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Counter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const counterData = [
    {
      number: 100,
      text: "Clients",
    },
    {
      number: 30,
      text: "Running Projects",
    },
    {
      number: 80,
      text: "Projects Completed",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-20 text-white px-6 md:mt-6"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Stats
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Grow quicker with Marketing Maniacs.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
          },
        }}
        className="flex flex-wrap justify-center gap-8 mt-12"
      >
        {counterData.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0c0920] border-2 border-transparent rounded-xl p-8 w-[16rem] text-center 
                      transition-transform transform hover:scale-105 shadow-lg 
                      before:absolute before:inset-0 before:bg-gradient-to-r 
                      before:from-purple-500 before:to-cyan-500 before:-z-10 
                      before:rounded-xl before:blur-[5px]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-6xl font-light text-gray-200 mb-2 font-sans">
              {isVisible && (
                <CountUp end={item.number} duration={4} delay={0.5} />
              )}
              +
            </h3>
            <p className="text-gray-400 text-xl font-medium">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Counter;
