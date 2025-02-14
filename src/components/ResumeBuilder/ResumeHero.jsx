
import HeroLeft from "./HeroLeft";
import Image from "next/image"; 

const ResumeHero = () => {
  return (
    <div className="grid grid-cols-1 md:flex flex-row items-start justify-around h-auto">
      <div className="w-full md:w-3/5 h-auto z-[1]">
        <HeroLeft />
      </div>
      <div className="w-full md:w-2/5 h-full mr-8">
        <div className="flex flex-col items-center justify-center">
          <div

            className="animate-slideInRight lg:px-8 xl:px-24 xl:-mt-8 z-10 max-w-[17rem] lg:max-w-80 xl:max-w-[30rem]"
          >
            <Image src="/heroRight.png" alt="Hero Right Image" width={500} height={500} priority />
          </div>
          <div
            className="resumeHeroTopRight animate-fadeIn border-2  w-[21rem] lg:w-96 h-[22rem] md:-ml-8 lg:ml-0 -mt-[13rem] lg:-mt-[14rem] xl:-mt-52 bg-[var(--bg-gradient)] "
            
          ></div>
        </div>
        <div
        
          className="resumeHeroBottomRight animate-slideInBottom hidden md:block border rounded-lg p-6 backdrop-blur-[17.6px] h-72 opacity-50 w-72 -mt-28 -ml-32"
        
        ></div>
      </div>
    </div>
  );
};

export default ResumeHero;