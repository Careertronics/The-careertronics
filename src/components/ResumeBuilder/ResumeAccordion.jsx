"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from '@/components/ScrollReveal';

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  const accordionContent = (
    <>
      <button
        className="w-full pr-4 py-3 pl-8 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base font-light">{title}</span>
        <div className="border border-black p-1">
          <ChevronDown
            className={`transform transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            size={16}
            color="#f97316"
          />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 pl-10 bg-gray-50 text-sm font-light">{content}</div>
      </div>
    </>
  );

  return (
    <ScrollReveal
      animation="fadeSlideLeft"
      duration={800}
      delay={100}
      stagger={120}
      index={index}
      easing="gentle"
      className="border border-gray-200 mb-2 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {accordionContent}
    </ScrollReveal>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const ResumeAccordion = (props) => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "What is a Resume?",
      content:
        "A resume is a formal document that provides an overview of your professional qualifications, including your work experience, skills, education, and accomplishments.",
    },
    {
      title: "How to create a high school student resume for my first job?",
      content:
        "Focus on your academic achievements, extracurricular activities, volunteer work, and any leadership positions. Include relevant skills and highlight your responsibility and reliability.",
    },
    {
      title: "How to make a resume on my phone?",
      content:
        "You can use mobile-friendly resume builder apps or websites, or use Google Docs/Microsoft Word mobile apps. Many platforms offer specialized mobile resume creation tools.",
    },
    {
      title: "How many pages should a resume be?",
      content:
        "Generally, a resume should be 1-2 pages long. For entry-level positions or those with less experience, stick to one page. More experienced professionals might need two pages.",
    },
    {
      title: "Where can I make a resume for free?",
      content: "Careertronic :) ",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      {...props}
      className="w-full max-w-3xl mx-auto"
      role="tablist"
      aria-label="Resume FAQ Accordion"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default ResumeAccordion;