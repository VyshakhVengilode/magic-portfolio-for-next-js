"use client";

import React, { useEffect, useRef, useState } from "react";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsClientProps {
  initialProjects: any[];
  pageSize?: number;
  hasRange?: boolean;
}

export default function ProjectsClient({
  initialProjects,
  pageSize = 6,
  hasRange = false,
}: ProjectsClientProps) {
  const [count, setCount] = useState(() => Math.min(pageSize, initialProjects.length));
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setCount((prev) => Math.min(prev + pageSize, initialProjects.length));
      setLoading(false);
    }, 120);
  };

  useEffect(() => {
    if (hasRange) return; // don't auto-load when explicit range provided
    const el = sentinelRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, [initialProjects.length, hasRange]);

  const displayed = initialProjects.slice(0, count);

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayed.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}

      <div ref={sentinelRef} aria-hidden="true" style={{ width: "100%", height: 1 }} />

      {loading && <div style={{ padding: 12, textAlign: "center" }}>Loading…</div>}
    </Column>
  );
}
