import React from "react";
import TrustedBy from "@/components/ResumeBuilder/TrustedBy";
import ResumeHero from "@/components/ResumeBuilder/ResumeHero";
import ResumeCard from "@/components/ResumeBuilder/ResumeCard";
import {
  featuresData,
  features,
  settings,
  resumeTemplates,
} from "@/lib/config";
import Image from "next/image";
import IconHover from "@/components/ResumeBuilder/IconHover";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

import AnimatedWrapper from "@/components/AnimatedWrapper";
const ResumeAccordion = dynamic(
  () => import("@/components/ResumeBuilder/ResumeAccordion"),
  {
    loading: () => <p>Loading...</p>,
  }
);

function page() {
  return (
    <>
      <div className="bg-black overflow-x-clip">
        <div className="bg-black pt-6 px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-col gap-36">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-8">
                {featuresData.map((element, idx) => (
                  <ResumeCard
                    key={idx}
                    image={element.icon}
                    heading={element.title}
                    description={element.description}
                    initial={idx===3||idx===4||idx===5? {x:-300} : {x:300}}
                    groupIndex={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 w-full h-auto">
        <div className="bg-slate-50 pt-6 px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col">
          <div className="px-8 py-[4.5rem] flex flex-col items-center justify-around gap-10">
            <AnimatedWrapper
              initial={{ opacity: 0, y: -500 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-poppins font-semibold">
                3 EASY STEPS TO CREATE YOUR PERFECT RESUME
              </h2>
            </AnimatedWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {features.map((feature, index) => (
                <AnimatedWrapper
                  key={index}
                  initial={{ opacity: 0, y: 500 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="flex flex-col items-center gap-4 p-4"
                >
                  <IconHover icon={feature.Icon} />
                  <h3 className="text-center text-2xl font-extrabold">
                    {feature.title}
                  </h3>
                  <article className="text-justify text-base font-extralight">
                    {feature.description}
                  </article>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url(/page3Bg.svg)] pt-20 pb-20 px-5 bg-cover bg-center h-auto w-full">
        <AnimatedWrapper
          initial={{ opacity: 0, y: -200 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-20">
            Pick one of many world-class templates <br /> and build your resume
            in minutes
          </h2>
        </AnimatedWrapper>
        {/* 
        <AnimatedWrapper
          initial={{ opacity: 0.8, x: -1000 }}
          transition={{ duration: 1 }}
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
        </AnimatedWrapper>*/}
      </div>

      <div className="bg-slate-50 w-full h-auto">
        <div className="bg-slate-50 py-20 px-5 md:max-w-6xl lg:max-w-7xl mx-auto flex flex-col">
          <div className="flex justify-start gap-8 items-stretch mb-16">
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
          </div>
          <ResumeAccordion />
        </div>
      </div>
    </>
  );
}
export default page;
