import { Logo } from "@/once-ui/components";
import React from "react";

const person = {
  firstName: "Vyshakh",
  lastName: "Vengilode",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graphic Designer",
  avatar: "/images/avatar.jpg",
  email: "vyshakhvengilode@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};
const NewsletterTitle = () => (
  <>Subscribe to {person.firstName}'s Newsletter</>
);

const NewsletterDescription = () => (
  <>
    I occasionally write about design, technology, and share thoughts on the intersection of
    creativity and engineering.
  </>
);

const newsletter = {
  display: true,
  title: <NewsletterTitle />,
  description: <NewsletterDescription />,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "BioLink",
    icon: "SiBiolink",
    link: "https://www.hopp.bio/vyshakhvengilode",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vyshakhvengilode/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/vyshakhvengilod",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Breathing Life through Design’s Pulse</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Naari</strong></>,
    href: "/work/naari-cover",
  },
  subline: (
    <>
     I’m Vyshakh, a poet of pixels and dreams.
      <br /> I sculpt intuitive worlds that captivate.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Vyshakh Vengilode (P), a Kannur-based graphic designer. I craft impactful visuals
      for branding, UI, and social media, blending creativity with strategy.
      My work transforms complex ideas into engaging designs.
  I’m passionate about storytelling through visuals that resonate.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Apollo Medical Laboratory",
        timeframe: "2024 - Present",
        role: "Graphic Designer/Digital Marketing & Media Specialist",
        achievements: [
          <>
            Developed compelling social media content for Apollo Medical Laboratory and Apollo Clinic, Kannur,
            enhancing online presence and brand engagement.
          </>,
          <>
            Designed posters, flyers, standees, program backdrops, and banners for marketing campaigns, aligning
            with brand identity and objectives.
          </>,
          <>
            Crafted building name boards and light boards to boost visual appeal and brand visibility for
            Apollo’s facilities.
          </>,
          <>
            Utilized Adobe Photoshop, Illustrator, and AI tools to create high-quality,
            impactful graphics for digital and print media, incorporating market trends.
          </>,
          <>
            Produced storytelling-driven designs that resonated with audiences,
            improving client interaction and campaign effectiveness.
          </>,
          <>
            Collaborated with teams to ensure designs met strategic goals, contributing to
            enhanced brand visibility and engagement.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/apollo.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Whiz Info Systems",
        timeframe: "2018 - 2024",
        role: "Graphic Designer/UI Designer",
        achievements: [
          <>
            Designed over 100 logos and brochures, achieving 95% client satisfaction
            with enhanced brand identity.
          </>,
          <>
            Crafted intuitive software and mobile UI designs, improving user experience
            and client alignment.
          </>,
          <>
            Produced compelling social media graphics, driving brand engagement and visibility.
          </>,
          <>
            Delivered tailored marketing materials using Adobe Photoshop, Illustrator, InDesign,
            and After Effects, meeting client goals.
          </>,
          <>
            Streamlined design workflows with AI tools, ensuring high-quality outputs
            under tight deadlines.
          </>,
          <>
            Collaborated with clients to create strategic design solutions,
            boosting project success rates.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/whiz.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI Prompt Engineering",
        description: <>Proficient in prompting AI tools to generate high-quality, impactful images and videos.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/ai.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ai-1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Adobe Creative Suite",
        description: <>Skilled in Adobe Creative Suite for creating impactful graphics, and digital content.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const publications = {
  path: "/publications",
  label: "Publications",
  title: `Projects – ${person.name}`,
  description: `Writeups by ${person.name}`,
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, publications, blog, work, gallery };
