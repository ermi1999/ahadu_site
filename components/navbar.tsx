import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { FaGithub } from "react-icons/fa";
import { Separator } from "./ui/separator";
import Image from "next/image";

interface NavbarProps {
  lang: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  return (
    <nav className="fixed top-0 w-full h-14 flex p-0.1 box-border backdrop-blur-[12px] z-20 border-b border-transparent-white">
      <div className="relative flex flex-row justify-between items-center w-full gap-8 text-base">
        <Link
          href="/"
          className="text-4xl text-primary font-semibold p-3 mr-3 sm:ml-4 md:ml-6 lg:ml-11 flex flex-row"
        >
          <Image
            src="/ahadu.svg"
            alt="ahadu logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-xl text-foreground">
            {lang == "am" ? "አሀዱ" : "Ahadu"}
          </span>
        </Link>
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
