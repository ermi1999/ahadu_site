import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdxComponents";
import { DocsPager } from "@/components/pager";
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
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
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
  const doc = await getDocFromParams(params);
  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);
  return (
    <article className="md:w-[80%] ml-auto px-4">
      <h1>{doc.title}</h1>
      <Mdx code={doc.body.code} />
      <DocsPager doc={doc} />
    </article>
  );
}
