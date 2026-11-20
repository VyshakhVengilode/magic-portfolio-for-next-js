
import { getPosts } from "@/app/utils/utils";
import ProjectsClient from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
  pageSize?: number;
  only?: string[];
  exclude?: string[];
  featuredOnly?: boolean;
}

export function Projects({
  range,
  pageSize = 6,
  only,
  exclude = [],
  featuredOnly = false,
}: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  // Sort featured projects first, then by publication date.
  const sortedProjects = [...allProjects].sort((a, b) => {
    const featuredDifference =
      Number(Boolean(b.metadata.featured)) -
      Number(Boolean(a.metadata.featured));

    if (featuredDifference !== 0) {
      return featuredDifference;
    }

    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  let selectedProjects = sortedProjects;

  // Include only projects with the specified slugs.
  if (only) {
    selectedProjects = selectedProjects.filter((project) =>
      only.includes(project.slug)
    );
  }

  // Exclude projects with the specified slugs.
  if (exclude.length > 0) {
    selectedProjects = selectedProjects.filter(
      (project) => !exclude.includes(project.slug)
    );
  }

  // Show only projects marked as featured in their MDX metadata.
  if (featuredOnly) {
    selectedProjects = selectedProjects.filter(
      (project) => project.metadata.featured === true
    );
  }

  // Preserve support for the existing numerical range.
  const projectsForClient = range
    ? selectedProjects.slice(
        range[0] - 1,
        range[1] ?? selectedProjects.length
      )
    : selectedProjects;

  return (
    <ProjectsClient
      initialProjects={projectsForClient}
      pageSize={pageSize}
      hasRange={!!range}
    />
  );
}
