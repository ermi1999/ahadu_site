import { Metadata } from "next";
import { Noto_Serif_Ethiopic } from "next/font/google";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "አሀዱ",
  description: "በራሳችን ቋንቋ እንጻፍ።",
};

const noto = Noto_Serif_Ethiopic({ subsets: ["ethiopic"] });

export default function AmharicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="am">
      <body className={noto.className}>
        <Navbar lang="am" />
        {children}
      </body>
    </html>
  );
}
