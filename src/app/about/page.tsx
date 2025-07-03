import BasicInformation from "@/components/sections/about/BasicInformation";
import CompaniesBar from "@/components/sections/landing/CompaniesBar";
import Navbar from "@/components/ui/Navbar";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <Navbar />
      <BasicInformation />
      <CompaniesBar />
    </Fragment>
  );
}
