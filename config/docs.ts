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
      title: "The language",
      items: [
        {
          title: "Intro",
          href: "/en/docs/the-language",
        },
        {
          title: "Variables",
          href: "/en/docs/the-language/variables",
        },
        {
          title: "Block Statements and Grouping",
          href: "/en/docs/the-language/block-statements-and-grouping",
        },
        {
          title: "Functions",
          href: "/en/docs/the-language/functions",
        },
        {
          title: "Classes",
          href: "/en/docs/the-language/classes",
        },
        {
          title: "Built in functions",
          href: "/en/docs/the-language/built-in-functions",
        },
      ],
    },
  ],
  defaultValues: ["The language", "Getting Started"],
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
      title: "መመሪያዎች",
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
  defaultValues: ["መጀመሪያ", "መመሪያዎች"],
};
