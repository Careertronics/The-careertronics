import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const ResumeCard = forwardRef(
  ({ image, heading, description, initial, groupIndex }, ref) => {
    const isInView = useInView(ref, {
      margin: "-50% 0px -50% 0px",
      once: true,
    });

    const getDelay = () => {
      const groupDelay = Math.floor(groupIndex / 3) * 0.3;
      const itemDelay = (groupIndex % 3) * 0.15;
      return groupDelay + itemDelay;
    };

    return (
      <motion.div
        ref={ref} // Assign local ref here
        initial={{ opacity: 0, ...initial }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.75, 0.3, 1],
          delay: getDelay(),
        }}
        viewport={{ once: true }}
        className="resume-card flex flex-col gap-4 items-start justify-around p-4"
      >
        <div className="w-[2.75rem] h-[2.75rem]">
          <Image
            src={image}
            alt={`Icon representing ${heading}`}
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <h3 className="text-neutral-200 font-poppins font-medium text-2xl">
          {heading}
        </h3>
        <p className="text-slate-200 font-inter text-md font-light text-justify">
          {description}
        </p>
      </motion.div>
    );
  }
);

export default ResumeCard;
