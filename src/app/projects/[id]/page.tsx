import Footer from "@/components/sections/landing/Footer";
import DisplayProject from "@/components/sections/projects/DisplayProject";
import Navbar from "@/components/ui/Navbar";
import { Fragment } from "react";

interface ProjectProps {
  params: Promise<{ id: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const { id } = await params;

  return (
    <Fragment>
      <Navbar />
      <DisplayProject id={id} />
      <Footer />
    </Fragment>
  );
}
