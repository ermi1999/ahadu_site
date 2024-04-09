import { allDocs } from "@/.contentlayer/generated";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "docs";
  console.log(slug);
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  console.log(doc);
  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
    },
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function EnglishDocPage({ params }: DocPageProps) {
  console.log(params);
  const doc = await getDocFromParams(params);
  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
