import DocsSidebarNav from "@/components/docsSideNav";
import { Navbar } from "@/components/navbar";
import { docsConfig } from "@/config/docs";

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar lang="en" page="doc" />

      <div className="pt-16 sm:ml-2 md:ml-4 lg:ml-7">
        <aside className="w-[20%] h-full pt-13 overflow-y-auto hidden md:block fixed">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        {children}
      </div>
    </section>
  );
}
