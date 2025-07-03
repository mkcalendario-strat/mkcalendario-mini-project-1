import AxiesEducationInc from "@/components/sections/about/AxiesEducationInc";
import BasicInformation from "@/components/sections/about/BasicInformation";
import CollegeEra from "@/components/sections/about/CollegeEra";
import HighSchoolLife from "@/components/sections/about/HighSchoolLife";
import LexMeetInc from "@/components/sections/about/LexMeetInc";
import SeniorHighSchoolJourney from "@/components/sections/about/SeniorHighSchoolLife";
import StratpointInc from "@/components/sections/about/StratpointInc";
import CompaniesBar from "@/components/sections/landing/CompaniesBar";
import Navbar from "@/components/ui/Navbar";
import TextBanner from "@/components/ui/TextBanner";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <Navbar />
      <BasicInformation />
      <TextBanner
        text="Education"
        className="bg-neutral-800"
      />
      <HighSchoolLife />
      <SeniorHighSchoolJourney />
      <CollegeEra />
      <TextBanner
        text="Experiences"
        className="bg-neutral-800"
      />
      <AxiesEducationInc />
      <LexMeetInc />
      <StratpointInc />
      <CompaniesBar />
    </Fragment>
  );
}
