import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import Techonology from "@/components/ui/Technology";

export default async function Techonologies() {
  const title = "Ingredients for My Recipe";
  const description =
    "These are the technologies, frameworks, and tools I use to bring ideas to life that covers everything from frontend and backend development.";

  const url = `${process.env.NEXT_PUBLIC_URL}/assets/data/technologies.json`;
  const response = await fetch(url, { next: { revalidate: 3600 } });
  const technologies: Technology[] = await response.json();

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
            className="w-[calc((100%-20px)/2)] sm:w-[calc((100%-20px*3)/4)] md:w-[calc((100%-20px*6)/7)] lg:w-[calc((100%-20px*9)/10)]"
          />
        ))}
      </SectionWrapper>
    </Section>
  );
}
