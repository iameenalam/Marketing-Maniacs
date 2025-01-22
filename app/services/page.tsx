"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "SEO Optimization",
    imageSrc: "/assets/seo.jpg",
    description:
      "Increase your site's visibility on search engines and attract more organic traffic.",
    learnMoreLink: "#",
  },
  {
    title: "Social Media Management",
    imageSrc: "/assets/socialmgmt.jpg",
    description:
      "Create engaging content and manage your social media profiles effectively.",
    learnMoreLink: "#",
  },
  {
    title: "PPC Campaigns",
    imageSrc: "/assets/ppc.jpg",
    description:
      "Maximize your ad spend with highly targeted pay-per-click advertising campaigns.",
    learnMoreLink: "#",
  },
  {
    title: "Brand Strategy",
    imageSrc: "/assets/strategy.jpg",
    description:
      "Develop a solid brand identity and strategy to stand out in a crowded market.",
    learnMoreLink: "#",
  },
  {
    title: "Content Marketing",
    imageSrc: "/assets/conmart.jpg",
    description:
      "Attract and engage customers through valuable and relevant content.",
    learnMoreLink: "#",
  },
  {
    title: "Email Marketing",
    imageSrc: "/assets/emailmart.jpg",
    description:
      "Reach your audience with targeted email campaigns that drive conversions.",
    learnMoreLink: "#",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center py-16 text-white px-6 md:mt-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="flex flex-col gap-4 mt-8 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span>
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Services{" "}
          </span>
        </span>
      </motion.div>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
      >
        Discover our tailored marketing solutions.
      </motion.p>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10 rounded-lg shadow-lg overflow-hidden w-[24rem]"
          >
            <Image
              src={service.imageSrc}  
              alt={service.title}
              width={256}
              height={200}
              className="w-full h-48 object-cover"
              quality={100}
            />
            <div className="p-4">
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-gray-400 mb-8">{service.description}</p>

              <div className="flex justify-end">
                <Link
                  href={service.learnMoreLink}
                  className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base inline-flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"  
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h6.793L7.646 3.854a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L11.293 8.5H4.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
