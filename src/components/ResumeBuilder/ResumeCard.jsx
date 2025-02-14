import Image from "next/image";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const ResumeCard = ({ image, heading, description, groupIndex }) => {
  const getDelay = () => {
    const groupDelay = Math.floor(groupIndex / 3) * 0.3;
    const itemDelay = (groupIndex % 3) * 0.15;
    return groupDelay + itemDelay;
  };

  return (
    <AnimatedWrapper
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.75, 0.3, 1],
        delay: getDelay(),
      }}
      className="resume-card flex flex-col gap-4 items-start justify-around p-4"
    >
      <div className="w-[2.75rem] h-[2.75rem]">
        <Image
          src={image}
          alt={`Icon representing ${heading}`}
          width={44} // Specific size
          height={44}
          className="w-full"
          loading="lazy"
        />
      </div>
      <h3 className="text-neutral-200 font-poppins font-medium text-2xl">
        {heading}
      </h3>
      <p className="text-slate-200 font-inter text-md font-light text-justify">
        {description}
      </p>
    </AnimatedWrapper>
  );
};

export default ResumeCard;
