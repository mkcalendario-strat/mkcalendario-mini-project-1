import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function LexMeetInc() {
  return (
    <AboutSection inverted={true}>
      <AboutImage
        alt="lexmeet"
        src="/assets/images/companies/lexmeet-official.webp"
      />
      <AboutContent>
        <AboutTitle>First Industry Exposure</AboutTitle>
        <AboutParagraph>
          My internship at LexMeet Inc. was my first official work experience in
          a corporate setting, required by our school. I joined the front-end
          development team, where I worked on building responsive and
          user-friendly UI pages for the company’s website.
        </AboutParagraph>
        <AboutParagraph>
          During my internship, I took initiative in organizing and maintaining
          the front-end codebase, which helped improve its structure,
          readability, and scalability. This gave me valuable insights into how
          scalable applications are maintained in a collaborative development
          environment.
        </AboutParagraph>
        <AboutParagraph>
          Collaboration was key during this internship. I worked closely with
          co-interns and supervisors using Git and GitLab for version control,
          code reviews, and task coordination. This experience gave me a clearer
          picture of the software development lifecycle in a real-world tech
          company.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
