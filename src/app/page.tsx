import CompaniesBar from "@/components/CompaniesBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <CompaniesBar />
    </Fragment>
  );
}
