"use client";

import About from "@/components/sections/landing/About";
import CompaniesBar from "@/components/sections/landing/CompaniesBar";
import Experiences from "@/components/sections/landing/Experiences";
import Footer from "@/components/sections/landing/Footer";
import Hero from "@/components/sections/landing/Hero";
import Projects from "@/components/sections/landing/Projects";
import Techonologies from "@/components/sections/landing/Techonologies";
import Navbar from "@/components/ui/Navbar";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.hash has the id to scroll to
      const hash = window.location.hash?.substring(1); // remove the '#'

      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

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
