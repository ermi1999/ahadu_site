import { DocsConfig } from "types";
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/en/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/en/docs",
        },
        {
          title: "Installation",
          href: "/en/docs/installation",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Variables",
          href: "/en/docs/variables",
        },
        {
          title: "Functions",
          href: "/en/docs/functions",
        },
        {
          title: "Classes",
          href: "/en/docs/classes",
        },
        {
          title: "Built in functions",
          href: "/en/docs/built-in-functions",
        },
      ],
    },
  ],
};
