import { Metadata } from "next";
import { Lato } from "next/font/google";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Ahadu",
  description: "Write with your own language",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="bg-page-gradient top-0">
          <Navbar lang="en" />
          {children}
        </main>
      </body>
    </html>
  );
}
