"use client";
import { SidebarNavItem } from "@/types";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export default function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();
  const defaultValues = ["Documentation", "Getting Started"];
  return items.length ? (
    <div className="sticky top-16 max-h-[calc(var(--vh)-4rem)] overflow-y-auto">
      <ScrollArea>
        <Accordion
          type="multiple"
          defaultValue={defaultValues}
          className="h-full w-full"
        >
          {items.map((item, index) => (
            <div key={index}>
              <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className="mb-1 rounded-md px-2 py-1 text-md font-semibold transition-colors">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pl-3">
                  {item.items ? (
                    <DocsSidebarNavItems
                      items={item.items}
                      pathname={pathname}
                    />
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items.length ? (
    <div className="flex flex-col pl-2 border-l border-dotted border-primary-foreground my-2">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "font-medium text-muted-foreground rounded-sm p-2 hover:text-primary-foreground transition-colors",
              {
                "text-primary": item.href === pathname,
              }
            )}
          >
            {item.title}
          </Link>
        ) : (
          <span key={index}>{item.title}</span>
        )
      )}
    </div>
  ) : null;
}
