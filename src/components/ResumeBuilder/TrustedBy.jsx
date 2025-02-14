
import Image from "next/image";
import AnimatedWrapper from "@/components/AnimatedWrapper";

function TrustedBy() {
  return (
    <AnimatedWrapper
      initial={{ opacity: 0, y: -70 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.69, ease: "easeOut" }}
      className="flex items-center justify-center h-auto"
    >
      <div
        className="p-1 rounded-[65px] w-64"
        style={{
          background:
            "linear-gradient(184.68deg, #5E5E5E -6.43%, #2A2A2A 64.37%)",
        }}
      >
        <div className="w-[100%] h-[100%] rounded-[60px] bg-[#5D5D5D]/40 backdrop-blur-sm p-1">
          <div className="flex justify-around items-center">
            <div className="flex flex-row items-center justify-center">
              <Image src="/org.svg" alt="org" width={96} height={40} />
            </div>
            <p
              className="font-inter text-white text-[0.5rem] font-medium"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.65)" }}
            >
              Trusted by 35,000+ people
            </p>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default TrustedBy;