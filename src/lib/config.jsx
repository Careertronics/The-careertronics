import { FileText, PenTool, FileDown } from "lucide-react";
export const featuresData = [
  {
    heading: "Build with Confidence",
    title: "Powerful resume builder",
    description:
      "Use our potent creation tools and expert guidance to create the perfect resume for your next job application.",
    icon: "./page2Card1.svg",
  },
  {
    heading: "Stand Out",
    title: "Professional templates",
    description:
      "Choose from 25+ applicant tracking systems (ATS)-friendly modern and professional templates.",
    icon: "./page2Card2.svg",
  },
  {
    heading: "Personalize Your Resume",
    title: "Customize fonts and colors",
    description: "Select custom fonts and colors on any resume template.",
    icon: "./page2Card3.svg",
  },
  {
    heading: "Learn from the Best",
    title: "Free resume examples",
    description:
      "Use our more than 500 resume examples and templates to see what a great resume looks like in your field.",
    icon: "./page2Card4.svg",
  },
  {
    heading: "Beat the Bots",
    title: "ATS-friendly templates",
    description:
      "Sail through applicant tracking systems with resume templates that appeal to both machines and humans.",
    icon: "./page2Card5.svg",
  },
  {
    heading: "Expert Guidance",
    title: "Expert tips and guidance",
    description:
      "Get help every step of the way as you build your resume with expert tips and suggested phrases.",
    icon: "./page2Card6.svg",
  },
  {
    heading: "AI-Powered Assistance",
    title: "Easy with AI",
    description:
      "Quickly generate formal phrases and summaries. Sound professional, faster.",
    icon: "./page2Card7.svg",
  },
  {
    heading: "Get Noticed",
    title: "Beat the competition",
    description:
      "Our tested resume templates are designed to make you more attractive to recruiters.",
    icon: "./page2Card8.svg",
  },
  {
    heading: "Save Time",
    title: "Pre-written content",
    description:
      "Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.",
    icon: "./page2Card9.svg",
  },
];
export const features = [
  {
    Icon: FileText,
    title: "Choose your resume template",
    description:
      "Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.",
    delay: 0,
  },
  {
    Icon: PenTool,
    title: "Show what you're made of",
    description:
      "Not finding the right words to showcase yourself? We've added thousands of pre-written examples and resume samples. As easy as clicking.",
    delay: 0.2,
  },
  {
    Icon: FileDown,
    title: "Download your resume",
    description:
      "Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.",
    delay: 0.4,
  },
];
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  rtl: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const resumeTemplates = [
  { image: "/page3Resume1.svg", name: "Professional Resume Template 1" },
  { image: "/page3Resume2.svg", name: "Professional Resume Template 2" },
  { image: "/page3Resume3.svg", name: "Professional Resume Template 3" },
  { image: "/page3Resume1.svg", name: "Professional Resume Template 4" },
];
