"use client";

import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import Techonology from "@/components/ui/Technology";
import useTechnologies from "@/utils/technologies";

export default function Techonologies() {
  const technologies = useTechnologies();

  const title = "Ingredients for My Recipe";
  const description =
    "These are the technologies, frameworks, and tools I use to bring ideas to life that covers everything from frontend and backend development.";

  if (!technologies) return;

  return (
    <Section
      id="stacks"
      className="bg-neutral-800">
      <SectionTitle
        title={title}
        tag="Tech Stack"
        description={description}
      />
      <SectionWrapper className="flex flex-row flex-wrap justify-center gap-[20px]">
        {technologies.map((technology, i) => (
          <Techonology
            key={i}
            name={technology.name}
            image={technology.image}
            category={technology.category}
            className="w-[calc((100%-20px*2)/3)] sm:w-[calc((100%-20px*3)/4)] md:w-[calc((100%-20px*6)/7)] lg:w-[calc((100%-20px*9)/10)]"
          />
        ))}
      </SectionWrapper>
    </Section>
  );
}
