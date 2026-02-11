import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work, BasePageConfig } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import siteData from "./site-data.json";

const person: Person = {
  firstName: "Delgado's Painting",
  lastName: "Incorporated",
  name: `Delgado's Painting Inc.`,
  role: "Commercial & Residential Painting – Free Estimates",
  avatar: "/images/avatar.jpg",
  email: "info@delgadospainting.com", // change this if you prefer a different inbox
  // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  // Replace this with your local time zone if needed
  location: "America/New_York",
  // optional: Leave the array empty if you don't want to display languages
  languages: ["English", "Spanish"],
};

const newsletter: Newsletter = {
  // Painting clients typically don't need a newsletter – hide this block
  display: false,
  title: <>Stay in touch</>,
  description: <>News and updates from {person.name}</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – ${person.role}`,
  description: `${person.name} provides reliable commercial and residential painting services in the Orlando metro area.`,
  headline: <>Orlando metro commercial & residential painting</>,
  featured: {
    // No need for a featured tech project banner on a trades business site
    display: false,
    title: null,
    href: "/work",
  },
  subline: (
    <>
      {person.name} is a family-owned painting company serving the Orlando metro area, specializing in{" "}
      <strong>commercial</strong> and <strong>residential</strong> projects.
      <br />
      From exterior repaints and HOA work to interior refreshes, we offer <strong>free estimates</strong>,
      focus on clean lines and durable finishes, and always respect your time and space.
    </>
  ),
};

const about: About = {
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
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Who we are",
    description: (
      <>
        {person.name} is a locally trusted painting contractor in the Orlando metro area, providing interior
        and exterior painting for homes, offices, retail spaces and multi-unit buildings. We offer{" "}
        <strong>free estimates</strong>, focus on careful preparation, premium materials, and a tidy jobsite
        so you can enjoy a long-lasting finish.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: person.name,
        timeframe: "2005 – Present",
        role: "Owner & Lead Painter",
        achievements: [
          <>
            Completed hundreds of interior and exterior repaint projects for single-family homes, condos,
            townhomes and commercial spaces.
          </>,
          <>
            Specialize in low-odor, low-VOC paints and careful protection of furniture, floors and
            landscaping.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Freshly painted home exterior",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Commercial projects",
        timeframe: "Ongoing",
        role: "Lead crew for offices, retail and multifamily",
        achievements: [
          <>
            Completed projects ranging from small offices to multi-story buildings, coordinating schedules
            around business hours to minimize downtime.
          </>,
          <>
            Comfortable working with property managers, HOAs and general contractors on timelines, specs
            and color approvals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Certifications & training",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Services",
    skills: [
      {
        title: "Interior painting",
        description: (
          <>
            Walls, ceilings, trim and doors, including color matching, repairs and durable finishes for
            high-traffic areas.
          </>
        ),
        tags: [
          {
            name: "Drywall patching",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Freshly painted living room",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Exterior painting",
        description: <>Repaints for stucco, siding, trim, doors, railings and more.</>,
        tags: [
          {
            name: "Power washing",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Painted home exterior",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Painting tips & updates",
  description: `Occasional tips and project highlights from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Painting projects – ${person.name}`,
  description: `A selection of commercial and residential painting projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project gallery – ${person.name}`,
  description: `Before-and-after photos and project details from ${person.name}`,
  // Images are centrally managed in src/resources/site-data.json
  images: siteData.galleryImages,
};

const contact: BasePageConfig = {
  path: "/contact",
  label: "Contact",
  title: `Contact ${person.name}`,
  description: `Request a quote or ask a question about your next painting project with ${person.name}.`,
  image: home.image,
};

const clients: BasePageConfig = {
  path: "/clients",
  label: "Client Portal",
  title: `Client portal – ${person.name}`,
  description: `Existing clients can quickly check upcoming painting projects and schedules.`,
  image: home.image,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact, clients };
