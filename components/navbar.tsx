import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { FaGithub } from "react-icons/fa";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import DocsSidebarNav from "./docsSideNav";
import { docsConfig } from "@/config/docs";
import { BiMenuAltLeft } from "react-icons/bi";

interface NavbarProps {
  lang: string;
  page: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, page }) => {
  return (
    <nav className="fixed top-0 w-full h-14 flex p-0.1 box-border backdrop-blur-[12px] z-20 border-b border-transparent-white">
      <div className="relative flex flex-row items-center w-full gap-8 text-base">
        <div className="mr-auto flex flex-row space-x-2 sm:ml-2 md:ml-4 lg:ml-7">
          {page === "doc" && (
            <Sheet>
              <SheetTrigger className="md:hidden font-normal text-base text-primary-foreground">
                <BiMenuAltLeft size={30} />
              </SheetTrigger>
              <SheetContent side="left">
                <DocsSidebarNav items={docsConfig.sidebarNav} />
              </SheetContent>
            </Sheet>
          )}
          <Link
            href={`/${lang}`}
            className="text-4xl text-primary font-semibold mr-3 flex flex-row"
          >
            <Image
              src="/ahadu.svg"
              alt="ahadu logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-xl text-foreground hidden md:flex">
              {lang == "am" ? "አሀዱ" : "Ahadu"}
            </span>
          </Link>
        </div>
        <div className="mr-3 sm:mr-4 md:mr-6 lg:mr-11 space-x-3 flex flex-row h-full items-center">
          {lang == "am" ? (
            <Link
              href="/en"
              className="hover:text-primary font-semibold transition-colors"
            >
              English
            </Link>
          ) : (
            <Link
              href="/am"
              className="hover:text-primary font-semibold transition-colors"
            >
              Amharic
            </Link>
          )}
          <Separator orientation="vertical" className="h-[20%]" />
          <Link
            href={`/${lang}/docs`}
            className="hover:text-primary font-semibold transition-colors"
          >
            {lang == "am" ? "ሰነዶች" : "Docs"}
          </Link>
          <Separator orientation="vertical" className="h-[20%]" />
          <ModeToggle lang={lang} />
          <Separator orientation="vertical" className="h-[20%]" />
          <Link
            target="_blank"
            href="https://github.com/ermi1999/ahadu.git"
            className="hover:text-primary flex items-center text-lg transition-colors"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
};
