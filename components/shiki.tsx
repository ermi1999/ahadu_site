import { getHighlighter } from "shiki";
import ahadu from "../ahadu.tmLanguage.json";

interface ShikiProps {
  code: string;
}

export async function Shiki({ code }: ShikiProps) {
  const highlighter = await getHighlighter({
    themes: ["catppuccin-latte", "houston"],
    langs: [ahadu],
  });

  const html = highlighter.codeToHtml(code, {
    themes: {
      light: "catppuccin-latte",
      dark: "houston",
    },
    lang: "ahadu",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
