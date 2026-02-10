"use client";
import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";

const Projects = () => {
  return (
    <section className="w-full h-full flex-center relative" id="projects">
      <div className="w-full mb-40 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent project below for your Goal"
          />
        </div>
        <div className="md:mt-20 mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
