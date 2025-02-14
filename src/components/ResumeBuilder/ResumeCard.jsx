// components/ResumeCard.jsx
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const ResumeCard = ({ image, heading, description, groupIndex }) => {
  // Calculate direction based on group (every 3 cards)
  const group = Math.floor(groupIndex / 3);
  const direction = group % 2 === 0 ? 'slideLeft' : 'slideRight';
  
  // Base delay for each group (0.3s = 300ms)
  const groupDelay = group * 300;
  // Additional delay within group (0.15s = 150ms)
  const itemDelay = (groupIndex % 3) * 150;
  
  return (
    <ScrollReveal
      animation={direction}
      delay={groupDelay + itemDelay}
      duration={800}
      easing="smooth"
    >
      <div className="flex flex-col gap-4 items-start justify-around p-4">
        <div className="w-[2.75rem] h-[2.75rem]">
          <Image
            src={image}
            alt={`Icon representing ${heading}`}
            width={44}
            height={44}
            className="w-full"
            loading="eager"
          />
        </div>
        <h3 className="text-neutral-200 font-poppins font-medium text-2xl">
          {heading}
        </h3>
        <p className="text-slate-200 font-inter text-md font-light text-justify">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default ResumeCard;