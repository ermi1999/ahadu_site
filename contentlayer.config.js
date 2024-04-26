import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getHighlighter } from "shiki";
import fs from "fs";
import { visit } from "unist-util-visit";

import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
} from "@shikijs/transformers";

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => {
      const lang = doc._raw.flattenedPath.split("/")[0];
      return `${lang}/${doc._raw.flattenedPath.split("/").slice(2).join("/")}`;
    },
  },
};

export const DocEnglish = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `en/docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const DocAmharic = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `am/docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [DocEnglish, DocAmharic],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.__rawstring__ = codeEl.children?.[0].value;
          }
        });
      },
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          defaultLang: {
            block: "ahadu",
            inline: "plaintext",
          },
          theme: {
            dark: "houston",
            light: "catppuccin-latte",
          },
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationErrorLevel(),
          ],
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
          getHighlighter: async (options) => {
            const ahadu = JSON.parse(
              fs.readFileSync("./ahadu.tmLanguage.json", "utf-8")
            );
            return getHighlighter({
              ...options,
              themes: ["andromeeda", "catppuccin-latte", "houston"],
              langs: [ahadu, "bash", "plaintext"],
            });
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            arialLabel: "Link to section",
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }

            for (const child of node.children) {
              if (child.tagName === "pre") {
                child.properties["raw"] = node.raw;
              }
            }
          }
        });
      },
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "div";
            preElement.properties["__rawstring__"] = node.__rawstring__;
          }
        });
      },
    ],
  },
});
