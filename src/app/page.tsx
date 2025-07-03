import About from "@/components/sections/landing/About";
import CompaniesBar from "@/components/sections/landing/CompaniesBar";
import Contact from "@/components/sections/landing/Contact";
import Experiences from "@/components/sections/landing/Experiences";
import Footer from "@/components/sections/landing/Footer";
import Hero from "@/components/sections/landing/Hero";
import Projects from "@/components/sections/landing/Projects";
import Techonologies from "@/components/sections/landing/Techonologies";
import Navbar from "@/components/ui/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <CompaniesBar />
      <Projects />
      <Techonologies />
      <Experiences />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
}
