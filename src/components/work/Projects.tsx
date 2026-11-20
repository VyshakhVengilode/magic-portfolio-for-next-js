import { getPosts } from "@/app/utils/utils";
import ProjectsClient from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
  pageSize?: number;
}

export function Projects({ range, pageSize = 6 }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    // Explicitly featured projects appear first on both the homepage and Works page.
    const featuredDifference = Number(Boolean(b.metadata.featured)) - Number(Boolean(a.metadata.featured));
    if (featuredDifference !== 0) return featuredDifference;

    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const projectsForClient = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return <ProjectsClient initialProjects={projectsForClient} pageSize={pageSize} hasRange={!!range} />;
}
