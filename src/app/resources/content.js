import { Logo } from "@/once-ui/components";
import React from "react";

const person = {
  firstName: "Vyshakh",
  lastName: "Vengilode",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graphic Designer | Writer | Developer",
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
  headline: <>Vyshakh Vengilode's Portfolio</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Naari</strong></>,
    href: "/work/naari-cover",
  },
  subline: (
    <>
     Portfolio showcasing my work as a Graphic Designer | Writer | Developer
    </>
  ),
  calendar: {
    display: true,
    link: "https://cal.com/vyshakhvengilode",
  },
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
    link: "https://cal.com/vyshakhvengilode",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Vyshakh Vengilode (P), a Kannur-based creative professional blending design, storytelling, and
        code with a deep passion for science. As a graphic designer, I craft impactful visuals for branding, UI,
        and social media, transforming ideas into engaging designs. As a writer, I create compelling narratives
        from brand messaging to science articles, published in Mathrubhumi, LUCA (Kerala Sasthra Sahithya
        Parishat), and more. As a developer, I bring ideas to life through intuitive, functional digital experiences.
        A science enthusiast at heart, my research and reflections are shared through platforms like
        ResearchGate and PsyArXiv. I believe in the power of visuals, words, and technology to inform, inspire,
        and make a difference.
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
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI Prompt Engineering",
        description: (
          <>
            Proficient in prompting AI tools to generate high-quality, impactful images and videos.
          </>
        ),
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
        description: (
          <>
            Skilled in Adobe Creative Suite for creating impactful graphics, and digital content.
          </>
        ),
        images: [],
      },
    ],
  },

  publicationsSection: {
    title: "Publications",
    subtitle: "Articles (Science and Psychology, Politics and Philosophy)",
    sections: [
      {
        subtitle: "1) LUCA (Kerala Shasthra Sahithya Parishat)",
        entries: [
          {
            content: (
              <a
                href="https://luca.co.in/t-coronae-borealis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The world of science is ready to see the star world 'explode' - നക്ഷത്ര ലോകത്തെ ‘പൊട്ടിത്തെറി’ കാണാനൊരുങ്ങി ശാസ്ത്രലോകം.
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "2) Mathrubhumi",
        entries: [
          {
            content: (
              <a
                href="https://www.mathrubhumi.com/technology/tech-plus/t-coronae-borealis-northern-celestial-hemisphere-t-crb-1.9511245"
                target="_blank"
                rel="noopener noreferrer"
              >
                A nova explosion is 3000 light-years away; We can see it on earth - 3000 പ്രകാശവര്‍ഷം അകലെ നോവയുടെ പൊട്ടിത്തെറി; ഭൂമിയിലിരുന്ന് നമുക്കത് കാണാം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.mathrubhumi.com/special-pages/teachers-day-2023/opinion/teachers-day-2023-what-makes-a-good-teacher-1.8878147"
                target="_blank"
                rel="noopener noreferrer"
              >
                What makes a good teacher? - നല്ലൊരു അധ്യാപകനെ വളർത്തുന്നത് എന്താണ്?
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "3) Malayala Manorama",
        entries: [
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/11/27/malayalam-article-written-by-vysakh-vengilode-about-child-psychology.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Child Psychology Parents Need to Know - രക്ഷകർത്താക്കൾ അറിയേണ്ട കുട്ടികളുടെ മനഃശാസ്ത്രം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/09/15/malayalam-article-written-by-vyshak-vengilode.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                'Love' is the great revolution of change - 'പ്രണയം' മാറ്റത്തിന്റെ മഹാവിപ്ലവം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/06/16/malayalam-article-by-vyshakh-vengilode.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Changing Generation's shift is Not a Doom - മാറുന്ന തലമുറയുടെ മാറ്റം നാശത്തിലേക്കല്ല.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/11/09/malayalam-literature-article-oru-avishwasiyude-lokam.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                An Atheist's World - ഒരു അവിശ്വാസിയുടെ ലോകം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2025/01/13/malayalam-literature-article-viplavam-sthreekalilude.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Revolution through women - വിപ്ലവം സ്ത്രീകളിലൂടെ.
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "4) Madhyamam",
        entries: [
          {
            content: (
              <a
                href="https://www.madhyamam.com/opinion/articles/march-1-zero-discrimination-day-2025-1384985"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let discriminations fade, let wisdom awaken - വിവേചനങ്ങൾ തുലയട്ടെ, വിവേകം ഉണരട്ടെ.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.madhyamam.com/technology/reviews/quantum-computer-acts-and-misconceptions-1390437"
                target="_blank"
                rel="noopener noreferrer"
              >
                When will quantum computers come to our homes? - ക്വാണ്ടം കമ്പ്യൂട്ടർ എപ്പോൾ നമ്മുടെ വീട്ടിലെത്തും?
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "5) Yuktivaadi",
        entries: [
          {
            content: (
              <a
                href="https://www.yukthivaadi.com.leepu.in/articles/view/%E0%B4%B8%E0%B4%AF%E0%B5%BB%E0%B4%B8%E0%B5%81%E0%B4%82-%E0%B4%B8%E0%B4%AF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B4%BF%E0%B4%AB%E0%B4%BF%E0%B4%95%E0%B5%8D-%E0%B4%AE%E0%B5%88%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%81%E0%B4%82/38"
                target="_blank"
                rel="noopener noreferrer"
              >
                Science and the scientific mind - സയൻസും സയന്റിഫിക് മൈന്റും.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.yukthivaadi.com.leepu.in/articles/view/prnts-chldrn/38"
                target="_blank"
                rel="noopener noreferrer"
              >
                The parents and the children - രക്ഷകർത്താക്കളും കുട്ടികളും
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.yukthivaadi.com.leepu.in/articles/view/love-vyshakh/38"
                target="_blank"
                rel="noopener noreferrer"
              >
                'Love' is the great revolution of change - 'പ്രണയം' മാറ്റത്തിന്റെ മഹാവിപ്ലവം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.yukthivaadi.com.leepu.in/articles/view/tcrb-ready-to-explode/38"
                target="_blank"
                rel="noopener noreferrer"
              >
                T CrB ready to explode - പൊട്ടിത്തെറിക്കാൻ ഒരുങ്ങി T CrB.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.yukthivaadi.com/articles/view/politi-vaishakh/7"
                target="_blank"
                rel="noopener noreferrer"
              >
                The politics and the apolitics - രാഷ്ട്രീയവും 'അരാഷ്ട്രീയ' വാദവും
              </a>
            ),
          },
        ],
      },
    ],
  },

  shortstorySection: {
    title: "",
    subtitle: "Short Stories",
    sections: [
      {
        subtitle: "1) Asianet News (Chilla)",
        entries: [
          {
            content: (
              <a
                href="https://www.asianetnews.com/literature-magazine/chilla-malayalam-short-story-by-vaisakh-vengilode-s3t2ve"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sophia - സോഫിയ
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "2) Malayala Manorama",
        entries: [
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/11/02/malayalam-literature-short-story-sophia.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sophia - സോഫിയ
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/07/20/malayalam-short-story-swachanda-mrithi.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swachandha Mruthi (Peaceful Death) - സ്വച്ഛന്ദ മൃതി.
              </a>
            ),
          },
        ],
      },
    ],
  },

  poemsSection: {
    title: "",
    subtitle: "Poems",
    sections: [
      {
        subtitle: "1) Malayala Manorama",
        entries: [
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/06/08/malayalam-poem-samanathakal.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samanathakal (Similarities) - സമാനതകൾ.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/05/12/malayalam-poem-jeevitham.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeevitham (Life) - ജീവിതം.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2024/03/18/malayalam-poem-randidangalil.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Randidangalil (In two places) - രണ്ടിടങ്ങളിൽ.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2022/09/15/malayalam-poem-neduveerppu.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neduveerppu (Sigh) - നെടുവീർപ്പ്.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.manoramaonline.com/literature/your-creatives/2023/07/26/malayalam-poem-sneha-beejam.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sneha Beejam (Seed of love) സ്നേഹ ബീജം.
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "2) Poem Hunter",
        entries: [
          {
            content: (
              <a
                href="https://www.poemhunter.com/poem/vyshakh-vengilode-6213/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yathrakal (Journeys) - യാത്രകൾ.
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.poemhunter.com/poem/flight-of-freedom-a-poem-of-hope-and-love/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flight of Freedom (English).
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "3) The Emotional Typewriter",
        entries: [
          {
            content: (
              <a
                href="https://www.instagram.com/p/CCKttvEHxiQ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artist (English).
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.facebook.com/share/VkxDQ1T99xgKRSY5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flight of Freedom (English).
              </a>
            ),
          },
        ],
      },
      {
        subtitle: "4) Nashtapetta Neelambari",
        entries: [
          {
            content: (
              <a
                href="https://www.facebook.com/share/p/JfRxGr9FwPVAmE7B/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Niraamaya Kavyam (Immortal Poetry) - നിരാമയ കാവ്യം
              </a>
            ),
          },
          {
            content: (
              <a
                href="https://www.facebook.com/share/p/ouR8xR2iBQPi5s9E/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chirakalam (Forever) - ചിരകാലം
              </a>
            ),
          },
        ],
      },
    ],
  },

  preprintSection: {
    title: "",
    subtitle: "Research Preprints",
    sections: [
      {
        subtitle: "",
        entries: [
          {
            content: (
              <>
                <a
                  href="https://www.researchgate.net/publication/391518255_Teaching_Cognitive_Biases_and_Psychology_in_Kerala's_Schools_to_Improve_Civic_Sense_and_Mental_Health"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teaching Cognitive Biases and Psychology in Kerala’s Schools to Improve Civic Sense and Mental Health
                </a>{" "}
                (
                <a
                  href="https://osf.io/preprints/psyarxiv/ynk74_v2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI:10.31234/osf.io/ynk74_v2
                </a>
                )
              </>
            ),
          },
          {
            content: (
              <>
                <a
                  href="https://www.researchgate.net/publication/391153476_Digital_Micro-Interactions_The_Momentary_Happiness_and_Long-Term_Emotional_Issues_from_Social_Media"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Micro-Interactions: The Momentary Happiness and Long-Term Emotional Issues from Social Media
                </a>{" "}
                (
                <a
                  href="https://osf.io/preprints/psyarxiv/jae4f_v3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI:10.31234/osf.io/jae4f_v3
                </a>
                )
              </>
            ),
          },
        ],
      },
    ],
  }
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

const fav = {
  path: "/fav",
  label: "Favorites",
  title: "Favorites – Vyshakh Vengilode",
  description: "Vyshakh's favorite Malayalam movies, books, and TV shows",
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

export { person, social, newsletter, home, about, publications, blog, work, gallery, fav };
