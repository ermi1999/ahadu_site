import DocsSidebarNav from "@/components/docsSideNav";
import { Navbar } from "@/components/navbar";
import { docsConfig } from "@/config/docs";

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar lang="am" page="doc" />
      <div className="pt-16 sm:ml-2 md:ml-4 lg:ml-7 flex flex-row">
        <aside className="hidden md:block w-[20%]">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        {children}
      </div>
    </section>
  );
}
