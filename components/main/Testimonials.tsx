"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Doe",
    imageSrc: "/assets/man1.jpg",
    feedback:
      "Marketing Maniacs transformed our online presence. Their strategies are top-notch!",
    designation: "CEO, XYZ Corp",
  },
  {
    name: "Jane Smith",
    imageSrc: "/assets/man2.jpg",
    feedback:
      "Their team is incredible! Our sales increased by 50% within months.",
    designation: "CMO, ABC Ltd",
  },
  {
    name: "Robert Johnson",
    imageSrc: "/assets/man3.jpg",
    feedback: "Highly recommend Marketing Maniacs for digital marketing needs.",
    designation: "Founder, Startup Hub",
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

const Testimonials = () => {
  return (
    <section className="py-16 px-6 text-white text-center">
      <motion.div
        className="text-4xl md:text-6xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        Client
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Testimonials
        </span>
      </motion.div>
      <motion.p
        className="text-base md:text-lg text-gray-400 my-5 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        See what our satisfied clients have to say about our services.
      </motion.p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop
        className="mt-10 max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {/* Apply the slideUp animation only to the first image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={index === 0 ? slideUp : {}}
              className="bg-[#0c0920] p-8 rounded-lg shadow-lg border border-[#fff] border-opacity-10"
            >
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.designation}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
