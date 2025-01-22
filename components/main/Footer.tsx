"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0c0920] mt-10 text-center border-t border-[#2A0E61]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUp}
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-white">
        <span className="text-gray-400 text-sm md:text-base">
          Marketing Maniacs &copy; 2025
        </span>

        <Image
          src="/assets/logox.png"
          width={100}
          height={100}
          alt="Marketing Maniacs Logo"
        />

        <span className="text-gray-400 text-sm md:text-base">
          All Rights Reserved
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
