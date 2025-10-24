import { getPosts } from "@/app/utils/utils";
import ProjectsClient from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
  pageSize?: number;
}

export function Projects({ range, pageSize = 6 }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const projectsForClient = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return <ProjectsClient initialProjects={projectsForClient} pageSize={pageSize} hasRange={!!range} />;
}
