import {
  ProjectDetails,
  ProjectImage,
  ProjectMarkdown,
  ProjectSection
} from "@/components/layouts/ProjectSection";
import HighlightTab from "@/components/ui/HighlightTab";
import { getProjectData } from "@/utils/projects";
import { redirect, RedirectType } from "next/navigation";

interface DisplayProjectProps {
  id: string;
}

export default async function DisplayProject({ id }: DisplayProjectProps) {
  let project;

  try {
    project = await getProjectData(id);
    if (!project) throw new Error("Project not found.");
  } catch {
    redirect("/404", RedirectType.push);
  }

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
