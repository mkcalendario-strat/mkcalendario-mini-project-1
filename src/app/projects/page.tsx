"use client";

import Footer from "@/components/sections/landing/Footer";
import ProjectsList from "@/components/sections/projects/ProjectList";
import Navbar from "@/components/ui/Navbar";
import { Fragment } from "react";

export default function Projects() {
  return (
    <Fragment>
      <Navbar />
      <ProjectsList />
      <Footer />
    </Fragment>
  );
}
