"use client"; // Required for client-side animations with Framer Motion

import HeroLeft from "./HeroLeft";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js optimized image component

const ResumeHero = () => {
  return (
    <div className="grid grid-cols-1 md:flex flex-row items-start justify-around h-auto">
      <div className="w-full md:w-3/5 h-auto z-[1]">
        <HeroLeft />
      </div>
      <div className="w-full md:w-2/5 h-full mr-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0.8, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.69, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:px-8 xl:px-24 xl:-mt-8 z-10 max-w-[17rem] lg:max-w-80 xl:max-w-[30rem]"
          >
            <Image src="/heroRight.png" alt="Hero Right Image" width={500} height={500} priority />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.57, ease: "linear" }}
            viewport={{ once: true }}
            className="border-2 backdrop-blur-md w-[21rem] lg:w-96 h-[22rem] md:-ml-8 lg:ml-0 -mt-[13rem] lg:-mt-[14rem] xl:-mt-52"
            style={{
              background: "var(--bg-gradient)",
              WebkitBackdropFilter: "var(--blur-effect)",
              backdropFilter: "var(--blur-effect)",
              borderImageSource:
                "linear-gradient(29.61deg, rgba(86, 86, 86, 0) 33.42%, #DADADA 106.95%)",
              borderImageSlice: 1,
            }}
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.69, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block border rounded-lg p-6 backdrop-blur-[17.6px] h-72 opacity-50 w-72 -mt-28 -ml-32"
          style={{
            background:
              "linear-gradient(228.56deg, rgba(255, 255, 255, 0.17) 0%, rgba(115, 115, 115, 0.17) 100%)",
            borderImageSource:
              "linear-gradient(44.64deg, rgba(86, 86, 86, 0.74) 56.89%, #FFFFFF 100%)",
            borderImageSlice: 1,
            WebkitBackdropFilter: "blur(17.6px)",
            backdropFilter: "blur(17.6px)",
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ResumeHero;