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
        alt="mark kenneth"
        src="/assets/images/school-logos/au.webp"
      />
      <AboutContent>
        <AboutTitle>Senior High School Journey</AboutTitle>
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
    </AboutSection>
  );
}
