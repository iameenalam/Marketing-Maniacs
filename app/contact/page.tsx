// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import FrequentlyAsked from "@/components/main/FreqAsked";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <motion.section className="py-12 px-6 my-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="flex flex-col mt-8 gap-4 md:gap-6 text-4xl md:text-6xl font-bold text-white"
          >
            <span>
              Book a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Call{" "}
              </span>
            </span>
          </motion.div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="text-base md:text-lg text-gray-400 my-3 md:my-5"
          >
            Schedule a call with us at your convenience.
          </motion.p>
          <div className="cal-embed-container mt-8">
            <Cal
              namespace="30min"
              calLink="ameenalam/30min"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "600px",
                border: "none",
                overflow: "hidden",
                margin: "0 auto",
              }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-6 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 md:ml-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="flex flex-col gap-4 md:gap-6 text-4xl md:text-6xl font-bold text-white"
            >
              <span>
                Contact
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Us{" "}
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
              Feel free to reach out with any questions.
            </motion.p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full p-3 rounded focus:outline-none focus:ring bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10 text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="w-full p-3 rounded focus:outline-none focus:ring text-white bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10"
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="w-full p-3 rounded focus:outline-none focus:ring text-white bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10"
                required
              ></textarea>
              <button
                type="submit"
                className="button-primary w-full px-4 text-center cursor-pointer max-w-[200px] text-sm md:text-base py-3 text-white font-semibold rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
            className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0"
          >
            <Image
              src="/assets/robot2.png"
              alt="robot"
              height={400}
              width={600}
              className="w-[600px] h-72 md:h-[550px] brightness-90 object-cover object-left"
            />
          </motion.div>
        </div>
      </motion.section>

      <FrequentlyAsked />
    </>
  );
};

export default ContactSection;
