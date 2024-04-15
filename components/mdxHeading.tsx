"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

interface MdxHeadingProps {
  h?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const MdxHeading = ({
  h,
  id,
  className,
  children,
  ...props
}: MdxHeadingProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const VariableHeader = h;

  if (id) {
    return (
      <Link href={`#${id}`} id={id}>
        <VariableHeader className={className}>
          {/* {React.Children.map(children, (child) => {
            // TODO: this code doesn't work make sure to remove the empty <a> tag.
            if (React.isValidElement(child) && child.type == "a") {
              console.log(child.type);
              return React.cloneElement(child, {
                children: <span>#</span>,
              });
            }
          })} */}
          {children}
        </VariableHeader>
      </Link>
    );
  }

  return <VariableHeader {...props} />;
};

export const MdxH1 = (props: any) => (
  <MdxHeading
    h="h1"
    className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
    {...props}
  />
);
export const MdxH2 = (props: any) => (
  <MdxHeading
    h="h2"
    className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight"
    {...props}
  />
);
export const MdxH3 = (props: any) => (
  <MdxHeading
    h="h3"
    className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
    {...props}
  />
);
export const MdxH4 = (props: any) => (
  <MdxHeading
    h="h4"
    className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
    {...props}
  />
);
export const MdxH5 = (props: any) => (
  <MdxHeading
    h="h5"
    className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
    {...props}
  />
);
export const MdxH6 = (props: any) => (
  <MdxHeading
    h="h6"
    className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
    {...props}
  />
);
