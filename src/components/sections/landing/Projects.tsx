import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import ProjectCard from "@/components/ui/ProjectCard";

export default async function Projects() {
  const title = "Projects I've Cooked and Served";
  const description =
    "A curated selection of real-world work that showcases my skills across design, development, and final delivery.";

  const projectURL = "http://localhost:3000/assets/data/projects.json";
  const request = await fetch(projectURL, { next: { revalidate: 3600 } });
  const projects: Project[] = await request.json();

  return (
    <Section id="projects">
      <SectionTitle
        title={title}
        tag="Projects"
        description={description}
      />
      <SectionWrapper className="flex flex-col gap-[20px] md:flex-row md:flex-wrap">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            stack={project.stack}
            href={`/projects/${project.id}`}
            description={project.description}
            image={`/assets/images/projects/${project.image}`}
            className="md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-20px*2)/3)]"
          />
        ))}
      </SectionWrapper>
    </Section>
  );
}
