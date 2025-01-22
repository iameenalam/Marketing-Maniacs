"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import Clients from "@/components/main/Clients";
import Testimonials from "@/components/main/Testimonials";

function about() {

  const teamMembers = [
    {
      name: "Farhan Arshad",
      imageSrc: "/assets/farhan.jpg",
      position: "Founder",
      linkedinLink: "https://www.linkedin.com",
    },
    {
      name: "Bill Gates",
      imageSrc: "/assets/bill.jpg",
      position: "Marketing Manager",
      linkedinLink: "https://www.linkedin.com",
    },
    {
      name: "Elon Musk",
      imageSrc: "/assets/elon.jpg",
      position: "Creative Director",
      linkedinLink: "https://www.linkedin.com",
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

  return (
    <>
      {/* Mission Section */}
      <section
        className="flex flex-col items-center py-16 text-white px-10 md:px-20 mt-8"
        id="mission"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="flex flex-col gap-4 mt-8 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto text-center"
        >
          <span>
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Mission{" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          className="text-base md:text-lg text-gray-400 my-5 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
        >
          Empowering brands with innovative marketing strategies.
        </motion.p>

        {/* Boxes Row 1 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-[1200px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          {[
            {
              title: "Creative Innovation",
              description:
                "At Marketing Maniacs, we are committed to pushing the boundaries of creativity by adopting the latest marketing trends and tools, ensuring our strategies remain innovative and impactful.",
            },
            {
              title: "Global Reach",
              description:
                "With a vision to become a global marketing leader, Marketing Maniacs is dedicated to expanding its footprint, forging strong partnerships, and crafting campaigns that resonate across diverse markets.",
            },
            {
              title: "Collaborative Partnerships",
              description:
                "We believe in the power of collaboration. Marketing Maniacs actively partners with industry pioneers, creative professionals, and organizations to foster innovation and deliver exceptional results.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10 rounded-lg shadow-lg overflow-hidden p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Boxes Row 2 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-[1200px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          {[
            {
              title: "Talent Excellence",
              description:
                "Attracting and empowering top talent is a priority for us. Our team of dynamic professionals brings diverse expertise to create bold strategies that deliver measurable success.",
            },
            {
              title: "Industry Versatility",
              description:
                "From retail to technology, hospitality to healthcare, Marketing Maniacs provides tailored solutions for businesses across a wide spectrum of industries, ensuring every campaign is crafted to maximize impact.",
            },
            {
              title: "Our Divisions",
              description:
                "Marketing Maniacs' integrated divisions – Maniac Creatives, Maniac Media, and Maniac Analytics – work in harmony to offer comprehensive solutions, including branding, content creation, digital marketing, and data-driven strategies.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="bg-[#0c0920] border-[2px] border-[#fff] border-opacity-10 rounded-lg shadow-lg overflow-hidden p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image and Text Section */}
      <section className="py-16 text-white px-10 md:px-20">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
            <Image
              src="/assets/nasa.jpg"
              alt="NASA Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start mt-6">
            {/* Animated Paragraph */}
            <motion.p
              className="text-sm text-gray-400 max-w-lg leading-relaxed text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              We are a creative-driven marketing agency, seamlessly blending
              strategy and innovation to help brands thrive in a competitive
              marketplace.
            </motion.p>

            {/* Animated Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mt-4 md:mt-0"
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
              {["Creativity", "Strategy", "Collaboration", "Excellence"].map(
                (tag, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-2 bg-[#0c0920] text-gray-400 border border-white border-opacity-40 rounded-full text-sm"
                    variants={slideUp}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col items-center py-16 text-white px-6 md:mt-6">
        <motion.div
          className="flex flex-col gap-4 mt-8 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          <span>
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Team{" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          className="text-base md:text-lg text-gray-400 my-5 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUp}
        >
          Meet the experts driving your success.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-8 justify-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="bg-[#0c0920] border-[2px] border-[#fff] border-opacity-20 rounded-lg shadow-2xl overflow-hidden w-[22rem] text-center p-8"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full border-4 border-[#fff] border-opacity-20"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-4">{member.position}</p>
              <div className="flex justify-center items-center gap-4">
                <Link
                  href={member.linkedinLink}
                  target="_blank"
                  className="flex items-center gap-2 py-3 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm md:text-base"
                >
                  <Image
                    src="/assets/Linkedin.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Clients />
      <Testimonials />
    </>
  );
}

export default about;
