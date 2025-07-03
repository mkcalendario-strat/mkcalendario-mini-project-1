import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function AxiesEducationInc() {
  return (
    <AboutSection>
      <AboutImage
        alt="axies"
        src="/assets/images/companies/axies-official.webp"
      />
      <AboutContent>
        <AboutTitle>Start of Tech Journey</AboutTitle>
        <AboutParagraph>
          Axies Education Inc. marked a significant milestone in my career as it
          was my first major freelancing client. I developed and deployed a
          full-stack web application hosted on a virtual private server (VPS),
          which involved end-to-end development from system design to deployment
          and maintenance.
        </AboutParagraph>
        <AboutParagraph>
          My responsibilities didn&apos;t stop after deployment. I continued to
          maintain the codebase, regularly pushing updates, fixing bugs,
          optimizing performance, and adding new features based on the
          company&apos;s evolving needs. This experience taught me how to handle
          a live production environment and ensure high availability and
          reliability.
        </AboutParagraph>
        <AboutParagraph>
          I utilized a modern stack consisting of Vite + React, Sass, Express,
          Node, and Docker. This project not only strengthened my technical
          skills but also taught me the importance of client communication, time
          management, and delivering quality work on a freelance basis.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
