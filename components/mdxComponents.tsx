import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
} from "@/components/mdxHeading";
import Pre from "./pre";
import Link from "next/link";
import Warning from "@/components/warning";
import Optional from "@/components/optional";
import Info from "@/components/info";
import ReservedWordsTable from "@/app/reservedWords";

interface MdxProps {
  code: string;
}

interface componentProps {
  __rawstring__?: any;
  children?: React.ReactNode;
  className?: string | undefined;
}

const components = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  h6: MdxH6,
  a: ({ className, ...props }: componentProps) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: componentProps) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 font-medium text-lg",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: componentProps) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: componentProps) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: componentProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: componentProps) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: componentProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: componentProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ __rawstring__, children, ...props }: componentProps) => (
    <Pre __rawstring__={__rawstring__} {...props}>
      {children}
    </Pre>
  ),
  code: ({ className, ...props }: componentProps) => (
    <code
      className={cn(
        "relative rounded font-mono text-sm font-medium",
        className
      )}
      {...props}
    />
  ),
  Image,
  Link,
  Warning,
  Optional,
  Info,
  ReservedWordsTable,
};
export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
