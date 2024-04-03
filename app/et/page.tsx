"use client";

import { Button } from "@/components/ui/button";

export default function AmharicPage() {
  localStorage.setItem("lang", "et");
  return (
    <section className="pt-16 h-[500%]">
      <Button>
        <a href="/en" className="font-bold">
          ወደ እንግሊዘኛ
        </a>
      </Button>
      <h1>አማርኛ</h1>
    </section>
  );
}
