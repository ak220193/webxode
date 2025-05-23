"use client";
import React from "react";
import { MacbookScroll } from "./ui/MacbookScroll";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/HeroHighlight";

const MacbookScrollComponent = () => {
  return (
    <section className="">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="flex justify-center items-center h-screen">
            <MacbookScroll />
          </div>
        </motion.h1>
      </HeroHighlight>
    </section>
  );
};

export default MacbookScrollComponent;
