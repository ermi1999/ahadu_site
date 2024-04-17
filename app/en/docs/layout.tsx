import DocsSidebarNav from "@/components/docsSideNav";
import { Navbar } from "@/components/navbar";
import { sidebarNavConfigEnglish } from "@/config/docs";

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar lang="en" page="doc" />
      <div className="pt-16 sm:ml-2 md:ml-4 lg:ml-7 flex flex-row">
        <aside className="hidden md:block w-[30%] lg:w-[20%]">
          <DocsSidebarNav sidebarNavConfig={sidebarNavConfigEnglish} />
        </aside>
        {children}
      </div>
    </section>
  );
}
