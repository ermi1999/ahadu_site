import { DocsConfig } from "types";
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Variables",
          href: "/docs/variables",
        },
        {
          title: "Functions",
          href: "/docs/functions",
        },
        {
          title: "Classes",
          href: "/docs/classes",
        },
        {
          title: "Built in functions",
          href: "/docs/built-in-functions",
        },
      ],
    },
  ],
};
