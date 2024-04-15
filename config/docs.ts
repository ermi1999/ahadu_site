import { DocsConfig } from "types";
export const sidebarNavConfigEnglish: DocsConfig = {
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
  defaultValues: ["Documentation", "Getting Started"],
};

export const sidebarNavConfigAmharic: DocsConfig = {
  sidebarNav: [
    {
      title: "መጀመሪያ",
      items: [
        {
          title: "ትውውቅ",
          href: "/am/docs",
        },
        {
          title: "አሃዱን መጫን",
          href: "/en/docs/installation",
        },
      ],
    },
    {
      title: "ሰነድ",
      items: [
        {
          title: "መለያዎች",
          href: "/en/docs/variables",
        },
        {
          title: "ተግባሮች",
          href: "/en/docs/functions",
        },
        {
          title: "ክፍሎች",
          href: "/en/docs/classes",
        },
        {
          title: "አብረው የተሰሩ ተግባሮች",
          href: "/en/docs/built-in-functions",
        },
      ],
    },
  ],
  defaultValues: ["መጀመሪያ", "ሰነድ"],
};
