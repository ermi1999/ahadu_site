"use client";
import { useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (lang) {
      if (lang == "am") {
        router.push("/am");
      } else {
        router.push("/en");
      }
    } else {
      router.push("/en");
    }
  }, []);

  return null;
}
