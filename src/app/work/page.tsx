import { Column, Heading } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">

      {/* Page metadata */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Work page heading */}
      <Heading
        marginBottom="l"
        variant="heading-strong-xl"
        align="center"
      >
        {work.title}
      </Heading>

      {/* Graphic Designer visual - first */}
      <Projects range={[2, 2]} />

      {/* Muse Arena 2K26 - second */}
      <Projects only={["muse-arena-2k26"]} />

      {/* Cognitive Lens and remaining projects */}
      <Projects range={[3]} />

    </Column>
  );
}
