"use client";

import {
  ProjectDetails,
  ProjectImage,
  ProjectMarkdown,
  ProjectSection
} from "@/components/layouts/ProjectSection";
import HighlightTab from "@/components/ui/HighlightTab";
import { useProjectData } from "@/utils/projects";

interface DisplayProjectProps {
  id: string;
}

export default function DisplayProject({ id }: DisplayProjectProps) {
  const project = useProjectData(id);

  if (!project) return;

  return (
    <ProjectSection>
      <ProjectImage
        alt={project.title}
        src={`/assets/images/projects/${project.image}`}
      />
      <HighlightTab>Details</HighlightTab>
      <ProjectDetails
        title={project.title}
        stack={project.stack}
        description={project.description}
      />
      <HighlightTab>Read Me</HighlightTab>
      <ProjectMarkdown markdown={project.markdown} />
    </ProjectSection>
  );
}
