import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function StratpointInc() {
  return (
    <AboutSection>
      <AboutImage
        alt="stratpoint"
        src="/assets/images/companies/stratpoint-official.webp"
      />
      <AboutContent>
        <AboutTitle>New Milestone</AboutTitle>
        <AboutParagraph>
          I am currently interning at Stratpoint Inc., a leading digital
          transformation company, where I joined before graduation as a Software
          Engineer specializing in web development using React JS. This role is
          helping me build my path in the tech industry by gaining valuable
          hands-on experience.
        </AboutParagraph>
        <AboutParagraph>
          During my internship, I have been involved in tasks such as feature
          implementation, debugging, and collaborating with cross-functional
          teams. This has given me practical exposure to Scrum practices and how
          agile teams operate to deliver quality software.
        </AboutParagraph>
        <AboutParagraph>
          Working alongside seasoned professionals at Stratpoint continues to
          inspire me to grow not only my technical skills but also my
          problem-solving, communication, and teamwork abilities—skills
          essential to shaping my future career in technology.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
