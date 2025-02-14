
import AnimatedWrapper from "@/components/AnimatedWrapper";

function HeroLeft() {
  return (
    <div className="flex items-center justify-center p-6 md:pr-15 pt-12">
     <AnimatedWrapper
  initial={{ opacity: 0, x: 0 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.57, ease: "linear" }}
  className=" w-full max-w-2xl py-16 px-16  z-10 backdrop-blur-[17.6px] border-2 border-solid border-[rgba(85,85,85,1)] flex flex-col gap-6 bg-[radial-gradient(65.88%_97.53%_at_50.04%_50.06%,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0)_100%)]"
>
  {/* Your content */}

        <AnimatedWrapper
          initial={{ opacity: 0.8, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.69, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[rgb(184,6,7)] font-poppins text-center text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.67)]">
              Your Gateway to a Perfect
            </span>

            <span className="text-[rgb(211,211,211)] font-poppins text-center text-3xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.67)]">
              Resume Starts Here
            </span>
          </div>

          <p className="mt-4 text-[rgb(167,167,167)] font-poppins text-lg text-center">
            Easily create a resume for any job using our best-in-class resume
            builder platform.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <button className="px-6 py-3 w-full bg-[rgb(207,57,56)] text-white font-medium text-[1rem] font-poppins transition-colors duration-200 ease-in delay-100 shadow-md hover:bg-red-600">
              Create my resume now
            </button>
            <button className="px-6 py-1 w-full bg-[rgb(207,57,56)] text-white text-[1rem] font-medium font-poppins transition-colors duration-200 ease-in delay-100 shadow-md hover:bg-red-600">
              Import Resume
            </button>
          </div>
        </AnimatedWrapper>
      </AnimatedWrapper>
    </div>
  );
}

export default HeroLeft;