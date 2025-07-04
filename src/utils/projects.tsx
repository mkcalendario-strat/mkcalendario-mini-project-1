"use client";

import { redirect, RedirectType } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useProjectData(projectID: string) {
  const projects = useProjects();
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    if (!projects) return;

    const project = projects.filter((project) => project.id === projectID);

    if (!project.length) redirect("/404", RedirectType.replace);

    setData(project[0]);
  }, [projects, projectID]);

  return data;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/assets/data/projects.json`;
      const request = await fetch(url);
      const result: Project[] = await request.json();
      setProjects(result);
    } catch {
      redirect("/404", RedirectType.replace);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return projects;
}
