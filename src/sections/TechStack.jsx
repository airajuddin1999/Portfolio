import React from "react";
import { skills } from "@/data/index";
import Tilt from "react-parallax-tilt";
import TitleHeader from "@/components/TitleHeader";

const TechStack = () => {
  return (
    <>
    <div className="md:-mt-20 mb-24">
        <TitleHeader title="SKILLS" number={"02"} text="Core skills and technologies behind the projects I create." />
    </div>
    <div className="flex flex-col justify-center relative z-[1] items-center -mt-20 mb-20" id="Skills">
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3">

        <div className="w-full flex flex-wrap mt-5 gap-[50px] justify-center">
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <div className="w-full max-w-[500px] bg-[#04071d] border border-[rgba(255,255,255,0.125)] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] rounded-2xl py-[18px] px-9 max-md:max-w-[400px] max-md:py-2.5 max-md:px-9 max-[500px]:max-w-[330px] max-[500px]:py-2.5 max-[500px]:px-9">
                <div className="text-[28px] font-semibold mb-5 text-center text-[var(--text-secondary)]">
                  {skill.title}
                </div>
                <div className="flex justify-center flex-wrap gap-3 mb-5">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className="text-base font-normal text-[color-mix(in_srgb,var(--text-primary)_50%,transparent)] border border-[color-mix(in_srgb,var(--text-primary)_50%,transparent)] rounded-xl py-3 px-4 flex items-center justify-center gap-2 max-md:text-sm max-md:py-2 max-md:px-3 max-[500px]:text-sm max-[500px]:py-1.5 max-[500px]:px-3"
                    >
                      <img src={item.image} alt={item.name} className="w-6 h-6" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default TechStack;