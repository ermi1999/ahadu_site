import { Lato, Noto_Serif_Ethiopic } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const noto = Noto_Serif_Ethiopic({ subsets: ["ethiopic"] });
