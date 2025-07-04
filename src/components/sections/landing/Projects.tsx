"use client";

import {
  Section,
  SectionTitle,
  SectionWrapper
} from "@/components/layouts/Section";
import LinkButton from "@/components/ui/LinkButton";
import ProjectCard from "@/components/ui/ProjectCard";
import { useProjects } from "@/utils/projects";

export default function Projects() {
  const projects = useProjects(6);

  const title = "Projects I've Cooked and Served";
  const description =
    "A curated selection of real-world work that showcases my skills across design, development, and final delivery.";

  if (!projects) return;

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

        <LinkButton
          href="/projects"
          className="bg-blue-500 text-neutral-100">
          <i className="far fa-cubes" />
          View All Projects
        </LinkButton>
      </SectionWrapper>
    </Section>
  );
}
