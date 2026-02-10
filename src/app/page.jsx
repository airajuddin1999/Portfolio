"use client";
import Hero from "../sections/Hero";
import { navItems } from "@/data";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Footer from '../sections/Footer';
import Grid from "@/sections/Grid";
import { FloatingNav } from "@/components/FloatingNavbar";
import TechStack from "@/sections/TechStack";


export default function Home() {
  return (
    <>
    <FloatingNav navItems={navItems} />
    <Hero />
      <div className="container mx-auto">
        <Grid />
        <TechStack />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
