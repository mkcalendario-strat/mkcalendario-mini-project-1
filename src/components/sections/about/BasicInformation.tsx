import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function BasicInformation() {
  return (
    <AboutSection>
      <AboutImage
        alt="mark kenneth"
        src="/assets/images/misc/me.webp"
      />
      <AboutContent>
        <AboutTitle>Nice to Meet You!</AboutTitle>
        <AboutParagraph>
          Hi, I&apos;m Mark Kenneth Calendario, born on October 19, 2002, and
          currently residing in Caloocan City. I&apos;m in my fourth year as a
          Computer Science student, striving to make a mark in the tech industry
          with a solid background in both theory and hands-on application. Over
          the years, I&apos;ve developed a strong interest in full-stack
          development and continue to sharpen my skills through academic
          projects, freelance work, and internships.
        </AboutParagraph>
        <AboutParagraph>
          As a full-stack developer, I enjoy building seamless, scalable
          applications from scratch, working across both the frontend and
          backend using modern tools and frameworks. My passion lies in solving
          real-world problems through efficient code and user-friendly
          interfaces. I’m currently expanding my knowledge in cloud computing
          and system architecture to further complement my development
          capabilities.
        </AboutParagraph>
        <AboutParagraph>
          Outside of academics and tech, I enjoy photography and gaming. These
          interests help me stay balanced and maintain a creative mindset. I
          believe in continuous learning and pushing my limits, both as a
          developer and as an individual.
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  );
}
