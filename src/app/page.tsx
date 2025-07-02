import About from "@/components/About";
import CompaniesBar from "@/components/CompaniesBar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Techonologies from "@/components/Techonologies";
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
      <Footer />
    </Fragment>
  );
}
