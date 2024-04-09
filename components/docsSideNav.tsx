"use client";
import { SidebarNavItem } from "@/types";
import { ScrollArea } from "./ui/scroll-area";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export default function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();
  return items.length ? (
    <ScrollArea>
      <div className="h-full w-full">
        {items.map((item, index) => (
          <div key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value={item.title}>
                <AccordionTrigger className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.items ? (
                    <DocsSidebarNavItems
                      items={item.items}
                      pathname={pathname}
                    />
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </ScrollArea>
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
    <div>
      {items.map((item, index) =>
        item.href ? (
          <Link key={index} href={item.href}>
            {item.title}
          </Link>
        ) : (
          <span key={index}>{item.title}</span>
        )
      )}
    </div>
  ) : null;
}
