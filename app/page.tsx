"use client";
import "./globals.css";
import { redirect } from "next/navigation";

export default function Home() {
  const lang = localStorage.getItem("lang");

  if (lang) {
    if (lang == "et") {
      redirect("/et");
    } else {
      redirect("/en");
    }
  } else {
    redirect("/en");
  }
}
