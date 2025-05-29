import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Icon, IconButton, SmartImage, Tag } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "@/components/about/about.module.scss";

export const metadata = {
  title: "Vyshakh Vengilode's Portfolio",
  description: "Portfolio website showcasing my work as a Graphic Designer | Writer | Developer",
  openGraph: {
    title: "Vyshakh Vengilode's Portfolio",
    description: "Portfolio website showcasing my work as a Graphic Designer | Writer | Developer",
    images: [
      {
        url: "https://raw.githubusercontent.com/VyshakhVengilode/magic-portfolio-for-next-js/refs/heads/main/public/images/projects/project-01/portfolio-01.jpg?token=GHSAT0AAAAAADEPI7CMWYWKROHQJFJC3YGG2BXYKWQ",
        width: 1200,
        height: 630,
        alt: "Vyshakh Vengilode's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyshakh Vengilode's Portfolio",
    description: "Portfolio website showcasing my work as a Graphic Designer | Writer | Developer",
    images: [
      "https://raw.githubusercontent.com/VyshakhVengilode/magic-portfolio-for-next-js/refs/heads/main/public/images/projects/project-01/portfolio-01.jpg?token=GHSAT0AAAAAADEPI7CMWYWKROHQJFJC3YGG2BXYKWQ",
    ],
  },
};

export default function Home() {
  return (
    <Column maxWidth="m" gap="0" horizontal="center">
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
<Column fillWidth paddingY="24" gap="0" horizontal="center">
  <Column fillWidth horizontal="center">
<RevealFx fillWidth horizontal="center" paddingBottom="12" paddingTop="2" delay={0.4}>
  <Button
    id="about"
    data-border="rounded"
    href={about.path}
    variant="secondary"
    size="m"
    arrowIcon
  >
    <Flex gap="8" vertical="center">
      {about.avatar.display && (
        <Avatar
          style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
          src={person.avatar}
          size="m"
        />
      )}
      {about.title}
    </Flex>
  </Button>
</RevealFx>
    <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
      <Heading
        wrap="balance"
        variant="display-strong-l"
        style={{ textAlign: "center" }}
      >
        {home.headline}
      </Heading>
    </RevealFx>
    <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
      <Text
        wrap="balance"
        onBackground="neutral-weak"
        variant="heading-default-xl"
        style={{ textAlign: "center" }}
      >
        {home.subline}
      </Text>
    </RevealFx>
  </Column>
              {home.calendar.display && (
<Flex
  gap="16"
  marginBottom="m"
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }}
  mobileDirection="column"
>
  {/* Artistry button */}
  <Flex
    fitWidth
    border="brand-alpha-medium"
    className={styles.blockAlign}
    style={{
      backdropFilter: "blur(var(--static-space-1))",
    }}
    background="brand-alpha-weak"
    radius="full"
    padding="4"
    gap="8"
    vertical="center"
  >
    <Icon paddingLeft="12" name="grid" onBackground="brand-weak" />
    <Flex paddingX="8">Explore Artworks</Flex>
    <IconButton
      href="https://artistrydesigndiaries.blogspot.com/"
      data-border="rounded"
      variant="secondary"
      icon="chevronRight"
    />
  </Flex>
  {/* Link In Bio button */}
  <Flex
    fitWidth
    border="brand-alpha-medium"
    className={styles.blockAlign}
    style={{
      backdropFilter: "blur(var(--static-space-1))",
    }}
    background="brand-alpha-weak"
    radius="full"
    padding="4"
    gap="8"
    vertical="center"
  >
    <Icon paddingLeft="12" name="publications" onBackground="brand-weak" />
    <Flex paddingX="8">Read Writings</Flex>
    <IconButton
      href="https://hopp.bio/vyshakhvengilode"
      data-border="rounded"
      variant="secondary"
      icon="chevronRight"
    />
  </Flex>
</Flex>
            )}
</Column>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
