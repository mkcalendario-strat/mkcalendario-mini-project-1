import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { useProjects } from "@/utils/projects";

export default function ProjectsList() {
  const projects = useProjects();

  const title = "All Projects";
  const description = "A list of all of my projects.";

  if (!projects) return;

  return (
    <Section className="boxes-background-inverted">
      <SectionTitle
        title={title}
        tag="All Projects"
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
            className="bg-neutral-900 md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-20px*2)/3)]"
          />
        ))}
      </SectionWrapper>
    </Section>
  );
}
