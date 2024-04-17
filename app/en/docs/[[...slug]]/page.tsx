import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdxComponents";
import { DocsPager } from "@/components/pager";
import { DashboardTableOfContents } from "@/components/toc";
import { Separator } from "@/components/ui/separator";
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
  const slug = "en/" + (params.slug?.join("/") || "");
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
    <>
      <article className="px-4 py-10 space-y-5 w-full lg:w-[65%]">
        <div className="space-y-2">
          <h1 className="text-5xl">{doc.title}</h1>
          <p className="text-lg text-muted-foreground">{doc.description}</p>
        </div>
        <Mdx code={doc.body.code} />
        <Separator className="w-full" />
        <DocsPager doc={doc} lang="en" />
      </article>
      <aside className="hidden lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} lang="en" />
        </div>
      </aside>
    </>
  );
}
