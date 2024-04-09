import DocsSidebarNav from "@/components/docsSideNav";
import { docsConfig } from "@/config/docs";

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="pt-16">
      <aside>
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
      {children}
    </main>
  );
}
