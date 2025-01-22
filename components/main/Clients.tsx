"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  "/assets/brand1.png",
  "/assets/brand2.png",
  "/assets/brand3.png",
  "/assets/brand4.png",
  "/assets/brand5.png",
  "/assets/brand6.png",
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TrustedClients = () => {
  return (
    <section className="py-16 text-white px-6 md:mt-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Trusted Clients
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg text-gray-400 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          We are proud to have collaborated with these esteemed brands.
        </motion.p>

        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-12 items-center mt-8"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className="w-40 h-20 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
