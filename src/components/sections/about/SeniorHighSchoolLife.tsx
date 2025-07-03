import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function SeniorHighSchoolJourney() {
  return (
    <AboutSection inverted={true}>
      <AboutImage
        alt="arellano university"
        src="/assets/images/school-logos/au.webp"
      />
      <AboutContent>
        <AboutTitle>Senior High School Journey</AboutTitle>
        <AboutParagraph>
          For Senior High School, I enrolled in the Information and
          Communication Technology strand at Arellano University – Jose Rizal
          Campus, where I further honed my interest in programming and tech. The
          specialized subjects in ICT helped me solidify my understanding of
          foundational programming and computer systems.
        </AboutParagraph>
        <AboutParagraph>
          I joined a batch-wide programming contest, and I was fortunate to
          place 3rd, which gave me the confidence to explore more advanced
          coding techniques. It also gave me my first taste of competitive
          programming, which pushed me to study deeper beyond the school
          curriculum.
        </AboutParagraph>
        <AboutParagraph>
          I graduated as the top student in my strand, ranking 1st overall. That
          achievement solidified my decision to pursue a full Computer Science
          degree in college, as it confirmed my potential and passion for the
          field.
        </AboutParagraph>
        <AboutParagraph>
          I was also awarded <strong>Best in Software Research Project</strong>
          for my work titled{" "}
          <em>
            &quot;Development of Student Information Management System of AU
            Students – Jose Rizal Campus.&quot;{" "}
          </em>
          This project was instrumental in showcasing my ability to analyze user
          needs, design efficient data structures, and build functional systems
          that solve real academic challenges.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
