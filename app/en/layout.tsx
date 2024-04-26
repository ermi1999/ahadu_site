import { Metadata } from "next";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ahadu",
  description: "Write with your own language",
};

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
