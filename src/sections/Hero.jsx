import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center dark:bg-[#030412] -mb-40">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030412] 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="w-full absolute left-0 -top-[50vh]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-white max-w-80">
            Dynamic Web Magic in Software 
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Khaja Airaj Uddin Najaf, a Software Engineer.
          </p>

          <a href="#about">
            <MagicButton
              title="Know More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
