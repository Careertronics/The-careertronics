"use client";
import React from "react";
import { settings, resumeTemplates } from "@/lib/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
function ResumeCarousel() {
  return (
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
  );
}

export default ResumeCarousel;
