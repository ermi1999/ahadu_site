import Link from "next/link";
import { Doc } from "contentlayer/generated";

import {
  sidebarNavConfigAmharic,
  sidebarNavConfigEnglish,
} from "@/config/docs";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocsPagerProps {
  doc: Doc;
  lang: string;
}

export function DocsPager({ doc, lang }: DocsPagerProps) {
  const pager = getPagerForDoc(doc, lang);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className="flex flex-col [&>*]:hover:text-primary-foreground [&>*>*]:hover:text-primary-foreground"
        >
          <span className="text-muted-foreground transition-colors ml-auto">
            Prev
          </span>
          <span className="flex flex-row items-center">
            <ChevronLeft className="mr-2 h-4 w-4 text-muted-foreground transition-colors" />
            {pager.prev.title}
          </span>
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className="flex flex-col [&>*]:hover:text-primary-foreground [&>*>*]:hover:text-primary-foreground ml-auto"
        >
          <span className="text-muted-foreground transition-colors">Next</span>
          <span className="flex flex-row items-center">
            <span className="font-semibold">{pager.next.title}</span>
            <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground transition-colors" />
          </span>
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc, lang: string) {
  const flattenedLinks = [
    null,
    ...flatten(
      lang === "am"
        ? sidebarNavConfigAmharic.sidebarNav
        : sidebarNavConfigEnglish.sidebarNav
    ),
    null,
  ];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
