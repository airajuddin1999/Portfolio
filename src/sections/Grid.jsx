"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import TitleHeader from "@/components/TitleHeader";

const Grid = () => {
  return (
    <section
      id="about"
      className="relative sm:px-10 px-5 md:mt-50 mt-10 md:mb-28 mb-10"
    >
      <div>
        <TitleHeader
          title="ABOUT ME"
          number="01"
          text="Transforming ideas into functional, elegant solutions through code and innovation."
        />
      </div>
      <BentoGrid className="w-full py-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
