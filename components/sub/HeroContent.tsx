"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center px-10 md:px-20 mt-20 w-full z-[20] ">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-0 md:opacity-[0.9] ">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 hidden md:flex" />
          <h1 className="Welcome-text text-[13px] hidden md:flex">
            Leading Marketing Agency
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-20 md:mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "} the best {" "}
            </span>
            marketing solutions
          </span>
        </div>

        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          Hi! We&apos;re Marketing Maniacs, a creative agency specializing in
          impactful branding. Explore our work and expertise!
        </p>
        <div className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          <Link href="/contact">Start a Project!</Link>
        </div>
      </div>

      <div className="w-full h-full md:flex justify-center items-center hidden">
        <Image src="/assets/robot.png" alt="robot" height={650} width={650} />
      </div>
    </div>
  );
};

export default HeroContent;
