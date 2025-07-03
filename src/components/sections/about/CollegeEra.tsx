import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function CollegeEra() {
  return (
    <AboutSection>
      <AboutImage
        alt="polytechnic university of the philippines"
        src="/assets/images/school-logos/pup.webp"
      />
      <AboutContent>
        <AboutTitle>College Life</AboutTitle>
        <AboutParagraph>
          I&apos;m currently pursuing my degree in Computer Science at the
          Polytechnic University of the Philippines (PUP). Over the years, I’ve
          consistently been on the President&apos;s List, a reflection of my
          dedication to academic excellence and passion for the field. I&apos;m
          currently on track to graduate with Magna Cum Laude honors.
        </AboutParagraph>
        <AboutParagraph>
          One of the most fulfilling projects I&apos;ve worked on is our thesis
          titled{" "}
          <em>
            “AQUEYES: Augmenting Data for Common Fish Eye Diseases
            Classification Under Murky Water Environment Using YOLOv8.”
          </em>{" "}
          This project combined computer vision, machine learning, and
          environmental challenges to help improve aquaculture practices—an
          experience that significantly deepened my interest in AI and research.
        </AboutParagraph>
        <AboutParagraph>
          College has been a pivotal time for me not only academically but also
          professionally. Through projects, internships, and freelance work,
          I’ve gained hands-on experience in full-stack development, system
          design, and collaborative software engineering, preparing me well for
          the professional world.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
