"use client";
import React from "react";
import TrustedBy from "@/components/ResumeBuilder/TrustedBy";
import ResumeHero from "@/components/ResumeBuilder/ResumeHero";

import ResumeCard from "@/components/ResumeBuilder/ResumeCard";
import { featuresData } from "@/lib/config";
import { useRef } from "react";
import Image from "next/image";

import IconHover from "@/components/ResumeBuilder/IconHover";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/config";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/lib/config";
import { resumeTemplates } from "@/lib/config";
import ResumeAccordion from "@/components/ResumeBuilder/ResumeAccordion";
function Page() {
  const refPage2 = useRef(null);
  const refPage3 = useRef(null);
  const refPage4 = useRef(null);
  const refPage5 = useRef(null);
  const isInViewPage4 = useInView(refPage4, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });
  const isInViewPage3 = useInView(refPage3, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });
  const isInViewPage5 = useInView(refPage5, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });
  return (
    <>
      <div className=" bg-black overflow-x-clip">
        <div className="bg-black pt-6  px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col ">
          <div className="flex flex-col  gap-36">
            <div>
              <TrustedBy />
              <ResumeHero />
            </div>

            <div className="mb-20">
              <div className="flex items-center justify-center h-auto mb-20">
                <Image
                  alt="HeaderPage2"
                  className="w-4/5 md:w-[52.77%]"
                  src="/page2Header.svg"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div
                ref={refPage2}
                className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-8"
              >
                {featuresData.map((element, idx) => {
                  return (
                    <ResumeCard
                      key={idx}
                      ref={refPage2}
                      image={element.icon}
                      heading={element.title}
                      description={element.description}
                      initial={
                        idx === 3 || idx === 4 || idx === 5
                          ? { x: -500 }
                          : { x: 500 }
                      }
                      groupIndex={idx}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PAge 3 starts */}
      <div className="bg-slate-50 w-full h-auto">
        <div className="bg-slate-50 pt-6  px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col">
          <div className="px-8 py-[4.5rem]">
            <div className="flex flex-col items-center justify-around gap-10">
              <motion.div
                initial={{ opacity: 0, y: -500 }}
                animate={isInViewPage3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.75, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-poppins font-semibold">
                  3 EASY STEPS TO CREATE YOUR PERFECT RESUME
                </h2>
              </motion.div>

              <div
                ref={refPage3}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 500 }}
                    animate={isInViewPage3 ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.75, 0.3, 1],
                      delay: feature.delay,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 p-4"
                  >
                    <IconHover icon={feature.Icon} />
                    <h3 className="text-center leading-8 font-poppins text-2xl font-extrabold">
                      {feature.title}
                    </h3>
                    <article className="text-justify font-poppins text-base font-extralight">
                      {feature.description}
                    </article>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/page3Bg.svg)] pt-20 pb-20 px-5 bg-cover bg-center h-auto w-full">
        <motion.div
          ref={refPage4}
          initial={{ opacity: 0, y: -200 }}
          animate={isInViewPage4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.75, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-20">
            Pick one of many world-class templates <br /> and build your resume
            in minutes
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8, x: -1000 }}
          animate={isInViewPage4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.75, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="max-w-5xl mx-auto">
            {resumeTemplates.map((resume, index) => (
              <div key={index} className="px-2">
                <div className="rounded-lg p-4 shadow-md">
                  <Image
                    src={resume.image}
                    alt={resume.name}
                    className="w-full rounded-md"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        <div className="flex justify-center mt-12 ">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={isInViewPage4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.75, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-black px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
              See All Resume Templates
            </button>
          </motion.div>
        </div>
      </div>
      <div className="bg-slate-50 w-full h-auto">
        <div className="bg-slate-50 py-20   px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-col  gap-36">
            <div className=" bg-slate-50  md:px-24 ">
              <motion.div
                ref={refPage5}
                initial={{ opacity: 0, x: -400 }}
                animate={isInViewPage5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.75, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex justify-start gap-8 items-stretch mb-16"
              >
                <div className="h-auto w-24">
                  <Image
                    alt="Resumelogo"
                    width={500}
                    height={500}
                    src="/page4Img1.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-between items-start py-1">
                  <h3 className="text-3xl font-medium font-inter">
                    Have Questions About Writing A Great Resume ?
                  </h3>
                  <p className="text-2xl font-extralight font-inter">
                    Expert answer to all your resume inquiries
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -400 }}
                animate={isInViewPage5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.75, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex justify-start pl-2 mb-12"
              >
                <h4 className="text-2xl font-extralight underline font-inter  underline-offset-12">
                  RESUME TEMPLATES FAQ
                </h4>
              </motion.div>
              <ResumeAccordion ref={refPage5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
