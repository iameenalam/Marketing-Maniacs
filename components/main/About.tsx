"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-24 md:mt-16 w-full z-[20] text-center md:text-left gap-10">
      <div className="w-full md:w-[40%] flex justify-center mt-2">
        <motion.img
          src="/assets/about.jpg"
          alt="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="rounded-lg shadow-lg object-cover md:h-auto"
          style={{ height: "100%", maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col gap-5 justify-between max-w-[600px] h-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="flex flex-col gap-4 text-4xl md:text-6xl font-bold text-white"
        >
          <span>
            Who
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}are we?{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5"
        >
          We&apos;re Marketing Maniacs, a passionate team of creative marketers
          dedicated to delivering impactful branding and innovative strategies.
          Specializing in dynamic campaigns, we ensure your business stands out,
          engages your audience, and drives results. Let&apos;s take your brand to the next level!
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base self-start md:self-auto"
        >
          <Link href="/about">Learn More!</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
