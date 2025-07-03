import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function HighSchoolLife() {
  return (
    <AboutSection>
      <AboutImage
        alt="jose p. laurel high school"
        src="/assets/images/school-logos/jplhs.webp"
      />
      <AboutContent>
        <AboutTitle>High School Life</AboutTitle>
        <AboutParagraph>
          During my high school years at Jose P. Laurel High School, I
          consistently belonged to the top section, a testament to my dedication
          and strong academic performance. My time there laid the foundation for
          my academic discipline and my curiosity in tech-related fields, which
          would eventually shape my college journey.
        </AboutParagraph>
        <AboutParagraph>
          One highlight was when I participated in the Division-Wide Newswriting
          Journalism Contest, where I proudly placed 8th. It was my first taste
          of competitive writing and helped me improve my analytical thinking
          and communication skills, both of which are essential in the field of
          computer science today.
        </AboutParagraph>
        <AboutParagraph>
          I graduated with honors, securing the overall 6th rank in our
          graduating batch. Achieving this while being active in extracurricular
          and academic events was a challenge, but it trained me to balance
          responsibilities and maintain a strong work ethic.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
