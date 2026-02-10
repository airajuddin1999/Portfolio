"use client";
import { Timeline } from "../components/Timeline";
import TitleHeader from "../components/TitleHeader";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full" id="work">
      <TitleHeader
        title="Work Experience"
        number="04"
        text="My professional journey"
      />
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
