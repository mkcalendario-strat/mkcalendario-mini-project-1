import {
  AboutContent,
  AboutImage,
  AboutParagraph,
  AboutSection,
  AboutTitle
} from "@/components/layouts/AboutSection";

export default function CollegeEra() {
  return (
    <AboutSection className="boxes-background">
      <AboutContent>
        <AboutTitle>College Era</AboutTitle>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus
          aliquid, at nulla, obcaecati eum saepe quibusdam voluptates eligendi
          repellendus enim libero? Dignissimos exercitationem illum eos
          voluptate veniam, maxime sapiente quaerat incidunt, corrupti cum
          tempora praesentium commodi blanditiis neque magnam voluptatum sit
          consequuntur mollitia! Reiciendis pariatur minus quae corrupti
          temporibus.
        </AboutParagraph>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus
          aliquid, at nulla, obcaecati eum saepe quibusdam voluptates eligendi
          repellendus enim libero? Dignissimos exercitationem illum eos
          voluptate veniam, maxime sapiente quaerat incidunt, corrupti cum
          tempora praesentium commodi blanditiis neque magnam voluptatum sit
          consequuntur mollitia! Reiciendis pariatur minus quae corrupti
          temporibus.
        </AboutParagraph>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus
          aliquid, at nulla, obcaecati eum saepe quibusdam voluptates eligendi
          repellendus enim libero? Dignissimos exercitationem illum eos
          voluptate veniam, maxime sapiente quaerat incidunt, corrupti cum
          tempora praesentium commodi blanditiis neque magnam voluptatum sit
          consequuntur mollitia! Reiciendis pariatur minus quae corrupti
          temporibus.
        </AboutParagraph>
      </AboutContent>
      <AboutImage
        alt="polytechnic university of the philippines"
        src="/assets/images/school-logos/pup.webp"
      />
    </AboutSection>
  );
}
