// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a variety of marketing services including branding, content creation, and social media management.",
  },
  {
    question: "Do you only work in certain industries?",
    answer:
      "No, we work with clients across various industries to meet their unique marketing needs.",
  },
  {
    question: "How long do projects usually take?",
    answer:
      "Project timelines vary depending on scope, but typically range from a few weeks to several months.",
  },
  {
    question: "How involved can I be in the process?",
    answer:
      "We encourage client collaboration and keep you involved throughout the entire process.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We measure success through key performance indicators, client satisfaction, and return on investment.",
  },
  {
    question: "Can you help with branding?",
    answer: "Yes, we specialize in creating unique and effective branding strategies.",
  },
  {
    question: "How involved are you in media production?",
    answer: "We handle all aspects of media production, from concept to execution.",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Yes, we provide full social media management services, including content scheduling and engagement.",
  },
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midIndex);
  const rightColumn = faqData.slice(midIndex);

  return (
    <section className="py-16 px-10 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          Frequently
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Asked
          </span>
        </motion.h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          <div className="space-y-8">
            {leftColumn.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideUp}
                className="border-b border-gray-600"
              >
                <button
                  className="w-full flex justify-between items-center py-4 text-lg font-medium text-gray-400"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-purple-500"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden text-gray-400 text-base leading-relaxed"
                >
                  <p className="pb-4">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {rightColumn.map((faq, index) => (
              <motion.div
                key={index + midIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideUp}
                className="border-b border-gray-600"
              >
                <button
                  className="w-full flex justify-between items-center py-4 text-lg font-medium text-gray-400"
                  onClick={() => toggleFAQ(index + midIndex)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index + midIndex ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-purple-500"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={openIndex === index + midIndex ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden text-gray-400 text-base leading-relaxed"
                >
                  <p className="pb-4">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
