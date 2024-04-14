"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
interface PreProps {
  children: React.ReactNode;
  __rawString__: any;
}
export default function Pre({ __rawString__, children, ...props }: PreProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleClick = async () => {
    if (children) {
      await copyTextToClipboard(__rawString__);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 10000);
    } else {
      return null;
    }
  };
  return (
    <>
      <div className="mt-6 flex flex-row items-center border-t border-x rounded-lg rounded-b-none px-2">
        <div className="space-x-2 flex flex-row">
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleClick}
          className="ml-auto transition-all my-1"
        >
          {isCopied ? (
            <Check size={18} className="text-green-700" />
          ) : (
            <Copy size={18} />
          )}
        </Button>
      </div>
      <pre
        className={"overflow-x-auto rounded-lg rounded-t-none border py-4 flex"}
        {...props}
      >
        {children}
      </pre>
    </>
  );
}
