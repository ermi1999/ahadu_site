import { Metadata } from "next";
import { noto } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "አሀዱ",
  description: "በራሳችን ቋንቋ እንጻፍ።",
};

// const noto = Noto_Serif_Ethiopic({ subsets: ["ethiopic"] });

export default function AmharicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="am">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
