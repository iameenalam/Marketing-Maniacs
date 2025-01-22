// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";
import React from "react";
import { motion } from "framer-motion";
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
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="flex flex-col items-center py-16 text-white px-6 md:mt-6">
      {/* Heading */}
      <motion.div
        className="flex flex-col gap-4 mt-8 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <span>
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Services{" "}
          </span>
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.p
        className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        Discover our tailored marketing solutions.
      </motion.p> 

      {/* All Services Button */}
      <motion.div
        className="my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Link
          href="/services"
          className="py-2 px-6 text-white text-sm md:text-base font-medium button-primary text-center cursor-pointer rounded-lg inline-flex items-center gap-2 hover:shadow-lg transition-shadow duration-300"
        >
          All Services
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
      </motion.div>

      {/* Services Cards */}
      <motion.div
        className="flex flex-wrap gap-5 justify-center mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={slideUp}
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
      </motion.div>
    </section>
  );
};

export default Services;
