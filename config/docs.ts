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
          title: "For statement",
          href: "/en/docs/the-language/for-statement",
        },
        {
          title: "While statement",
          href: "/en/docs/the-language/while-statement"
        },
        {
          title: "Operators",
          href: "/en/docs/the-language/operators"
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
          href: "/am/docs/installation",
        },
      ],
    },
    {
      title: "መመሪያዎች",
      items: [
        {
          title: "መግቢያ",
          href: "/am/docs/the-language"
        },
        {
          title: "መለያዎች",
          href: "/am/docs/the-language/variables",
        },
        {
          title: "ተግባሮች",
          href: "/am/docs/the-language/functions",
        },
        {
          title: "ክፍሎች",
          href: "/am/docs/the-language/classes",
        },
        {
          title: "አብረው የተሰሩ ተግባሮች",
          href: "/am/docs/the-language/built-in-functions",
        },
      ],
    },
  ],
  defaultValues: ["መጀመሪያ", "መመሪያዎች"],
};
