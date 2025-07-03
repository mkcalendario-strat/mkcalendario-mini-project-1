export async function getProjectData(projectID: string) {
  const url = `${process.env.NEXT_PUBLIC_URL}/assets/data/projects.json`;
  const response = await fetch(url);
  const projects: Project[] = await response.json();

  return projects.find((project) => project.id === projectID);
}
