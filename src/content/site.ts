export type NavItem = {
  label: string;
  href: string;
};

export type ExploringArea = {
  index: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  /** External URL, only when a real, verified destination exists. */
  href?: string;
};

export type ContactChannel = {
  label: string;
  /** Public address or URL; null hides the channel until verified details exist. */
  value: string | null;
  /** Optional clickable destination; omit to render the value as plain text. */
  href?: string;
};

export const site = {
  name: "Nitesh",
  fullName: "Nitesh Kumar",
  monogram: "NK.",
  role: "Electronics and Computer Engineering student",
  year: new Date().getFullYear(),
} as const;

/** Verified external destinations, shared across sections. */
export const links = {
  github: "https://github.com/niteshpandu444-png",
} as const;

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "ENGINEERING STUDENT / AI PROJECT BUILDER",
  headline: "Learning to build AI systems, one project at a time.",
  supportingText:
    "I'm a 5th-semester Electronics and Computer Engineering student exploring artificial intelligence, computer vision, and machine learning through hands-on projects.",
  primaryAction: { label: "Explore my work", href: "#work" },
  secondaryAction: { label: "Get in touch", href: "#contact" },
};

export const exploring = {
  heading: "Currently exploring",
  description:
    "Areas I am actively studying and building small experiments in. These are areas of learning, not professional mastery.",
  areas: [
    {
      index: "01",
      title: "Artificial intelligence",
      description:
        "Learning how intelligent systems are designed and where they fit into real workflows.",
    },
    {
      index: "02",
      title: "Computer vision",
      description:
        "Exploring how machines interpret images, cameras, and visual information.",
    },
    {
      index: "03",
      title: "Machine learning",
      description:
        "Studying models, training fundamentals, and the practice of running experiments.",
    },
    {
      index: "04",
      title: "LLM applications",
      description:
        "Building small projects with prompts, tooling, and language model APIs.",
    },
  ] satisfies ExploringArea[],
};

export const work = {
  heading: "Selected work",
  description:
    "Prototypes, experiments, and technical learning — the practical side of what I study. Verified project details will be added here as they are ready.",
  emptyState: {
    label: "IN PREPARATION",
    title: "Project details are being prepared.",
    description:
      "Verified descriptions, links, and outcomes will be published here. Nothing appears until it can be represented accurately.",
  },
  /** Verified profile destination, shown alongside the empty state. */
  githubLink: {
    label: "Explore my GitHub repositories ↗",
    href: links.github,
  },
};

/**
 * Intentionally empty until verified project details are supplied.
 * Add entries here and the work section renders them without layout changes.
 */
export const projects: Project[] = [];

export const about = {
  heading: "Building my foundation",
  paragraphs: [
    "I am in my fifth semester of Electronics and Computer Engineering, and I learn best by building. I take ideas that interest me, break them into technical problems, and implement them step by step — reading documentation, debugging, and iterating until something works.",
    "Most of what I know so far comes from projects that showed me exactly what I had not understood yet. I am here to keep doing that in public, and to meet people solving interesting problems along the way.",
  ],
};

export const contact = {
  heading: "Have something interesting in mind?",
  description:
    "I'm interested in learning, building, and connecting with people working on interesting technical problems.",
};

/**
 * Verified contact details. A channel with a null value stays hidden, so future
 * optional fields can be added without ever rendering a placeholder or a
 * broken link.
 */
export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "niteshpandu444@gmail.com",
    href: "mailto:niteshpandu444@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 98865 58469",
    href: "tel:+919886558469",
  },
  {
    label: "GitHub",
    value: "github.com/niteshpandu444-png",
    href: links.github,
  },
  { label: "LinkedIn", value: null },
];

export const footer = {
  descriptor: "Electronics and Computer Engineering student / AI project builder",
};
